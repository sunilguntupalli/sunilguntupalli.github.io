"use client";

import { motion, MotionConfig } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  Sparkles,
} from "lucide-react";

const experience = [
  ["2026 — Now", "Yeskar Technologies Inc.", "Software Engineer · Java Backend & Cloud Services"],
  ["2025 — 2026", "OpenQQuantify", "Java Full Stack Engineer"],
  ["2024 — 2025", "Sodexo", "Student Worker · Operations & Team Support"],
  ["2023 — 2024", "Athenian Hospitality", "Student Worker · Hospitality Operations"],
  ["2021 — 2023", "Motorola Solutions", "Software Engineer · Java Microservices & APIs"],
  ["2022 — 2022", "Deloitte", "Software Engineering Analyst · Java & SailPoint IAM"],
  ["2020 — 2021", "Mad Crayons", "Software Engineer Intern · Java, Spring Boot & React"],
];

const projects = [
  {
    icon: Cloud,
    title: "Cloud Cost Optimizer",
    description:
      "Cloud analytics application with Java/Spring Boot APIs, React dashboards, Azure resource analysis, Docker/Kubernetes deployment patterns, and Terraform infrastructure structure.",
    stat: "5",
    label: "API domains",
    tags: ["Java", "React", "Azure", "Terraform"],
    href: "https://github.com/sunilguntupalli/cloud-cost-optimizer",
  },
  {
    icon: ServerCog,
    title: "Insurance Claims System",
    description:
      "Event-driven claims platform using Spring Boot, Kafka, PostgreSQL, Redis, Docker, validation workflows, asynchronous claim-status updates, and operational API endpoints.",
    stat: "4",
    label: "event-driven services",
    tags: ["Spring Boot", "Kafka", "Redis", "PostgreSQL"],
    href: "https://github.com/sunilguntupalli/insurance-claims-management-system",
  },
  {
    icon: Database,
    title: "Healthcare Patient Portal",
    description:
      "Full-stack healthcare workflow platform with Spring Boot APIs, React screens, JWT security, PostgreSQL/Flyway persistence, Dockerized setup, and role-aware patient, doctor, and admin access.",
    stat: "4",
    label: "core patient flows",
    tags: ["Spring Security", "JWT", "React", "Docker"],
    href: "https://github.com/sunilguntupalli/healthcare-patient-portal",
  },
];

const capabilities = [
  ["01", "Design", "API-first Java services with clear contracts, validation rules, and SQL-backed data models."],
  ["02", "Build", "Spring Boot microservices, React integrations, secure IAM flows, and event-driven workflows."],
  ["03", "Operate", "CI/CD support, observability, documentation, and practical production troubleshooting."],
];

function LinkButton({
  href,
  children,
  primary = false,
  label,
  external = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  label?: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      className={`button ${primary ? "button--primary" : ""}`}
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <MotionConfig reducedMotion="user">
      <main id="main-content">
      <section className="hero" id="home">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__veil" aria-hidden="true" />
        <div className="container hero__content">
          <header className="nav-bar">
            <a className="brand" href="#home" aria-label="Home">
              <span>SG</span>
              <b>Sunil Guntupalli</b>
            </a>
            <nav aria-label="Main navigation">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
            </nav>
            <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
          </header>

          <div className="hero__copy">
            <p className="eyebrow"><Sparkles aria-hidden="true" /> Java software engineer</p>
            <h1>Build secure Java systems that <em>scale.</em></h1>
            <p className="hero__lede">
              Java/Spring Boot engineer focused on microservices, REST APIs, cloud-ready deployments, IAM/security workflows, SQL-backed systems, Kafka integrations, and release-ready backend delivery.
            </p>
            <div className="hero__actions">
              <LinkButton href="#work" primary>Explore selected work <ArrowDownRight aria-hidden="true" /></LinkButton>
              <LinkButton href="/resume.pdf" download><Download aria-hidden="true" /> Resume</LinkButton>
              <LinkButton href="https://github.com/sunilguntupalli" label="View GitHub profile" external><Github aria-hidden="true" /> GitHub</LinkButton>
            </div>
          </div>

          <div className="hero__footer">
            <p>Currently focused on<br /><b>Java backend, cloud &amp; IAM systems</b></p>
            <div className="hero__availability"><i aria-hidden="true" /> Available for thoughtful opportunities</div>
          </div>
        </div>
      </section>

      <section className="intro section container" id="about">
        <p className="eyebrow">A practical Java engineering partner</p>
        <div className="intro__grid">
          <h2>Built for backend work that survives <em>production.</em></h2>
          <div>
            <p>I&apos;m a Java-focused Software Engineer building Spring Boot services, REST APIs, microservices, secure IAM workflows, event-driven integrations, and cloud-ready applications. I work across API design, implementation, testing, CI/CD support, documentation, and production troubleshooting.</p>
            <a className="text-link" href="#contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="stats" aria-label="Career statistics">
          <div><b>Java</b><span>Spring Boot focus</span></div>
          <div><b>3</b><span>flagship systems</span></div>
          <div><b>IAM</b><span>SailPoint + RBAC</span></div>
          <div><b>Cloud</b><span>Docker + Kubernetes</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Real systems, measured <em>outcomes.</em></h2></div>
            <p>Public implementations that show Java backend architecture, secure API design, cloud tooling, and domain-aware product thinking.</p>
          </div>
          <div className="projects">
            {projects.map(({ icon: Icon, title, description, stat, label, tags, href }, index) => (
              <motion.article className="project-card" key={title} whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
                <div className={`project-card__visual project-card__visual--${index}`}><Icon aria-hidden="true" /></div>
                <div className="project-card__body">
                  <span className="project-card__number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="project-card__metric"><b>{stat}</b><span>{label}</span></div>
                  <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-card__link" href={href} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>View on GitHub <ArrowUpRight aria-hidden="true" /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section container">
        <div className="section-heading"><div><p className="eyebrow">How I work</p><h2>Good systems have a <em>rhythm.</em></h2></div></div>
        <div className="capability-list">
          {capabilities.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p><Code2 aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="container experience__grid">
          <div className="experience__intro">
            <p className="eyebrow">Experience</p>
            <h2>A focused path through<br /><em>Java delivery.</em></h2>
            <p className="experience__note">Java was used across the engineering roles; Sodexo and Athenian are included as additional operations experience.</p>
          </div>
          <div className="experience__panel" aria-label="Scrollable work experience timeline">
            <div className="experience__list">
              {experience.map(([date, company, role]) => <article key={`${company}-${date}`}><span>{date}</span><h3>{company}</h3><p>{role}</p><ArrowUpRight aria-hidden="true" /></article>)}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer__content">
          <p className="eyebrow">Open to new conversations</p>
          <h2>Need Java systems built <em>cleanly?</em></h2>
          <a className="email-link" href="mailto:sunilguntupalli@outlook.com">sunilguntupalli@outlook.com <ArrowUpRight aria-hidden="true" /></a>
          <div className="footer__bottom"><span>© 2026 · Open to relocate nationwide</span><div><a href="https://github.com/sunilguntupalli" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github aria-hidden="true" /></a><a href="https://www.linkedin.com/in/sunilguntupalli" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin aria-hidden="true" /></a><a href="mailto:sunilguntupalli@outlook.com" aria-label="Email Sunil Guntupalli"><Mail aria-hidden="true" /></a></div></div>
        </div>
      </footer>
      </main>
      </MotionConfig>
    </>
  );
}
