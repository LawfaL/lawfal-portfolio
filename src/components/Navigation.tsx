import { useState } from 'react'

interface NavigationProps {
  onThemeToggle: () => void
  theme: 'light' | 'dark'
}

export default function Navigation({ onThemeToggle, theme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link}
              </a>
            ))}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
