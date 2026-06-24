import { business } from "../config";

export default function Footer() {
  return (
    <footer style={{ background: "#292622", padding: "32px 24px" }}>
      <div
        className="max-w-[1200px] mx-auto flex justify-between flex-wrap gap-3"
        style={{ fontSize: "12px", fontWeight: 500, color: "#978e81" }}
      >
        <span>
          {business.name} · {business.address}
        </span>
        <span>This is a sample site — built for demonstration.</span>
      </div>
    </footer>
  );
}
