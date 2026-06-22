export const config = {
  developer: {
    name: "Kayque",
    fullName: "Kayque de Jesus",
    title: "Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack focado em criar produtos digitais modernos, automações e experiências web que resolvem problemas reais.",
  },
  social: {
    github: "kayqueprogram",
    email: "kayquedejesusdossantos@gmail.com",
    location: "São Bernardo do Campo, SP",
  },
  about: {
    title: "Sobre mim",
    description:
      "Sou Kayque de Jesus, desenvolvedor Full Stack e estudante de Ciência da Computação. Crio aplicações completas, automações e integrações com foco em desempenho, usabilidade e soluções para problemas reais.",
  },
  experiences: [
    {
      position: "Desenvolvedor Full Stack",
      company: "Projetos independentes e freelance",
      period: "Atual",
      location: "São Bernardo do Campo, SP",
      description:
        "Desenvolvimento de produtos web ponta a ponta, com foco em arquitetura, experiência do usuário, integrações e entrega de soluções prontas para uso.",
      responsibilities: [
        "Criação de aplicações responsivas com React e Next.js",
        "Desenvolvimento de APIs, automações e integrações",
        "Modelagem e integração de bancos de dados",
        "Deploy, manutenção e evolução contínua dos produtos",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase"],
    },
    {
      position: "Criador e desenvolvedor",
      company: "Entre Mundos — Visual Novel",
      period: "Projeto cultural",
      location: "São Bernardo do Campo, SP",
      description:
        "Criação de uma visual novel multiplataforma patrocinada pelo edital da Lei Paulo Gustavo de São Bernardo do Campo, unindo narrativa, tecnologia e produção cultural.",
      responsibilities: [
        "Desenvolvimento do jogo com Ren'Py e Python",
        "Construção da experiência narrativa e interface",
        "Otimização para Windows, Linux e Android",
        "Criação da presença web e divulgação do projeto",
      ],
      technologies: ["Python", "Ren'Py", "Next.js", "Tailwind CSS"],
    },
    {
      position: "Desenvolvedor de soluções",
      company: "Logística, educação e produtividade",
      period: "Projetos",
      location: "Brasil",
      description:
        "Construção de sistemas voltados a operações logísticas, gestão de ativos, educação, finanças pessoais e produtividade.",
      responsibilities: [
        "Automação de processos operacionais",
        "Interfaces acessíveis e painéis de gestão",
        "Sincronização e persistência de dados",
        "Aplicação de boas práticas de UI e UX",
      ],
      technologies: ["Next.js", "Firebase", "MySQL", "SQLModel", "React"],
    },
    {
      position: "Bacharelado em Ciência da Computação",
      company: "Universidade Anhanguera",
      period: "Em formação",
      location: "São Bernardo do Campo, SP",
      description:
        "Formação acadêmica em Ciência da Computação, aprofundando fundamentos de software, algoritmos, bancos de dados e engenharia de sistemas.",
      responsibilities: [
        "Estruturas de dados e algoritmos",
        "Engenharia e arquitetura de software",
        "Banco de dados e sistemas distribuídos",
        "Aprendizado contínuo e projetos práticos",
      ],
      technologies: ["Algoritmos", "Arquitetura", "Banco de dados", "Engenharia de software"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "AutoVagas",
      category: "Automação / Full Stack",
      technologies: "Elixir, Phoenix, Concorrência, Web Scraping",
      image: "/images/autovagas.png",
      description:
        "Sistema automatizado de busca de vagas que monitora plataformas como LinkedIn, Gupy e Indeed e envia novas oportunidades por WhatsApp ou Telegram.",
      github: "https://github.com/kayqueprogram/AutoVagas",
    },
    {
      id: 2,
      title: "SafeCircle",
      category: "Segurança / Tempo real",
      technologies: "Next.js, Tailwind CSS, Geolocation API, Real-time",
      image: "/images/safecircle.png",
      description:
        "Plataforma de segurança familiar com geolocalização em tempo real, alertas instantâneos e uma experiência de monitoramento clara e intuitiva.",
      github: "https://github.com/kayqueprogram/Safe-Kids",
      demo: "https://antisequestro.vercel.app/",
    },
    {
      id: 3,
      title: "Entre Mundos: Visual Novel",
      category: "Game / Projeto cultural",
      technologies: "Python, Ren'Py, Windows, Linux, Android",
      image: "/images/entre-mundos-game.jpeg",
      description:
        "Visual novel multiplataforma patrocinada pelo edital da Lei Paulo Gustavo de São Bernardo do Campo, criada para oferecer uma experiência narrativa fluida e acessível.",
      github: "https://github.com/kayqueprogram/Entre-Mundos-Project---Game",
    },
    {
      id: 4,
      title: "Entre Mundos: Web Experience",
      category: "Web / Marketing",
      technologies: "Next.js 13, Tailwind CSS, SEO",
      image: "/images/entre-mundos-site.jpeg",
      description:
        "Hub oficial de divulgação do game, desenvolvido com foco em desempenho, SEO, responsividade e uma identidade visual conectada à narrativa.",
      github: "https://github.com/kayqueprogram/Entre-Mundos-Project---Site",
      demo: "https://entremundosgame.vercel.app/",
    },
    {
      id: 5,
      title: "Portal Educacional Omar Donato",
      category: "Educação / Acessibilidade",
      technologies: "React, TypeScript, Styled Components, VLibras",
      image: "/images/portal-omar.png",
      description:
        "Plataforma institucional moderna para ambiente escolar, com arquitetura em React e TypeScript e acessibilidade nativa em Libras.",
      github: "https://github.com/kayqueprogram/website-school-reformuled",
      demo: "https://omardonatobassani.vercel.app/",
    },
    {
      id: 6,
      title: "ABBA Logistics",
      category: "Logística / Web",
      technologies: "React, Argon Design System, UI/UX",
      image: "/images/abba-logistics.png",
      description:
        "Presença digital corporativa para o setor logístico, com interface responsiva, identidade consistente e foco na conversão de novos parceiros.",
      github: "https://github.com/kayqueprogram/abbalogistcs",
      demo: "https://abbalogistcs.vercel.app/",
    },
    {
      id: 7,
      title: "FKS Logistics: OS Gestor",
      category: "ERP / Operações",
      technologies: "Next.js, Firebase, TypeScript, Tailwind CSS",
      image: "/images/os-gestor.jpg",
      description:
        "ERP para gestão de ativos críticos, estoque e ciclos de manutenção preventiva, com persistência de dados em tempo real.",
    },
    {
      id: 8,
      title: "Upload.ai",
      category: "Inteligência artificial",
      technologies: "Next.js, OpenAI API, Prisma, Tailwind CSS",
      image: "/images/upload-ai.png",
      description:
        "Plataforma que utiliza inteligência artificial para gerar títulos, descrições e transcrições otimizadas para vídeos.",
      github: "https://github.com/kayqueprogram/upload-ai-api",
    },
    {
      id: 9,
      title: "DataBridge",
      category: "Dados / Automação",
      technologies: "Python, Firebase, MySQL, SQLModel",
      image: "/images/databridge.png",
      description:
        "Ferramenta de sincronização entre Firebase Firestore e MySQL, criada para garantir integridade, automação e segurança no fluxo de dados.",
      github: "https://github.com/kayqueprogram/DataBridge-",
    },
    {
      id: 10,
      title: "Discord Study Bot",
      category: "Bot / Produtividade",
      technologies: "JavaScript, Discord.js, Node.js",
      image: "/images/discord-study-bot.png",
      description:
        "Assistente para comunidades de estudo com Pomodoro, organização de cronogramas e recursos para foco e produtividade.",
      github: "https://github.com/kayqueprogram/Discord-Bot-Full-Study",
    },
    {
      id: 11,
      title: "Finance Manager Pro",
      category: "Finanças / Dados",
      technologies: "Python, SQLite, Matplotlib, SQLModel",
      image: "/images/finance-manager.png",
      description:
        "Sistema de gestão financeira pessoal com controle de receitas e despesas, relatórios gráficos e visualização de hábitos de consumo.",
      github: "https://github.com/kayqueprogram/Gerenciamento-de-Financas",
    },
    {
      id: 12,
      title: "LifeQuest",
      category: "Produtividade / Comunidade",
      technologies: "Next.js, Firebase, Context API, Tailwind CSS",
      image: "/images/lifequest.png",
      description:
        "Plataforma de produtividade que reúne finanças, tarefas, metas e comunidade em uma experiência pessoal gamificada.",
      demo: "https://lifequesthub.vercel.app/",
    },
  ],
  contact: {
    email: "kayquedejesusdossantos@gmail.com",
    github: "https://github.com/kayqueprogram",
    linkedin: "https://www.linkedin.com/in/kayque-de-jesus-4008312b2/",
    instagram: "https://www.instagram.com/kayque.prof/",
  },
  skills: {
    develop: {
      title: "FULL STACK",
      description: "Produtos digitais completos, do front-end à infraestrutura",
      details:
        "Desenvolvo aplicações modernas e responsivas, APIs, integrações e bancos de dados. Meu foco é transformar requisitos em produtos confiáveis, performáticos e fáceis de usar.",
      tools: ["React", "Next.js", "Angular", "Vue.js", "React Native", "Flutter", "Dart", "Swift", "Android", "Electron", "Three.js", "TypeScript", "Node.js", "NestJS", "Python", "FastAPI", "Django", "Flask", "Elixir", "Phoenix", ".NET", "C#", "C++", "Rust", "Kotlin", "Java", "Spring", "Go", "PHP", "Laravel", "REST APIs", "GraphQL", "Firebase", "Supabase", "SQL"],
    },
    design: {
      title: "PRODUTO & AUTOMAÇÃO",
      description: "Experiências intuitivas e processos mais inteligentes",
      details:
        "Uno engenharia, UI/UX e automação para criar soluções com impacto prático, desde sistemas operacionais e plataformas educacionais até games e produtos com IA.",
      tools: ["UI/UX", "Tailwind CSS", "Bootstrap", "Sass", "Figma", "OpenAI API", "TensorFlow", "PyTorch", "Pandas", "NumPy", "OpenCV", "Hadoop", "Spark", "Web Scraping", "Ren'Py", "Docker", "Kubernetes", "Terraform", "Ansible", "Helm", "Redis", "RabbitMQ", "Kafka", "Prisma", "Git", "GitHub Actions", "AWS", "Azure", "Google Cloud", "Cloudflare", "DigitalOcean", "Vercel", "Linux", "Bash", "PowerShell", "Postman", "Jest", "Cypress", "Selenium", "Grafana", "Prometheus", "Elasticsearch", "Nginx", "Agile"],
    },
  },
};
