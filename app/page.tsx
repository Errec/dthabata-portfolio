import { Header } from '@/app/components/header'
import { Sidebar } from '@/app/components/sidebar'
import { Hero } from '@/app/components/hero'
import { About } from '@/app/components/about'
import { Projects } from '@/app/components/projects'
import { Contact } from '@/app/components/contact'
import { Footer } from '@/app/components/footer'
import { Toaster } from '@/app/components/ui/toaster'

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
