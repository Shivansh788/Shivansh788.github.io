"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ProfileMode = "general" | "cyber";

const binaryColumns = ["01001010 10110100 01101001 10100110 01011010", "10110101 01101010 11001001 01010110 10101100", "01101001 11010010 10100101 01101100 10010110", "11001010 00110101 10110100 01001011 11100010", "10010110 01101001 11010100 00101101 10110010", "01011001 10100110 01101001 11010010 10010101", "11100100 01011011 10101001 01100110 10011010", "00110101 11001010 01010110 10110010 01101001", "10101100 01010101 11001010 01101001 10110100", "01101010 10110010 00101101 11001010 01010110", "10010101 01101001 10110100 01011010 11001001", "01010110 11010010 00101101 10100101 01101010", "11001001 01101010 10110100 01010101 10010110", "00101101 10100101 01101010 11001001 01010110", "10110100 01011010 11001001 01101010 10010101", "01100110 10011010 01010110 11010010 10101100", "11010010 10100101 01101001 10010110 01011010", "01010101 11001010 01101001 10110100 00101101"];
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  {
    number: "01",
    name: "Xynera",
    kind: "AI × SECURITY",
    description: "An ambitious project exploring how intelligent systems can make digital spaces safer and more useful.",
    tags: ["AI systems", "Security", "In progress"],
    accent: "violet",
  },
  {
    number: "02",
    name: "Security research",
    kind: "RESEARCH NOTES",
    description: "A growing collection of experiments, investigations, and practical lessons from exploring how systems fail.",
    tags: ["Research", "AppSec", "Learning"],
    accent: "mint",
  },
  {
    number: "03",
    name: "Things I’m building",
    kind: "SELECTED WORK",
    description: "Small tools and thoughtful prototypes at the intersection of software, security, and machine intelligence.",
    tags: ["Prototypes", "Engineering", "Ideas"],
    accent: "blue",
  },
];

const capabilities = ["Cybersecurity", "AI engineering", "Security research", "Product thinking", "Full-stack building"];

const experience = [
  {
    period: "CURRENT",
    title: "Xynera",
    kind: "INDEPENDENT PROJECT",
    description: "Exploring the intersection of AI and cybersecurity, shaping an idea into a focused project.",
    tags: ["AI systems", "Security"],
  },
  {
    period: "ONGOING",
    title: "Security research & prototypes",
    kind: "INDEPENDENT PRACTICE",
    description: "Learning how systems fail and experimenting with thoughtful, more secure ways to build.",
    tags: ["Research", "Prototyping"],
  },
];

