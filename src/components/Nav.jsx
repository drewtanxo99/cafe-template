import { business } from "../config";

export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50" style={{ background: "transparent" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#top" className="font-display" style={{ fontSize: "20px", color: "#dfdad5", letterSpacing: "-0.01em" }}>
          {business.name}
        </a>
        <nav className="hidden sm:flex gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                color: "#dfdad5",
                opacity: 0.85,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/${business.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "32px",
            height: "32px",
            background: "#d49653",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Message on WhatsApp"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#2c2c2c">
            <path d="M17.6 6.3A8.4 8.4 0 0 0 12 4a8.4 8.4 0 0 0-7.3 12.5L4 20l3.6-.9A8.4 8.4 0 0 0 12 20a8.4 8.4 0 0 0 5.6-13.7Zm-5.6 12.1a6.8 6.8 0 0 1-3.5-1l-.3-.1-2.1.5.5-2-.2-.3A6.8 6.8 0 1 1 19 12a6.8 6.8 0 0 1-7 6.4Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
