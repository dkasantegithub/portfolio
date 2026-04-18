import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,12,16,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,229,160,0.1)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 2rem",
        height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em",
          }}>
            DKA<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{
              color: "#64748b", textDecoration: "none", fontSize: "0.88rem",
              fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--accent)"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >
              {link.label}
            </a>
          ))}
          <a href="/dkasante_cv.pdf" download style={{
            padding: "0.48rem 1.1rem",
            border: "1px solid var(--accent)", borderRadius: "6px",
            color: "var(--accent)", textDecoration: "none",
            fontSize: "0.83rem", fontWeight: 600, fontFamily: "var(--font-display)",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "var(--accent)"; e.target.style.color = "#080c10"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--accent)"; }}
          >
            Resume ↓
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
