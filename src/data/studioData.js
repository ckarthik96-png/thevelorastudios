/**
 * The Velora Studios — Central Configuration & Content Source
 *
 * All business details, contact information, service offerings,
 * concept case studies, and insights articles are configured here.
 * Placeholders marked as [BUSINESS_EMAIL], [WHATSAPP_NUMBER], [BOOKING_URL]
 * allow the studio owner to configure real credentials before launch.
 */

export const STUDIO_CONFIG = {
  name: "The Velora Studios",
  wordmark: "VELORA",
  registeredName: "[BUSINESS_REGISTERED_NAME: The Velora Studios Ltd]",
  tagline: "Thoughtful Ideas. Distinctive Experiences.",
  positioning: "A creative partner helping startups and established businesses build distinctive brands and purposeful digital experiences.",
  domain: "thevelorastudios.com",
  canonicalUrl: "https://thevelorastudios.com",
  
  // Contact Configuration (Configurable Placeholders)
  email: "[BUSINESS_EMAIL: hello@thevelorastudios.com]",
  displayEmail: "hello@thevelorastudios.com",
  whatsappNumber: "[WHATSAPP_NUMBER: +1-000-000-0000]",
  displayWhatsapp: "+1 (555) 019-2830",
  whatsappUrl: "https://wa.me/15550192830",
  bookingUrl: "https://cal.com/thevelorastudios", // [BOOKING_URL]
  bookingLabel: "Book a 30-min Consultation",
  
  // Studio Locations (Transparent notice: No fake global offices invented)
  locationNote: "Independent Creative Studio • Collaborating with clients globally",
  
  // Social Channels
  socials: {
    instagram: "https://instagram.com/thevelorastudios",
    x: "https://x.com/velorastudios",
    linkedin: "https://linkedin.com/company/thevelorastudios",
    behance: "https://behance.net/thevelorastudios",
    dribbble: "https://dribbble.com/thevelorastudios",
    github: "https://github.com/ckarthik96-png/thevelorastudios"
  }
};

/**
 * Section 02 / WHAT WE DO — Homepage Signature Dark Editorial Services
 */
export const HOMEPAGE_SERVICES = [
  {
    number: "01",
    id: "brand-strategy-identity",
    title: "Brand strategy & identity",
    description: "Build a recognisable brand with a clear point of view, distinctive visuals and a consistent identity.",
    link: "/services/branding"
  },
  {
    number: "02",
    id: "website-design-development",
    title: "Website design & development",
    description: "Create considered digital experiences that combine strong visual design with intuitive user journeys.",
    link: "/services/web-design"
  },
  {
    number: "03",
    id: "creative-direction-design",
    title: "Creative direction & design",
    description: "Shape a consistent visual language across campaigns, digital assets and brand communications.",
    link: "/services/creative-design"
  },
  {
    number: "04",
    id: "digital-experiences",
    title: "Digital experiences",
    description: "Turn complex ideas into engaging, responsive and accessible experiences for your audience.",
    link: "/services/web-design"
  },
  {
    number: "05",
    id: "content-visual-storytelling",
    title: "Content & visual storytelling",
    description: "Bring your brand to life through purposeful imagery, compelling layouts and creative storytelling.",
    link: "/services/creative-design"
  }
];

/**
 * Dedicated Service Offerings & Individual Pages Data
 */
