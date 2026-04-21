import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'
import { EXPERIENCE } from '../data/portfolio'

export default function Experience() {
  return (
    <FadeSection id="experience">
      <SectionLabel>Experience</SectionLabel>
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
        {EXPERIENCE.map(({ role, company, period, desc }) => (
          <div key={role} className="flex items-start justify-between gap-6 py-5">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                {role}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                {company}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400
                            leading-relaxed max-w-lg">
                {desc}
              </p>
            </div>
            <span className="flex-shrink-0 text-xs font-medium
                             bg-neutral-100 dark:bg-neutral-800
                             text-neutral-600 dark:text-neutral-400
                             border border-neutral-200 dark:border-neutral-700
                             px-3 py-1.5 rounded-full">
              {period}
            </span>
          </div>
        ))}
      </div>
    </FadeSection>
  )
}