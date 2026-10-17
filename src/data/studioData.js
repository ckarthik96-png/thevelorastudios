/**
 * The Velora Studios — Central Configuration & Content Source
 * Official Video Production, Advertising, Motion Graphics & AI Agency
 */

export const STUDIO_CONFIG = {
  name: "The Velora Studios",
  wordmark: "THE VELORA STUDIOS",
  tagline: "Your vision. Made unforgettable.",
  heroIntro: "VIDEO PRODUCTION · ADVERTISING · AI VISUALS",
  heroHeadline: "Your vision. Made unforgettable.",
  heroDescription: "We create videos that bring brands, products, events, and stories to life. From cinematic advertising and motion graphics to social media content and AI-powered films, The Velora Studios takes your project from the first idea to the final frame.",
  heroLocations: "Serving clients in Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad.",
  baseLocation: "Based in Bangalore. Serving clients in India and internationally.",
  clientMarkets: ["Dubai", "Saudi Arabia", "Canada", "Bangalore", "Hyderabad"],
  domain: "thevelorastudios.com",
  canonicalUrl: "https://thevelorastudios.com",
  showreelUrl: "https://cdn.coverr.co/videos/coverr-drone-shot-of-a-cyberpunk-city-at-night-5210/1080p.mp4",
  showreelPoster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",

  // Contact Information
  email: "hello@thevelorastudios.com",
  displayEmail: "hello@thevelorastudios.com",
  phone: "+91 74834 04094",
  displayPhone: "+91 74834 04094",
  phoneUrl: "tel:+917483404094",
  whatsappNumber: "+91 74834 04094",
  displayWhatsapp: "+91 74834 04094",
  whatsappUrl: "https://wa.me/917483404094",
  bookingUrl: "https://cal.com/thevelorastudios",
  bookingLabel: "Schedule a Project Call",

  socials: {
    instagram: "https://instagram.com/thevelorastudios",
    x: "https://x.com/velorastudios",
    linkedin: "https://linkedin.com/company/thevelorastudios",
    youtube: "https://youtube.com/@thevelorastudios",
    vimeo: "https://vimeo.com/thevelorastudios"
  }
};

/**
 * Highlight Marquee Strip
 */
export const HIGHLIGHT_STRIP = [
  "Creative Concepts",
  "Video Production",
  "Motion Graphics",
  "AI Videos",
  "Post-Production"
];

/**
 * About The Studio Copy
 */
export const ABOUT_STUDIO = {
  heading: "Every great video starts with a story worth telling.",
  p1: "The Velora Studios is a fast-growing advertising and video production agency based in Bangalore, working with clients across India and international markets.",
  p2: "We bring together creative thinking, filmmaking, animation, and AI production to create content for brands, businesses, event organisers, and storytellers. Whether you need a product launch film, a regular stream of social media content, or a cinematic short film, we shape each project around your audience and purpose.",
  p3: "Our work covers concept development, scripting, production, editing, motion graphics, visual effects, and final delivery—with careful attention to every frame.",
  statement: "One creative partner. From idea to final frame."
};

/**
 * Our Services (8 Specific Offerings)
 */
