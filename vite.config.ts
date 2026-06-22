import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

interface GroqResponse {
  choices?: Array<{ message?: { content?: string } }>;
  error?: { message?: string };
}

const nodeFetch = (
  globalThis as unknown as {
    fetch: (
      input: string,
      init: Record<string, unknown>
    ) => Promise<{
      ok: boolean;
      status: number;
      json: () => Promise<GroqResponse>;
    }>;
  }
).fetch;

const localChatApi = (apiKey: string): Plugin => ({
  name: "local-chat-api",
  configureServer(server) {
    server.middlewares.use("/api/chat", async (req, res) => {
      res.setHeader("Content-Type", "application/json; charset=utf-8");

      if (req.method !== "POST") {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: "Método não permitido." }));
        return;
      }

      if (!apiKey) {
        res.statusCode = 503;
        res.end(
          JSON.stringify({
            error: "Crie um arquivo .env com GROQ_API_KEY para usar o chat.",
          })
        );
        return;
      }

      try {
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(Buffer.from(chunk));
        }

        const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
        const messages = Array.isArray(body.messages)
          ? body.messages
              .filter(
                (message: { role?: string; content?: string }) =>
                  ["user", "assistant"].includes(message?.role || "") &&
                  typeof message?.content === "string"
              )
              .slice(-12)
              .map((message: { role: string; content: string }) => ({
                role: message.role,
                content: message.content.trim().slice(0, 1500),
              }))
          : [];

        const systemPrompt =
          "Você é o assistente virtual do portfólio de Kayque de Jesus. " +
          "Responda em português, de forma objetiva e profissional. " +
          "Kayque é desenvolvedor Full Stack de São Bernardo do Campo, trabalha com sistemas, automação, integrações, dados e cloud. " +
          "Projetos: AutoVagas, SafeCircle, Entre Mundos, OS Gestor, DataBridge e LifeQuest. " +
          "Não invente informações.";

        const groqResponse = await nodeFetch(
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
                { role: "system", content: systemPrompt },
                ...messages,
              ],
              temperature: 0.45,
              max_tokens: 500,
            }),
          }
        );

        const data = await groqResponse.json();
        res.statusCode = groqResponse.status;
        res.end(
          JSON.stringify(
            groqResponse.ok
              ? { message: data.choices?.[0]?.message?.content }
              : { error: data.error?.message || "Falha na API da Groq." }
          )
        );
      } catch {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Falha ao processar a mensagem." }));
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
  plugins: [react(), localChatApi(env.GROQ_API_KEY)],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three', 'three-stdlib'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap'],
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'lenis']
  }
  };
});
