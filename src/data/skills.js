import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaTools
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend", 
    icon: FaLaptopCode,
    items: [
      { name: "HTML", level: "Advanced", icon: FaHtml5 ,color:"text-orange-500" },
      { name: "CSS", level: "Advanced", icon: FaCss3Alt,color:"text-blue-500" },
      { name: "JavaScript", level: "Intermediate", icon: FaJs, color:"text-yellow-400" },
      { name: "React", level: "Intermediate", icon: FaReact, color:"text-cyan-400" },
      { name: "Tailwind", level: "Intermediate", icon: SiTailwindcss,color:"text-blue-500" },
    ],
  },

  {
    title: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", level: "Intermediate", icon: FaNodeJs, color:"text-green-500" },
      { name: "Express", level: "Intermediate", icon: SiExpress,color:"text-gray-200" },
      { name: "MongoDB", level: "Intermediate", icon: SiMongodb,color:"text-green-500" },
      { name: "JWT", level: "Intermediate", icon: SiJsonwebtokens,color: "text-cyan-400" },
    ],
  },

  {
    title: "Tools",
    icon: FaTools,
    items: [
      { name: "Git", level: "Intermediate", icon: FaGitAlt,color:"text-orange-600" },
      { name: "Github", level: "Intermediate", icon: FaGithub,color:"text-white"  },
      { name: "VS Code", level: "Advanced", icon: VscVscode,color:"text-blue-500" },
      { name: "Postman", level: "Intermediate", icon: SiPostman,color:"text-orange-500" },
    ],
  },
];

export default skills;