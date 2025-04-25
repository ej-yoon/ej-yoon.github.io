# Profile

This is a portfolio website for the front-end.
(ver 2.0, Apr 2025)

## About this project

### Features
- Responsive design using Bootstrap
- Sections for showcasing about myself, work experience, technical skills, and education
- Styled with Bootstrap and custom CSS

### Menu
- About: Profile section with contact information and brief bio
- Career: Career section with work experience and skills
- Education: Education section with academic background

## Technologies
- React
- TypeScript
- Bootstrap
- HTML
- CSS

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/ej-yoon/ej-yoon.github.io.git
```

2. Install dependencies
```bash
npm install
```
or
```bash
yarn install
```

3. Start the development server
```bash
npm run dev
```
or
```bash
npm yarn dev
```

## Structure
```
.
├── src
│   ├── components
│   │   └── NavigationBar.tsx
│   ├── data
│   │   ├── careerData.tsx
│   │   ├── educationData.tsx
│   │   └── skillData.tsx
│   ├── page
│   │   └── Main.tsx
│   ├── sections
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   └── Education.tsx
│   ├── styles
│   │   ├── index.css
│   │   ├── Page.module.css
│   │   └── Section.module.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── index.html
└── README.md
```