import { CONTACT } from '../data/portfolio'
import { SocialIcon } from './ui/icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row
                      items-center justify-between gap-4">
        <p className="text-sm text-neutral-400 dark:text-neutral-600 text-center sm:text-left">
          Designed &amp; built by Shady · {year}
        </p>

        <div className="flex items-center gap-2">
          {CONTACT.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center
                         text-neutral-400 dark:text-neutral-500
                         hover:text-neutral-900 dark:hover:text-neutral-100
                         hover:bg-neutral-100 dark:hover:bg-neutral-800
                         transition-colors duration-150"
            >
              <SocialIcon label={label} size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
