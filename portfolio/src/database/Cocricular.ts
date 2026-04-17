export interface Education {
    id: number;
    institution: string;
    degree: string;
    year: string;
    score: string;
    location: string;
}

export interface Publication {
    id: number;
    title: string;
    journal: string;
    authors: string;
    paperId: string;
    url: string;
    date: string;
}

export const education: Education[] = [
{
    id: 1,
    institution: "MAIT, Delhi",
    degree: "B.Tech ECE",
    year: "2023 – Present",
    score: "GPA: 8.886",
    location: "Delhi, India"
},
{
    id: 2,
    institution: "KV BSF Dabla, Jaisalmer",
    degree: "Class 12th",
    year: "2022",
    score: "90.20%",
    location: "Jaisalmer, Rajasthan"
},
{
    id: 3,
    institution: "KV BSF Dabla, Jaisalmer",
    degree: "Class 10th",
    year: "2020",
    score: "92.80%",
    location: "Jaisalmer, Rajasthan"
}
];

export const publications: Publication[] = [
{
    id: 1,
    title: "Overview of Li-Fi Technology",
    journal: "IJERT",
    authors: "ML Sharma, Sunil Mathur, Shreyanshkar Giri, Vijay Pooniya, Kunal Barwal, Anushka Jain, Liesha Gupta, Yuvraj Diwan",
    paperId: "IJERTV14IS050023",
    url: "https://www.ijert.org/over-view-of-li-fi-technology",
    date: "May 2025"
}
];

export interface CoCurricular {
    id: number;
    title: string;
    organization: string;
    date: string;
    grade: string;
    description: string;
}

export const coCurriculars: CoCurricular[] = [
{
    id: 1,
    title: "NCC 'C' Certificate",
    organization: "National Cadet Corps (NCC)",
    date: "February 2026",
    grade: "B Grade",
    description: "Successfully completed NCC C Certificate examination, demonstrating discipline, leadership, and commitment to national service."
}
];