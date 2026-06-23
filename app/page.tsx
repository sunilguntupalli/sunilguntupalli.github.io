"use client";

import { motion } from "framer-motion";
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
  ["2026 — Now", "Yeskar Technologies Inc.", "Java Full Stack Engineer"],
  ["2025 — 2026", "OpenQQuantify", "Java Full Stack Engineer"],
  ["2024 — 2025", "Sodexo", "Java Backend Developer"],
  ["2023 — 2024", "Aramark", "Java Backend Developer"],
  ["2021 — 2023", "Motorola Solutions", "Software Engineer"],
  ["2022 — 2022", "Deloitte", "Software Engineer"],
  ["2020 — 2021", "Mad Crayons", "Web Developer"],
];

const projects = [
  {
    icon: Cloud,
    title: "Cloud-native services",
    description:
      "Spring Boot services and secure APIs designed for dependable, zero-downtime delivery.",
    stat: "25%",
    label: "faster response times",
    tags: ["Java", "Spring Boot", "Kubernetes"],
  },
  {
    icon: ServerCog,
    title: "Incident automation",
    description:
      "Monitoring, log correlation, and practical workflows that bring production issues into focus.",
    stat: "35%",
    label: "faster resolution",
    tags: ["Splunk", "Terraform", "CI/CD"],
  },
  {
    icon: Database,
    title: "Cost visibility",
    description:
      "A clear operational view of cloud resources, utilization, and the APIs behind it.",
    stat: "12+",
    label: "connected REST APIs",
    tags: ["React", "PostgreSQL", "Azure"],
  },
];

const capabilities = [
  ["01", "Design", "Service architecture that stays understandable as systems grow."],
  ["02", "Build", "Modern Java applications with thoughtful, secure API contracts."],
  ["03", "Operate", "Observability and automation for calm, predictable releases."],
];

function LinkButton({
  href,
  children,
  primary = false,
  label,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  label?: string;
}) {
  return (
    <a className={`button ${primary ? "button--primary" : ""}`} href={href} aria-label={label}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
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
            <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
          </header>

          <div className="hero__copy">
            <p className="eyebrow"><Sparkles /> Java full stack engineer</p>
            <h1>Make complex systems feel <em>simple.</em></h1>
            <p className="hero__lede">
              Building resilient cloud applications, useful developer tools, and the operational clarity teams need to move with confidence.
            </p>
            <div className="hero__actions">
              <LinkButton href="#work" primary>Explore selected work <ArrowDownRight /></LinkButton>
              <LinkButton href="/resume.pdf"><Download /> Resume</LinkButton>
            </div>
          </div>

          <div className="hero__footer">
            <p>Currently focused on<br /><b>distributed systems &amp; cloud platforms</b></p>
            <div className="hero__availability"><i /> Available for thoughtful opportunities</div>
          </div>
        </div>
      </section>

      <section className="intro section container" id="about">
        <p className="eyebrow">A practical engineering partner</p>
        <div className="intro__grid">
          <h2>Built for the work that happens <em>after</em> the launch.</h2>
          <div>
            <p>I&apos;m a Java full stack engineer with 5+ years of experience designing and operating applications where reliability actually matters. The aim is always the same: a system people can understand, trust, and evolve.</p>
            <a className="text-link" href="#contact">Start a conversation <ArrowUpRight /></a>
          </div>
        </div>
        <div className="stats" aria-label="Career statistics">
          <div><b>5+</b><span>years of engineering</span></div>
          <div><b>15+</b><span>projects delivered</span></div>
          <div><b>99.9%</b><span>uptime mindset</span></div>
          <div><b>1M+</b><span>daily users supported</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Real systems, measured <em>outcomes.</em></h2></div>
            <p>From backend architecture to the production signals around it, each project begins with a sharper question.</p>
          </div>
          <div className="projects">
            {projects.map(({ icon: Icon, title, description, stat, label, tags }, index) => (
              <motion.article className="project-card" key={title} whileHover={{ y: -7 }} transition={{ duration: 0.25 }}>
                <div className={`project-card__visual project-card__visual--${index}`}><Icon /></div>
                <div className="project-card__body">
                  <span className="project-card__number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="project-card__metric"><b>{stat}</b><span>{label}</span></div>
                  <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section container">
        <div className="section-heading"><div><p className="eyebrow">How I work</p><h2>Good systems have a <em>rhythm.</em></h2></div></div>
        <div className="capability-list">
          {capabilities.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p><Code2 /></article>)}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="container experience__grid">
          <div className="experience__intro">
            <p className="eyebrow">Experience</p>
            <h2>A record of shipping<br /><em>with care.</em></h2>
            <p className="experience__note">Scroll inside the timeline to see the full path.</p>
          </div>
          <div className="experience__panel" aria-label="Scrollable work experience timeline">
            <div className="experience__list">
              {experience.map(([date, company, role]) => <article key={`${company}-${date}`}><span>{date}</span><h3>{company}</h3><p>{role}</p><ArrowUpRight /></article>)}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer__content">
          <p className="eyebrow">Open to new conversations</p>
          <h2>Have a system worth <em>making better?</em></h2>
          <a className="email-link" href="mailto:sunilguntupalli@outlook.com">sunilguntupalli@outlook.com <ArrowUpRight /></a>
          <div className="footer__bottom"><span>© 2026 · Cincinnati, Ohio</span><div><a href="https://github.com/sunilguntupalli" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/sunilguntupalli" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:sunilguntupalli@outlook.com" aria-label="Email"><Mail /></a></div></div>
        </div>
      </footer>
    </main>
  );
}
