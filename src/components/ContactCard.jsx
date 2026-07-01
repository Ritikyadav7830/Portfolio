function ContactCard({ icon: Icon, title, value }) {
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
        p-5
        transition-all
        duration-300
        hover:border-primary
      "
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="text-primary text-xl" />
      </div>

      <div>
        <h3 className="text-muted text-sm">
          {title}
        </h3>

        <p className="text-heading font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}

export default ContactCard;