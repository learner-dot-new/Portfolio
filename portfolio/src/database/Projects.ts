export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    role: string;
    highlights: string[];
}

export const projects: Project[] = [
{
    id: 1,
    title: "BaatKro — A Calling App",
    description: "A full-stack real-time social platform with a React Native mobile app, Node.js/Express backend, and React admin dashboard.",
    techStack: ["React Native", "Node.js", "Express", "WebRTC", "Socket.io", "MongoDB"],
    githubLink: "https://github.com/pooniya22",
    liveLink: "",
    role: "Full-Stack Developer",
    highlights: [
        "Implemented peer-to-peer audio/video rooms using WebRTC and Socket.io",
        "Built speaker/listener roles, private/paid/scheduled rooms, and Omegle-style random 1-on-1 matching",
        "Developed complete social layer with follow system, real-time DMs, Google OAuth, OTP auth",
        "Created a creator wallet system and admin panel for live moderation and analytics"
    ]
},
{
    id: 2,
    title: "Uber-like Ride Booking Web App",
    description: "A full-stack ride-booking application with RESTful APIs for user authentication, ride requests, and data management.",
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/pooniya22",
    liveLink: "",
    role: "Backend Developer",
    highlights: [
        "Designed RESTful APIs for user authentication, ride requests, and data management",
        "Implemented OOP concepts and modular backend structure for scalability",
        "Used data structures to manage ride data and optimize request handling"
    ]
},
{
    id: 3,
    title: "Zomato Integrated with Shorts",
    description: "A responsive video-based food browsing interface with modular, component-based architecture following OOP principles.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/pooniya22",
    liveLink: "",
    role: "Frontend Developer",
    highlights: [
        "Developed a responsive video-based food browsing interface",
        "Implemented modular, component-based architecture following OOP principles",
        "Optimized rendering logic and UI interactions for performance",
        "Applied problem-solving and algorithmic thinking for efficient data handling"
    ]
},
{
    id: 4,
    title: "Google Auth — OTP Verification System",
    description: "A secure authentication system that sends OTP via email using Google OAuth and Nodemailer, with server-side OTP generation, validation, and expiry handling.",
    techStack: ["Node.js", "Express.js", "Nodemailer", "Google OAuth 2.0", "JavaScript"],
    githubLink: "https://github.com/pooniya22",
    liveLink: "",
    role: "Backend Developer",
    highlights: [
        "Implemented OTP generation and email delivery using Nodemailer with Google OAuth 2.0",
        "Built secure server-side OTP validation with expiry and rate-limiting logic",
        "Designed RESTful API endpoints for sending and verifying OTPs",
        "Handled edge cases like expired OTPs, invalid inputs, and retry limits"
    ]
},
{
    id: 5,
    title: "DigiHero — Donation Platform",
    description: "A full-stack donation website enabling users to contribute to causes with secure authentication via Google Auth, integrated payment gateway, and Supabase for real-time data storage.",
    techStack: ["React", "Supabase", "Google Auth", "Payment Gateway", "JavaScript", "CSS"],
    githubLink: "https://github.com/pooniya22",
    liveLink: "",
    role: "Full-Stack Developer",
    highlights: [
        "Integrated Google Authentication for secure user sign-in and session management",
        "Implemented payment gateway for seamless and secure donation transactions",
        "Used Supabase as the backend for real-time database, authentication, and storage",
        "Built responsive UI with campaign listings, donation tracking, and user dashboards"
    ]
}
];