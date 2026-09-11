import Link from "next/link"
import EducationSection from "@/components/EducationSection"

export default function Education() {
  return (
    <main id="main-content">
      <div className="page-intro container">
        <nav className="details-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Education</span>
        </nav>
        <p className="eyebrow">EDUCATION / A FOUNDATION FOR CURIOSITY</p>
        <h1 className="page-title">Built on learning.<br />Driven by questions.</h1>
        <p className="page-description">
          Computer science taught me how to build. Statistics taught me how to ask
          better questions. My work brings the two together.
        </p>
      </div>
      <EducationSection />
    </main>
  )
}
