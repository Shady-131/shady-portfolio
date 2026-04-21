import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  return (
    <FadeSection id="projects">
      <SectionLabel>Projects</SectionLabel>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </FadeSection>
  )
}