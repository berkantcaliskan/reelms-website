"use client";

import { useState } from "react";
import Header from "@/components/Header";


const TOPICS = [
  "Spam",
  "Violence",
  "Harassment",
  "Hate Speech",
  "Security Vulnerability",
  "Bug Report",
  "Impersonation",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(185, 152, 135, 0.07)",
  border: "1px solid rgba(185, 152, 135, 0.15)",
  borderRadius: "999px",
  padding: "13px 20px",
  fontFamily: "var(--font-jakarta), sans-serif",
  fontSize: "14px",
  color: "#b99887",
  outline: "none",
  boxSizing: "border-box",
};

export default function ReportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!name.trim() || !message.trim() || !topic) return;
    if (topic === "Other" && !customTopic.trim()) return;
    setSending(true);
    setError("");

    const res = await fetch("/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, topic, customTopic, message }),
    });

    setSending(false);

    if (res.ok) {
      setSent(true);
      setName("");
      setEmail("");
      setTopic("");
      setCustomTopic("");
      setMessage("");
      setTimeout(() => setSent(false), 4000);
    } else {
      setError("Failed to send. Please try again.");
    }
  };

  const canSubmit = name.trim() && message.trim() && topic && (topic !== "Other" || customTopic.trim());

  return (
    <div style={{ background: "color-mix(in srgb, #b99887 10%, #0c0c20)", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>

<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10vh 24px 14vh", position: "relative", zIndex: 10 }}>
          <div style={{ width: "100%", maxWidth: "560px", display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* Hero */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(11px, 1.5vw, 13px)",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #68c586, #b99887)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Safety &amp; Transparency
              </p>

              <h1 style={{
                fontFamily: "var(--font-dela), sans-serif",
                fontSize: "clamp(28px, 5.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#b99887",
                margin: 0,
              }}>
                Report Bug or{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Vulnerability
                </span>
              </h1>

              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(13px, 1.4vw, 14px)",
                color: "#b99887",
                opacity: 0.5,
                lineHeight: 1.75,
                marginTop: "4px",
              }}>
                We treat security vulnerabilities with the utmost priority and are committed to maintaining the highest standards of data integrity for our users.
              </p>
            </div>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#b99887",
                opacity: 0.4,
                marginBottom: "4px",
              }}>
                Contact
              </p>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
              />

              {/* Topic chips */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#b99887",
                  opacity: 0.35,
                  marginBottom: "2px",
                }}>
                  Topic
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {TOPICS.map(t => {
                    const isSelected = topic === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { setTopic(t); setCustomTopic(""); }}
                        style={{
                          fontFamily: "var(--font-jakarta), sans-serif",
                          fontSize: "13px",
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected ? "#68c586" : "#b99887",
                          background: isSelected ? "rgba(104,197,134,0.08)" : "rgba(185,152,135,0.05)",
                          border: `1px solid ${isSelected ? "rgba(104,197,134,0.4)" : "rgba(185,152,135,0.13)"}`,
                          borderRadius: "999px",
                          padding: "10px 16px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          textAlign: "center",
                        }}
                        onMouseEnter={e => { if (!isSelected) e.currentTarget.style.borderColor = "rgba(185,152,135,0.3)"; }}
                        onMouseLeave={e => { if (!isSelected) e.currentTarget.style.borderColor = "rgba(185,152,135,0.13)"; }}
                      >
                        {t === "Other" ? "Other, elaborate." : t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom topic input — shown only when Other is selected */}
              {topic === "Other" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <input
                    type="text"
                    placeholder="Please specify your topic."
                    value={customTopic}
                    onChange={e => setCustomTopic(e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: "rgba(104,197,134,0.25)",
                    }}
                  />
                  <p style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "11px",
                    color: "#68c586",
                    opacity: 0.5,
                    paddingLeft: "4px",
                  }}>
                    Please specify your topic — required when selecting Other.
                  </p>
                </div>
              )}

              {/* Message textarea */}
              <div style={{ position: "relative" }}>
                <textarea
                  placeholder="Describe the issue in detail…"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={6}
                  style={{
                    ...inputStyle,
                    borderRadius: "20px",
                    resize: "none",
                    paddingBottom: "52px",
                    lineHeight: 1.6,
                    display: "block",
                  }}
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={sending || !canSubmit}
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: sent ? "rgba(104,197,134,0.2)" : "rgba(185,152,135,0.12)",
                    border: `1px solid ${sent ? "rgba(104,197,134,0.4)" : "rgba(185,152,135,0.2)"}`,
                    borderRadius: "999px",
                    padding: "7px 18px",
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: sent ? "#68c586" : "#b99887",
                    cursor: (sending || !canSubmit) ? "not-allowed" : "pointer",
                    opacity: (sending || !canSubmit) ? 0.45 : 1,
                    transition: "all 0.2s",
                  }}
                >
                  {sent ? "Sent ✓" : sending ? "Sending…" : "Send"}
                </button>
              </div>

              {error && (
                <p style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "12px",
                  color: "#e07070",
                  textAlign: "center",
                }}>
                  {error}
                </p>
              )}

              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "12px",
                color: "#b99887",
                opacity: 0.35,
                textAlign: "center",
                lineHeight: 1.6,
                marginTop: "4px",
              }}>
                or directly send mail to{" "}
                <a
                  href="mailto:admin@reelms.io"
                  style={{ color: "#b99887", opacity: 1, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  admin@reelms.io
                </a>
              </p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
