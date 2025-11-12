import { useState } from 'react'
import { Menu, X, Car, Github, Instagram, Twitter } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-sm md:text-base text-gray-200/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold tracking-wide">
            <Car className="h-6 w-6 text-red-500" />
            <span>Velocity</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#models">Models</NavLink>
            <NavLink href="#tech">Technology</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">Book a Test Drive</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#models">Models</NavLink>
              <NavLink href="#tech">Technology</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="#" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors w-max">Book a Test Drive</a>
              <div className="flex items-center gap-3 pt-2 text-white/80">
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Github"><Github className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
