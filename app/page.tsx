import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Philosophy } from "@/components/philosophy"
import { CaseStudy } from "@/components/case-study"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CaseStudy />
      <Services />
      <Process />
      <Philosophy />
      <Footer />
    </main>
  )
}