export const SERVICES_DATA = [
  {
    number: "01",
    id: "ads-brand-films",
    title: "Advertising & Brand Films",
    description: "Turn your brand message into a compelling visual story. We create commercials, campaign videos, corporate films, and promotional content built around your audience and objectives.",
    includes: [
      "Brand films",
      "Digital ads",
      "Corporate videos",
      "Campaign films",
      "Promotional videos",
      "Launch teasers"
    ]
  },
  {
    number: "02",
    id: "motion-graphics",
    title: "Motion Graphics & Animation",
    description: "Make information clear, engaging, and visually memorable. We use animated typography, graphics, and visual storytelling to explain ideas and add energy to your content.",
    includes: [
      "2D and 3D animation",
      "Logo animation",
      "Kinetic typography",
      "Infographics",
      "Title sequences",
      "Animated presentations"
    ]
  },
  {
    number: "03",
    id: "social-media",
    title: "Social Media Content",
    description: "Keep your brand active with consistent, platform-ready creative. We produce reels, short videos, animated posts, and campaign content for your ongoing social media needs.",
    includes: [
      "Reels and Shorts",
      "Regular social media posts",
      "Animated creatives",
      "Promotional edits",
      "Content series",
      "Monthly content packages"
    ]
  },
  {
    number: "04",
    id: "ai-videos",
    title: "AI Videos & AI Product Films",
    description: "Explore new creative possibilities with AI-powered production. We combine generated visuals with editing, compositing, and art direction to create distinctive films for brands and products.",
    includes: [
      "AI advertisements",
      "AI product videos",
      "Cinematic AI scenes",
      "Virtual environments",
      "Concept films",
      "AI-assisted storytelling"
    ]
  },
  {
    number: "05",
    id: "product-explainers",
    title: "Product Videos & Explainers",
    description: "Show what your product does, how it works, and why it matters. We create product films and explainers that make features easier to understand through clear scripts and purposeful visuals.",
    includes: [
      "Product launch films",
      "Product demonstrations",
      "Explainer videos",
      "Technical animations",
      "3D product visualisation",
      "Website and app walkthroughs"
    ]
  },
  {
    number: "06",
    id: "event-production",
    title: "Event Production & Coverage",
    description: "Support your event from planning to the final recap. We offer event organisation and coordination alongside video coverage, screen content, and promotional films.",
    includes: [
      "Event organisation",
      "Event coverage",
      "Highlight films",
      "Aftermovies",
      "Speaker and sponsor videos",
      "LED screen visuals",
      "Event teasers"
    ]
  },
  {
    number: "07",
    id: "green-screen-vfx",
    title: "Green Screen & Visual Effects",
    description: "Bring presenters, performances, and imagined environments together. We handle green screen production and compositing for corporate communication, advertising, and creative storytelling.",
    includes: [
      "Presenter videos",
      "Green screen shoots",
      "Chroma keying",
      "Background replacement",
      "Compositing",
      "Visual effects"
    ]
  },
  {
    number: "08",
    id: "films-post-production",
    title: "Movies, Short Films & Post-Production",
    description: "Give your story a cinematic finish. We work on films, short films, and narrative projects, with editing and post-production shaped around pacing, performance, and emotion.",
    includes: [
      "Film production",
      "Short films",
      "Trailers",
      "Video editing",
      "Colour grading",
      "Sound design",
      "Titles and credits"
    ]
  }
];

/**
 * Portfolio Filters
 */
export const WORK_FILTERS = [
  "All Work",
  "Ads & Brand Films",
  "AI Videos",
  "Product Films",
  "Motion Graphics",
  "Events",
  "Social Media",
  "Short Films"
];

/**
 * Portfolio Projects
 */
