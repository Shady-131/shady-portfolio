import { CONTACT } from '../../data/portfolio'
import { SocialIcon } from './icons'

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
            <SocialIcon label={label} />
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