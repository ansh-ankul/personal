import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import AboutSection from "@/components/AboutSection"
import WorkSection from "@/components/WorkSection"

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <div className="container"><ProjectsSection featured /></div>
      <AboutSection />
      <WorkSection preview />
    </main>
  )
}
