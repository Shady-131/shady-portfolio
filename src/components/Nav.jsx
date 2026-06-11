import { useState, useEffect } from 'react'
import { scrollTo } from '../utils/scroll'
import { NAV_LINKS } from '../data/portfolio'
import { IconDownload, IconMenu, IconClose } from './ui/icons'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleNav = (id) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between h-14">

        <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
          Shady.
        </span>

        {/* ── Desktop links ── */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((s) => (
            <button key={s} onClick={() => handleNav(s)} className="nav-btn">
              {s}
            </button>
          ))}
          <a href="/cv.pdf" download className="btn-outline py-1.5 px-3 text-xs rounded-lg">
            <IconDownload size={13} /> CV
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="nav-btn sm:hidden p-1 -mr-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* ── Mobile dropdown panel ── */}
      {open && (
        <div
          id="mobile-menu"
          className="sm:hidden max-w-3xl mx-auto pb-4 pt-1 flex flex-col gap-1 border-t border-neutral-200 dark:border-neutral-800"
        >
          {NAV_LINKS.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className="nav-btn text-left py-2"
            >
              {s}
            </button>
          ))}
          <a
            href="/cv.pdf"
            download
            onClick={() => setOpen(false)}
            className="btn-outline mt-2 py-2 px-3 text-xs rounded-lg self-start"
          >
            <IconDownload size={13} /> Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