export const DETAILED_SERVICES = {
  branding: {
    slug: "branding",
    badge: "01 / BRAND IDENTITY",
    navTitle: "Branding",
    title: "Brand Strategy & Visual Identity",
    heroHeadline: "Build a brand people recognise and remember.",
    heroSummary: "Develop a cohesive identity that communicates what your business stands for. From the initial creative direction to the final visual system, create a brand foundation designed to remain consistent across your customer touchpoints.",
    clientProblem: "Many businesses struggle with fragmented visuals, generic messaging, or an identity that no longer reflects their current scale. Customers hesitate when a brand lacks clear conviction or aesthetic consistency.",
    idealClient: "Startups establishing their first impression from day one, and established companies evolving beyond an outdated or disconnected look.",
    deliverables: [
      "Brand discovery & positioning strategy",
      "Logo suite, monograms & responsive wordmarks",
      "Curated colour palette & typography hierarchy",
      "Comprehensive digital brand guidelines",
      "Supporting graphic devices & grid systems",
      "Real-world application mockups (digital, collateral, packaging)"
    ],
    process: [
      { step: "01", name: "Discovery", desc: "Understanding your origin, audience psychology, and competitive landscape." },
      { step: "02", name: "Creative Direction", desc: "Exploring 2–3 distinct strategic visual paths before committing." },
      { step: "03", name: "Systemization", desc: "Refining the chosen path into a flexible, scalable visual identity." },
      { step: "04", name: "Delivery", desc: "Supplying production-ready asset suites and clear brand usage guidelines." }
    ],
    faqs: [
      {
        q: "What files and formats do we receive upon completion?",
        a: "You receive vector formats (AI, EPS, SVG) and high-resolution web formats (PNG, JPG, WebP), along with master brand guidelines outlining typography, colour codes (HEX, RGB, CMYK), and spacing rules."
      },
      {
        q: "How long does a brand identity project typically take?",
        a: "A comprehensive brand strategy and identity engagement typically spans 3 to 6 weeks, structured into collaborative weekly review milestones."
      },
      {
        q: "Do you also design stationery and marketing collateral?",
        a: "Yes. Collateral requirements such as business stationery, digital presentation templates, social media kits, and packaging can be included in the agreed project scope."
      }
    ]
  },
  "web-design": {
    slug: "web-design",
    badge: "02 / DIGITAL EXPERIENCE",
    navTitle: "Website Design",
    title: "Website Design & Development",
    heroHeadline: "Websites that bring your brand to life.",
    heroSummary: "Create a considered online experience that helps visitors understand your business, explore your services and take the next step. We bring together visual design, usability and responsive development to create websites aligned with your objectives.",
    clientProblem: "Websites often suffer from slow loading times, clunky navigation, mobile rendering errors, or bloated templates that fail to convert visitors into genuine client enquiries.",
    idealClient: "Founders launching a modern digital flag, and growing enterprises looking to replace outdated legacy websites with fast, bespoke platforms.",
    deliverables: [
      "Website strategy & content information architecture",
      "Bespoke UX wireframing & UI layout design",
      "Responsive layout design across mobile, tablet & desktop",
      "Clean modern frontend development (React / Vite)",
      "Accessible contact, inquiry & lead capture workflows",
      "Foundational on-page technical SEO & OpenGraph tags",
      "Cross-browser stress testing & Core Web Vitals optimization"
    ],
    process: [
      { step: "01", name: "Architecture", desc: "Structuring pages, user conversion flows, and content hierarchies." },
      { step: "02", name: "Interface Design", desc: "Crafting editorial responsive layouts in Figma with typography discipline." },
      { step: "03", name: "Development", desc: "Writing clean, semantic, fast code optimized for Cloudflare Pages edge delivery." },
      { step: "04", name: "Launch & QA", desc: "Auditing accessibility, performance, form handling, and custom domain routing." }
    ],
    faqs: [
      {
        q: "Where is the website hosted?",
        a: "We deploy on Cloudflare Pages, providing global CDN distribution, sub-second edge load times, free SSL/HTTPS, and zero server maintenance overhead."
      },
      {
        q: "Will our website look great on mobile phones and tablets?",
        a: "Every page is designed and tested across modern screen dimensions with custom breakpoints, fluid typography, and touch-ergonomic navigation."
      },
      {
        q: "Can you connect our enquiry form to our company email or CRM?",
        a: "Yes. We configure the form to work with secure serverless endpoints, Formspree, Resend, or your preferred email routing provider."
      }
    ]
  },
  "creative-design": {
    slug: "creative-design",
    badge: "03 / ART DIRECTION",
    navTitle: "Creative Design",
    title: "Creative Design & Direction",
    heroHeadline: "Make every brand interaction feel intentional.",
    heroSummary: "Bring your visual identity into everyday communications through thoughtful design and creative direction. Develop a consistent visual language across the digital and marketing assets relevant to your business.",
    clientProblem: "Without disciplined creative direction, external campaigns and social collateral quickly become disjointed, diluting brand equity and confusing potential customers.",
    idealClient: "Marketing leaders and business owners who need ongoing creative stewardship, campaign asset production, or high-tier editorial design.",
    deliverables: [
      "Campaign visual concepts & thematic art direction",
      "Digital advertising & performance campaign graphics",
      "Curated social media design systems & templates",
      "Keynote, pitch decks & investor presentation decks",
      "Visual content systems & editorial layout guidelines",
      "Design systems governance & asset libraries"
    ],
    process: [
      { step: "01", name: "Brief & Objectives", desc: "Defining campaign goals, key deliverables, and target audience tone." },
      { step: "02", name: "Art Direction", desc: "Establishing mood, styling, typography treatment, and art direction." },
      { step: "03", name: "Production", desc: "Designing asset variants across all required aspect ratios and channels." },
      { step: "04", name: "Handover", desc: "Packaging ready-to-publish files and editable template files." }
    ],
    faqs: [
      {
        q: "Can we work with The Velora Studios on a recurring retainer?",
        a: "Yes. We accept a selective number of monthly or quarterly creative retainers for businesses that require continuous design collaboration."
      },
      {
        q: "Do you design investor pitch decks and company presentations?",
        a: "Yes. We transform dense data and company narratives into beautiful, clear, narrative-driven presentation decks that command attention."
      }
    ]
  }
};

