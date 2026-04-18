import { motion } from "framer-motion";
import { skills, learning } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "8rem 2rem",
      background: "rgba(255,255,255,0.012)",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3rem" }}
        >
          <p style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            Expertise
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            My tech stack.
          </h2>
        </motion.div>

        {/* Skill cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: "1.75rem",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                background: "rgba(8,12,16,0.7)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,229,160,0.2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
            >
              <div style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>{group.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "0.78rem", fontWeight: 700,
                color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1.25rem",
              }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {group.items.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#94a3b8", fontSize: "0.88rem" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(0,229,160,0.5)", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            padding: "1.75rem 2rem",
            border: "1px dashed rgba(0,229,160,0.2)",
            borderRadius: "12px",
            background: "rgba(0,229,160,0.03)",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>
              🔄 Currently Learning
            </p>
            <p style={{ fontSize: "0.78rem", color: "#334155" }}>Actively building with these</p>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {learning.map(item => (
              <span key={item} style={{
                padding: "5px 14px",
                border: "1px solid rgba(0,229,160,0.2)",
                borderRadius: "100px",
                fontSize: "0.8rem",
                color: "#94a3b8",
                background: "rgba(0,229,160,0.05)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
