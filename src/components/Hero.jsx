import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,160,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,160,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        zIndex: 0,
      }} />

      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: "15%", right: "8%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,100,255,0.04) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1200px", margin: "0 auto", width: "100%",
        position: "relative", zIndex: 1, paddingTop: "100px",
      }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
          <span style={{
            display: "inline-block", width: "8px", height: "8px", borderRadius: "50%",
            background: "var(--accent)", boxShadow: "0 0 12px var(--accent)",
          }} />
          <span style={{
            color: "var(--accent)", fontSize: "0.85rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-display)",
          }}>
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "#f1f5f9",
        }}>
          Hi, I'm David<br />
          Kojo Asante<span style={{ color: "var(--accent)" }}>.</span>
        </motion.h1>

        {/* Role badge */}
        <motion.div {...fadeUp(0.28)} style={{ marginBottom: "1.25rem" }}>
          <span style={{
            display: "inline-block",
            padding: "6px 16px",
            border: "1px solid rgba(0,229,160,0.25)",
            borderRadius: "100px",
            fontSize: "0.9rem",
            color: "#94a3b8",
            background: "rgba(0,229,160,0.05)",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}>
            Full-Stack Software Engineer · Ghana 🇬🇭
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p {...fadeUp(0.35)} style={{
          fontSize: "1.1rem", color: "#64748b",
          maxWidth: "540px", lineHeight: 1.8,
          marginBottom: "2.5rem", fontWeight: 300,
        }}>
          I build production-grade web applications — from{" "}
          <span style={{ color: "#94a3b8" }}>national government portals</span> to{" "}
          <span style={{ color: "#94a3b8" }}>enterprise ERP systems</span> — with
          4+ years of experience shipping real products used across Ghana.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects"
            style={{
              padding: "0.85rem 2rem",
              background: "var(--accent)", color: "#080c10",
              borderRadius: "8px", textDecoration: "none",
              fontWeight: 700, fontFamily: "var(--font-display)",
              fontSize: "0.95rem", transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-flex", alignItems: "center", gap: "6px",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,229,160,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            View My Work →
          </a>
          <a href="#contact"
            style={{
              padding: "0.85rem 2rem", background: "transparent",
              color: "#e2e8f0", border: "1px solid rgba(226,232,240,0.15)",
              borderRadius: "8px", textDecoration: "none",
              fontWeight: 500, fontFamily: "var(--font-display)",
              fontSize: "0.95rem", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,229,160,0.4)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(226,232,240,0.15)"; e.currentTarget.style.color = "#e2e8f0"; }}
          >
            Get in Touch
          </a>
          <a href="mailto:asantedavid0545@gmail.com"
            style={{
              padding: "0.85rem 2rem", background: "transparent",
              color: "#475569", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "8px", textDecoration: "none",
              fontWeight: 500, fontFamily: "var(--font-display)",
              fontSize: "0.95rem", transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#94a3b8"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#475569"; }}
          >
            asantedavid0545@gmail.com
          </a>
        </motion.div>

        {/* Stack pills */}
        <motion.div {...fadeUp(0.65)} style={{
          marginTop: "4rem", display: "flex",
          gap: "0.75rem", flexWrap: "wrap", alignItems: "center",
        }}>
          <span style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 500 }}>Stack:</span>
          {["Laravel", "Vue.js", "PHP", "PostgreSQL", "Python", "USSD"].map(tag => (
            <span key={tag} style={{
              padding: "4px 12px",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "100px", fontSize: "0.78rem",
              color: "#64748b", background: "rgba(255,255,255,0.03)",
            }}>
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
