export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    role: string;
    highlights: string[];
    isExternal?: boolean;
    externalLink?: string;
    readmePath?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "BaatKro — High-Fidelity Social Audio Engine",
        description: "A comprehensive infrastructure for real-time social audio and video interaction, featuring a weighted match-making engine and creator economy.",
        techStack: ["React Native 0.84", "Node.js 22.11 LTS", "WebRTC", "Socket.io 4.8", "MongoDB Atlas", "Express 5"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "",
        role: "Full-Stack Developer",
        highlights: [
            "Engineered a high-concurrency signaling core using Socket.io 4.8 and partitioned namespace architecture",
            "Implemented a sophisticated match-making engine with weighted scoring for 1-on-1 'Spaces' discovery",
            "Built a comprehensive creator economy loop with real-time virtual gifting and access-controlled entry fees",
            "Architected a multi-tier infrastructure separating WebRTC signaling, RESTful business logic, and MongoDB storage"
        ],
        readmePath: "/projects/baatkro-readme.html"
    },
    {
        id: 2,
        title: "Uber Architected — Ride Engine",
        description: "A production-grade distributed transportation engine implementing geospatial querying, real-time WebSocket signaling, and location-aware dispatch logic.",
        techStack: ["Node.js", "Express", "Socket.io", "MongoDB", "Google Maps API", "JavaScript"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "",
        role: "Backend Architect",
        highlights: [
            "Implemented 'Location-Aware Dispatch Logic' using MongoDB $geoNear for optimal captain-user matching",
            "Architected a Pub/Sub WebSocket system for real-time ride state broadcasting and GPS tracking",
            "Engineered a strict 6-digit OTP handshake mechanism for ride lifecycle security and integrity",
            "Designed RESTful APIs for complex fare calculation based on distance, time, and vehicle type"
        ],
        readmePath: "/projects/uber-clone-readme.html"
    },
    {
        id: 3,
        title: "FoodReels — Infinite Discovery Feed",
        description: "A high-performance video discovery engine featuring zero-lag vertical scrolling, asynchronous media ingestion, and specialized culinary metadata management.",
        techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "ImageKit", "Multer"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "",
        role: "Full-Stack Developer",
        highlights: [
            "Built an asynchronous media ingestion pipeline using Multer and ImageKit CDN for rapid video hosting",
            "Optimized video delivery with viewport intersection listeners for reduced network bandwidth consumption",
            "Implemented atomic social engagement (likes/saves) for consistent data integrity under high volume",
            "Developed a responsive 'TikTok-style' UI with seamless navigation and infinite feed logic"
        ],
        readmePath: "/projects/youtube-food-view-readme.html"
    },
    {
        id: 4,
        title: "SecureAuth — Verification Ecosystem",
        description: "A robust identity verification system featuring 3-phase OTP registration, MongoDB TTL indices, and cryptographically secure RNG.",
        techStack: ["Node.js", "Express.js", "Nodemailer", "MongoDB", "Google OAuth 2.0"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "",
        role: "Security Engineer",
        highlights: [
            "Designed a 3-phase OTP state machine to prevent 'Dirty Writes' during the user registration flow",
            "Leveraged MongoDB TTL indexes for automated security record cleanup at the database layer",
            "Implemented brute-force protection allowing max 5 attempts per 5-minute verification window",
            "Integrated Nodemailer with Google OAuth 2.0 for high-integrity transactional email delivery"
        ],
        readmePath: "/projects/otp-authentication-readme.html"
    },
    {
        id: 5,
        title: "DigitalHeros — Charity Platform",
        description: "A state-of-the-art golf-subscription and charity fundraising platform architected for financial integrity and high-frequency engagement.",
        techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Nodemailer", "Stripe Sim"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "",
        role: "Full-Stack Lead",
        highlights: [
            "Architected Row Level Security (RLS) policies for granular database-level access control and privacy",
            "Implemented a weighted draw engine using inverse frequency density for balanced charitable payouts",
            "Developed serverless database triggers to maintain state consistency across complex financial events",
            "Built high-fidelity documentation and technical blueprints for the entire subscription ecosystem"
        ],
        readmePath: "/projects/golf-charity-readme.html"
    },
    {
        id: 6,
        title: "Watch Party — Sync Platform",
        description: "A premium real-time co-watching platform with a custom latency-compensated playback engine and role-gated synchronization.",
        techStack: ["React 19", "Node.js", "Socket.io", "TypeScript", "MongoDB", "Tailwind CSS"],
        githubLink: "https://github.com/pooniya22",
        liveLink: "https://watch-party-eosin.vercel.app",
        role: "DevOps & Core Development",
        highlights: [
            "Engineered a real-time synchronization engine achieving <50ms broadcast latency across global clients",
            "Built a robust JWT + OTP security layer and role-based playback control system (Host/Moderator)",
            "Implemented room-based architecture with unique 4-8 character codes and 24-hour auto-expiry logic",
            "Deployed the monorepo on Vercel and Render with optimized build pipelines and environment management"
        ],
        readmePath: "/projects/watch-party-readme.html"
    }
];