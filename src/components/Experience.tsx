import React from 'react'
import { motion } from 'framer-motion'

const stages = [
    {
        title: 'Early Interest',
        body: 'A curiosity for logic and problem solving led to early experimentation with code and small web projects.'
    },
    {
        title: 'Growth',
        body: 'Deepened skills across frontend and backend systems, shipping full-stack applications and services.'
    },
    {
        title: 'Machine Learning',
        body: 'Explored predictive models and applied machine learning to real-world problems in agriculture and analytics.'
    },
    {
        title: 'Real-World Systems',
        body: 'Focused on building reliable, maintainable systems that solve real user problems at scale.'
    }
]

export default function Experience() {
    return (
        <section className="mt-20" id="experience">
            <h2 className="serif text-3xl font-bold">Journey</h2>
            <div className="mt-8 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, rgba(184,155,106,0.16), rgba(184,155,106,0.06))' }} />
                <div className="space-y-10 pl-12">
                    {stages.map((s, i) => (
                        <motion.div key={s.title} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-soft border border-accent rounded-lg p-6">
                            <div className="text-sm text-accent font-semibold">{s.title}</div>
                            <div className="mt-2 text-muted">{s.body}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
