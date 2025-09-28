import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <div className="min-h-screen bg-background geometric-bg">
      <Header />
      <Sidebar />
      
      <main className="lg:ml-16 pb-20 lg:pb-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      
      <Toaster />
    </div>
  )
}
