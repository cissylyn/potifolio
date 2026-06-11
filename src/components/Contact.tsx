import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) {
      alert('Please provide your email and a message.')
      return
    }
    const subject = encodeURIComponent(`Website message from ${name || 'Visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:musiimentacissylyn7@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <section className="mt-20 mb-12" id="contact">
      <h2 className="serif text-3xl font-bold">Contact</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-8 bg-soft border border-accent rounded-xl">
          <h3 className="serif font-semibold">Get in touch</h3>
          <p className="mt-4 text-muted">Email: <a className="text-accent" href="mailto:musiimentacissylyn7@gmail.com">musiimentacissylyn7@gmail.com</a></p>
          <p className="mt-2 text-muted">Phone: 0761557422 / 0760003306</p>
          <div className="mt-6 flex gap-3">
            <a href="mailto:musiimentacissylyn7@gmail.com" className="btn-primary">Email</a>
            <a href="https://wa.me/256761557422" className="btn-outline">WhatsApp</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-soft border border-accent rounded-xl">
          <label className="block text-sm text-muted">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" className="mt-2 w-full p-3 bg-transparent border border-accent rounded" />
          <label className="block mt-4 text-sm text-muted">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="mt-2 w-full p-3 bg-transparent border border-accent rounded" />
          <label className="block mt-4 text-sm text-muted">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className="mt-2 w-full p-3 bg-transparent border border-accent rounded h-28" />
          <button type="submit" className="mt-4 px-5 py-3 border border-accent text-accent rounded hover:shadow-md transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}
