import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { experience } from "@/lib/portfolio"

interface WorkSectionProps {
  preview?: boolean
}

export default function WorkSection({ preview = false }: WorkSectionProps) {
  const entries = preview ? experience.slice(0, 3) : experience
  const EntryHeading = preview ? "h3" : "h2"

  return (
    <section
      id="experience"
      className={`experience-section ${preview ? "section experience-preview" : "details-section"}`}
      aria-label="Professional experience"
    >
      <div className="container">
        {preview && (
          <div className="section-heading experience-heading">
            <div>
              <p className="eyebrow">03 / THE JOURNEY</p>
              <h2 className="section-title">From requirements to release.</h2>
            </div>
            <Link className="text-link" href="/work">
              The full story <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        )}
        <div className="experience-list">
          {entries.map((entry, index) => (
            <article className="experience-row" id={entry.id} key={entry.id}>
              <div className="experience-identity">
                <span className="detail-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="experience-company">{entry.company}</p>
                  <EntryHeading className="experience-role">{entry.role}</EntryHeading>
                  {(entry.period || entry.location) && (
                    <p className="experience-period">
                      {[entry.period, entry.location].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </div>
              <div className="experience-content">
                <p className="experience-description">{entry.description}</p>
                <ul className="experience-achievements">
                  {(preview ? entry.achievements.slice(0, 1) : entry.achievements).map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience-meta">
                  <ul className="detail-tags" aria-label="Skills used">
                    {(preview ? entry.tags.slice(0, 3) : entry.tags).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {!preview && entry.links && (
                    <div className="experience-links">
                      {entry.links.map((link) => (
                        <a key={link.href} href={link.href} className="text-link" target="_blank" rel="noopener noreferrer">
                          {link.label}<ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
