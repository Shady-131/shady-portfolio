import heroImg from '../assets/hero.png'
import { scrollTo } from '../utils/scroll'

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12l7 7 7-7" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="pt-36 pb-20">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">

        {/* ── Text ── */}
        <div className="flex-1">
          <p className="text-xs font-medium tracking-widest uppercase
                        text-neutral-400 dark:text-neutral-500 mb-5">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight
                         tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Hi, I'm Shady.<br />
            <span className="text-neutral-400 dark:text-neutral-500 font-normal">
              I build for the web.
            </span>
          </h1>

          <p className="text-base text-neutral-500 dark:text-neutral-400
                        leading-relaxed max-w-md mb-8">
            Computer Science student crafting scalable, responsive web
            applications — currently focused on helping small businesses
            establish a strong online presence.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View my work <IconArrow />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              Get in touch
            </button>
            <a href="/cv.pdf" download className="btn-outline">
              <IconDownload /> Download CV
            </a>
          </div>
        </div>

        {/* ── Profile picture ── */}
        {/* To swap: replace heroImg import at the top with your actual image file */}
        <div className="flex-shrink-0 self-start sm:self-center">
          <div className="w-32 h-32 sm:w-52 sm:h-52 rounded-2xl overflow-hidden
                          border border-neutral-200 dark:border-neutral-800
                          bg-neutral-100 dark:bg-neutral-800">
            <img
              src={heroImg}
              alt="Shady — Full-Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}