export const PORTFOLIO_PROJECTS = [
  {
    id: "lumina-brand-film",
    title: "The Solstice Odyssey",
    client: "Lumina Vision",
    category: "Ads & Brand Films",
    filterKey: "Ads & Brand Films",
    year: "2026",
    duration: "02:14",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-macro-shot-of-a-luxury-watch-5163/1080p.mp4",
    videoType: "video/mp4",
    description: "Cinematic commercial blending anamorphic optics with evocative ambient soundscapes to introduce a luxury timepiece brand.",
    scope: ["Concept & Scripting", "Directing & Filming", "Color Grading", "Sound Design"],
    location: "Dubai & Bangalore"
  },
  {
    id: "aurora-ai-cosmos",
    title: "Echoes of Tomorrow",
    client: "Nebula AI Labs",
    category: "AI Videos",
    filterKey: "AI Videos",
    year: "2026",
    duration: "01:45",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-futuristic-tunnel-with-neon-lights-5612/1080p.mp4",
    videoType: "video/mp4",
    description: "Exploration of virtual surrealist landscapes and hyper-realistic synthetic product interactions created with generative AI pipelines.",
    scope: ["Generative Visuals", "Art Direction", "Compositing", "Editorial Cut"],
    location: "Global Remote"
  },
  {
    id: "apex-product-film",
    title: "Titanium Precision",
    client: "AeroForm Audio",
    category: "Product Films",
    filterKey: "Product Films",
    year: "2026",
    duration: "01:20",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-headphones-on-a-stand-3674/1080p.mp4",
    videoType: "video/mp4",
    description: "Hyper-detailed 3D product showcase highlighting acoustic engineering, magnetic driver mechanics, and aircraft-grade aluminum.",
    scope: ["3D Product Renders", "Kinetic Macro Shots", "Scriptwriting", "Voiceover Direction"],
    location: "Canada"
  },
  {
    id: "strata-kinetic-identity",
    title: "Strata Flow Motion System",
    client: "Strata Financial Core",
    category: "Motion Graphics",
    filterKey: "Motion Graphics",
    year: "2026",
    duration: "00:58",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-abstract-flowing-lines-5374/1080p.mp4",
    videoType: "video/mp4",
    description: "Dynamic kinetic typography and 2D/3D interface animation explaining fintech data infrastructure and microsecond transaction security.",
    scope: ["2D/3D Animation", "Kinetic Typography", "Sound Effects", "Lottie Assets"],
    location: "Bangalore"
  },
  {
    id: "synapse-global-summit",
    title: "Synapse Global Summit 2026",
    client: "TechVentures Global",
    category: "Events",
    filterKey: "Events",
    year: "2026",
    duration: "03:10",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-people-at-a-concert-with-stage-lights-5403/1080p.mp4",
    videoType: "video/mp4",
    description: "Multi-camera live festival coverage, energetic attendee highlight reels, and massive 8K LED stage backdrop visual systems.",
    scope: ["Event Coordination", "Multi-cam Filming", "Same-Day Teaser", "Aftermovie"],
    location: "Hyderabad"
  },
  {
    id: "velvet-glow-social",
    title: "Velvet Season Campaign",
    client: "Maison Skincare",
    category: "Social Media",
    filterKey: "Social Media",
    year: "2026",
    duration: "00:30",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-woman-applying-skincare-product-5179/1080p.mp4",
    videoType: "video/mp4",
    description: "High-cadence vertical Reels and Shorts optimized for Instagram and TikTok with snappy pacing, textural macro closeups, and hook formulas.",
    scope: ["Vertical 9:16 Video", "Social Strategy", "Motion Captions", "Monthly Content"],
    location: "Dubai"
  },
  {
    id: "the-last-artisan",
    title: "The Glassmaker's Dawn",
    client: "Independent Film Commission",
    category: "Short Films",
    filterKey: "Short Films",
    year: "2026",
    duration: "14:20",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-potter-shaping-a-clay-vase-2615/1080p.mp4",
    videoType: "video/mp4",
    description: "An emotional narrative short exploring artisanal heritage against modern industrialization, screened at regional film exhibitions.",
    scope: ["Narrative Direction", "Cinematography", "Full Color Grade", "5.1 Surround Mix"],
    location: "Bangalore"
  },
  {
    id: "cyber-pulse-commercial",
    title: "Speed of Light",
    client: "HyperNet Broadband",
    category: "Ads & Brand Films",
    filterKey: "Ads & Brand Films",
    year: "2026",
    duration: "01:00",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://cdn.coverr.co/videos/coverr-cyberpunk-neon-city-5211/1080p.mp4",
    videoType: "video/mp4",
    description: "Fast-paced TV commercial combining green screen live performers with stylized holographic cyberpunk VFX composites.",
    scope: ["Green Screen Shoot", "Chroma Keying", "CGI Compositing", "Broadcast Mastering"],
    location: "Bangalore & Dubai"
  }
];

/**
 * Why Velora (4 Pillars)
 */
export const WHY_VELORA_PILLARS = [
  {
    number: "01",
    title: "One team from start to finish",
    description: "Keep your concept, production, and post-production connected through one creative partner."
  },
  {
    number: "02",
    title: "The right format for your message",
    description: "We shape the approach around your goals—whether that calls for live action, animation, AI visuals, or a combination."
  },
  {
    number: "03",
    title: "Content for every screen",
    description: "We prepare videos for social platforms, websites, presentations, campaigns, and event screens."
  },
  {
    number: "04",
    title: "Collaboration across locations",
    description: "We work with clients in Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad through clear briefs, shared references, and structured feedback."
  }
];

/**
 * Our Process (5 Steps)
 */
export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Understand",
    description: "We discuss your goals, audience, message, references, budget, and delivery requirements."
  },
  {
    step: "02",
    name: "Develop",
    description: "We build the concept, script, visual direction, and production plan to suit your project."
  },
  {
    step: "03",
    name: "Create",
    description: "We bring the approved idea to life through filming, animation, AI production, editing, or a combination of techniques."
  },
  {
    step: "04",
    name: "Refine",
    description: "We review the work with you and refine the visuals, pacing, sound, and details through consolidated feedback."
  },
  {
    step: "05",
    name: "Deliver",
    description: "We prepare the approved video in the agreed formats, ready for your platforms and screens."
  }
];

