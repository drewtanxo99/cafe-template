export default function OutlinedButton({ href, onClick, children, color = "#d8cbb8", as = "a", ...rest }) {
  const style = {
    background: "transparent",
    border: `1px solid ${color}`,
    color: color,
    borderRadius: "3px",
    padding: "10px 20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    display: "inline-block",
    cursor: "pointer",
  };

  if (as === "button") {
    return (
      <button style={style} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} style={style} {...rest}>
      {children}
    </a>
  );
}
