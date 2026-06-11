import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try { return (localStorage.getItem('theme') as 'light' | 'dark') || 'light' } catch { return 'light' }
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
        try { localStorage.setItem('theme', theme) } catch { }
    }, [theme])

    const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    return (
        <button aria-label="Toggle theme" onClick={toggle} className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-accent bg-transparent hover:shadow-md transition-all duration-500">
            {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="var(--text)" /></svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V2M12 22v-2M4.22 4.22L2.81 2.81M21.19 21.19l-1.41-1.41M4 12H2M22 12h-2M4.22 19.78l-1.41 1.41M21.19 2.81l-1.41 1.41" stroke="var(--text)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" fill="var(--accent)" /></svg>
            )}
        </button>
    )
}
