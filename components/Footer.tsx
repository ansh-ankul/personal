import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { profile, socialLinks } from "@/lib/portfolio"
import CopyEmail from "./CopyEmail"

export default function Footer() {
  return (
    <footer>
      <section id="contact" className="contact-section container">
        <div className="contact-panel">
          <div className="contact-top"><span className="eyebrow">AI ENGINEERING / FORWARD DEPLOYED ROLES</span><span className="contact-star" aria-hidden="true">✳</span></div>
          <a href={`mailto:${profile.email}`} className="contact-title">Let’s build<br /> something <span>meaningful.</span><span className="contact-arrow"><ArrowUpRight strokeWidth={1} /></span></a>
          <div className="contact-bottom"><p>Let’s talk about your team’s AI challenges.</p><div className="contact-email"><a href={`mailto:${profile.email}`}>{profile.email}</a><CopyEmail /></div></div>
        </div>
      </section>
      <div className="container footer-main">
        <Link href="/" className="footer-brand">Ansh Ankul<span className="accent">.</span></Link>
        <div className="footer-socials">{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={13} /></a>)}</div>
        <a className="back-top" href="#main-content">Back to top<ArrowUp size={14}/></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ansh Ankul</span><span>MADE WITH INTENTION & A LITTLE CURIOSITY</span><Link href="/education">Education<ArrowUpRight size={12}/></Link></div>
    </footer>
  )
}
