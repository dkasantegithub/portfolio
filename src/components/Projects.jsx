import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const filters = ["All", "Featured", "Laravel", "Vue.js", "Python", "USSD"];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "1.75rem",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.02)",
        transition: "border-color 0.3s",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
      whileHover={{ y: -4 }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,229,160,0.22)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,229,160,0.5)" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {project.featured && (
            <span style={{
              padding: "2px 9px",
              background: "rgba(0,229,160,0.08)",
              border: "1px solid rgba(0,229,160,0.18)",
              borderRadius: "100px", fontSize: "0.68rem",
              color: "var(--accent)", fontWeight: 600,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "var(--font-display)",
            }}>Featured</span>
          )}
        </div>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem",
        color: "#e2e8f0", marginBottom: "0.6rem", letterSpacing: "-0.01em", lineHeight: 1.3,
      }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.72rem", color: "#334155", marginBottom: "0.85rem", fontWeight: 500 }}>
        {project.period}
      </p>

      <p style={{ color: "#475569", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: "1.5rem", fontWeight: 300, flex: 1 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: "3px 9px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "4px", fontSize: "0.73rem",
            color: "#64748b",
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a href={project.github} style={{ color: "#334155", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#e2e8f0"}
          onMouseLeave={e => e.currentTarget.style.color = "#334155"}
        >GitHub ↗</a>
        <a href={project.live} style={{ color: "var(--accent)", fontSize: "0.8rem", textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >Live Demo ↗</a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(p => {
    if (active === "All") return true;
    if (active === "Featured") return p.featured;
    return p.tech.some(t => t.toLowerCase().includes(active.toLowerCase()));
  });

  return (
    <section id="projects" style={{ padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <p style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            Portfolio
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1rem" }}>
            Things I've built.
          </h2>
          <p style={{ color: "#475569", fontSize: "0.95rem", fontWeight: 300, maxWidth: "480px" }}>
            Production systems serving real users across Ghana — government, education, enterprise, and mobile.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
        >
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: "6px 16px",
              border: active === f ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: "100px", background: active === f ? "rgba(0,229,160,0.08)" : "transparent",
              color: active === f ? "var(--accent)" : "#475569",
              fontSize: "0.82rem", fontFamily: "var(--font-display)", fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
