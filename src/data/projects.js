export const projects = [
  
  {
    id: "ecommerce-live-demo",
    title: "Veloura Shopping",
    category: "Live Demo",
    stack: "React.js",
    tags: ["Live Demo", "E-commerce", "Shopping Cart", "React.js"],
    colSpan: "md:col-span-7",
    imageHeight: "h-[300px] md:h-[500px]",
    image: "/images/veloura-dresses.jpg",
    alt: "Live Veloura fashion and dress shopping interface",
    shortDescription: "Experience our high-performance e-commerce architecture firsthand. A fully interactive storefront with functional cart, checkout flow, and localized currency.",
    overview: "This live demonstration showcases our enterprise-grade Next.js commerce architecture. You can browse products, add items to your cart, and proceed through a simulated headless checkout process in real-time.",
    client: "Veloura Fashion",
    duration: "2 Weeks",
    year: "2026",
    challenge: "Demonstrating sub-second page loads and seamless cart synchronization without requiring clients to commit to a build.",
    solution: "Deployed a production-ready Next.js storefront using Mock Service Worker (MSW) to simulate real backend latency and payment processing.",
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "Stripe API (Test)"],
    results: [
      { metric: "100%", label: "Functional Flow" },
      { metric: "<100ms", label: "Cart Update Speed" },
      { metric: "Zero", label: "Page Reloads" },
      { metric: "Live", label: "Interactive Demo" }
    ],
    architecture: [
      "Client-side state management for instantaneous cart updates",
      "Simulated headless checkout integration",
      "Optimized edge-delivered product imagery"
    ],
    liveDemoUrl: "https://shoppingcart-mern-choi.onrender.com"
  },
  {
    id: "gym-live-demo",
    title: "Elite Fitness Studio",

    category: "Live Demo",
    stack: "React/Tailwind",
    tags: ["Live Demo", "Health & Fitness", "Booking System", "React"],
    colSpan: "md:col-span-5",
    imageHeight: "h-[300px] md:h-[500px]",
    image: "/images/gym-fitness.jpg",
    alt: "Live fitness studio and gym platform demo interface",
    shortDescription: "Explore our dynamic fitness platform featuring class scheduling, membership management, and trainer profiles.",
    overview: "This live demonstration allows you to experience a premium gym portal. Navigate through dynamic class schedules, interact with the membership builder, and view seamless booking workflows.",
    client: "Elite Fitness Club",
    duration: "2 Weeks",
    year: "2026",
    challenge: "Creating a high-energy, visually striking interface that handles complex scheduling data without overwhelming the user.",
    solution: "Built a lightning-fast React application with smooth framer-motion animations and a custom calendar integration for class bookings.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Date-fns", "Redux Toolkit"],
    results: [
      { metric: "100%", label: "Functional Flow" },
      { metric: "Zero", label: "Booking Friction" },
      { metric: "Real-time", label: "Schedule Sync" },
      { metric: "Live", label: "Interactive Demo" }
    ],
    architecture: [
      "Custom calendar components for class scheduling",
      "Interactive pricing and membership tier calculator",
      "Optimized media delivery for high-quality workout videos"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  },
  {
    id: "wander-travel-platform",
    title: "Wander Travel Platform",
    category: "Travel",
    stack: "React Native/Node",
    tags: ["Travel", "Mobile App", "React Native", "PostgreSQL"],
    colSpan: "md:col-span-6",
    imageHeight: "h-[300px] md:h-[500px]",
    image: "/images/wander-travel.jpg",
    alt: "Beautiful travel destination showing travel platform capability.",
    shortDescription: "A comprehensive booking and itinerary management system allowing travelers to plan multi-city trips in seconds.",
    overview: "Wander is a seamless travel planning app that aggregates flights, hotels, and local experiences into a unified, shareable itinerary.",
    client: "Wander Escapes",
    duration: "2 Weeks",
    year: "2025",
    challenge: "Travelers were frustrated juggling 5+ different apps to book and manage a single vacation.",
    solution: "We built a unified cross-platform mobile app using React Native, integrating 15+ third-party travel APIs for real-time booking and availability.",
    technologies: ["React Native", "Node.js", "Express", "PostgreSQL", "Stripe", "Mapbox"],
    results: [
      { metric: "2M+", label: "App Downloads" },
      { metric: "4.8", label: "App Store Rating" },
      { metric: "15+", label: "API Integrations" },
      { metric: "30%", label: "Increase in Bookings" }
    ],
    architecture: [
      "Cross-platform React Native architecture",
      "Aggregator microservices for real-time pricing",
      "Interactive map-based itinerary builder",
      "Offline caching for travel documents"
    ],
    liveDemoUrl: "https://wandertravelplatform.onrender.com"
  },
  {
    id: "personal-portfolio",
    title: "Interactive 3D Portfolio",
    category: "Portfolio Website",
    stack: "React / Three.js",
    tags: ["Portfolio", "3D WebGL", "React", "GSAP"],
    colSpan: "md:col-span-6",
    imageHeight: "h-[300px] md:h-[500px]",
    image: "/images/personal-portfolio.png",
    alt: "Interactive 3D developer portfolio and modern digital experience showcase",
    shortDescription: "A high-impact interactive portfolio showcasing 3D WebGL graphics, kinetic typography, and fluid creative web experiences.",
    overview: "This live personal portfolio platform demonstrates state-of-the-art interactive creative web engineering. Featuring custom 3D WebGL canvas rendering, GSAP kinetic animations, seamless page routing, and responsive mobile architecture.",
    client: "Creative Presence",
    duration: "2 Weeks",
    year: "2026",
    challenge: "Delivering an immersive 3D interactive web experience with physics-based interactions while maintaining 60 FPS performance and rapid page load speeds across all device categories.",
    solution: "Engineered an optimized WebGL canvas using Three.js and React Three Fiber with custom GSAP scroll timelines, shader optimization, and responsive asset loading.",
    technologies: ["React.js", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS", "Vite"],
    results: [
      { metric: "60 FPS", label: "Smooth Animation" },
      { metric: "< 1s", label: "Interactive Load Time" },
      { metric: "100%", label: "Responsive 3D" },
      { metric: "Live", label: "Interactive Demo" }
    ],
    architecture: [
      "Optimized Three.js WebGL scene graph with low draw calls",
      "GSAP timeline choreography for scroll-driven animations",
      "Kinetic typography and dynamic viewport scaling",
      "Zero-dependency responsive layout design"
    ],
    liveDemoUrl: "https://personal-portfolio-8p6j.onrender.com/"
  },
  {
    id: "nexora-learning-platform",
    title: "Nexora Learning Platform",
    category: "EdTech",
    stack: "MERN Stack",
    tags: ["EdTech", "MERN Stack", "WebRTC", "Redis"],
    colSpan: "md:col-span-12",
    imageHeight: "h-[350px] md:h-[614px]",
    image: "/images/nexora.jpg",
    alt: "A clean, modern user interface for an e-learning platform displayed on a high-end monitor.",
    shortDescription: "A comprehensive, scalable e-learning ecosystem built to support over 100,000 concurrent students with real-time video streaming and interactive assessments.",
    overview: "Nexora is an enterprise-scale education technology ecosystem built for global universities and training academies. The platform combines ultra-low latency interactive video streaming, automated grading pipelines, and unified student analytics in a cohesive interface.",
    client: "Nexora Education",
    duration: "2 Weeks",
    year: "2024",
    challenge: "The client was experiencing severe latency and crashes during peak examination periods with legacy software. The architecture needed to scale from 2,000 to over 100,000 concurrent active users without degradation, while guaranteeing 99.99% uptime during high-stakes assessments.",
    solution: "We re-architected the application from the ground up using React, Node.js microservices, Redis caching layers, and WebRTC video meshes distributed across edge CDN nodes. We introduced an asynchronous event-driven grading engine powered by RabbitMQ.",
    technologies: ["React.js", "Node.js", "MongoDB", "Redis", "WebRTC", "Docker", "AWS ECS", "Tailwind CSS"],
    results: [
      { metric: "100,000+", label: "Concurrent Students Supported" },
      { metric: "99.99%", label: "Uptime During Finals" },
      { metric: "450ms", label: "Average Page Load Time" },
      { metric: "40%", label: "Reduction in Cloud Costs" }
    ],
    architecture: [
      "Distributed edge nodes for localized WebRTC video routing",
      "Stateless microservices orchestrated on AWS ECS Fargate",
      "Multi-region MongoDB cluster with real-time read replicas",
      "Custom assessment security engine with automated anomaly detection"
    ],
    liveDemoUrl: "https://client-bbyk.onrender.com"
  }
];

export const processTimeline = [
  {
    step: "01",
    title: "Discover",
    description: "Deep-dive analysis of operational challenges, tech stack audit, and market opportunities."
  },
  {
    step: "02",
    title: "Strategize",
    description: "Architecting the technical roadmap, resource allocation, and measurable milestone definitions."
  },
  {
    step: "03",
    title: "Design",
    description: "Prototyping UX/UI, wireframing user journeys, and defining scalable system architecture."
  },
  {
    step: "04",
    title: "Build",
    description: "Agile development cycles with continuous integration, unit testing, and weekly milestone demos."
  }
];
