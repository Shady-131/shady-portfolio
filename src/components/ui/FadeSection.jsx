import { useFadeIn } from '../../hooks/useFadeIn'

export default function FadeSection({ id, children }) {
  const ref = useFadeIn()
  return (
    <section
      id={id}
      ref={ref}
      className="py-20 section-divider opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      {children}
    </section>
  )
}