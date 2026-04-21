import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'

export default function About() {
  return (
    <FadeSection id="about">
      <SectionLabel>About</SectionLabel>
      <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300
                    leading-relaxed max-w-2xl">
        I'm a Computer Science student passionate about building scalable,
        responsive web applications. I specialize in full-stack development,
        creating modern digital solutions and clean UIs, with a current focus
        on helping small businesses establish a strong online presence.
      </p>
    </FadeSection>
  )
}