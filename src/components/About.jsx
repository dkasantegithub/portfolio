import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "8+", label: "Projects Shipped" },
  { value: "KNUST", label: "Computer Engineering" },
];

const timeline = [
  { role: "Software Engineer", period: "Sept 2021 – Present", duration: "~4 years", desc: "Full-stack development across enterprise ERP, government platforms, EdTech, and USSD services." },
  { role: "Cloud Service Engineer", period: "Aug 2020 – Sept 2021", duration: "1 year · National Service", desc: "Cloud infrastructure management and SMS gateway engineering as a National Service Personnel." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>About Me</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Engineer by trade,<br /><span style={{ color: "#475569" }}>builder by nature.</span>
          </h2>
        </motion.div>

        {/* Responsive grid — stacks on mobile */}
        <div className="about-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p style={{ color: "#64748b", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.25rem", fontWeight: 300 }}>
              I'm <span style={{ color: "#94a3b8", fontWeight: 500 }}>David Kojo Asante</span>, a full-stack software engineer with 5+ years of experience — starting as a Cloud Service Engineer during national service, then transitioning into full-stack development. I hold a First Class degree in <span style={{ color: "#94a3b8" }}>Computer Engineering from KNUST</span>.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.25rem", fontWeight: 300 }}>
              My work spans national government platforms, enterprise ERP systems, educational technology, and USSD-based services. I care about writing clean, maintainable code that works in production — not just demos. I also leverage modern AI development tools to work smarter and ship faster.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2.5rem", fontWeight: 300 }}>
              Outside of engineering, I'm passionate about <span style={{ color: "#94a3b8" }}>media production and audiovisual systems</span>, and learning to play musical instruments.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              {stats.map(stat => (
                <div key={stat.label} style={{ 
                  padding: "1.25rem 1rem", 
                  border: "1px solid rgba(255,255,255,0.06)", 
                  borderRadius: "10px", 
                  background: "rgba(255,255,255,0.02)", 
                  flex: "1 1 80px",
                  minWidth: "80px",
                  textAlign: "center" 
                }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.85rem, 3.5vw, 1.6rem)", fontWeight: 800, color: "var(--accent)", marginBottom: "4px" }}>{stat.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#475569", lineHeight: 1.4 }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <p style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "var(--font-display)" }}>Experience</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timeline.map((item, i) => (
                <motion.div key={item.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{ display: "flex", gap: "1.25rem", paddingBottom: i < timeline.length - 1 ? "1.75rem" : "0" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: i === 0 ? "var(--accent)" : "#1e293b", border: i === 0 ? "none" : "1px solid #334155", boxShadow: i === 0 ? "0 0 10px rgba(0,229,160,0.4)" : "none", marginTop: "4px" }} />
                    {i < timeline.length - 1 && <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.06)", marginTop: "6px" }} />}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "4px" }}>
                      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "#e2e8f0" }}>{item.role}</h4>
                      <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.7rem", color: "#475569" }}>{item.duration}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#334155", marginBottom: "6px", fontWeight: 500 }}>{item.period}</p>
                    <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — info cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Location", value: "Accra, Ghana 🇬🇭" },
              { label: "Education", value: "BSc Computer Engineering, KNUST" },
              { label: "Email", value: "asantedavid0545@gmail.com" },
              { label: "LinkedIn", value: "david-kojo-asante", href: "https://www.linkedin.com/in/david-kojo-asante-2b731b142" },
              { label: "Interests", value: "Media Production · Music" },
            ].map(item => (
              <div key={item.label} style={{ padding: "1rem 1.25rem", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.72rem", color: "#334155", fontWeight: 600, fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.06em", flexShrink: 0 }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: "0.82rem", color: "var(--accent)", textDecoration: "none", textAlign: "right", wordBreak: "break-all" }}>{item.value} ↗</a>
                ) : (
                  <span style={{ fontSize: "0.82rem", color: "#64748b", textAlign: "right", wordBreak: "break-all" }}>{item.value}</span>
                )}
              </div>
            ))}

            <div style={{ marginTop: "0.5rem", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "0.72rem", color: "#334155", fontWeight: 600, fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Education</p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "#e2e8f0", marginBottom: "4px" }}>BSc Computer Engineering — First Class</p>
              <p style={{ fontSize: "0.82rem", color: "#475569" }}>Kwame Nkrumah University of Science and Technology (KNUST)</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
