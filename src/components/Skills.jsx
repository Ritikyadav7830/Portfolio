import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

import skills from "../data/skills";

function Skills() {
return (
  <section
    id="skills"
    className="bg-bg py-28"
  >
    <div className="max-w-7xl mx-auto px-6">

      <SectionTitle
        subtitle="Technologies"
        title="My Skills"
      />

      <div className="space-y-14">

        {skills.map((category) => {

          const CategoryIcon = category.icon;

          return (
            <div key={category.title}>

              {/* Category Heading */}

              <div className="flex items-center gap-3 mb-6">

                <CategoryIcon className="text-3xl text-primary" />

                <h2 className="text-2xl font-bold text-heading">
                  {category.title}
                </h2>

              </div>

              {/* Skills */}

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {category.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}

              </div>

            </div>
          );

        })}

      </div>

    </div>
  </section>
);
}

export default Skills;