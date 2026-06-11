import heroImg from '../assets/hero.png'
import { scrollTo } from '../utils/scroll'
import { IconDownload, IconArrow } from './ui/icons'

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
            I build practical, responsive websites and web apps with a clean,
            fast user experience — helping small businesses establish a strong
            online presence. Computer Science student with a practical,
            product-focused approach to building for the web.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View my work <IconArrow />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              Get in touch
            </button>
            <a href="/cv.pdf" download="Shady-Gamel-CV.pdf" className="btn-outline">
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
              width={1176}
              height={1280}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}