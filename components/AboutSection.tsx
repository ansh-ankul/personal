import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BrainCircuit, Code2, Database } from "lucide-react"
import { skillGroups } from "@/lib/portfolio"

const skillIcons = [BrainCircuit, Database, Code2]

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <Image src="/headshot.jpeg" alt="Ansh Ankul in front of Foellinger Auditorium at the University of Illinois" width={640} height={720} sizes="(max-width: 760px) 90vw, 36vw" />
              <span className="photo-note">Always a work in progress.</span>
            </div>
            <span className="about-sticker" aria-hidden="true">hello<br /><span>there.</span></span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
            <h2 className="section-title">Close to users.<br /> <span className="serif-accent">Deep in the stack.</span></h2>
            <p className="about-lead">I’m a Lead AI Engineer at NCSA.</p>
            <p>I work with researchers, domain experts, and external partners to turn open-ended requirements into production AI. At NCSA, I own AI-AgriBench’s architecture, evaluation infrastructure, and releases. I also build agents that connect natural-language requests to live customer data and operational APIs.</p>
            <p>My work spans data ingestion, tool calling, backend APIs, expert-review interfaces, and deployment. A master’s in Statistics from Illinois gives me the foundation to measure how these systems perform, investigate failures, and improve them.</p>
            <Link href="/work" className="text-link">How I turn requirements into systems <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="skills-heading"><span className="eyebrow">THE ENGINEERING TOOLKIT</span><span>Build it. Evaluate it. Ship it.</span></div>
        <div className="skills-grid">{skillGroups.map((group, index) => {
          const Icon = skillIcons[index]
          return <div className="skill-group" key={group.title}><Icon size={23} strokeWidth={1.5}/><h3>{group.title}</h3><p>{group.skills.join(" · ")}</p></div>
        })}</div>
      </div>
    </section>
  )
}
