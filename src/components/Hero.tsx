import React, { useEffect, useState } from 'react'
import profile from '../assets/images/profile.png'
import { motion } from 'framer-motion'

const Typing: React.FC<{ lines: string[] }> = ({ lines }) => {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    let mounted = true
    let char = 0
    const type = () => {
      if (!mounted) return
      const line = lines[idx]
      if (char <= line.length) {
        setText(line.slice(0, char))
        char++
        setTimeout(type, 60)
      } else {
        setTimeout(() => {
          char = 0
          setIdx((i) => (i + 1) % lines.length)
        }, 1200)
      }
    }
    type()
    return () => { mounted = false }
  }, [idx, lines])
  return <span className="text-neon">{text}<span className="blink">|</span></span>
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" id="home">
      <div className="absolute inset-0 -z-10 bg-soft accent-shimmer opacity-30" />
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex-1">
          <h1 className="serif text-5xl md:text-7xl leading-tight font-extrabold text-[var(--text)] overflow-hidden">
            {Array.from('MUSIIMENTA CISSYLYN').map((ch, i) => (
              <span key={i} className="inline-block name-underline" style={{ animation: `fadeUp 700ms ease both`, animationDelay: `${i * 45}ms` }}>{ch === ' ' ? '\u00A0' : ch}</span>
            ))}
          </h1>
          <p className="mt-4 text-lg text-muted">Full Stack Developer · AI & Machine Learning Enthusiast · Software Engineer</p>

          <p className="mt-8 max-w-2xl text-muted">“I design and build intelligent, scalable digital systems with simplicity, clarity, and precision.”</p>

          <div className="mt-10 flex gap-4">
            <a href="#projects" className="btn-outline serif">View My Work</a>
            <a href="#contact" className="btn-primary">Contact Me</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex-1 flex justify-center md:justify-end">
          <img src={profile} alt="Musiimenta" className="w-64 h-72 md:w-80 md:h-96 object-cover object-top block -mt-3 md:-mt-6" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-0.5 h-10 rounded-full mx-auto animate-pulse" style={{ background: 'linear-gradient(180deg, rgba(184,155,106,0.18), rgba(184,155,106,0.06))' }} />
      </div>
    </section>
  )
}
