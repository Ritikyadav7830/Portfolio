function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
      flex
      items-center
      gap-4
      bg-card
      border
      border-border
      rounded-card
      p-4
      transition-all
      duration-300
      hover:border-primary
      hover:-translate-y-1
      hover:shadow-[0_0_20px_var(--color-primary)]
      "
    >
      <Icon className={`text-4xl ${skill.color}`} />

      <h3 className="text-heading font-semibold">
        {skill.name}
      </h3>

      <p className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
       {skill.level}
     </p>
    </div>
  );
}

export default SkillCard;