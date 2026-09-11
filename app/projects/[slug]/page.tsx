import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react"
import ProjectVisual from "@/components/ProjectVisual"
import { projects } from "@/lib/portfolio"

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.id }))
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.id === params.slug)

  if (!project || !project.caseStudy) notFound()

  const { caseStudy } = project

  return (
    <main id="main-content" className="container case-study">
      <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
        <Link href="/projects">Projects</Link>
        <ChevronRight size={13} aria-hidden="true" />
        <span aria-current="page">{project.title}</span>
      </nav>

      <article>
        <header className="case-study-hero">
          <div className="page-intro case-study-intro">
            <p className="eyebrow">PROJECT CASE STUDY / {project.category.toUpperCase()}</p>
            <h1 className="page-title">{project.title}</h1>
            <p className="page-description">{project.description}</p>
            <dl className="case-study-context">
              <div>
                <dt>Context</dt>
                <dd>{caseStudy.organization}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>{caseStudy.period}</dd>
              </div>
            </dl>
            <ul className="tag-list" aria-label="Technologies and methods">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <div className="case-study-artwork">
            <ProjectVisual project={project} />
          </div>
        </header>

        <div className="case-study-sections">
          <section className="case-study-section" aria-labelledby="case-study-problem">
            <div className="case-study-section-heading">
              <span className="case-study-index" aria-hidden="true">01</span>
              <h2 id="case-study-problem">The problem</h2>
            </div>
            <p className="case-study-problem">{caseStudy.problem}</p>
          </section>

          <section className="case-study-section" aria-labelledby="case-study-implementation">
            <div className="case-study-section-heading">
              <span className="case-study-index" aria-hidden="true">02</span>
              <h2 id="case-study-implementation">What I built</h2>
            </div>
            <ul className="case-study-points">
              {caseStudy.implementation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="case-study-section" aria-labelledby="case-study-outcomes">
            <div className="case-study-section-heading">
              <span className="case-study-index" aria-hidden="true">03</span>
              <h2 id="case-study-outcomes">Results &amp; validation</h2>
            </div>
            <ul className="case-study-points case-study-outcomes">
              {caseStudy.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <footer className="case-study-footer">
          <Link className="text-link" href="/projects">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
          {caseStudy.links && caseStudy.links.length > 0 && (
            <ul className="case-study-links" aria-label="Project links">
              {caseStudy.links.map((link) => {
                const isExternal = /^https?:\/\//.test(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      className="text-link"
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}<ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </footer>
      </article>
    </main>
  )
}
