import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'
// ThemeToggle removed — single light theme

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-[var(--text)]">
      
      <header className="max-w-6xl mx-auto px-6">
        <Hero />
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
