/**
 * The Velora Studios — Studio Content & Configuration
 * 
 * NOTE FOR PUBLISHING:
 * Replace any placeholder texts marked with [Placeholder: ...] with your actual studio details,
 * verified client names, awards, and actual photography/render assets.
 */

export const STUDIO_INFO = {
  name: "The Velora Studios",
  shortName: "Velora",
  tagline: "Strategic Brand Architecture & High-Impact Digital Experiences",
  domain: "thevelorastudios.com",
  email: "hello@thevelorastudios.com",
  phone: "[Placeholder: +1 (212) 555-0198]",
  location: "New York • London • Worldwide (Remote)",
  establishedYear: "2024",
  socials: {
    instagram: "https://instagram.com/thevelorastudios",
    x: "https://x.com/velorastudios",
    linkedin: "https://linkedin.com/company/thevelorastudios",
    behance: "https://behance.net/thevelorastudios",
    dribbble: "https://dribbble.com/thevelorastudios",
    github: "https://github.com/thevelorastudios"
  }
};

export const STUDIO_STATS = [
  { label: "Selected Works Delivered", value: "35+", note: "[Placeholder: Replace with verified studio count]" },
  { label: "Global Reach", value: "8 Countries", note: "[Placeholder: Replace with verified client locations]" },
  { label: "Design Industry Honors", value: "12x", note: "[Placeholder: Replace with verified studio awards]" },
  { label: "Client Satisfaction", value: "99%", note: "[Placeholder: Based on client post-project reviews]" }
];

export const SERVICES_LIST = [
  {
    id: "brand-architecture",
    number: "01",
    title: "Brand Architecture & Visual Identity",
    summary: "Forging timeless, resonant identities that distinguish visionary brands in competitive markets.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Visual Identity & Monograms",
      "Comprehensive Design Systems",
      "Typography & Color Theory",
      "Brand Guidelines & Brand Books",
      "Packaging & Physical Collateral"
    ],
    highlight: "Built for enduring cultural longevity and scalable multi-channel execution."
  },
  {
    id: "digital-experience",
    number: "02",
    title: "Digital Experience & UI/UX Design",
    summary: "Architecting immersive, bespoke digital interfaces that balance editorial artistry with conversion science.",
    deliverables: [
      "Web & Mobile UI/UX Design",
      "Interactive Prototyping",
      "Design Systems & Token Libraries",
      "Spatial & Micro-Interactions",
      "Accessibility & Usability Audits",
      "E-Commerce & Checkout UX"
    ],
    highlight: "Obsessively crafted interfaces with zero fluff and maximum ergonomic fluidity."
  },
  {
    id: "creative-direction",
    number: "03",
    title: "Creative Direction & Artistry",
    summary: "Guiding the visual soul and narrative voice of luxury brands, tech disruptors, and cultural institutions.",
    deliverables: [
      "Art & Visual Direction",
      "3D Spatial Renders & CGI",
      "Editorial Photography Direction",
      "Brand Narrative & Tone of Voice",
      "Launch Campaign Concepts",
      "Motion & Title Sequences"
    ],
    highlight: "Transforming abstract philosophies into unforgettable visual sensory moments."
  },
  {
    id: "web-engineering",
    number: "04",
    title: "Modern Web Engineering & Edge Delivery",
    summary: "Translating audacious designs into lightning-fast, secure, and resilient web applications.",
    deliverables: [
      "Vite & React Modern Frontend",
      "Headless CMS Implementations",
      "Cloudflare Pages & Edge Optimization",
      "Fluid WebGL / CSS Motion",
      "Technical SEO & Core Web Vitals",
      "Ultra-Fast Global CDN Caching"
    ],
    highlight: "Near-instant loading speeds, airtight security, and seamless custom animations."
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "aura-parfums",
    title: "Aura Haute Parfumerie",
    category: "Branding",
    year: "2025",
    client: "[Placeholder: Aura Fragrance House, Paris]",
    description: "An evocative brand identity, tactile bottle packaging design, and high-conversion e-commerce flagship for a Parisian niche fragrance house.",
    impact: "[Placeholder: +140% direct-to-consumer launch sales across EU & US]",
    tags: ["Brand Identity", "Luxury Packaging", "E-Commerce", "3D Renders"],
    accentColor: "#d4af37",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "kinetix-ai",
    title: "Kinetix Robotics & AI",
    category: "Digital Experience",
    year: "2025",
    client: "[Placeholder: Kinetix Autonomous Systems, SF]",
    description: "Futuristic interface system and digital command center for autonomous logistics robots operating in next-generation fulfillment hubs.",
    impact: "[Placeholder: Scaled to 45,000 daily autonomous robot monitoring sessions]",
    tags: ["UI/UX Systems", "Dark Mode Architecture", "Real-Time Telemetry", "Web Engineering"],
    accentColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "solstice-atelier",
    title: "Solstice Architecture Group",
    category: "Creative Direction",
    year: "2024",
    client: "[Placeholder: Solstice Studio, Zurich]",
    description: "Monolithic editorial portfolio and brand redesign celebrating brutalist and sustainable architectural landmarks in Central Europe.",
    impact: "[Placeholder: Winner of European Architecture Digital Monograph Showcase]",
    tags: ["Editorial Book", "Spatial Identity", "Web Experience", "Typography"],
    accentColor: "#9ca3af",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vesper-capital",
    title: "Vesper Wealth Management",
    category: "Digital Experience",
    year: "2024",
    client: "[Placeholder: Vesper Global Partners, London]",
    description: "Reinventing private wealth management for next-generation principals with serene design, frictionless onboarding, and bank-grade clarity.",
    impact: "[Placeholder: Over $280M assets onboarded through the reimagined portal]",
    tags: ["Fintech Design", "Design Systems", "Web App", "Security"],
    accentColor: "#10b981",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lumina-acoustics",
    title: "Lumina Spatial Audio",
    category: "Branding",
    year: "2024",
    client: "[Placeholder: Lumina Sound Lab, Stockholm]",
    description: "Acoustic hardware packaging, interactive frequency visualizer, and global launch microsite for audiophile-grade planar magnetic headphones.",
    impact: "[Placeholder: Sold out initial release batch within 72 hours]",
    tags: ["Industrial Branding", "Micro-Interactions", "3D Web", "Packaging"],
    accentColor: "#f59e0b",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "chronos-horology",
    title: "Chronos Atelier Suisse",
    category: "Creative Direction",
    year: "2024",
    client: "[Placeholder: Chronos Atelier, Geneva]",
    description: "A high-precision digital atelier and collectors' showroom showcasing hand-assembled perpetual calendar complications.",
    impact: "[Placeholder: 3.8x increase in bespoke commission consultation requests]",
    tags: ["High Horology", "Interactive Showroom", "Motion Video", "Editorial"],
    accentColor: "#ec4899",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  }
];

