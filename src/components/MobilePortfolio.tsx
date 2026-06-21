import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiArrowUpRight, HiOutlineDocumentText } from "react-icons/hi2";
import { config } from "../config";
import "../mobile.css";

const featuredProjects = config.projects.slice(0, 6);

const MobilePortfolio = () => {
  return (
    <main className="mp">
      <nav className="mp-nav">
        <a href="#inicio" className="mp-logo">KJ</a>
        <div className="mp-nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="mp-hero" id="inicio">
        <div className="mp-kicker">Desenvolvedor Full Stack</div>
        <h1>
          Kayque
          <span>de Jesus</span>
        </h1>
        <p>{config.developer.description}</p>

        <div className="mp-hero-actions">
          <a href="#projetos" className="mp-primary">
            Ver projetos <HiArrowUpRight />
          </a>
          <a
            href="/Curriculo-Kayque.pdf"
            target="_blank"
            rel="noreferrer"
            className="mp-secondary"
          >
            Currículo <HiOutlineDocumentText />
          </a>
        </div>

        <div className="mp-photo-wrap">
          <img src="/images/kayque.png" alt={config.developer.fullName} />
          <span>São Bernardo do Campo, SP</span>
        </div>
      </section>

      <section className="mp-section mp-about" id="sobre">
        <span className="mp-section-label">Sobre mim</span>
        <h2>Engenharia com propósito e atenção à experiência.</h2>
        <p>{config.about.description}</p>
      </section>

      <section className="mp-section">
        <span className="mp-section-label">O que eu faço</span>
        <div className="mp-services">
          {[config.skills.develop, config.skills.design].map((skill, index) => (
            <article className="mp-service-card" key={skill.title}>
              <span>0{index + 1}</span>
              <h3>{skill.title}</h3>
              <h4>{skill.description}</h4>
              <p>{skill.details}</p>
              <div className="mp-tags">
                {skill.tools.slice(0, 6).map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mp-section" id="projetos">
        <div className="mp-section-heading">
          <div>
            <span className="mp-section-label">Trabalhos selecionados</span>
            <h2>Projetos</h2>
          </div>
          <a href="/myworks">Ver todos</a>
        </div>

        <div className="mp-projects">
          {featuredProjects.map((project, index) => (
            <article className="mp-project-card" key={project.id}>
              <div className="mp-project-image">
                <img src={project.image} alt={project.title} />
                <span>0{index + 1}</span>
              </div>
              <div className="mp-project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <div className="mp-project-tech">{project.technologies}</div>
                <div className="mp-project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <HiArrowUpRight />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Visitar <HiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mp-section">
        <span className="mp-section-label">Trajetória</span>
        <h2>Experiência e formação</h2>
        <div className="mp-timeline">
          {config.experiences.map((experience) => (
            <article key={`${experience.position}-${experience.company}`}>
              <span>{experience.period}</span>
              <h3>{experience.position}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mp-section mp-stack">
        <span className="mp-section-label">Stack principal</span>
        <div className="mp-stack-list">
          {[
            "React", "Next.js", "TypeScript", "Node.js", "Python", "Elixir",
            "Phoenix", "Firebase", "PostgreSQL", "MySQL", "Git", "Linux",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="mp-contact" id="contato">
        <span className="mp-section-label">Vamos conversar</span>
        <h2>Tem uma ideia ou oportunidade?</h2>
        <a className="mp-email" href={`mailto:${config.contact.email}`}>
          {config.contact.email}
          <HiArrowUpRight />
        </a>

        <div className="mp-social">
          <a href={config.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={config.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={config.contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <footer>
          <span>© {new Date().getFullYear()} Kayque de Jesus</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </footer>
      </section>
    </main>
  );
};

export default MobilePortfolio;
