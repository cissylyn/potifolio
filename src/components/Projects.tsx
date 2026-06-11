import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Maison Karabs Fashion Website',
    demo: 'https://maison-karabs.onrender.com/',
    desc: 'A modern fashion e-commerce platform with responsive design and an engaging user experience.',
    tech: ['React', 'Tailwind', 'Node.js']
  },
  {
    title: 'Soil Moisture Prediction Application',
    repo: 'https://github.com/AllanOcung/SoilMoistureMonitorApp.git',
    desc: 'Machine learning-based application that predicts soil moisture levels and supports smart agriculture decisions.',
    tech: ['Python', 'ML', 'Flask']
  },
  {
    title: 'SACCO Management System (Laravel)',
    repo: 'https://github.com/AllanOcung/laravel-sacco.git',
    desc: 'A comprehensive SACCO management solution for member registration, savings tracking, and financial reporting.',
    tech: ['Laravel', 'PHP', 'MySQL']
  },
  {
    title: 'SACCO Management System (Java)',
    repo: 'https://github.com/AllanOcung/java-sacco.git',
    desc: 'Enterprise-level SACCO management application developed using Java technologies.',
    tech: ['Java', 'Spring']
  }
]

export default function Projects() {
  return (
    <section className="mt-20" id="projects">
      <h2 className="serif text-3xl font-bold">Project Highlights</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ scale: 1.01 }} className="p-8 bg-soft border border-accent rounded-2xl shadow-md transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="serif font-bold text-xl">{p.title}</h3>
                <p className="mt-3 text-muted max-w-xl">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.tech.map((t) => <span key={t} className="text-xs px-3 py-1 border border-accent rounded-full text-muted">{t}</span>)}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-2">
                {p.demo && <a className="text-sm text-accent hover:underline" href={p.demo} target="_blank" rel="noreferrer">View Live</a>}
                {p.repo && <a className="text-sm text-muted" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
