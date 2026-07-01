import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Ritik<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block mx-6 my-4 text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;