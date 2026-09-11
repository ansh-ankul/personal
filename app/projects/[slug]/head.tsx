import { profile, projects } from "@/lib/portfolio"

export default function Head({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.id === params.slug && entry.caseStudy)

  if (!project) return null

  return (
    <>
      <title>{`${project.title} — ${profile.name}`}</title>
      <meta name="description" content={project.description} />
    </>
  )
}
