import React from 'react'
import { motion } from 'framer-motion'

const ideas = [
    'Simplicity is the ultimate sophistication',
    'Systems should scale without complexity',
    'Design is as important as logic',
    'Real problems deserve real solutions'
]

export default function Philosophy() {
    return (
        <section className="mt-20 text-center" id="philosophy">
            <h2 className="serif text-3xl font-bold">A Developer’s Philosophy</h2>
            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
                {ideas.map((i, idx) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.12 }} className="text-muted">{i}</motion.div>
                ))}
            </div>
        </section>
    )
}
