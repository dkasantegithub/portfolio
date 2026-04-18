export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "2.5rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#1e293b", fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
          David Kojo Asante<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <p style={{ color: "#1e293b", fontSize: "0.8rem" }}>
          © {year} · Crafting reliable software from Accra, Ghana 🇬🇭
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/david-kojo-asante-2b731b142" },
            { label: "Email", href: "mailto:asantedavid0545@gmail.com" },
            { label: "Phone", href: "tel:+233545655958" },
          ].map(link => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              style={{ color: "#334155", textDecoration: "none", fontSize: "0.82rem", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--accent)"}
              onMouseLeave={e => e.target.style.color = "#334155"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
