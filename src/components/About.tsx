import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="mt-24" id="about">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="serif text-3xl font-bold">About</motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-12 items-center">
        <div className="space-y-6 prose">
          <p className="text-muted">I am a software developer specializing in full stack systems and machine learning. I design and build intelligent, scalable digital systems with simplicity and precision, focusing on real-world applications that deliver measurable value.</p>

          <h3 className="serif text-lg">Craft & Philosophy</h3>
          <ul className="list-inside space-y-2 text-muted">
            <li>Clean and scalable architecture</li>
            <li>Elegant and intuitive user experiences</li>
            <li>Problem-solving through technology</li>
            <li>Continuous learning and improvement</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
