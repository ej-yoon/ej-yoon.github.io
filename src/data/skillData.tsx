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
                logo: '/html_logo.png'
            },
            {
                name: 'CSS',
                level: 75,
                logo: '/css_logo.png'
            }
        ]
    },
    {
        category: 'JavaScript libraries',
        skills: [
            {
                name: 'React',
                level: 75,
                logo: '/react_logo.png'
            },
            {
                name: 'jQuery',
                level: 90,
                logo: '/jquery_logo.png'
            },
            {
                name: 'AJAX',
                level: 90,
                logo: '/ajax_logo.png'
            }
        ]
    },
    {
        category: 'JavaScript frameworks',
        skills: [
            {
                name: 'Node.js',
                level: 75,
                logo: '/node_logo.png'
            },
            {
                name: 'Express.js',
                level: 75,
                logo: '/express_logo.png'
            }
        ]
    },
    {
        category: 'Programming languages',
        skills: [
            {
                name: 'JavaScript',
                level: 90,
                logo: '/js_logo.png'
            },
            {
                name: 'TypeScript',
                level: 60,
                logo: '/typescript_logo.png'
            },
            {
                name: 'Java',
                level: 90,
                logo: '/java_logo.png'
            }
        ]
    },
    {
        category: 'Java framework',
        skills: [
            {
                name: 'Spring',
                level: 90,
                logo: '/spring_logo.png'
            }
        ]
    },
    {
        category: 'Database',
        skills: [
            {
                name: 'Oracle',
                level: 90,
                logo: '/oracle_logo.png'
            },
            {
                name: 'Spring iBatis',
                level: 90,
                logo: '/spring_logo.png'
            },
            {
                name: 'MongoDB',
                level: 80,
                logo: '/mongodb_logo.png'
            }
        ]
    },
    {
        category: 'Version control system',
        skills: [
            {
                name: 'SVN',
                level: 90,
                logo: '/svn_logo.png'
            },
            {
                name: 'git',
                level: 75,
                logo: '/git_logo.png'
            }
        ]
    }
];

export default skillData;