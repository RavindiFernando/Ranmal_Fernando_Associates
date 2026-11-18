interface EyebrowProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

const Eyebrow = ({ children, tone = "light", className = "" }: EyebrowProps) => {
  const isDark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] ${
        isDark ? "text-primary2/80" : "text-primary/70"
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 ${isDark ? "bg-primary2" : "bg-primary"}`} />
      {children}
    </span>
  );
};

export default Eyebrow;
