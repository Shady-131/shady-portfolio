export const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact']

export const SKILLS = [
  'JavaScript',
  'React.js',
  'Node.js',
  'Tailwind CSS',
  'Vite',
  'Git',
]

// Each project supports an optional `features` list for a short case-study feel.
// `demo`/`code` stay conditional: a button only renders when its URL exists.
export const PROJECTS = [
  {
    num: '01',
    name: 'Butterfly Gallery',
    desc: 'An online store that lets customers browse products, build a cart, and move through checkout in a clear, uncluttered flow. The interface keeps attention on the products and stays fast and responsive on every screen size.',
    features: [
      'Product browsing with a focused, distraction-free layout',
      'Shopping cart and a straightforward checkout flow',
      'Responsive design across mobile, tablet, and desktop',
    ],
    tech: ['E-commerce', 'React', 'Vercel'],
    demo: 'https://butterfly-gallery.vercel.app',
    demoExternal: true,
    // Add the real repo URL here to show a "View Code" button; null hides it.
    code: null,
  },
  {
    num: '02',
    name: 'Escalante Auto Repair',
    desc: 'A web app for an auto repair business built around two connected portals — one for customers and one for the shop. Customers book appointments and follow their service status, while staff manage incoming requests and track work from a single dashboard.',
    features: [
      'Separate customer and mechanic dashboards',
      'Appointment booking and scheduling',
      'Service requests and job tracking in one place',
    ],
    tech: ['Web App', 'Dashboard', 'Booking'],
    demo: 'https://escalante-auto-repair.vercel.app/',
    demoExternal: true,
    code: null,
  },
  {
    num: '03',
    name: 'Better Health Supplements',
    desc: 'A responsive e-commerce website for a Dubai-based supplements brand. It presents the brand and its products professionally and gives customers a clear path to browse items and complete an order directly through the site, with dedicated space for the brand story, products, and support.',
    features: [
      'Product-focused browsing built to make the range easy to scan',
      'Cart and checkout order flow handled through the website',
      'Mobile-first layout refined across tablet and desktop',
    ],
    tech: ['E-commerce', 'Responsive', 'Mobile-First'],
    // Live site is published; no public repository yet, so View Code stays hidden.
    demo: 'https://better-health-three.vercel.app/',
    demoExternal: true,
    code: null,
  },
]

export const EXPERIENCE = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Present',
    desc: 'Designing, building, polishing, and deploying responsive websites and web apps for small businesses worldwide — handling each project end to end, from first concept and UI through to a fast, production-ready launch.',
  },
]

export const CONTACT = [
  {
    label: 'Email',
    value: 'shadygamiel@gmail.com',
    href: 'mailto:shadygamiel@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'shady-gamel',
    href: 'https://www.linkedin.com/in/shady-gamel-31b114182',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Shady-131',
    href: 'https://github.com/Shady-131',
    external: true,
  },
]