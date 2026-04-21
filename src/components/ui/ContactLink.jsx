import { CONTACT } from '../../data/portfolio'

function IconEmail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

const ICONS = {
  Email: <IconEmail />,
  LinkedIn: <IconLinkedIn />,
  GitHub: <IconGitHub />,
}

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-4">
      {CONTACT.map(({ label, value, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="contact-card"
        >
          <div className="contact-icon-wrap">
            {ICONS[label]}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-0.5">
              {label}
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {value}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}