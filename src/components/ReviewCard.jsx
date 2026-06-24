function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#d49653">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2Z" />
    </svg>
  );
}

export default function ReviewCard({ text, author, source }) {
  return (
    <div
      className="relative flex-shrink-0 w-72"
      style={{ background: "#dfdad5", borderRadius: "3px", padding: "20px" }}
    >
      <span
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#978e81",
        }}
      >
        {source}
      </span>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p style={{ fontSize: "14px", fontWeight: 500, color: "#2c2c2c", lineHeight: 1.4, margin: 0 }}>
        {text}
      </p>
      <p style={{ fontSize: "12px", fontWeight: 700, color: "#2c2c2c", marginTop: "16px", marginBottom: 0 }}>
        {author}
      </p>
    </div>
  );
}
