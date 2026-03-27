import { useState } from 'react'
import './index.css'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Navigation from './components/Navigation'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navigation onThemeToggle={toggleTheme} theme={theme} />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-8 bg-slate-50 dark:bg-slate-900 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Your Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
