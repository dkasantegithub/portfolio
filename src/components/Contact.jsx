import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_m0dng44";
const TEMPLATE_ID = "template_snct1tq";
const PUBLIC_KEY = "oCPMeRlYAPiW9014M";

const socials = [
  {
    label: "Email",
    value: "asantedavid0545@gmail.com",
    href: "mailto:asantedavid0545@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "david-kojo-asante",
    href: "https://www.linkedin.com/in/david-kojo-asante-2b731b142",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+233 54 565 5958",
    href: "tel:+233545655958",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.7a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l1.06-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: `Message from ${form.name}`,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.85rem 1rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px", color: "#e2e8f0",
    fontSize: "0.9rem", outline: "none",
    fontFamily: "var(--font-body)", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "8rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            Contact
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1rem" }}>
            Let's work together.
          </h2>
          <p style={{ color: "#475569", fontSize: "1rem", fontWeight: 300, maxWidth: "440px" }}>
            Open to new opportunities, collaborations, or just a good conversation about building something great.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {socials.map((s) => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1.1rem 1.25rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.02)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,229,160,0.2)"; e.currentTarget.style.background = "rgba(0,229,160,0.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <p style={{ fontSize: "0.72rem", color: "#334155", fontWeight: 600, fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>{s.label}</p>
                  <p style={{ fontSize: "0.85rem", color: "#64748b" }}>{s.value}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "#334155", fontSize: "0.8rem" }}>↗</span>
              </a>
            ))}

            {/* Availability badge */}
            <div style={{
              marginTop: "0.5rem", padding: "1rem 1.25rem",
              border: "1px dashed rgba(0,229,160,0.15)",
              borderRadius: "10px",
              background: "rgba(0,229,160,0.02)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)", display: "inline-block" }} />
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Available</span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.6 }}>
                Open to freelance projects, contract work, and full-time opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "3rem", border: "1px solid rgba(0,229,160,0.2)",
                  borderRadius: "14px", background: "rgba(0,229,160,0.04)", textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
                <p style={{ color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Message sent!
                </p>
                <p style={{ color: "#475569", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    padding: "0.6rem 1.5rem",
                    border: "1px solid rgba(0,229,160,0.3)",
                    borderRadius: "6px",
                    background: "transparent",
                    color: "var(--accent)",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* Error banner */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: "0.85rem 1.25rem",
                      border: "1px solid rgba(239,68,68,0.25)",
                      borderRadius: "8px",
                      background: "rgba(239,68,68,0.05)",
                      fontSize: "0.85rem",
                      color: "#f87171",
                    }}
                  >
                    Something went wrong. Please try again or email me directly at{" "}
                    <a href="mailto:asantedavid0545@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
                      asantedavid0545@gmail.com
                    </a>
                  </motion.div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    style={{ ...inputStyle, opacity: status === "sending" ? 0.6 : 1 }}
                    onFocus={e => e.target.style.borderColor = "rgba(0,229,160,0.35)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                    style={{ ...inputStyle, opacity: status === "sending" ? 0.6 : 1 }}
                    onFocus={e => e.target.style.borderColor = "rgba(0,229,160,0.35)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                  style={{ ...inputStyle, resize: "vertical", opacity: status === "sending" ? 0.6 : 1 }}
                  onFocus={e => e.target.style.borderColor = "rgba(0,229,160,0.35)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    padding: "0.9rem 2rem",
                    background: status === "sending" ? "rgba(0,229,160,0.6)" : "var(--accent)",
                    color: "#080c10",
                    border: "none", borderRadius: "8px",
                    fontWeight: 700, fontFamily: "var(--font-display)", fontSize: "0.95rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    alignSelf: "flex-start",
                    transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                    display: "flex", alignItems: "center", gap: "8px",
                  }}
                  onMouseEnter={e => { if (status !== "sending") { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,229,160,0.3)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {status === "sending" ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