/**
 * Frequently Asked Questions (8 Questions)
 */
export const FAQS_DATA = [
  {
    q: "What types of videos do you create?",
    a: "We create advertisements, brand films, corporate videos, motion graphics, social media content, event videos, green screen productions, product explainers, AI videos, movies, and short films."
  },
  {
    q: "Can you manage the entire production?",
    a: "Yes. We can take a project from concept and scripting through production, editing, animation, and final delivery. We can also support individual stages if you already have a script or footage."
  },
  {
    q: "Do you offer regular social media content?",
    a: "Yes. We offer ongoing content packages for brands that need regular posts, reels, animated creatives, and promotional videos. The scope is planned around your content calendar."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients in Dubai, Saudi Arabia, and Canada, alongside clients in Bangalore and Hyderabad. We coordinate briefs, reviews, and delivery remotely where appropriate."
  },
  {
    q: "Can you create AI product videos?",
    a: "Yes. We create AI-powered product films and promotional content using your product references and brand requirements. The production approach depends on the level of visual accuracy and detail your project needs."
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on the length, complexity, production method, and number of deliverables. We agree on a schedule after reviewing your brief."
  },
  {
    q: "How much does a video cost?",
    a: "Pricing depends on the creative scope, filming requirements, animation, AI production, post-production, and delivery formats. Share your brief for a tailored quote."
  },
  {
    q: "Can you edit footage we already have?",
    a: "Yes. We can work with existing footage and add editing, colour grading, motion graphics, titles, sound design, and platform-specific versions."
  }
];

/**
 * SEO Route Metadata
 */
export const SEO_METADATA = {
  "/": {
    title: "The Velora Studios | Video Production & AI Creative Agency",
    description: "Bangalore video production agency creating ads, motion graphics, AI videos, product explainers and event films for clients in Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad."
  },
  "/about": {
    title: "About The Velora Studios | Storytelling & Video Agency",
    description: "Learn about The Velora Studios, an advertising and video production agency in Bangalore serving clients across Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad."
  },
  "/services": {
    title: "Video Production & Creative Services | The Velora Studios",
    description: "Explore our 8 video production disciplines including commercials, motion graphics, AI product films, and event coverage."
  },
  "/work": {
    title: "Selected Work & Portfolio | The Velora Studios",
    description: "See the stories we bring to life across commercials, AI videos, product films, social media, and narrative shorts."
  },
  "/process": {
    title: "Our Process | The Velora Studios",
    description: "A clear 5-step path from brief to final frame: Understand, Develop, Create, Refine, and Deliver."
  },
  "/contact": {
    title: "Start a Project | Contact The Velora Studios",
    description: "Plan your next campaign, commercial or video with The Velora Studios. Based in Bangalore, serving clients across Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad."
  },
  "/privacy": {
    title: "Privacy Policy | The Velora Studios",
    description: "Privacy and data protection policies for The Velora Studios."
  },
  "/terms": {
    title: "Terms of Service | The Velora Studios",
    description: "Terms and conditions for The Velora Studios."
  }
};


