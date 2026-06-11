import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', skills: ['Java', 'Python', 'Node.js', 'Laravel', 'REST APIs'] },
  { title: 'Machine Learning', skills: ['Python', 'Data Analysis', 'Predictive Modeling', 'AI Applications'] },
  { title: 'Database', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] }
]

export default function Skills() {
  return (
    <section className="mt-20" id="skills">
      <h2 className="serif text-3xl font-bold">Skills</h2>
      <p className="mt-2 text-muted max-w-2xl serif">A concise, curated set of core capabilities spanning frontend, backend, machine learning and data systems.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((g) => (
          <motion.div key={g.title} whileHover={{ translateY: -6 }} className="p-6 bg-soft border border-accent rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <h3 className="serif font-semibold text-lg">{g.title} Development</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {g.skills.map((s) => (
                <div key={s} className="text-sm text-muted py-2 px-3 border border-transparent rounded hover:border-accent transition serif">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
