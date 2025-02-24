type Skill = {
    name: string;
    level: number;
    logo: string;
}

type Skills = {
    category: string;
    skills: Skill[];
}

type skillData = Skills[];

const skillData = [
    {
        category: 'Web technologies',
        skills: [
            {
                name: 'HTML',
                level: 90,
                logo: 'src/images/html_logo.png'
            },
            {
                name: 'CSS',
                level: 80,
                logo: 'src/images/css_logo.png'
            }
        ]
    },
    {
        category: 'JavaScript libraries',
        skills: [
            {
                name: 'React',
                level: 80,
                logo: 'src/images/react_logo.png'
            },
            {
                name: 'jQuery',
                level: 90,
                logo: 'src/images/jquery_logo.png'
            },
            {
                name: 'AJAX',
                level: 90,
                logo: 'src/images/ajax_logo.png'
            }
        ]
    },
    {
        category: 'JavaScript frameworks',
        skills: [
            {
                name: 'Node.js',
                level: 80,
                logo: 'src/images/node_logo.png'
            },
            {
                name: 'Express.js',
                level: 80,
                logo: 'src/images/express_logo.png'
            }
        ]
    },
    {
        category: 'Programming languages',
        skills: [
            {
                name: 'JavaScript',
                level: 90,
                logo: 'src/images/js_logo.png'
            },
            {
                name: 'TypeScript',
                level: 60,
                logo: 'src/images/typescript_logo.png'
            },
            {
                name: 'Java',
                level: 90,
                logo: 'src/images/java_logo.png'
            }
        ]
    },
    {
        category: 'Java framework',
        skills: [
            {
                name: 'Spring',
                level: 90,
                logo: 'src/images/spring_logo.png'
            }
        ]
    },
    {
        category: 'Database',
        skills: [
            {
                name: 'Oracle',
                level: 90,
                logo: 'src/images/oracle_logo.png'
            },
            {
                name: 'Spring iBatis',
                level: 90,
                logo: 'src/images/spring_logo.png'
            },
            {
                name: 'MongoDB',
                level: 80,
                logo: 'src/images/mongodb_logo.png'
            }
        ]
    },
    {
        category: 'Version control system',
        skills: [
            {
                name: 'SVN',
                level: 90,
                logo: 'src/images/svn_logo.png'
            },
            {
                name: 'git',
                level: 80,
                logo: 'src/images/git_logo.png'
            }
        ]
    }
];

export default skillData;