function AboutCard({ title, value }) {
  return (
    <div className="bg-card border border-border rounded-card p-5 hover:border-primary transition-all duration-300">

      <h3 className="text-sm text-muted">
        {title}
      </h3>

      <p className="text-heading text-lg font-semibold mt-2">
        {value}
      </p>

    </div>
  );
}

export default AboutCard;