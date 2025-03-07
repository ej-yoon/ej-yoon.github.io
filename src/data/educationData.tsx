type Education = {
    title: string;
    school: string;
    location: string;
    logo: string;
    description: string;
}

type educationData = Education[];

const educationData = [
    {
        title: "Master of Information Technology",
        school: "The University of Auckland",
        location: "Auckland, New Zealand",
        logo: '/uoa_logo.png',
        description: "Studied to achieve skills for the tools and techniques used to create modern, responsive websites and basic knowledge about new technologies such as AI and Data Mining"
    },
    {
        title: "Postgraduate Certificate in Information Technology",
        school: "The University of Auckland",
        location: "Auckland, New Zealand",
        logo: '/uoa_logo.png',
        description: "Studied to achieve skills for the tools and techniques used to create modern, responsive websites and web applications"
    },
    {
        title: "Bachler in Computer Science",
        school: "Kwangwoon University",
        location: "Seoul, Korea",
        logo: '/kw_logo.png',
        description: "Studied computer science related to computer software, such as Programming Languages, Software Engineering, Data Structures, Database, Operating System, and so on"
    }
];

export default educationData;