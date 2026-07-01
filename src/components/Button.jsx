function Button({
  children,
  href,
  variant = "primary",
  target = "_self",
}) {
    
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-4 rounded-card font-semibold transition-all duration-300 hover:scale-105";

  const variants = {
    primary:
      "bg-primary text-heading hover:bg-secondary",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-heading",
  };

  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;