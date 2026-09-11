import { ArrowUpRight } from "lucide-react"
import { education } from "@/lib/portfolio"

export default function EducationSection() {
  return (
    <section className="education-section details-section" aria-label="Education and coursework">
      <div className="container">
        <div className="education-list">
          {education.map((entry, index) => (
            <article className="education-row" key={entry.id}>
              <div className="education-aside">
                <span className="detail-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="education-level">{entry.id === "illinois" ? "Graduate studies" : "Undergraduate studies"}</p>
                  <p className="education-period">{entry.period}</p>
                  <div className="education-emblem" aria-hidden="true">
                    {entry.id === "illinois" ? "I" : "M"}
                    <span>{entry.id === "illinois" ? "ILLINOIS" : "MANIPAL"}</span>
                  </div>
                </div>
              </div>
              <div className="education-content">
                <h2 className="education-institution">{entry.institution}</h2>
                <p className="education-degree">{entry.degree}</p>
                <p className="education-description">{entry.description}</p>
                <div className="education-coursework">
                  <h3>Coursework & foundations</h3>
                  <ul className="detail-tags education-courses">
                    {entry.courses.map((course) => <li key={course}>{course}</li>)}
                  </ul>
                </div>
                {entry.id === "illinois" && (
                  <a href={entry.href} className="text-link education-school-link" target="_blank" rel="noopener noreferrer">
                    Explore the university <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