export const DETAILED_SERVICES = {
  // --- 8 Video Production & Creative Disciplines ---
  "ads-brand-films": {
    slug: "ads-brand-films",
    badge: "01 / ADVERTISING & BRAND FILMS",
    navTitle: "Advertising & Brand Films",
    title: "Advertising & Brand Films",
    heroHeadline: "Turn your brand message into a compelling visual story.",
    heroSummary: "We create commercials, campaign videos, corporate films, and promotional content built around your audience and commercial objectives. From initial script and storyboards to high-end cinematography and final color grading.",
    clientProblem: "Generic corporate videos and template advertisements often fail to capture attention or evoke emotion, getting skipped within the first 3 seconds and leaving zero brand recall.",
    idealClient: "Consumer brands, B2B enterprises, tech leaders, and agencies looking for broadcast-quality commercials and flagship brand stories that convert.",
    deliverables: [
      "Creative concept development, scripting & narrative treatment",
      "Storyboard design, moodboards & shot listing",
      "Full on-location & studio cinematic filming (4K/6K cinema rigs)",
      "Professional casting, voiceover artist curation & location scouting",
      "High-end editorial cut, sound design & licensed soundtrack scoring",
      "DaVinci Resolve color grading & multi-format delivery (16:9, 9:16, 1:1, 4:5)"
    ],
    process: [
      { step: "01", name: "Concept & Script", desc: "Uncovering your core message, audience drivers, and drafting memorable commercial scripts." },
      { step: "02", name: "Pre-Production", desc: "Shot lists, storyboards, location scouting, casting, crew and equipment preparation." },
      { step: "03", name: "Production", desc: "Directing and filming on cinema-grade cameras, lighting, and audio capture." },
      { step: "04", name: "Post & Mastering", desc: "Editorial assembly, sound mix, precision color grade, and multi-platform exports." }
    ],
    faqs: [
      {
        q: "Can you handle casting and voiceovers?",
        a: "Yes. We source and manage talent, voiceover artists across multiple languages and accents, and handle all licensing."
      },
      {
        q: "What turnaround time should we expect for a brand film?",
        a: "A broadcast commercial or brand film typically takes 2 to 4 weeks from approved script to final master delivery."
      },
      {
        q: "Do you deliver platform-specific cuts?",
        a: "Yes. We deliver master 16:9 widescreen cuts along with 9:16 vertical cuts for Instagram Reels and TikTok, and 15s/30s/60s cutdowns."
      }
    ]
  },
  "motion-graphics": {
    slug: "motion-graphics",
    badge: "02 / MOTION DESIGN & ANIMATION",
    navTitle: "Motion Graphics & Animation",
    title: "Motion Graphics & 2D/3D Animation",
    heroHeadline: "Make complex ideas clear, engaging, and visually unforgettable.",
    heroSummary: "Animated typography, 2D/3D visual effects, and kinetic storytelling designed to explain features, energize campaigns, and simplify complex data.",
    clientProblem: "Abstract products, software interfaces, or complex services are hard to film live, leading to confusing presentations that lose customer interest.",
    idealClient: "SaaS companies, fintechs, modern brands, and educators wanting to explain products or energize brand touchpoints.",
    deliverables: [
      "2D vector animation & bespoke character illustration",
      "3D motion design & realistic product modeling",
      "Kinetic typography & dynamic title sequences",
      "Logo animation & digital brand motion systems",
      "Infographics & animated data visualization",
      "Lottie JSON assets for web apps & mobile interfaces"
    ],
    process: [
      { step: "01", name: "Style Frames", desc: "Developing custom design illustrations and color palettes before animation." },
      { step: "02", name: "Storyboarding", desc: "Mapping each scene's transitions, pacing, and visual choreography." },
      { step: "03", name: "Animation", desc: "Choreographing motion in After Effects, Cinema 4D, and Blender." },
      { step: "04", name: "Sound & Delivery", desc: "Layering custom foley sound design, voiceover sync, and master renders." }
    ],
    faqs: [
      {
        q: "Do you provide web-ready animation formats like Lottie?",
        a: "Yes. We export lightweight vector Lottie JSON and WebM files for fast website integration alongside standard MP4/ProRes."
      },
      {
        q: "Can you animate our existing logo and brand elements?",
        a: "Yes. We take your vector logo files and create cohesive motion idents, intros, and lower-thirds."
      }
    ]
  },
  "social-media": {
    slug: "social-media",
    badge: "03 / SOCIAL MEDIA CONTENT",
    navTitle: "Social Media Content",
    title: "Social Media Video & Retainer Packages",
    heroHeadline: "Keep your brand active with high-converting, platform-ready creative.",
    heroSummary: "High-tempo Reels, TikToks, YouTube Shorts, and animated social posts engineered to capture feeds, build engagement, and drive steady audience growth.",
    clientProblem: "Consistent video creation is time-consuming and expensive to manage in-house, resulting in sporadic posting, stale feeds, and dropping algorithmic reach.",
    idealClient: "Direct-to-consumer brands, lifestyle companies, influencers, and businesses needing a dependable monthly cadence of polished vertical content.",
    deliverables: [
      "Monthly vertical video packages (8, 16, or 30 videos/month)",
      "Trending audio research & high-retention hook formulas",
      "Dynamic on-screen subtitles, stickers & motion graphics",
      "Product unboxings, tutorials & behind-the-scenes edits",
      "Repurposed long-form podcasts/webinars into bite-sized clips",
      "Performance-optimized thumbnail designs & caption drafts"
    ],
    process: [
      { step: "01", name: "Content Strategy", desc: "Aligning with your content calendar, monthly promotions, and audience pillars." },
      { step: "02", name: "Production or Sourcing", desc: "Filming batch content shoots or receiving your raw phone footage." },
      { step: "03", name: "Fast-Paced Editing", desc: "Adding hooks, rapid cuts, kinetic text overlays, and sound cues." },
      { step: "04", name: "Scheduled Delivery", desc: "Delivering weekly batches ready to schedule with zero friction." }
    ],
    faqs: [
      {
        q: "How do monthly retainers work?",
        a: "We agree on a set volume of videos per month (e.g. 12 Reels), establish a recurring shoot or file transfer schedule, and deliver on an agreed weekly calendar."
      },
      {
        q: "Can you edit raw smartphone footage our team records?",
        a: "Absolutely. Many clients film raw behind-the-scenes or founder talks on their phones, and our editors turn them into viral-ready pieces."
      }
    ]
  },
  "ai-videos": {
    slug: "ai-videos",
    badge: "04 / AI VIDEOS & VISUALS",
    navTitle: "AI Videos & AI Product Films",
    title: "AI Videos & AI Product Films",
    heroHeadline: "Explore bold creative possibilities with AI-powered video production.",
    heroSummary: "Merging generative AI imagery, neural video generation, and precision art direction to produce surreal environments, concept films, and product visuals at unprecedented velocity.",
    clientProblem: "Traditional filming of impossible locations, sci-fi concepts, or dozens of product variants can cost tens of thousands of dollars and take months of studio prep.",
    idealClient: "Visionary startups, luxury brands, agencies, and creators seeking avant-garde visuals, futuristic concepts, or rapid high-concept commercial iterations.",
    deliverables: [
      "Generative AI world-building & cinematic scenes",
      "Synthetic product placement in photorealistic environments",
      "AI-assisted storytelling, animatics & storyboard generation",
      "Neural upscaling to 4K UHD with temporal stability",
      "Hybrid workflows combining real live-action talent with AI backgrounds",
      "Custom AI sound effects & atmospheric synthesized scoring"
    ],
    process: [
      { step: "01", name: "Art Direction", desc: "Designing bespoke prompt architectures, LoRAs, and visual references." },
      { step: "02", name: "Generative Pipeline", desc: "Generating high-fidelity frames and video interpolations using state-of-the-art diffusion models." },
      { step: "03", name: "Compositing", desc: "Refining consistency, eradicating artifacts, and compositing with motion graphics." },
      { step: "04", name: "Cinematic Grade", desc: "Color balancing, cinematic grain emulation, and audio mastering." }
    ],
    faqs: [
      {
        q: "Are AI videos commercially cleared?",
        a: "Yes. We use licensed generative platforms and workflows that permit full commercial and advertising usage rights."
      },
      {
        q: "How realistic do AI product videos look?",
        a: "Our hybrid approach blends genuine 3D/CAD product models with AI-generated photorealistic environments, ensuring your product remains 100% faithful."
      }
    ]
  },
  "product-explainers": {
    slug: "product-explainers",
    badge: "05 / PRODUCT & EXPLAINER FILMS",
    navTitle: "Product Videos & Explainers",
    title: "Product Videos & Technical Explainers",
    heroHeadline: "Show what your product does, how it works, and why it matters.",
    heroSummary: "Clarity converts. We create product launch films, interactive app walkthroughs, and technical 3D explainers that turn complex features into crystal-clear value propositions.",
    clientProblem: "Prospective buyers don't read long feature documentation. If they can't understand what your product solves in 60 seconds, they bounce to a competitor.",
    idealClient: "Hardware manufacturers, SaaS platforms, consumer electronics, and medical device companies launching or scaling their solutions.",
    deliverables: [
      "Product launch teaser & hero announcement films",
      "3D CAD product exploded views & feature spotlights",
      "Software UI walkthroughs & animated feature tours",
      "Customer onboarding & how-it-works video tutorials",
      "Scriptwriting focused on buyer pain points & benefits",
      "Multi-language voiceover adaptation"
    ],
    process: [
      { step: "01", name: "Technical Teardown", desc: "Understanding your product architecture, user friction points, and hero features." },
      { step: "02", name: "Script & Flow", desc: "Writing a tight, jargon-free script that highlights customer value." },
      { step: "03", name: "3D & Screen Capture", desc: "Modeling the device or animating sleek stylized UI screens." },
      { step: "04", name: "Polish & Delivery", desc: "Syncing sound effects to clicks, transitions, and product highlights." }
    ],
    faqs: [
      {
        q: "Can you work from our CAD or 3D files?",
        a: "Yes. We can import STEP, OBJ, FBX, and other CAD formats into our 3D pipeline for photo-real rendering."
      },
      {
        q: "What is the recommended length for an explainer video?",
        a: "For homepage and ad explainers, 60 to 90 seconds delivers the highest engagement and conversion."
      }
    ]
  },
  "event-production": {
    slug: "event-production",
    badge: "06 / EVENT PRODUCTION & COVERAGE",
    navTitle: "Event Production & Coverage",
    title: "Event Production, Coverage & Visuals",
    heroHeadline: "Capture the energy of your event from planning to the final recap.",
    heroSummary: "End-to-end event production support: multi-camera on-site filming, live LED backdrop visuals, same-day social teasers, and cinematic aftermovies that extend your event's lifetime value.",
    clientProblem: "Events represent major financial investments. Without dynamic video coverage, the excitement evaporates the moment attendees leave the hall.",
    idealClient: "Conference organizers, corporate summits, festival producers, brand activations, and trade show exhibitors across India, the GCC, and North America.",
    deliverables: [
      "Multi-camera 4K live event coverage & gimbal operators",
      "Cinematic recap aftermovies & highlight films",
      "Same-day social media teaser reels for real-time buzz",
      "Speaker keynotes, panel recordings & sponsor video reels",
      "Custom animated LED stage loops, intros & speaker walk-on visuals",
      "Audio recording & multi-track master mixing"
    ],
    process: [
      { step: "01", name: "Production Run-Sheet", desc: "Coordinating with event managers, AV teams, and schedule milestones." },
      { step: "02", name: "On-Site Deployment", desc: "Multi-camera crew capturing keynotes, attendee reactions, and ambient atmosphere." },
      { step: "03", name: "Rapid Turnaround", desc: "On-site editors cutting same-day reels for social distribution." },
      { step: "04", name: "Master Delivery", desc: "Full keynote archives and the flagship cinematic aftermovie." }
    ],
    faqs: [
      {
        q: "Can you provide same-day highlight reels while the event is ongoing?",
        a: "Yes. We often deploy a dedicated on-site editor who cuts 30-second teaser reels for Instagram and LinkedIn while the conference is in progress."
      },
      {
        q: "Do you travel internationally for events?",
        a: "Yes. Our crews travel to Dubai, Riyadh, Toronto, and across India for major events."
      }
    ]
  },
  "green-screen-vfx": {
    slug: "green-screen-vfx",
    badge: "07 / GREEN SCREEN & VFX",
    navTitle: "Green Screen & Visual Effects",
    title: "Green Screen Filming & Visual Effects",
    heroHeadline: "Bring presenters, performances, and imagined worlds together seamlessly.",
    heroSummary: "Studio chroma key production, background replacement, clean plate compositing, and visual effects that place talent in any environment imaginable with photographic realism.",
    clientProblem: "Shooting on multiple global locations is cost-prohibitive, and poor green screen keying results in unnatural edges, spill colors, and cheap-looking videos.",
    idealClient: "Corporate executives, training academies, broadcast commercials, and creative directors needing seamless presenter environments without travel.",
    deliverables: [
      "Studio green screen filming with teleprompter facilities",
      "Precision chroma key extraction with zero green edge spill",
      "Virtual 3D studio set design & camera tracking",
      "Background replacement with photorealistic environments",
      "Compositing, rotoscoping & wire removal",
      "VFX cleanups & digital screen replacements"
    ],
    process: [
      { step: "01", name: "Lighting & Key Setup", desc: "Diffused, even illumination calibrated for clean key extraction." },
      { step: "02", name: "Talent Filming", desc: "Directing presenters with teleprompters for confident delivery." },
      { step: "03", name: "Chroma Key & Tracking", desc: "Camera tracking and background match-moving in post." },
      { step: "04", name: "Composite & Grade", desc: "Matching subject shadows and lighting to the virtual environment." }
    ],
    faqs: [
      {
        q: "Do you have teleprompters for presenters who aren't professional actors?",
        a: "Yes. We provide high-brightness studio teleprompters and vocal coaching so any founder or team member looks natural on camera."
      },
      {
        q: "Can you match lighting to our existing office or brand color scheme?",
        a: "Yes. We pre-light the talent specifically to match the direction, color temperature, and ambiance of the virtual environment."
      }
    ]
  },
  "films-post-production": {
    slug: "films-post-production",
    badge: "08 / FILMS & POST-PRODUCTION",
    navTitle: "Movies, Shorts & Post-Production",
    title: "Movies, Short Films & Post-Production",
    heroHeadline: "Give your story a cinematic finish with craft, pacing, and emotional depth.",
    heroSummary: "Comprehensive post-production and narrative filmmaking. We handle narrative structure, pacing, DaVinci Resolve color grading, sound design, dialogue cleanup, and 5.1 surround mastering.",
    clientProblem: "Raw footage without disciplined editing and sound design feels flat. 80% of cinematic emotion lives in the soundscapes, pacing, and color palette.",
    idealClient: "Independent filmmakers, streaming producers, commercial directors, and agencies seeking high-craft editorial and post-production supervision.",
    deliverables: [
      "Full narrative offline & online video editing",
      "DaVinci Resolve ACES color grading & film emulation",
      "Cinematic sound design, foley & 5.1 surround sound mixing",
      "Dialogue isolation, noise reduction & vocal sweetening",
      "Theatrical trailers, teasers & festival cutdowns",
      "DCP theatrical mastering, broadcast QC & streaming compliance"
    ],
    process: [
      { step: "01", name: "Assembly & Rough Cut", desc: "Organizing footage, selecting best takes, and building narrative rhythm." },
      { step: "02", name: "Fine Cut & Lock", desc: "Tightening micro-edits, scene transitions, and locking the picture." },
      { step: "03", name: "Color & Audio", desc: "Color pass on calibrated reference monitors and multi-track audio mix." },
      { step: "04", name: "Master QC & Delivery", desc: "Exporting DCP, ProRes 4444, and web-ready exhibition packages." }
    ],
    faqs: [
      {
        q: "Can you work on existing footage shot by another crew?",
        a: "Yes. We frequently take raw drives shot worldwide and take charge of the entire post-production pipeline."
      },
      {
        q: "What software tools do you use for post-production?",
        a: "We work in DaVinci Resolve Studio, Premiere Pro, After Effects, Pro Tools, and Blender for our offline, color, audio, and visual effects workflows."
      }
    ]
  },

  // --- Retained Service Aliases for Backwards Compatibility ---
  branding: {
    slug: "branding",
    badge: "BRAND IDENTITY & STRATEGY",
    navTitle: "Brand Strategy & Identity",
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
    badge: "DIGITAL EXPERIENCE & WEB",
    navTitle: "Website Design & Development",
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
    badge: "VIDEO, MOTION & CREATIVE PRODUCTION",
    navTitle: "Video & Creative Production",
    title: "Video Production, Motion & Creative Direction",
    heroHeadline: "Films with feeling. Creative work with purpose.",
    heroSummary: "We turn your ideas into stories people remember. Video, motion and AI — brought together with craft. Develop a consistent visual language across cinematic brand films, digital campaigns, and animated experiences.",
    clientProblem: "Without captivating video, motion, and disciplined creative direction, brand campaigns quickly become static and forgettable, failing to connect with audiences on modern platforms.",
    idealClient: "Ambitious startups and established businesses seeking evocative brand films, motion explainers, and high-impact digital campaign assets.",
    deliverables: [
      "Brand films, product stories & event video production",
      "Motion design, kinetic typography & explainer animations",
      "AI-assisted visual concepting & cinematic storyboard exploration",
      "Post-production, precision color grading & platform-ready social edits",
      "Campaign visual concepts & thematic art direction",
      "Presentation master decks & visual content systems"
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
 * Studio Core Values & Selected Case Studies
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
