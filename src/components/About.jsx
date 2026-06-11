import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'

export default function About() {
  return (
    <FadeSection id="about">
      <SectionLabel>About</SectionLabel>
      <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300
                    leading-relaxed max-w-2xl">
        I'm a full-stack web developer who builds practical, business-focused
        websites and web apps. I work across the stack to deliver responsive,
        polished UIs and clean, maintainable implementations — turning ideas
        into fast, reliable solutions that help small businesses grow online.
        Alongside this, I'm completing a Computer Science degree that keeps my
        fundamentals sharp.
      </p>
    </FadeSection>
  )
}