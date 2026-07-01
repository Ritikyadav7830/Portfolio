import recruitment from "../assets/projects/recruitment.png";
import social from "../assets/projects/social.png";
import bruCoffee from "../assets/projects/brucoffee.png";

const projects = [
  {
    id: 1,

    title: "RM System",

    image: recruitment,

    description:
      "Built a recruitment management system with authentication, candidate tracking, CRUD operations and status management.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/Ritikyadav7830/Recruitment-Management-System",

    demo: "https://recruitment-management-system-two.vercel.app/",

    featured: true,
  },

  {
    id: 2,

    title: "Bru Coffee",

    image: bruCoffee,

    description:
      "Responsive coffee shop website with modern UI and smooth user experience.",

    technologies: [
      "Html",
      "Css",
      "JavaScript",
    ],

    github: "https://github.com/Ritikyadav7830/Bru-coffee",

    demo: "https://ritikyadav7830.github.io/Bru-coffee",
  },

  {
    id: 3,

    title: "Social Post Platform",

    image: social,

    description:
      "Social platform with post management and responsive dashboard.",

    technologies: [
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/Ritikyadav7830/social-post-platform",

    demo: "https://social-post-platform.vercel.app",
  },
];

export default projects;