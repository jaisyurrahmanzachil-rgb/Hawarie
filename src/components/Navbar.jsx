import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import iconHawarie from "../assets/icon_hawarie.jpg"

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Profil', href: '#profil' },
  { label: 'Program', href: '#program' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-green-900/10 bg-[#FAF9F3]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-green-900">
            <img
              src={iconHawarie}
              alt="Logo Hawarie"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-green-950">
              HAWARIE
            </h1>
            <p className="text-[10px] tracking-[2px] text-green-800">
              QUR'ANIC HOMESCHOOLING
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-green-950 transition hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-950 md:hidden"
          aria-label="toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-green-900/10 bg-[#FAF9F3] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-green-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}