export const STUDIO_PROCESS = [
  {
    step: "01",
    title: "Inquiry & Strategic Discovery",
    duration: "Week 01",
    description: "We deconstruct your market reality, audience psychology, and competitive landscape through focused workshops to build a bulletproof creative thesis."
  },
  {
    step: "02",
    title: "Concept & Art Direction",
    duration: "Weeks 02 — 03",
    description: "Translating strategy into distinct visual paths. We explore typography, color moodboards, tactile textures, and spatial concepts before committing to a singular vision."
  },
  {
    step: "03",
    title: "Craft, System & Production",
    duration: "Weeks 04 — 06",
    description: "Meticulous execution across every touchpoint. From responsive component systems to custom animations and copywriting, every detail is engineered to perfection."
  },
  {
    step: "04",
    title: "Deployment & Global Launch",
    duration: "Week 07+",
    description: "Stress-testing, accessibility audits, and seamless deployment on Cloudflare's global edge network. We ensure flawless performance on launch day and beyond."
  }
];

export const CLIENT_FAQS = [
  {
    question: "What is your typical project timeline?",
    answer: "Most comprehensive brand identity or flagship digital experience projects range between 4 to 8 weeks depending on scope, deliverables, and revision cadence. We provide a tailored sprint schedule during our initial discovery call."
  },
  {
    question: "How does The Velora Studios collaborate with client teams?",
    answer: "We operate as an integrated high-level creative partner. Clients get direct access to creative leads via weekly visual check-ins, asynchronous Figma workrooms, and dedicated Slack/Teams communication."
  },
  {
    question: "Do you handle custom development as well as design?",
    answer: "Yes. We take full ownership from initial sketches to clean, high-performance production code (React, Vite, Cloudflare Pages, modern CMS) so the final live site matches the design down to the exact pixel."
  },
  {
    question: "How do we get started?",
    answer: "Complete our project inquiry form below or email us directly at hello@thevelorastudios.com. We review inquiries within 24–48 hours and schedule an introductory 30-minute discovery consultation."
  }
];
