"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects, projects, ProjectCategory } from "@/lib/portfolio"
import ProjectVisual from "./ProjectVisual"

const categories: ("All projects" | ProjectCategory)[] = ["All projects", "AI systems", "Machine learning", "Data & analytics", "Software"]

export default function ProjectsSection({ featured = false }: { featured?: boolean }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All projects")
  const ProjectHeading = featured ? "h3" : "h2"
  const list = featured ? featuredProjects : projects.filter(project => category === "All projects" || project.category === category)
  return (
    <section id="projects" className={`section projects-section ${featured ? "" : "projects-full"}`} aria-label={featured ? "Selected projects" : "Project collection"}>
      {featured && <div className="section-heading">
        <div><p className="eyebrow">01 / SELECTED AI SYSTEMS</p><h2 className="section-title">Built for real workflows<span className="accent">.</span></h2></div>
        <Link href="/projects" className="text-link">All projects <span className="link-count">{String(projects.length).padStart(2, "0")}</span><ArrowUpRight size={18} /></Link>
      </div>}
      {!featured && <div className="project-filters" aria-label="Filter projects">
        {categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={category === item ? "filter-button selected" : "filter-button"}>{item}<span>{item === "All projects" ? projects.length : projects.filter(project => project.category === item).length}</span></button>)}
      </div>}
      <div className="sr-only" role="status" aria-live="polite">{list.length} projects shown{category !== "All projects" ? ` in ${category}` : ""}</div>
      <div className="project-grid">
        {list.map((project) => (
          <article className="project-card" key={project.id}>
            <Link className="project-art-link" href={project.href} target={project.href.startsWith("https://") ? "_blank" : undefined} rel={project.href.startsWith("https://") ? "noopener noreferrer" : undefined} aria-label={`${project.linkLabel}: ${project.title}`}>
              <ProjectVisual project={project} />
              <span className="project-hover-arrow"><ArrowUpRight size={22} /></span>
            </Link>
            <div className="project-meta"><span className="mono">{project.category}</span><span className="mono">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span></div>
            <ProjectHeading className="project-title"><Link href={project.href} target={project.href.startsWith("https://") ? "_blank" : undefined} rel={project.href.startsWith("https://") ? "noopener noreferrer" : undefined}>{project.title}<ArrowUpRight size={21} /></Link></ProjectHeading>
            <p className="project-description">{project.description}</p>
            <ul className="tag-list" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            {(!featured || project.caseStudy) && <div className="project-links"><Link className="text-link" href={project.href} target={project.href.startsWith("https://") ? "_blank" : undefined} rel={project.href.startsWith("https://") ? "noopener noreferrer" : undefined}>{project.linkLabel}<ArrowUpRight size={15} /></Link>{project.additionalLinks && <div className="additional-links">{project.additionalLinks.map(link=><a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={12}/></a>)}</div>}</div>}
          </article>
        ))}
      </div>
    </section>
  )
}
