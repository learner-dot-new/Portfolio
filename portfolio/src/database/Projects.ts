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
}
];