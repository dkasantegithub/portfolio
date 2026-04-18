import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled || menuOpen ? "rgba(8,12,16,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,229,160,0.1)" : "1px solid transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem",
          height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.02em" }}>
              DKA<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
            className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: "#64748b", textDecoration: "none", fontSize: "0.88rem",
                fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "var(--accent)"}
                onMouseLeave={e => e.target.style.color = "#64748b"}
              >{link.label}</a>
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
            >Resume ↓</a>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              display: "none",
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", color: "#e2e8f0",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "#94a3b8", textDecoration: "none",
                      fontSize: "1rem", fontWeight: 500,
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.target.style.color = "var(--accent)"}
                    onMouseLeave={e => e.target.style.color = "#94a3b8"}
                  >{link.label}</a>
                ))}
                <a href="/cv.pdf" download style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1.25rem", textAlign: "center",
                  border: "1px solid var(--accent)", borderRadius: "8px",
                  color: "var(--accent)", textDecoration: "none",
                  fontSize: "0.9rem", fontWeight: 600, fontFamily: "var(--font-display)",
                }}>
                  Resume ↓
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
