// Renders as an <h2> so each section is a real landmark in the heading
// outline (the page keeps a single <h1> in the hero). Styled to look like
// a small eyebrow label, but semantically a heading.
export default function SectionLabel({ children }) {
  return (
    <h2 className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-7">
      {children}
    </h2>
  )
}
