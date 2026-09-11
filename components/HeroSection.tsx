import Image from "next/image"
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import DataSculpture from "./DataSculpture"
import { profile } from "@/lib/portfolio"

export default function HeroSection() {
  return (
    <section id="home" className="hero container">
      <div className="hero-main">
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> {profile.role}</div>
          <h1>Building AI<br /> that <span className="serif-accent">solves</span><br /> real problems<span className="accent">.</span></h1>
          <div className="hero-intro">
            <Image src="/headshot.jpeg" alt="Ansh Ankul" width={52} height={52} priority className="hero-avatar" />
            <p>I’m Ansh. I build LLM agents, evaluation systems,<br className="desktop-break" /> and integrations that work with real customer data.</p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">Explore my work <ArrowDownRight size={19} /></a>
            <a href={`mailto:${profile.email}`} className="text-link">Let’s talk <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-location"><MapPin size={14} /><span>Based in {profile.location}</span><span className="location-divider" /><span>From domain requirements to deployment.</span></div>
        </div>
        <div className="hero-visual">
          <div className="data-artwork">
            <div className="art-topline"><span>FIG. 01 — CONNECTING THE DOTS</span><span className="art-plus">+</span></div>
            <DataSculpture />
            <div className="art-annotation art-annotation-one"><span className="annotation-dot" /> data</div>
            <div className="art-annotation art-annotation-two"><span className="annotation-dot" /> working AI</div>
            <div className="art-bottomline"><span>REQUIREMENTS → DEPLOYMENT</span><span>∞</span></div>
          </div>
          <div className="visual-caption"><span className="small-cross">✳</span><span>Grounded in data.<br />Built for people.</span><span className="caption-line" /><ArrowDownRight size={26} strokeWidth={1.2} /></div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="mono">AGENTS. INTEGRATIONS. EVALUATION. DELIVERY.</span>
        <a href="#projects" className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
      </div>
      <div className="experience-strip">
        <p>LEARNING & BUILDING<br />WITH GREAT TEAMS</p>
        <div className="wordmark wordmark-ncsa">NCSA<span>ILLINOIS</span></div>
        <div className="wordmark wordmark-aganswers">AgAnswers</div>
        <div className="wordmark wordmark-yahoo">yahoo<span>!</span></div>
        <div className="wordmark wordmark-illinois"><span className="illinois-i">I</span>ILLINOIS</div>
        <div className="wordmark wordmark-ey"><span className="ey-slash" />EY</div>
        <div className="wordmark wordmark-bigstep">bigstep<span>technologies</span></div>
      </div>
    </section>
  )
}
