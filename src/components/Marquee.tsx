import { Plus } from "lucide-react";

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
    <div className="relative overflow-hidden bg-primary2 border-y border-primary/10 py-4 md:py-5">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-5 md:gap-7 pr-5 md:pr-7 whitespace-nowrap">
            <span className="font-sans text-lg md:text-xl font-semibold text-primary">
              {item}
            </span>
            <Plus className="h-4 w-4 md:h-5 md:w-5 text-primary/40 shrink-0" strokeWidth={1.5} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
