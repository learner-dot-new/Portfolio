export interface Activity {
    id: number;
    title: string;
    achievement: string;
    description: string;
    date: Date; // changed from Date to date
}

export const activities: Activity[] = [
{
    id: 1,
    title: "School",
    achievement: "Something",
    description: "kjdshf;la",
    date: new Date("2020-02-12") // changed from Date to date
},
{
    id: 2,
    title: "School",
    achievement: "Something",
    description: "kjdshf;la",
    date: new Date("2020-02-12") // changed from Date to date
},
{
    id: 3,
    title: "School",
    achievement: "Something",
    description: "kjdshf;la",
    date: new Date("2020-02-12") // changed from Date to date
},
{
    id: 4,
    title: "School",
    achievement: "Something",
    description: "kjdshf;la",
    date: new Date("2020-02-12") // changed from Date to date
}
];