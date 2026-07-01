import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import portfolio from "../data/portfolio";

function SocialLinks() {
  return (
    <div className="flex gap-6 text-3xl">

      <a
        href={portfolio.social.github}
        target="_blank"
        rel="noreferrer"
        className="text-text hover:text-primary transition-all duration-300 hover:-translate-y-1"
      >
        <FaGithub />
      </a>

      <a
        href={portfolio.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-text hover:text-primary transition-all duration-300 hover:-translate-y-1"
      >
        <FaLinkedinIn />
      </a>

      <a
        href={portfolio.social.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-text hover:text-primary transition-all duration-300 hover:-translate-y-1"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default SocialLinks;