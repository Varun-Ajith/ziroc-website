import { type ReactNode, useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  FlaskConical,
  Layers3,
  LockKeyhole,
  Menu,
  MoveRight,
  Route,
  ShieldCheck,
  Stethoscope,
  Wrench,
  X,
} from "lucide-react";

const logo = "/manus-storage/ziro_logo_black_transparent.png";
const valcConcept = "/manus-storage/valc_phase1_prototype.jpg";
const heroImage = "/manus-storage/ziroc_hero_clinic_88ad7888.jpg";
const labImage = "/manus-storage/ziroc_lab_detail_1f281b69.jpg";
const therapistImage = "/manus-storage/ziroc_therapist_workflow_a54b7dcf.jpg";
const teamImage = "/manus-storage/valc_blueprint_concept.png";

// Hides an <img> gracefully (falls back to the panel's background colour +
// caption) instead of showing a broken-image icon when a source is missing.
const hideBroken = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = "none";
};

const navItems = [
  { label: "Why ZIROC", href: "#why" },
  { label: "VALC", href: "#valc" },
  { label: "Technology", href: "#technology" },
  { label: "Development", href: "#development" },
  { label: "Clinical", href: "#clinical" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

const modes = [
  {
    number: "01",
    title: "Passive",
    copy: "The system is designed to guide a prescribed movement pattern for patients requiring greater robotic assistance.",
    accent: "guide",
  },
  {
    number: "02",
    title: "Adaptive assistance",
    copy: "The level of assistance is intended to respond to patient contribution while maintaining movement guidance.",
    accent: "adapt",
  },
  {
    number: "03",
    title: "Resistance",
    copy: "Controlled opposing resistance is planned for later-stage strengthening and active participation.",
    accent: "resist",
  },
];

const architecture = [
  { icon: Layers3, label: "Mechanical", copy: "Compact lower-limb mechanical architecture designed around fit, mass, serviceability, and controlled movement." },
  { icon: Activity, label: "Sensing", copy: "Joint-state feedback forms the basis for movement tracking and control." },
  { icon: Route, label: "Control", copy: "A development-stage control architecture designed to adapt robotic intervention to movement state." },
  { icon: ShieldCheck, label: "Safety", copy: "Layered safeguards supervise commanded motion, system state, and operating limits." },
];

const timeline = [
  { phase: "2026", title: "Simulation & control architecture", items: ["CAD architecture", "ROS 2 / Gazebo", "Multi-mode controller", "Safety framework"], status: "Current" },
  { phase: "2027", title: "Physical prototype", items: ["Mechanical integration", "Electronics", "Embedded control", "Bench testing"], status: "Planned" },
  { phase: "2028", title: "Pre-clinical development", items: ["Engineering validation", "Reliability testing", "Clinical collaboration", "Human factors"], status: "Planned" },
  { phase: "Later", title: "Clinical validation → commercialization", items: ["Clinical studies", "Regulatory pathway", "Pilot deployment", "Disciplined scale"], status: "Gated" },
];

const updates = [
  { date: "Engineering note / 01", title: "VALC progresses from simulation toward physical integration", copy: "The first-phase single-leg prototype marks the transition from system design and physics-based simulation toward physical mechanical and subsystem validation." },
  { date: "Engineering note / 02", title: "ROS 2 / Gazebo controller architecture established", copy: "The simulation environment separates control hypotheses from future clinical validation work." },
  { date: "Development note / 03", title: "Mechanical architecture is being iterated", copy: "The design process is focused on fit, serviceability, load paths, and the real workflow of rehabilitation clinics." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="ZIROC home" onClick={closeMenu}>
          <img src={logo} alt="ZIROC" onError={hideBroken} />
          <span>ZIROC<span className="brand-dot">.</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Partner with us <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid page-width">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="pulse-dot" /> ZIROC · Kerala, India</div>
              <h1>Engineering the next generation of <em>rehabilitation robotics.</em></h1>
              <p className="hero-lede"><strong>VALC</strong> is a compact lower-limb robotic rehabilitation platform being developed to support progressive gait recovery through adaptive assistance, passive movement, and resistance-based training.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#valc">Explore VALC <MoveRight size={17} /></a>
                <a className="text-link" href="#technology">Our technology <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-footnote"><span className="line-mark" /> Development-stage platform · concept rendering shown</div>
            </div>
            <div className="hero-visual reveal-up delay-1">
              <div className="hero-image-wrap">
                <img src={heroImage} alt="Development-stage lower-limb rehabilitation system in a clinic setting" onError={hideBroken} />
                <div className="image-caption"><span>VALC / V1</span><strong>Target platform direction</strong></div>
              </div>
              <div className="hero-annotation annotation-a"><span>CLINIC-FIRST</span><small>designed around workflow</small></div>
              <div className="hero-annotation annotation-b"><span>01</span><small>development-stage system</small></div>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>ZIROC PRIVATE LIMITED</span>
            <span>CIN U28299KL2026PTC105712</span>
            <span className="scroll-cue">Scroll to inspect the system <ChevronDown size={15} /></span>
          </div>
        </section>

        <section className="statement-section" id="why">
          <div className="page-width statement-grid">
            <SectionLabel index="01">The rehabilitation gap</SectionLabel>
            <div className="statement-content">
              <h2>Rehabilitation robotics should not have to choose between capability and practicality.</h2>
              <div className="statement-bottom">
                <p>Lower-limb rehabilitation requires repetitive, controlled, and progressively challenging movement. Yet sophisticated systems can be expensive, bulky, and difficult to integrate into everyday clinical environments.</p>
                <a className="text-link" href="#valc">See the approach <ArrowUpRight size={15} /></a>
              </div>
              <div className="gap-grid">
                <div><span className="gap-number">01</span><h3>Repetition</h3><p>Structured movement needs enough repetitions to become meaningful therapy rather than a one-off demonstration.</p></div>
                <div><span className="gap-number">02</span><h3>Participation</h3><p>Too much assistance may reduce active participation; too little can make controlled movement difficult.</p></div>
                <div><span className="gap-number">03</span><h3>Accessibility</h3><p>Equipment has to fit the staffing, space, maintenance, and capital reality of the clinic using it.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section" id="valc">
          <div className="page-width">
            <div className="section-intro split-intro">
              <div>
                <SectionLabel index="02">Meet VALC</SectionLabel>
                <h2>One platform. Three modes. A progression toward greater active participation.</h2>
              </div>
              <p>VALC is ZIROC's lower-limb robotic rehabilitation platform. This first-phase single-leg prototype is being used to validate the physical architecture, integration approach, fit, and core engineering foundations before the next development stage.</p>            </div>
            <div className="platform-grid">
              <div className="platform-visual image-panel">
                <img src={valcPrototype} alt="VALC first-phase single-leg physical prototype" onError={hideBroken} />
                <div className="image-caption">
                  <span>VALC / PHASE 01</span>
                  <strong>First-phase single-leg prototype</strong>
                </div>
              </div>
              <div className="platform-copy">
                {modes.map((mode) => <div className={`mode-row ${mode.accent}`} key={mode.number}><span className="mode-index">{mode.number}</span><div><h3>{mode.title}</h3><p>{mode.copy}</p></div></div>)}
                <div className="progression"><span>PASSIVE</span><MoveRight size={15} /><span>ADAPTIVE ASSISTANCE</span><MoveRight size={15} /><span>RESISTANCE</span><MoveRight size={15} /><span>INDEPENDENT MOVEMENT</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="architecture-section" id="technology">
          <div className="page-width">
            <div className="section-intro architecture-intro">
              <div><SectionLabel index="03">The architecture</SectionLabel><h2>Layered robotics, not a black box.</h2></div>
              <p>Public information is intentionally high-level while ZIROC protects unreleased control logic, detailed schematics, and novel mechanical details ahead of filing.</p>
            </div>
            <div className="architecture-diagram">
              <div className="arch-top">VALC <span>system boundary</span></div>
              <div className="arch-columns"><div><Layers3 size={18} /><strong>Mechanical</strong><span>Lower-limb mechanical system</span></div><div><Activity size={18} /><strong>Sensing</strong><span>Joint-state feedback</span></div><div><Route size={18} /><strong>Control</strong><span>Movement control</span></div></div>
              <div className="arch-safety"><ShieldCheck size={18} /><strong>Safety layer</strong><span>Layered system supervision</span></div>
              <div className="arch-bottom">ACTUATION <span>controlled movement output</span></div>
            </div>
            <div className="architecture-grid">
              {architecture.map(({ icon: Icon, label, copy }) => <div className="architecture-item" key={label}><Icon size={19} /><div><h3>{label}</h3><p>{copy}</p></div></div>)}
            </div>
            <div className="ip-notice"><LockKeyhole size={18} /><div><strong>IP-conscious disclosure</strong><span>Public information is intentionally kept at a high level while ZIROC continues its intellectual-property and engineering development.</span></div></div>          </div>
        </section>

        <section className="development-section" id="development">
          <div className="page-width">
            <div className="section-intro development-intro">
              <div><SectionLabel index="04">From concept to system</SectionLabel><h2>Build evidence in the same order a clinic would trust it.</h2></div>
              <p>Simulation validated and clinically validated are different milestones. ZIROC keeps that distinction visible at every stage.</p>
            </div>
            <div className="timeline-grid">
              {timeline.map((item, index) => <div className={`timeline-item ${index === 0 ? "is-current" : ""}`} key={item.phase}><div className="timeline-head"><span>{item.phase}</span><small>{item.status}</small></div><h3>{item.title}</h3><ul>{item.items.map((entry) => <li key={entry}><Check size={14} />{entry}</li>)}</ul></div>)}
            </div>
            <div className="simulation-grid">
              <div className="simulation-image image-panel"><img src={labImage} alt="Engineering workbench detail for VALC development" onError={hideBroken} /><div className="image-caption"><span>SIMULATION / BENCH</span><strong>Physics before patient exposure</strong></div></div>
              <div className="simulation-copy"><div className="mini-eyebrow"><FlaskConical size={16} /> Engineering validation</div><h3>Representative development runs from ROS 2 / Gazebo.</h3><p>These figures describe physics-based simulation performance of the controller and system architecture. They are not a substitute for human-subject or clinical validation.</p>
              <div className="results-table"><div className="results-row results-head"><span>Mode</span><span>Hip RMSE</span><span>Knee RMSE</span></div><div className="results-row"><span>Passive</span><strong>0.013 rad</strong><strong>0.010 rad</strong></div><div className="results-row"><span>Adaptive assistance</span><strong>0.030 rad</strong><strong>0.027 rad</strong></div><div className="results-row"><span>Resistance</span><strong>~0.063 rad</strong><strong>~0.053 rad</strong></div></div><small className="source-note">Source: ZIROC representative ROS 2 / Gazebo development runs, as provided for this site brief.</small></div>
            </div>
          </div>
        </section>

        <section className="clinical-section" id="clinical">
          <div className="page-width clinical-grid">
            <div className="clinical-copy"><SectionLabel index="05">Clinical discipline</SectionLabel><h2>Built with clinical input. Honest about the validation still ahead.</h2><p>ZIROC is working with clinical advisors to keep engineering development aligned with rehabilitation requirements, patient usability, and future clinical validation.</p><div className="clinical-points"><div><Stethoscope size={18} /><span>Clinical requirements</span></div><div><ShieldCheck size={18} /><span>Patient safety</span></div><div><Wrench size={18} /><span>Human factors</span></div><div><Route size={18} /><span>Rehabilitation protocols</span></div></div></div>
            <div className="clinical-visual image-panel"><img src={therapistImage} alt="Physiotherapist adjusting a lower-limb rehabilitation system" onError={hideBroken} /><div className="image-caption"><span>CLINIC-FIRST</span><strong>Workflow and fit are design inputs</strong></div></div>
          </div>
        </section>

        <section className="commercial-section" id="commercial">
          <div className="page-width commercial-grid">
            <div className="commercial-copy"><SectionLabel index="06">The path to adoption</SectionLabel><h2>Start where evidence can be observed: the clinic floor.</h2><p>The rollout is deliberately staged. ZIROC intends to learn from supervised use before broader distribution or third-party channel expansion.</p><a className="text-link" href="#contact">Discuss a pilot <ArrowUpRight size={15} /></a></div>
            <div className="commercial-steps">
  <div className="commercial-step is-current">
    <span>01</span>
    <div><strong>Engineering prototype</strong><p>Repeatable operation, durability, fit adjustment, and safety protocol work.</p></div>
    <small>Now</small>
  </div>
  <div className="commercial-step">
    <span>02</span>
    <div><strong>Supervised evaluation</strong><p>Controlled evaluation of system performance, usability, fit, and workflow.</p></div>
    <small>Planned</small>
  </div>
  <div className="commercial-step">
    <span>03</span>
    <div><strong>Clinical validation</strong><p>Progress toward the evidence required for responsible clinical adoption.</p></div>
    <small>Gated</small>
  </div>
  <div className="commercial-step">
    <span>04</span>
    <div><strong>Controlled deployment</strong><p>Expand deployment only after the required engineering, clinical, and regulatory milestones are met.</p></div>
    <small>Later</small>
  </div>
</div>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="page-width team-grid">
            <div className="team-image image-panel"><img src={teamImage} alt="ZIROC engineers reviewing a rehabilitation robotics prototype" onError={hideBroken} /><div className="image-caption"><span>ZIROC / KERALA</span><strong>Engineering from the ground up</strong></div></div>
            <div className="team-copy"><SectionLabel index="07">The people</SectionLabel><h2>Local engineering. Clear-eyed ambition.</h2><p>ZIROC started with a simple belief: advanced robotics should not be limited to laboratories or high-cost systems. We are building from first principles and bringing the right clinical, regulatory, and engineering specialists into the room as the evidence base grows.</p><div className="team-names"><div><strong>Varun Ajith</strong><span>Co-founder · Robotics & systems</span></div><div><strong>Abhishek</strong><span>Co-founder · Robotics & strategy</span></div></div><p className="team-note">Advisors and specialist collaborators will be listed here once formally associated with ZIROC.</p></div>
          </div>
        </section>

        <section className="updates-section" id="updates">
          <div className="page-width"><div className="section-intro updates-intro"><div><SectionLabel index="08">Development log</SectionLabel><h2>Progress is a habit, not a launch announcement.</h2></div><p>Short engineering notes make the work inspectable while keeping unreleased IP private.</p></div><div className="updates-grid">{updates.map((update, index) => <article key={update.title} className="update-card"><span>{update.date}</span><div className="update-index">0{index + 1}</div><h3>{update.title}</h3><p>{update.copy}</p><a className="text-link" href="#contact">Ask about this work <ArrowUpRight size={14} /></a></article>)}</div></div>
        </section>

        <section className="faq-section">
          <div className="page-width faq-grid">
            <div><SectionLabel index="09">The questions</SectionLabel><h2>Credibility is built by being precise about what is known and what is next.</h2></div>
            <div className="faq-list">
              {["What is VALC today?", "What is the first-phase prototype?", "Is VALC clinically validated?", "What is ZIROC looking for now?"].map((question, index) => (
                <div className={`faq-item ${activeFaq === index ? "is-active" : ""}`} key={question}>
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={18} /></button>
                  {activeFaq === index && <p>{index === 0 ? "VALC is a development-stage lower-limb rehabilitation platform progressing from mechanical proof-of-concept work and physics-based simulation toward an integrated physical prototype." : index === 1 ? "The first-phase single-leg prototype is a physical engineering prototype used to validate mechanical architecture, fit, alignment, and system integration. It is not a finished clinical product." : index === 2 ? "No. Current results are simulation and engineering development results. Human-subject and clinical validation remain future gated milestones." : "We are looking to connect with clinical institutions, research partners, engineering collaborators, accelerator programs, and strategic investors."}</p>}                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-panel">
            <div className="contact-orbit"><CircleDot size={18} /><span>Open to clinical, engineering, and investment conversations</span></div>
            <h2>Let's build the future of rehabilitation robotics.</h2>
            <p>We are developing VALC and looking to connect with clinical institutions, research partners, engineering collaborators, accelerator programs, and strategic investors who share the direction.</p>
            <div className="contact-actions"><a className="button button-light" href="mailto:zirocrobotics@gmail.com">Partner with ZIROC <ArrowUpRight size={17} /></a><a className="contact-email" href="mailto:zirocrobotics@gmail.com">zirocrobotics@gmail.com</a></div>
            <div className="contact-meta"><span>ZIROC Private Limited · Kerala, India</span><span>CIN U28299KL2026PTC105712</span><span>General · Partnerships · Investors</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-width footer-inner"><a className="brand-lockup footer-brand" href="#top"><img src={logo} alt="ZIROC" onError={hideBroken} /><span>ZIROC<span className="brand-dot">.</span></span></a><span>Robotics for recovery</span><div className="footer-links"><a href="#why">About</a><a href="#valc">VALC</a><a href="#technology">Technology</a><a href="#contact">Contact</a></div><span>© 2026 ZIROC Private Limited</span></div></footer>
    </div>
  );
}

export default Home;
