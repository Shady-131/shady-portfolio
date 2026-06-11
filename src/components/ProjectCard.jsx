import { IconArrow } from './ui/icons'

export default function ProjectCard({ num, name, desc, features, tech, demo, demoExternal, code }) {
  // Lift/border/shadow handled purely with CSS. `group-hover` covers pointers;
  // `focus-within` covers keyboard + touch (when a button inside is focused),
  // so the effect is never hover-only. Actions are always visible regardless.
  return (
    <div
      className="group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800
                 rounded-2xl p-6 shadow-none transition-all duration-200 ease-out
                 hover:-translate-y-1 hover:scale-[1.012] hover:border-neutral-900 dark:hover:border-neutral-100
                 hover:shadow-lg hover:shadow-neutral-200/60 dark:hover:shadow-neutral-900/60
                 focus-within:-translate-y-1 focus-within:scale-[1.012]
                 focus-within:border-neutral-900 dark:focus-within:border-neutral-100
                 focus-within:shadow-lg focus-within:shadow-neutral-200/60 dark:focus-within:shadow-neutral-900/60"
    >
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-2">
        {num}
      </p>

      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {name}
      </h3>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
        {desc}
      </p>

      {features?.length > 0 && (
        <ul className="mb-5 space-y-1.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex gap-2.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5 mb-5">
        {tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-2.5">
        {demo ? (
          <a
            href={demo}
            target={demoExternal ? '_blank' : undefined}
            rel={demoExternal ? 'noopener noreferrer' : undefined}
            className="btn-primary text-xs py-2 px-4 rounded-lg"
          >
            Live Demo <IconArrow />
          </a>
        ) : (
          <span className="btn-primary text-xs py-2 px-4 rounded-lg opacity-35 cursor-not-allowed pointer-events-none">
            Coming Soon
          </span>
        )}

        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2 px-4 rounded-lg"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  )
}