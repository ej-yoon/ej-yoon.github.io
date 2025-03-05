type Career = {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
}

type careerData = Career[];

const careerData = [
    {
      title: 'Intern',
      company: 'The University of Auckland',
      location: 'Auckland, New Zealand',
      period: '2.5 months',
      description: [
            "- Gained practical experience in full-stack development by implementing a Student Attendance Management System",
            "- Collaborated with a team of 3 (2 developers and 1 tester)",
            "- Used a MERN stack, Git for version control, and Trello for project management"
        ]
    },
    {
        title: 'Front-end Software Developer',
        company: 'Wizian',
        location: 'Seoul, South Korea',
        period: '3 months',
        description: [
            "Developed front-end of an ERP system for a university information system using Javascript library"
        ]
    },
    {
        title: 'Full-stack Web Developer',
        company: 'Pionnet',
        location: 'Seoul, South Korea',
        period: '2.5 years',
        description: [
            "- Implemented e-commerce platforms for major companies in Korea",
            "- Participated in five projects", "- Eland Integration shopping mall",
            "- Samsung Everland Wellstory Online & Mobile shopping mall",
            "- LG U+ ‘Video shopping’ Mobile shopping mall",
            "- D&Shop Online & Mobile Shopping Mall",
            "- GS SHOP X Malaysia for Online home shopping mall",
            "- Manual unit test, integration test",
            "- Documentation for system manual",
            "- Used web technologies, Java based on Spring framework, Oracle for database, and SVN for version control"
        ]
    }
];

export default careerData;