const skillGroups = [
  { name: "Security", note: "01 / FOCUS", skills: ["Cybersecurity", "Security research", "Secure systems"] },
  { name: "AI & systems", note: "02 / FOCUS", skills: ["AI engineering", "Intelligent systems", "AI × security"] },
  { name: "Web engineering", note: "03 / TOOLKIT", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"] },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileMode>("general");
  const [showPreloader, setShowPreloader] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 115]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.28]);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = window.setTimeout(() => setShowPreloader(false), 900);
      return () => window.clearTimeout(timer);
    }
    const fallback = window.setTimeout(() => setShowPreloader(false), 9000);
    return () => window.clearTimeout(fallback);
  }, [prefersReducedMotion]);

  return (
    <main className={`site-shell mode-${profile}`}>
      <div className="noise" aria-hidden="true" />
      {profile === "cyber" && <div className="binary-rain" aria-hidden="true">{binaryColumns.map((bits, index) => <span key={index}>{bits} {bits}</span>)}</div>}
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Shivansh Soni, home"><span className="wordmark-mark">S<span>.</span></span><span>SHIVANSH SONI</span></a>
        <nav aria-label="Main navigation">
          <a className="nav-work" href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a className="nav-about" href="#about">About</a>
          <a href="#contact">Contact <ArrowUpRight /></a>
        </nav>
        <div className="topbar-actions">
          <a className="availability" href="#contact"><span className="live-dot" /> OPEN TO OPPORTUNITIES</a>
          <div className="profile-toggle" role="group" aria-label="Choose portfolio profile">
            <button type="button" className={profile === "general" ? "active" : ""} aria-pressed={profile === "general"} onClick={() => setProfile("general")}>GENERAL</button>
            <button type="button" className={profile === "cyber" ? "active" : ""} aria-pressed={profile === "cyber"} onClick={() => setProfile("cyber")}>CYBER</button>
          </div>
        </div>
      </header>

      <section className="hero wrap" id="home" ref={heroRef}>
        <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <span className="eyebrow-line" /> {profile === "cyber" ? "CYBER OPERATIONS" : "CYBERSECURITY"} <span className="eyebrow-cross">×</span> {profile === "cyber" ? "THREAT INTELLIGENCE" : "INTELLIGENCE"}
          </motion.p>
          <h1>
            <motion.span initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}>{profile === "cyber" ? "DEFENDING THE" : "BUILDING FOR"}</motion.span>
            <motion.span className="headline-second" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}>{profile === "cyber" ? <>DIGITAL <em>FRONTIER</em></> : <>A <em>SAFER</em> FUTURE</>}<span className="headline-period">.</span></motion.span>
          </h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
            <p className="hero-intro">{profile === "cyber" ? <>I’m <strong>Shivansh Soni</strong> — studying attack surfaces, intelligent systems, and practical ways to build more resilient software.</> : <>I’m <strong>Shivansh Soni</strong> — exploring the edges of cybersecurity and AI, and turning curious questions into useful things.</>}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">EXPLORE MY WORK <ArrowUpRight /></a>
              <a className="text-link" href="#about">A LITTLE ABOUT ME <span aria-hidden="true">↓</span></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="visual-stage" aria-label="Abstract animated network visualization" role="img" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.45 }}>
          <div className="stage-glow" />
          <div className="stage-grid" />
          <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }}><i /><i /><i /></motion.div>
          <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }}><i /><i /></motion.div>
          <motion.div className="core" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="core-ring" /><div className="core-symbol">S<span>.</span></div><div className="core-caption">{profile === "cyber" ? "NODE / ACTIVE" : "SIGNAL / 001"}</div>
          </motion.div>
          <motion.div className="signal signal-top" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}><span className="signal-dot" /> SYSTEMS ONLINE</motion.div>
          <motion.div className="signal signal-bottom" animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>01 / 03 <span className="signal-rule" /> SECURE BY DESIGN</motion.div>
          <div className="crosshair crosshair-a">+</div><div className="crosshair crosshair-b">+</div>
          {profile === "cyber" && <div className="cyber-terminal" aria-label="Decorative cyber operations status terminal">
            <div className="terminal-title"><span><i /> SECURE CONSOLE</span><span>SYS / 01</span></div>
            <p><b>&gt;</b> profile --mode cyber</p><p><b>&gt;</b> threat_model <i>ACTIVE</i></p><p><b>&gt;</b> ai_systems <i>MONITORED</i></p><p><b>&gt;</b> integrity_check <i>PASS</i></p>
            <div className="terminal-cursor" aria-hidden="true">_</div>
          </div>}
        </motion.div>
        <div className="hero-index"><span>01</span> / 04</div>
        <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <div className="ticker" aria-label="Cybersecurity, AI engineering, and research">
        <div className="ticker-track">{Array.from({ length: 4 }).map((_, i) => <span key={i}>{profile === "cyber" ? <>THREAT INTELLIGENCE <b>✳</b> ZERO TRUST <b>✳</b> DEFENSE IN DEPTH <b>✳</b> SECURE SYSTEMS <b>✳</b> </> : <>SECURITY WITH INTENTION <b>✳</b> INTELLIGENCE WITH PURPOSE <b>✳</b> BUILD / TEST / LEARN <b>✳</b> </>}</span>)}</div>
      </div>

      <section className="work-section section wrap" id="work">
        <div className="section-head">
          <div><p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p><h2>Ideas into <em>impact.</em></h2></div>
          <p className="section-note">A few directions I’m exploring.<br />More details coming as each takes shape.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className={`project-card ${project.accent}`} key={project.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.24 }} transition={{ duration: 0.65, delay: index * 0.1 }}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p className="project-kind">{project.kind}</p><h3>{project.name}<span className="project-arrow"><ArrowUpRight /></span></h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <div className="project-art" aria-hidden="true"><div className="art-grid" /><div className="art-orb"><span /><span /><span /></div><div className="art-corner">{project.number} / 03</div></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience-section section wrap" id="experience">
        <div className="section-head">
          <div><p className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE</p><h2>Work in <em>progress.</em></h2></div>
          <p className="section-note">A project-based snapshot of what<br />I’m exploring and building.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article className="experience-item" key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="experience-rail"><span>{item.period}</span><i /></div>
              <div className="experience-content"><p className="project-kind">{item.kind}</p><h3>{item.title}</h3><p className="experience-description">{item.description}</p><div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <span className="experience-index">0{index + 1} / 0{experience.length}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="wrap">
          <div className="section-head">
            <div><p className="eyebrow"><span className="eyebrow-line" /> SKILLS</p><h2>What I work <em>with.</em></h2></div>
            <p className="section-note">A few areas and tools shaping<br />the way I build.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <motion.article className="skill-card" key={group.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
                <div className="skill-card-top"><span>{group.note}</span><i>✳</i></div><h3>{group.name}</h3><div className="skill-tags">{group.skills.map((skill, skillIndex) => <motion.span key={skill} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + skillIndex * 0.045 }}>{skill}</motion.span>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="wrap about-layout">
          <div className="about-label"><p className="eyebrow"><span className="eyebrow-line" /> THE PERSON BEHIND THE PIXELS</p><div className="about-stamp">CURIOUS<br />BY DESIGN<span>✳</span></div></div>
          <div className="about-copy"><h2>Curiosity is my<br />favorite <em>tool.</em></h2><p className="about-lead">I like working where complex systems meet real people. Security gives me the questions; AI and engineering give me new ways to explore the answers.</p><p className="about-small">This portfolio is a snapshot of what I’m learning, building, and thinking about. It’ll grow as I do.</p><div className="capabilities">{capabilities.map((item, i) => <motion.span key={item} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>{item}</motion.span>)}</div></div>
        </div>
      </section>

      <section className="contact-section section wrap" id="contact">
        <p className="eyebrow"><span className="eyebrow-line" /> HAVE A GOOD QUESTION?</p>
        <h2>Let’s make<br />something <em>matter.</em></h2>
        <p className="contact-copy">Interested in security, AI, or building thoughtful things? I’d love to hear what you’re working on.</p>
        <a className="button button-primary contact-button" href="mailto:shivanshsoni124@gmail.com">SAY HELLO <ArrowUpRight /></a>
        <div className="contact-orbit" aria-hidden="true"><div /><div /><div /></div>
      </section>

      <footer className="footer wrap"><a className="wordmark" href="#home"><span className="wordmark-mark">S<span>.</span></span><span>SHIVANSH SONI</span></a><p>MADE WITH CURIOSITY <span>✳</span> {new Date().getFullYear()}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>

      {showPreloader && <div className="portfolio-preloader" role="status" aria-label="Loading portfolio">
        <video className="preloader-film" autoPlay muted playsInline preload="auto" onEnded={() => setShowPreloader(false)} onError={() => setShowPreloader(false)}>
          <source src={`${publicBasePath}/Preloader_Portfolio.mp4`} type="video/mp4" />
        </video>
        <button className="skip-preloader" type="button" onClick={() => setShowPreloader(false)}>SKIP INTRO <span aria-hidden="true">↗</span></button>
      </div>}
    </main>
  );
}
