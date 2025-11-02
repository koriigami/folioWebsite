import { Hero } from "@/components/Hero"
import { ProjectGrid } from "@/components/ProjectGrid"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProjectGrid />
    </div>
  )
}