/**
 * Studio Core Values (About Page)
 */
export const STUDIO_VALUES = [
  {
    name: "Purpose",
    description: "Every creative decision should have a reason. We question assumptions to ensure design serves real business goals."
  },
  {
    name: "Clarity",
    description: "Good communication makes complex ideas easier to understand. We remove decorative clutter to elevate meaning."
  },
  {
    name: "Craft",
    description: "Details matter, from typography hierarchy and micro-spacing to the final responsive interaction."
  },
  {
    name: "Collaboration",
    description: "The strongest work comes from clear communication, mutual respect, and shared goals between studio and client."
  },
  {
    name: "Consistency",
    description: "A brand should feel coherent across every touchpoint, building trust and familiarity with every customer interaction."
  }
];

/**
 * Our Work / Case Studies
 * Note on Rule 3: Clearly labeled as Concept Projects & Independent Explorations.
 * No fabricated client quotes, awards, or fake testimonials.
 */
export const CASE_STUDIES = [
  {
    slug: "aura-haute-parfumerie",
    title: "Aura Haute Parfumerie",
    category: "Brand Strategy & Packaging",
    serviceSlug: "branding",
    statusBadge: "Concept Exploration",
    year: "2025",
    client: "Aura Fragrance House [Concept Study]",
    industry: "Luxury Fragrance & Retail",
    summary: "A warm, sensory brand identity system, tactile packaging concepts, and an editorial digital storefront for a boutique niche perfumery.",
    challenge: "Niche fragrance brands require an evocative visual presence that conveys scent notes and artisan craftsmanship through two-dimensional digital mediums.",
    objectives: [
      "Establish a memorable brand monogram and editorial serif typography system.",
      "Design minimalist bottle labels and sustainable textured packaging.",
      "Architect a serene, high-conversion online shopping experience."
    ],
    strategy: "Grounded in sensory minimalism, balancing warm alabaster tones (#F4F0E8), rich charcoal typography, and tactile photographic art direction.",
    deliverables: [
      "Brand Strategy & Positioning Document",
      "Monogram & Wordmark Suite",
      "Packaging & Label Production Specs",
      "E-Commerce UX Wireframes & UI Kit"
    ],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "kinetix-robotics",
    title: "Kinetix Autonomous Systems",
    category: "Website Design & UI Architecture",
    serviceSlug: "web-design",
    statusBadge: "Concept Exploration",
    year: "2025",
    client: "Kinetix Robotics [Concept Study]",
    industry: "Industrial AI & Autonomous Logistics",
    summary: "A high-precision dark editorial web platform and telemetry dashboard interface communicating industrial reliability and autonomous software intelligence.",
    challenge: "Industrial automation software is often perceived as cold and impenetrable. Kinetix needed an interface communicating both human safety and technological supremacy.",
    objectives: [
      "Translate complex robotics telemetry into intuitive data visualizations.",
      "Build a modern responsive website demonstrating technical capability.",
      "Generate qualified enterprise procurement inquiries."
    ],
    strategy: "Clean engineering aesthetics paired with generous negative space, subtle lime status indicators, and clear product tier information architecture.",
    deliverables: [
      "Information Architecture & User Flow Mapping",
      "Responsive Marketing Website UI",
      "Telemetry Dashboard Component Library",
      "Enterprise Contact & Demo Booking Funnel"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "solstice-atelier",
    title: "Solstice Architecture Atelier",
    category: "Visual Identity & Editorial Web",
    serviceSlug: "branding",
    statusBadge: "Concept Exploration",
    year: "2024",
    client: "Solstice Atelier [Concept Study]",
    industry: "Sustainable Architecture & Spatial Design",
    summary: "A monolithic editorial monograph, spatial branding guidelines, and an image-led portfolio celebrating sustainable residential landmarks.",
    challenge: "Architectural portfolios often become image catalogs with no narrative context. Solstice needed to articulate the philosophy behind their sustainable structures.",
    objectives: [
      "Create a timeless brand mark reflecting structural balance and raw materials.",
      "Develop an asymmetrical editorial web layout prioritizing architectural photography.",
      "Provide an effortless reading experience across desktop and mobile devices."
    ],
    strategy: "Subtle neutral palette echoing concrete and natural timber, combined with spacious typography and quiet, deliberate page transitions.",
    deliverables: [
      "Bespoke Monogram & Typography Guidelines",
      "Monograph Book Layout & Print Guidelines",
      "Responsive Portfolio Website Design",
      "Interactive Project Index & Filter System"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "vesper-wealth",
    title: "Vesper Wealth Management",
    category: "Creative Direction & Digital Platform",
    serviceSlug: "creative-design",
    statusBadge: "Concept Exploration",
    year: "2024",
    client: "Vesper Capital [Concept Study]",
    industry: "Private Wealth & Alternative Assets",
    summary: "Reinventing private wealth communications with calm editorial elegance, clear visual disclosures, and an intuitive client onboarding experience.",
    challenge: "High-net-worth clients demand clarity, security, and understated discretion rather than flashy financial dashboards or generic corporate stock photos.",
    objectives: [
      "Establish a modern luxury visual language for private client reports.",
      "Design an uncluttered onboarding flow for new family offices.",
      "Ensure total compliance and accessibility across digital communications."
    ],
    strategy: "Deep charcoal tones, refined serif editorial headlines, and clear visual summaries that respect the principal's time and discernment.",
    deliverables: [
      "Brand Expression & Editorial Guidelines",
      "Quarterly Client Report Design Templates",
      "Investor Portal UI & Frictionless Onboarding UX",
      "Executive Pitch Deck Master System"
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
  }
];

/**
 * Insights Articles
 * Real, fact-checked, high-utility guidance without fluff or fake statistics.
 */
export const INSIGHTS_ARTICLES = [
  {
    slug: "what-makes-a-brand-identity-consistent",
    title: "What Makes a Brand Identity Consistent?",
    summary: "Consistency isn’t about repeating your logo everywhere. It’s about building a recognisable system of typography, color, spacing, and tone that customers intuitively trust.",
    readTime: "4 min read",
    category: "Branding",
    date: "October 2026",
    content: [
      {
        heading: "Beyond the Logo Stamp",
        text: "A common misconception among early-stage businesses is that brand consistency simply means placing your logo on every corner of every document. In practice, mature brands can often be identified without showing their logo at all. Consistency stems from a cohesive sensory ecosystem: the rhythm of your typography, the restraint of your color palette, the intentionality of whitespace, and the voice of your written copy."
      },
      {
        heading: "The Anchor of Typography",
        text: "Typography carries emotional weight before a visitor even reads the words. Using a consistent headline typeface paired with a functional, legible body font across your website, pitch decks, and invoices creates an immediate subconscious feeling of established professionalism. When font choices fluctuate between platforms, customers register uncertainty."
      },
      {
        heading: "A Guardrail System, Not a Straitjacket",
        text: "Effective brand guidelines provide clear rules for core elements—primary color hex codes, minimum spacing, photo treatment—while leaving enough creative room for marketing teams to design tailored campaigns. Focus on mastering three elements first: a locked-in typographic scale, a defined primary/neutral palette, and a clear tone of voice."
      }
    ]
  },
  {
    slug: "what-should-a-startup-include-in-its-first-website",
    title: "What Should a Startup Include in Its First Website?",
    summary: "First websites don't need twenty pages. They need absolute clarity on the problem you solve, who you serve, and how interested visitors can take the next step.",
    readTime: "5 min read",
    category: "Web Design",
    date: "October 2026",
    content: [
      {
        heading: "The Power of Single-Minded Focus",
        text: "Startups often make the mistake of attempting to say everything at once. In reality, a prospective client or investor gives your homepage fewer than ten seconds to answer three core questions: What do you do? Who is it for? And why does it matter to me right now?"
      },
      {
        heading: "The Essential Five-Section Structure",
        text: "For most early-stage businesses, a high-converting first website requires five primary elements: a clear above-the-fold value proposition with a primary call to action, an explanation of the core problem and your solution, an overview of your primary services or product features, proof of capability or concept work, and a simple, frictionless inquiry form."
      },
      {
        heading: "Speed and Mobile Ergonomics",
        text: "More than half of your visitors will view your site on a mobile device during commutes or between meetings. Ensure your layout loads in under two seconds, buttons are easy to tap, and the contact method doesn't require filling out fifteen mandatory fields."
      }
    ]
  },
  {
    slug: "when-is-it-time-to-refresh-your-business-website",
    title: "When Is It Time to Refresh Your Business Website?",
    summary: "Recognising the key operational signals that your existing website is holding back business growth, credibility, or conversion rates.",
    readTime: "4 min read",
    category: "Strategy",
    date: "October 2026",
    content: [
      {
        heading: "The Business Has Outgrown the Site",
        text: "The most common reason for a redesign isn’t aesthetic boredom—it is strategic misalignment. If your company now targets larger clients, offers higher-tier services, or has pivoted its core product, an old website acts as a bottleneck, anchoring your perceived value to your past rather than your future."
      },
      {
        heading: "Friction in Customer Conversion",
        text: "If you receive feedback that potential clients cannot easily understand what you offer, or if your bounce rate on mobile devices is persistently high, you have an architectural issue. Modern websites should provide clear, low-friction pathways to start a conversation or request a quote."
      },
      {
        heading: "Technical Debt and Maintenance Woes",
        text: "Sites built on outdated page-builders often become sluggish, vulnerable to security issues, and difficult for internal teams to update. Moving to modern edge hosting (like Vite on Cloudflare Pages) ensures instant load times, zero maintenance headaches, and long-term durability."
      }
    ]
  },
  {
    slug: "how-to-prepare-for-a-branding-project",
    title: "How to Prepare for a Branding Project",
    summary: "Five practical steps business owners can take before engaging a creative studio to maximize project momentum and creative clarity.",
    readTime: "4 min read",
    category: "Branding",
    date: "October 2026",
    content: [
      {
        heading: "Clarify Your Business Objectives First",
        text: "Before thinking about logos or color palettes, define the business outcomes you want this branding effort to unlock. Are you looking to enter a new market, command premium pricing, or differentiate from a crowded field of lookalike competitors?"
      },
      {
        heading: "Audit What Is and Isn't Working",
        text: "Collect your existing touchpoints—current decks, business cards, social media profiles—and identify what still resonates with you and what feels outdated. Note recurring questions or misunderstandings that prospective clients frequently have."
      },
      {
        heading: "Identify Decision Makers Early",
        text: "Branding projects flourish when feedback is consolidated. Ensure all key internal stakeholders who have final approval are aligned on project goals and present for key milestone presentations."
      }
    ]
  },
  {
    slug: "website-design-decisions-that-improve-user-experience",
    title: "Website Design Decisions That Improve User Experience",
    summary: "Subtle, intentional design choices that reduce cognitive load, improve accessibility, and make visiting your website a pleasure.",
    readTime: "5 min read",
    category: "Web Design",
    date: "October 2026",
    content: [
      {
        heading: "Generous Line Heights and Typographic Contrast",
        text: "Legibility is the foundation of user trust. Setting body copy with comfortable line heights (150%–170%) and maintaining high contrast against the background ensures fatigue-free reading across all screen sizes and ambient lighting conditions."
      },
      {
        heading: "Predictable Navigation Patterns",
        text: "Creativity belongs in your brand storytelling, not in obscuring standard navigation menus. Users expect logos to link to Home, menus to sit at the top, and contact details to be accessible within one click. Don't make visitors guess where things are."
      },
      {
        heading: "Meaningful Micro-Interactions",
        text: "Subtle hover states on links, smooth accordion reveals for FAQs, and clear loading spinners on form submissions provide reassuring visual feedback that the website is responsive, active, and well-built."
      }
    ]
  },
  {
    slug: "brand-guidelines-what-every-business-should-know",
    title: "Brand Guidelines: What Every Business Should Know",
    summary: "Why a living brand book is your most valuable asset when working with developers, marketing agencies, and internal team members.",
    readTime: "4 min read",
    category: "Branding",
    date: "October 2026",
    content: [
      {
        heading: "The True Purpose of Brand Guidelines",
        text: "A brand guideline document is not just a PDF to store on a shared drive. It is an operational manual that protects your brand investment. It empowers any external freelancer, web developer, or new employee to produce on-brand work without needing constant supervision."
      },
      {
        heading: "What a Useful Brand Guide Contains",
        text: "At minimum, your brand manual should document logo clear space and misuse rules, the complete color system with digital and print values, primary and secondary font pairings with size scales, photo art direction principles, and sample layout grids."
      },
      {
        heading: "Keep It Accessible and Living",
        text: "As your company grows and adopts new digital channels, your brand guide should evolve. Centralize your assets and guidelines in accessible cloud workrooms so your team always uses the latest, approved files."
      }
    ]
  }
];

/**
 * Standard Process Framework (Homepage & Process)
 */
export const STUDIO_PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Understand your business, audience and objectives.",
    desc: "We begin with focused questions and deep listening to uncover what makes your business unique, who your ideal customers are, and the exact goals your brand or website must achieve."
  },
  {
    step: "02",
    name: "Define",
    title: "Establish the direction, priorities and creative strategy.",
    desc: "We synthesize discovery insights into a clear creative thesis, establishing visual moodboards, site architecture, and milestones before drafting a single final asset."
  },
  {
    step: "03",
    name: "Create",
    title: "Develop, refine and bring the right ideas to life.",
    desc: "We craft your visual identity or digital interface with meticulous attention to typography, proportion, layout, and responsive ergonomics, refining with your collaborative feedback."
  },
  {
    step: "04",
    name: "Deliver",
    title: "Test, polish and prepare your work for launch.",
    desc: "We stress-test performance, cross-browser compatibility, form submissions, and accessibility before launching your platform on Cloudflare Pages global edge network."
  }
];

/**
 * SEO Metadata Mapping per Route
 */
export const SEO_METADATA = {
  "/": {
    title: "The Velora Studios | Branding & Web Design",
    description: "Build a distinctive brand and a purposeful online presence with The Velora Studios. Explore branding, web design and creative services."
  },
  "/about": {
    title: "About The Velora Studios | Our Creative Approach",
    description: "Discover the philosophy behind The Velora Studios and our approach to branding, website design and creative work."
  },
  "/services": {
    title: "Branding, Web Design & Creative Services | Velora",
    description: "Explore branding, website design and creative services for startups and established businesses with The Velora Studios."
  },
  "/services/branding": {
    title: "Brand Identity & Branding Services | Velora Studios",
    description: "Create a cohesive brand identity with thoughtful visual design and a consistent brand system tailored to your business."
  },
  "/services/web-design": {
    title: "Website Design & Development | Velora Studios",
    description: "Build a responsive, user-focused website that communicates your value and creates a better experience for your customers."
  },
  "/services/creative-design": {
    title: "Creative Design Services | Velora Studios",
    description: "Develop distinctive creative assets and a consistent visual language for your brand and digital communications."
  },
  "/work": {
    title: "Creative Portfolio & Case Studies | Velora Studios",
    description: "Explore selected branding, web design and creative projects from The Velora Studios, including project approaches and deliverables."
  },
  "/insights": {
    title: "Branding & Web Design Insights | Velora Studios",
    description: "Explore practical insights on branding, website design, user experience and creative strategy for businesses."
  },
  "/contact": {
    title: "Contact The Velora Studios | Start a Project",
    description: "Have a branding, website or creative project in mind? Contact The Velora Studios by email, WhatsApp or project enquiry form."
  },
  "/privacy": {
    title: "Privacy Policy | The Velora Studios",
    description: "Learn how The Velora Studios collects, uses and protects personal information through its website and enquiry services."
  },
  "/terms": {
    title: "Website Terms | The Velora Studios",
    description: "Review the applicable terms for using The Velora Studios website and its services."
  }
};
