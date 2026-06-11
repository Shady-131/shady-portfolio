import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'
import ContactLinks from './ui/ContactLink'

export default function Contact() {
  return (
    <FadeSection id="contact">
      <SectionLabel>Contact</SectionLabel>
      <p className="text-base text-neutral-500 dark:text-neutral-400
                    leading-relaxed max-w-md mb-8">
        Have a project in mind or a business that needs a website? I'm
        available for freelance work and happy to talk through what you need.
      </p>
      <ContactLinks />
    </FadeSection>
  )
}