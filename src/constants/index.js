import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import usj from "../assets/usj.jpg";
import cima from "../assets/cima.jpg";
import ananda from "../assets/ananda.jpg";
import mahinda from "../assets/mahinda.jpg";

export const HERO_CONTENT = `Passionate and ambitious computer science undergraduate with a relentless drive to learn and excel in the ever-evolving world of technology. Eager to embrace new opportunities and collaborate with diverse individuals, I am committed to expanding my knowledge and skills to make a meaningful impact in the field.`;

export const ABOUT_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Etiam pulvinar, orci nec bibendum fermentum, turpis purus facilisis dolor, nec faucibus lorem sem a magna. Integer at turpis quis nulla congue fermentum.`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Apr 2024",
    role: "Software Engineer Trainee",
    company: "EchonLabs",
    description: `Contributed as a developer to an internal project aimed at revamping the company’s website. This role significantly enhanced my programming skills, particularly in Angular framework, SCSS, TypeScript, Node.js, and HTML. I applied creative thinking to effectively implement these technologies, bringing complex functionalities to life on the website.`,
    skills: ["Front-end Development", "Angular", "SCSS", "Creative Problem Solving","Version Control","Typescript"],
  },
  {
    year: "May 2023 - Jul 2023",
    role: "Project Manager/ Business Analyst Trainee",
    company: "EchonLabs",
    description: `Participated in client meetings to gather and elicit requirements, which were subsequently documented into Software Requirements Specifications (SRS) and user stories. Additionally, I authored a detailed product brochure showcasing the company’s offerings. I took charge of facilitating standup meetings and managing projects, including backlog grooming and overseeing project lifecycles.`,
    skills: ["Requirement Gathering", "Documentation", "Project Management", "Agile", "Collaboration"],
  },
  {
    year: "May 2021 - Jun 2022",
    role: "Assistant Operations Manager",
    company: "TYR Logistics",
    description: `Oversaw and coordinated logistics across multiple regions, managing partner and vendor relationships effectively. Communicated with diverse teams across various sectors and nationalities to ensure smooth operations. Compiled and maintained detailed daily logs and comprehensive monthly narrative reports, ensuring accuracy and consistency in operational processes.`,
    skills: ["Project Management", "Interpersonal Skills", "Problem-Solving", "Logistics Coordination"],
  },
  {
    year: "Oct 2020 - Apr 2021",
    role: "Intern",
    company: "Hatton National Bank PLC",
    description: `Managed daily bank operations, including account openings, fixed deposits, and customer service. Oversaw financial transactions and customer accounts, monitored overdue loans, contacted clients for collections, promoted bank services, and assisted with credit card applications.`,
    skills: ["Risk Management", "Banking Operations", "Time Management"],
  },
];

export const EDUCATION = [
  {
    institution: "University Of Sri Jayewardenepura",
    degree: "Bachelor of Science",
    fieldOfStudy: "in Computer Science",
    graduationYear: "Jun 2021 - Present",
    description:
      "Studied Computer Science, Mathematics and Statistics in the first two academic years and chose to major in Computer Science.",
    courses: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Systems",
    ],
    image: usj,
  },
  {
    institution: "CIMA",
    degree: "Accounting and Business Management",
    graduationYear: "2020",
    description:
      "Passed all exams in the certificate level and received the CIMA Certficate in Business Accounting (CIMA Cert BA) in 2020",
    courses: [
      "Machine Learning",
      "Neural Networks",
      "AI Ethics",
      "Natural Language Processing",
    ],
    image: cima,
  },
  {
    institution: "Ananda College, Colombo 10",
    degree: "Physical Science",
    fieldOfStudy: "",
    graduationYear: "2014 - 2019",
    description:
      "Received 9As in GCE O/Ls in 2016 and 1A 1B 1C in GCE A/Ls in 2019",
    courses: [
      "Machine Learning",
      "Neural Networks",
      "AI Ethics",
      "Natural Language Processing",
    ],
    image: ananda,
  },
  {
    institution: "Mahinda College, Galle",
    degree: "Primary - Secondary",
    fieldOfStudy: "",
    graduationYear: "2006 - 2013",
    description:
      "Received my primary education and my secondary education upto grade 9 here.",
    courses: [
      "Machine Learning",
      "Neural Networks",
      "AI Ethics",
      "Natural Language Processing",
    ],
    image: mahinda,
  },
];

export const PROJECTS = [
  {
    title: "BitHive",
    image: project1,
    description:
      "A tech-focused social media platform offering a welcoming environment for sharing stories, updates, and insights. Easily join and personalize your profile, explore curated tech feeds, discover trending content, connect with peers, manage saved posts, and create/edit content with a user-friendly interface.",
    technologies: ["React.js", "Tailwind CSS", "Appwrite", "shadcn"],
    githubLink: "https://github.com/sashenwin/BitHive",
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description:
      "Developed a personal portfolio project using React.js and Tailwind CSS, hosted on Firebase. This project showcases my skills and projects in a clean and modern layout, leveraging responsive design principles for optimal viewing across devices. Utilizing Firebase for hosting ensures seamless deployment and reliability, providing a user-friendly experience to visitors exploring my portfolio",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/sashenwin/portfolio",
    demoLink: "https://sashenwin.github.io/portfolio/",
  },
  {
    title: "Wallet Buddy",
    image: project3,
    description:
      "Developed a personal finance management system using C, where users can create accounts to track their incomes and expenses. The system allows users to add, edit, update, and delete expenses, providing comprehensive control over financial data. It includes various visualizations to display income and expense trends, offering insights on a monthly or yearly basis",
    technologies: ["C"],
    githubLink: "https://github.com/sashenwin/wallet-buddy",
  },
  {
    title: "RoboDrape",
    image: project4,
    description:
      "Robodrape, an innovative automated drape system using Arduino technology and various sensors. The system intelligently adjusts drapes based on sunlight intensity—opening them during low-light conditions to let natural light in and closing them when sunlight is abundant to maintain a comfortable indoor environment. This automation not only enhances energy efficiency but also offers a convenient, hands-free solution for managing natural lighting in any space.",
    technologies: ["Arduino"],
  },
];