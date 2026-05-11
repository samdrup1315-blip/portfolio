/* ─── Portfolio Data ─── */
/* Edit this file to personalise your portfolio */

export const PROFILE = {
  name:       'Your Name',
  role:       'BCA Student & Full-Stack Developer',
  tagline:    'Building with React · Node.js · MongoDB',
  college:    'Your College Name',
  year:       '3rd Year BCA',
  location:   'Kolkata, India',
  available:  true,
};

export const SKILLS = [
  /* Frontend */
  { name: 'React JS',     category: 'Frontend',  level: 85 },
  { name: 'Redux / Saga', category: 'Frontend',  level: 75 },
  { name: 'Immutable.js', category: 'Frontend',  level: 70 },
  { name: 'React Router', category: 'Frontend',  level: 80 },
  { name: 'JSX / HTML5',  category: 'Frontend',  level: 90 },
  { name: 'CSS3',         category: 'Frontend',  level: 88 },
  /* Backend */
  { name: 'Node.js',      category: 'Backend',   level: 78 },
  { name: 'Express.js',   category: 'Backend',   level: 75 },
  { name: 'MongoDB',      category: 'Backend',   level: 72 },
  { name: 'Mongoose',     category: 'Backend',   level: 70 },
  { name: 'REST APIs',    category: 'Backend',   level: 76 },
  /* Tools */
  { name: 'Git & GitHub', category: 'Tools',     level: 80 },
  { name: 'VS Code',      category: 'Tools',     level: 92 },
  { name: 'Postman',      category: 'Tools',     level: 74 },
];

export const PROJECTS = [
  {
    id: 1,
    title:       'Portfolio Website',
    description: 'A full-stack personal portfolio built with React, Redux, Redux Saga, and Immutable.js for the frontend, and Node.js + Express + MongoDB for the backend contact form.',
    tags:        ['React', 'Redux', 'Node.js', 'MongoDB', 'Immutable.js'],
    github:      'https://github.com/yourhandle/portfolio',
    live:        '#',
    featured:    true,
    year:        '2024',
  },
  {
    id: 2,
    title:       'Task Manager App',
    description: 'A Kanban-style task tracker with drag-and-drop columns, Redux global state, and a REST API backend persisting tasks in MongoDB.',
    tags:        ['React', 'Redux Saga', 'Express.js', 'MongoDB'],
    github:      'https://github.com/yourhandle/task-manager',
    live:        '#',
    featured:    true,
    year:        '2024',
  },
  {
    id: 3,
    title:       'Student Result Portal',
    description: 'A college result viewer with student login, React Router navigation, and Node.js backend serving grade data from MongoDB.',
    tags:        ['React', 'React Router', 'Node.js', 'MongoDB'],
    github:      'https://github.com/yourhandle/result-portal',
    live:        '#',
    featured:    false,
    year:        '2023',
  },
  {
    id: 4,
    title:       'Notes App',
    description: 'A markdown-enabled notes application with local Redux state management and Immutable.js ensuring pure reducer functions.',
    tags:        ['React', 'Redux', 'Immutable.js', 'CSS'],
    github:      'https://github.com/yourhandle/notes-app',
    live:        '#',
    featured:    false,
    year:        '2023',
  },
];

export const EDUCATION = [
  {
    degree:      'Bachelor of Computer Applications (BCA)',
    institution: 'Your College Name',
    year:        '2022 – 2025',
    highlights:  ['Full-Stack Web Development', 'Database Management', 'Data Structures', 'Software Engineering'],
  },
  {
    degree:      'Higher Secondary (Science)',
    institution: 'Your School Name',
    year:        '2020 – 2022',
    highlights:  ['Computer Science', 'Mathematics', 'Physics'],
  },
];

export const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];
