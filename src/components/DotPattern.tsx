/**
 * Signature dot-grid pattern from Famis packaging.
 * Used as a decorative element throughout the site.
 */
export default function DotPattern({
  rows = 4,
  cols = 5,
  color = "white",
  opacity = 0.15,
  size = 8,
  gap = 4,
  className = "",
}: {
  rows?: number;
  cols?: number;
  color?: string;
  opacity?: number;
  size?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gap: `${gap}px`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            opacity,
          }}
        />
      ))}
    </div>
  );
}
