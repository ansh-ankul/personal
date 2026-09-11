import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import WorkSection from "@/components/WorkSection"
import { profile } from "@/lib/portfolio"

export default function Work() {
  return (
    <main id="main-content">
      <div className="page-intro container">
        <nav className="details-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Experience</span>
        </nav>
        <p className="eyebrow">AI ENGINEERING / FORWARD DEPLOYED DELIVERY</p>
        <h1 className="page-title">Own the problem.<br /> <span className="serif-accent">Deliver the system.</span></h1>
        <div className="details-intro-bottom">
          <p className="page-description">
            Building production AI with domain experts and customer teams: LLM agents,
            enterprise API integrations, evaluation platforms, and the infrastructure to deploy them.
          </p>
          <a className="text-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
            View résumé <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <WorkSection />
    </main>
  )
}
