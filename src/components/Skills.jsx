import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'
import { SKILLS } from '../data/portfolio'

export default function Skills() {
  return (
    <FadeSection id="skills">
      <SectionLabel>Skills</SectionLabel>
      <div className="flex flex-wrap gap-2.5">
        {SKILLS.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </FadeSection>
  )
}