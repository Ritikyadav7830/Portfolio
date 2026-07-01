import profileImage from "../assets/images/Ritik.png";
import { MdEmail } from "react-icons/md";
import portfolio from "../data/portfolio";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="bg-bg py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Who Am I"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div className="flex flex-col justify-center items-start">

            <div className="relative group">

            <div className="absolute inset-0 bg-primary opacity-30 blur-[120px] rounded-full"></div>

            <div className="relative w-[350px] rounded-3xl border-4 border-primary overflow-hidden
            transition-all duration-500 group-hover:shadow-[0_0_25px_var(--color-primary)]">

                <img
                src={profileImage}
                alt="Ritik"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

            </div>

            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-2 mt-3">

            <MdEmail className="text-primary text-lg" />

              <p className="text-sm text-muted">
                {portfolio.about.email}
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold text-heading">
              Full Stack Developer
            </h3>

            <p className="text-muted leading-8 mt-6">
              {portfolio.about.description}
            </p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <AboutCard
                title="Experience"
                value={portfolio.about.experience}
              />

              <AboutCard
                title="Projects"
                value={portfolio.about.projects}
              />

              <AboutCard
                title="Education"
                value={portfolio.about.education}
              />

              <AboutCard
                title="Location"
                value={portfolio.about.location}
              />

            </div>

            <div className="mt-10">

              <Button
                href={portfolio.resume}
                target="_blank"
              >
                Download Resume
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;