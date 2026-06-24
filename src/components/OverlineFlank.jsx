export default function OverlineFlank({ left, right, color = "#d8cbb8" }) {
  const style = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color,
  };
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
      <span style={style}>{left}</span>
      <span style={style}>{right}</span>
    </div>
  );
}
