const items = [
  "Structural Design",
  "Foundation Engineering",
  "Retrofitting & Strengthening",
  "Site Supervision",
  "Value Engineering",
  "Consultancy & Advisory",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden bg-primary2 py-3.5 md:py-4 border-y border-primary/10">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8 whitespace-nowrap"
          >
            <span className="font-display italic text-lg md:text-xl font-medium text-primary">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-primary/30" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
