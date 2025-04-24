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
            "- Developed front-end of an ERP system for university information systems",
            "- Mainly used JavaScript based on a particular JavaScript framework (Nexacro)"
        ]
    },
    {
        title: 'Full-stack Web Developer',
        company: 'Pionnet',
        location: 'Seoul, South Korea',
        period: '2.5 years',
        description: [
            "- Implemented e-commerce platforms for major companies in Korea",
            `- Participated in five projects:\n  - Eland Integration shopping mall\n  - Samsung Everland Wellstory Online & Mobile shopping mall\n  - LG U+ ‘Video shopping’ Mobile shopping mall\n  - D&Shop Online & Mobile Shopping Mall\n  - GS SHOP X Malaysia for Online home shopping mall`,
            "- Manual unit test and integration test",
            "- Documentation for system manual",
            "- Used web technologies, Java based on Spring framework, Oracle for database, and SVN for version control"
        ]
    }
];

export default careerData;