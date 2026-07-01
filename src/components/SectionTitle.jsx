function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">

      {subtitle && (
        <p className="text-primary font-medium uppercase tracking-[4px] mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-heading">
        {title}
      </h2>

      <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-5"></div>

    </div>
  );
}

export default SectionTitle;