import { useState } from 'react'

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export default function ProjectCard({ num, name, desc, tech, demo, demoExternal, code }) {
  const [hovered, setHovered] = useState(false)

  const cardClass = hovered
    ? 'border-neutral-900 dark:border-neutral-100 -translate-y-1 scale-[1.012] shadow-lg shadow-neutral-200/60 dark:shadow-neutral-900/60'
    : 'border-neutral-200 dark:border-neutral-800 translate-y-0 scale-100 shadow-none'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-neutral-50 dark:bg-neutral-900 border rounded-2xl p-6 transition-all duration-200 ease-out ${cardClass}`}
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
  );
}