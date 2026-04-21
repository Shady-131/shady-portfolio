import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800
                         py-8 text-center text-sm text-neutral-400 dark:text-neutral-600">
        Designed & built by Shady · 2025
      </footer>
    </>
  )
}