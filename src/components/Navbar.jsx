import { useState } from 'react'

const NavLink = ({ children, href = '#' }) => (
  <a href={href} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand/10 grid place-items-center">
              <span className="text-brand font-extrabold">IP</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">IELTS Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Home</NavLink>
            <NavLink>Courses</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Results</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <a href="#enroll" className="btn-primary">Enroll Now</a>
          </div>

          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-3">
              <NavLink>Home</NavLink>
              <NavLink>Courses</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>Results</NavLink>
              <NavLink>Contact</NavLink>
              <a href="#enroll" className="btn-primary w-full justify-center">Enroll Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
