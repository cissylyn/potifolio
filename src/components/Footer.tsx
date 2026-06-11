import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-accent py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted">© {new Date().getFullYear()} MUSIIMENTA CISSYLYN. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#about" className="text-muted">About</a>
          <a href="#projects" className="text-muted">Projects</a>
          <a href="#contact" className="text-muted">Contact</a>
        </div>
      </div>
    </footer>
  )
}
