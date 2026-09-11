import ProjectsSection from "@/components/ProjectsSection"

export default function Projects() {
  return (
    <main id="main-content" className="container">
      <div className="page-intro">
        <p className="eyebrow">AI SYSTEMS / AGENTS / EVALUATION</p>
        <h1 className="page-title">From requirements<br /> to <span className="serif-accent">working systems.</span></h1>
        <p className="page-description">Production agents, benchmarking infrastructure, multimodal annotation, and retrieval systems. Selected engineering work, followed by earlier projects in machine learning and software.</p>
      </div>
      <ProjectsSection />
    </main>
  )
}
