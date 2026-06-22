const SYSTEM_PROMPT = `Você é o assistente virtual do portfólio de Kayque de Jesus.

Informações profissionais:
- Desenvolvedor Full Stack de São Bernardo do Campo, SP.
- Estudante de Ciência da Computação e Análise e Desenvolvimento de Sistemas.
- Experiência com desenvolvimento de sistemas, automação, integração, análise de dados e operações.
- Trabalha com React, Next.js, TypeScript, Node.js, Python, Elixir, Phoenix, Java, C#, .NET, bancos SQL, Firebase e cloud.
- Projetos em destaque: AutoVagas, SafeCircle, Entre Mundos, OS Gestor, Portal Educacional Omar Donato, DataBridge e LifeQuest.
- Entre Mundos é uma visual novel patrocinada pelo edital da Lei Paulo Gustavo de São Bernardo do Campo.
- GitHub: https://github.com/kayqueprogram
- Contato: dejesusdossantoskayque@gmail.com

Regras:
- Responda sempre em português, de forma simpática, objetiva e profissional.
- Diga que é um assistente virtual quando isso for relevante.
- Não invente experiências, datas, clientes ou competências.
- Para assuntos fora do portfólio, redirecione educadamente para temas profissionais.
- Mantenha as respostas curtas, normalmente entre 2 e 5 parágrafos.`;

const requests = new Map();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 15;

const sanitizeMessages = (messages) => {
  if (!Array.isArray(messages)) return [];

  return messages
    .filter(
      (message) =>
        message &&
        ["user", "assistant"].includes(message.role) &&
        typeof message.content === "string"
    )
    .slice(-12)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 1500),
    }))
    .filter((message) => message.content.length > 0);
};

const isRateLimited = (identifier) => {
  const now = Date.now();
  const recent = (requests.get(identifier) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS) {
    requests.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requests.set(identifier, recent);
  return false;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  const identifier =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "anonymous";

  if (isRateLimited(identifier)) {
    return res.status(429).json({
      error: "Muitas mensagens em pouco tempo. Tente novamente em um minuto.",
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "O assistente ainda não foi configurado no servidor.",
    });
  }

  const messages = sanitizeMessages(req.body?.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Mensagem inválida." });
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          temperature: 0.45,
          max_tokens: 500,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.error("Groq API error:", data?.error?.message);
      return res.status(response.status).json({
        error: "Não foi possível consultar o assistente agora.",
      });
    }

    const message = data.choices?.[0]?.message?.content;
    if (!message) {
      return res.status(502).json({ error: "Resposta inválida do assistente." });
    }

    return res.status(200).json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      error: "Falha temporária de conexão com o assistente.",
    });
  }
}
