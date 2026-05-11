/* ─── Portfolio Data ─── */
/* Personalized for Yeshey Samdrup */

export const PROFILE = {
  name:       'Yeshey Samdrup',
  role:       'BCA Student & Full-Stack Developer',
  tagline:    'Building scalable web applications with modern technologies',
  college:    'SRM University, Sikkim',
  year:       '2nd Year BCA',
  location:   'Gangtok, India',
  available:  true,
};

export const SKILLS = [
  /* Frontend */
  { name: 'React JS',        category: 'Frontend',  level: 85 },
  { name: 'JavaScript',      category: 'Frontend',  level: 90 },
  { name: 'HTML5 & CSS3',    category: 'Frontend',  level: 88 },
  { name: 'Redux / Saga',    category: 'Frontend',  level: 75 },

  /* Backend */
  { name: 'Node.js',         category: 'Backend',   level: 78 },
  { name: 'Express.js',      category: 'Backend',   level: 75 },
  { name: 'PHP',             category: 'Backend',   level: 70 },
  { name: 'MongoDB',         category: 'Backend',   level: 72 },

  /* Languages & Tools */
  { name: 'Python',          category: 'Tools',     level: 80 },
  { name: 'Git & GitHub',    category: 'Tools',     level: 82 },
  { name: 'VS Code',         category: 'Tools',     level: 92 },
  { name: 'Postman',         category: 'Tools',     level: 74 },
];

export const PROJECTS = [
  {
    id: 1,
    title:       'Portfolio Website',
    description: 'A full-stack personal portfolio built with React, Redux Saga, Immutable.js, Node.js, Express & MongoDB for the contact form.',
    tags:        ['React', 'Redux', 'Node.js', 'MongoDB'],
    github:      'https://github.com/samdrup1315-blip',
    live:        '#',
    featured:    true,
    year:        '2024',
  },
  {
    id: 2,
    title:       'Task Manager (Kanban)',
    description: 'Drag & drop task management application with real-time updates, built using React, Redux Saga and MongoDB backend.',
    tags:        ['React', 'Redux Saga', 'Express.js', 'MongoDB'],
    github:      'https://github.com/samdrup1315-blip',
    live:        '#',
    featured:    true,
    year:        '2024',
  },
  {
    id: 3,
    title:       'Student Result Portal',
    description: 'College result management system with student authentication, built with React Router and Node.js + MongoDB backend.',
    tags:        ['React', 'React Router', 'Node.js', 'MongoDB', 'PHP'],
    github:      'https://github.com/samdrup1315-blip',
    live:        '#',
    featured:    false,
    year:        '2023',
  },
  {
    id: 4,
    title:       'Notes Taking App',
    description: 'Feature-rich notes application with markdown support, using Redux state management and Immutable.js.',
    tags:        ['React', 'Redux', 'Immutable.js', 'JavaScript'],
    github:      'https://github.com/samdrup1315-blip',
    live:        '#',
    featured:    false,
    year:        '2023',
  },
];

export const EDUCATION = [
  {
    degree:      'Bachelor of Computer Applications (BCA)',
    institution: 'SRM University, Sikkim',
    year:        '2024 – 2027',
    highlights:  ['Full-Stack Web Development', 'Database Management', 'Data Structures'],
  },
  {
    degree:      'Higher Secondary (Science)',
    institution: 'Phuentsholing Higher Secondary School',
    year:        '2020 – 2022',
    highlights:  ['Computer Science', 'Mathematics'],
  },
];

export const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];