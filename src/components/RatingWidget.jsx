function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#d49653">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2Z" />
    </svg>
  );
}

export default function RatingWidget({ rating }) {
  return (
    <div
      className="inline-flex items-center gap-4 px-5 py-4"
      style={{ background: "#dfdad5", borderRadius: "3px" }}
    >
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <div className="flex items-baseline gap-1">
        <span
          className="font-display"
          style={{ fontSize: "42px", lineHeight: 1, color: "#2c2c2c", letterSpacing: "-0.016em" }}
        >
          {rating.score}
        </span>
        <span style={{ fontSize: "14px", color: "#2c2c2c" }}>/5</span>
      </div>
      <div>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#2c2c2c", margin: 0 }}>
          {rating.label}
        </p>
        <p style={{ fontSize: "12px", fontWeight: 500, color: "#978e81", margin: 0 }}>
          {rating.basedOn}
        </p>
      </div>
    </div>
  );
}
