import { scrollTo } from '../utils/scroll'
import { NAV_LINKS } from '../data/portfolio'

function IconDownload() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  )
}

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between h-14">

        <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
          Shady.
        </span>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="nav-btn hidden sm:block"
            >
              {s}
            </button>
          ))}
          <a href="/cv.pdf" download className="btn-outline py-1.5 px-3 text-xs rounded-lg">
            <IconDownload /> CV
          </a>
        </div>

      </div>
    </nav>
  )
}