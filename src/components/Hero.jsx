import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import profileImage from "../assets/images/Ritik.png";
import portfolio from "../data/portfolio";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100vh]  bg-bg text-heading flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left */}

          <div>

            {/* Available Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-2">

              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

              <p className="text-sm text-muted">
                {portfolio.personal.status}
              </p>

            </div>

            {/* Greeting */}

            <p className="text-primary font-semibold text-lg mb-4">
              👋 Hello, I'm
            </p>

            {/* Name */}

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              {portfolio.personal.firstName}

              <span className="text-primary">
                {" "}{portfolio.personal.lastName}
              </span>

            </h1>

            {/* Role */}

            <h2 className="text-3xl font-semibold text-text mt-4">
               {portfolio.personal.role}
            </h2>

            {/* Description */}

            <p className="text-muted leading-8 mt-4 max-w-xl">
               {portfolio.personal.description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-8">

            <Button href="#contact">
                Hire Me
            </Button>

            <Button
                href={portfolio.resume}
                target="_blank"
                variant="outline"
            >
                Download CV
            </Button>

            </div>

            {/* Social */}

            <div className="flex gap-6 mt-10 text-3xl">
              <SocialLinks />
            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-primary opacity-30 blur-[120px] rounded-full"></div>

              {/* Image */}

              <img
                src={profileImage}
                alt="Ritik Yadav"
                className="relative w-[330px] md:w-[430px] rounded-full border-4 border-primary"
              />

            </div>

          </div>

        </div>

        {/* Scroll Down */}

        <div className="flex justify-center animate-bounce mt-4">

          <a
            href="#about"
            className="text-text hover:text-primary transition"
          >
            <HiArrowDown size={35} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;