import FadeSection from './ui/FadeSection'
import SectionLabel from './ui/SectionLabel'
import ContactLinks from './ui/ContactLink'

export default function Contact() {
  return (
    <FadeSection id="contact">
      <SectionLabel>Contact</SectionLabel>
      <p className="text-base text-neutral-500 dark:text-neutral-400
                    leading-relaxed max-w-md mb-8">
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>
      <ContactLinks />
    </FadeSection>
  )
}