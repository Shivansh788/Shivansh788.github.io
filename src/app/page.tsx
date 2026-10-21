"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 115]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.28]);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Shivansh Soni, home"><span className="wordmark-mark">S<span>.</span></span><span>SHIVANSH SONI</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact <ArrowUpRight /></a>
        </nav>
        <a className="availability" href="#contact"><span className="live-dot" /> OPEN TO OPPORTUNITIES</a>
      </header>

      <section className="hero wrap" id="home" ref={heroRef}>
        <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <span className="eyebrow-line" /> CYBERSECURITY <span className="eyebrow-cross">×</span> INTELLIGENCE
          </motion.p>
          <h1>
            <motion.span initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}>BUILDING FOR</motion.span>
            <motion.span className="headline-second" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}>A <em>SAFER</em> FUTURE<span className="headline-period">.</span></motion.span>
          </h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }}>
            <p className="hero-intro">I’m <strong>Shivansh Soni</strong> — exploring the edges of cybersecurity and AI, and turning curious questions into useful things.</p>
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
            <div className="core-ring" /><div className="core-symbol">S<span>.</span></div><div className="core-caption">SIGNAL / 001</div>
          </motion.div>
          <motion.div className="signal signal-top" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}><span className="signal-dot" /> SYSTEMS ONLINE</motion.div>
          <motion.div className="signal signal-bottom" animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>01 / 03 <span className="signal-rule" /> SECURE BY DESIGN</motion.div>
          <div className="crosshair crosshair-a">+</div><div className="crosshair crosshair-b">+</div>
        </motion.div>
        <div className="hero-index"><span>01</span> / 04</div>
        <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <div className="ticker" aria-label="Cybersecurity, AI engineering, and research">
        <div className="ticker-track">{Array.from({ length: 4 }).map((_, i) => <span key={i}>SECURITY WITH INTENTION <b>✳</b> INTELLIGENCE WITH PURPOSE <b>✳</b> BUILD / TEST / LEARN <b>✳</b> </span>)}</div>
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
    </main>
  );
}
