import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack: TechItem[][] = [
  [
    { name: "JavaScript", icon: `${iconBase}/javascript/javascript-original.svg`, url: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "TypeScript", icon: `${iconBase}/typescript/typescript-original.svg`, url: "https://www.typescriptlang.org" },
    { name: "React", icon: `${iconBase}/react/react-original.svg`, url: "https://react.dev" },
    { name: "Next.js", icon: `${iconBase}/nextjs/nextjs-original.svg`, url: "https://nextjs.org" },
    { name: "Node.js", icon: `${iconBase}/nodejs/nodejs-original.svg`, url: "https://nodejs.org" },
    { name: "Python", icon: `${iconBase}/python/python-original.svg`, url: "https://python.org" },
    { name: "Elixir", icon: `${iconBase}/elixir/elixir-original.svg`, url: "https://elixir-lang.org" },
    { name: "Java", icon: `${iconBase}/java/java-original.svg`, url: "https://www.java.com" },
  ],
  [
    { name: "Phoenix", icon: `${iconBase}/phoenix/phoenix-original.svg`, url: "https://www.phoenixframework.org" },
    { name: "Tailwind CSS", icon: `${iconBase}/tailwindcss/tailwindcss-original.svg`, url: "https://tailwindcss.com" },
    { name: "Firebase", icon: `${iconBase}/firebase/firebase-plain.svg`, url: "https://firebase.google.com" },
    { name: "PostgreSQL", icon: `${iconBase}/postgresql/postgresql-original.svg`, url: "https://postgresql.org" },
    { name: "MySQL", icon: `${iconBase}/mysql/mysql-original.svg`, url: "https://mysql.com" },
    { name: "MongoDB", icon: `${iconBase}/mongodb/mongodb-original.svg`, url: "https://mongodb.com" },
  ],
  [
    { name: "Git", icon: `${iconBase}/git/git-original.svg`, url: "https://git-scm.com" },
    { name: "Linux", icon: `${iconBase}/linux/linux-original.svg`, url: "https://linux.org" },
    { name: "Docker", icon: `${iconBase}/docker/docker-original.svg`, url: "https://docker.com" },
    { name: "Vercel", icon: `${iconBase}/vercel/vercel-original.svg`, url: "https://vercel.com" },
  ],
  [
    { name: "Figma", icon: `${iconBase}/figma/figma-original.svg`, url: "https://figma.com" },
    { name: "VS Code", icon: `${iconBase}/vscode/vscode-original.svg`, url: "https://code.visualstudio.com" },
  ],
];

const TechStackNew = () => (
  <div className="techstack-new">
    <div className="techstack-video-container">
      <video autoPlay loop muted playsInline className="techstack-video">
        <source src="/video/video.webm" type="video/webm" />
      </video>
      <div className="techstack-overlay"></div>
    </div>

    <div className="techstack-content">
      <h2>Stack técnica</h2>
      <div className="techstack-pyramid">
        {techStack.map((row, rowIndex) => (
          <div key={rowIndex} className="techstack-row">
            {row.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="techstack-item"
                title={tech.name}
                data-cursor="disable"
              >
                <img src={tech.icon} alt="" />
                <span>{tech.name}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStackNew;
