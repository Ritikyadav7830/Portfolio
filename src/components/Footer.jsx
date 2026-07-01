import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import portfolio from "../data/portfolio";

function Footer() {
  return (
    <footer className="bg-card border-t border-border">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-bold text-primary">
              Ritik.
            </h2>

            <p className="text-muted mt-3 max-w-sm">
              Building modern, responsive and scalable web applications
              using the MERN Stack.
            </p>

          </div>

          {/* Navigation */}

          <ul className="flex flex-wrap justify-center gap-6 text-text">

            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>

          </ul>

        </div>

        {/* Social */}

        <div className="flex justify-center gap-5 mt-10 text-2xl">

          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href={portfolio.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Bottom */}

        <div className="border-t border-border mt-10 pt-6 text-center">

          <p className="text-muted">
            © {new Date().getFullYear()} Ritik Yadav. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;