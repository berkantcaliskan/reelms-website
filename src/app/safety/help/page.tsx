"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "What is Reelms?",
        a: "Reelms is a digital community ecosystem designed for seamless interaction and content management.",
      },
      {
        q: "When is the official release?",
        a: "The official release of the Reelms platform is scheduled for November 17, 2026.",
      },
      {
        q: "What is the current version of the platform?",
        a: "The platform is currently operating under the technical nomenclature Version 1.1/2026.",
      },
    ],
  },
  {
    title: "Account & Privacy",
    faqs: [
      {
        q: "How is my data protected?",
        a: "All data in transit is protected via TLS 1.3, and data at rest is encrypted using AES-256. We do not sell user metadata or track behavior across the web.",
      },
      {
        q: "Where can I find the Privacy Policy?",
        a: "Our complete Radical Privacy Manifesto is available directly on our website, detailing our Zero-Bloat and zero-tracking commitments.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Deleting your account triggers a complete hard-wipe of your personal data from active servers within 24 hours.",
      },
    ],
  },
  {
    title: "Technical Limits & Ignite",
    faqs: [
      {
        q: "What are the file upload limits?",
        a: "Free accounts support uploads up to 1 GB. Upgrading to Reelms Ignite increases your limit to 2 GB, and Ignite All unlocks up to 4 GB for lossless files and heavy media.",
      },
      {
        q: "How do Ignite and Server Boosts work?",
        a: "Reelms Ignite unlocks personal premium perks (4K 60FPS streaming, custom identity, expanded limits) and includes 1 one-time server boost. Ignite All provides an all-inclusive power package with 1 recurring monthly server boost plus 1 bonus boost.",
      },
      {
        q: "What is the member capacity per Reelm?",
        a: "Free Reelms support up to 250,000 members with zero bloat. Ignite boosts capacity to 5,000,000 members, and Ignite All unlocks unlimited scale.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        q: "I am experiencing a technical bug.",
        a: "Please report any technical issues or security concerns through our official contact form below or via the Report Vulnerability page.",
      },
      {
        q: "Is Reelms cross-platform?",
        a: "Yes, Reelms is built for seamless performance across Web, Windows Desktop, macOS, and Mobile devices with instant real-time synchronization.",
      },
    ],
  },
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
};

export default function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;
    setSending(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setSending(false);

    if (res.ok) {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSent(false), 3000);
    } else {
      setError("Failed to send. Please try again.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <div style={{ flex: 1, maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Full-width title */}
          <h1 style={{
            fontFamily: "var(--font-karla), 'Karla', sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "#ffffff",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            textTransform: "uppercase",
            marginBottom: "44px",
          }}>
            Reelms Help{" "}
            <span style={{
              background: "linear-gradient(90deg, #b99887, #68c586)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Center</span>
          </h1>

          {/* Two-column layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(36px, 5vw, 64px)",
            alignItems: "start",
          }}>

          {/* Left — FAQ sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px" }}>
            {sections.map(({ title, faqs }) => (
              <section key={title}>
                <h2 style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#b99887",
                  opacity: 0.4,
                  marginBottom: "24px",
                }}>
                  {title}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  {faqs.map(({ q, a }, i) => (
                    <div key={i}>
                      <p style={{
                        fontFamily: "var(--font-karla), 'Karla', sans-serif",
                        fontSize: "clamp(15px, 1.7vw, 18px)",
                        color: "#ffffff",
                        fontWeight: 800,
                        letterSpacing: "-0.015em",
                        marginBottom: "9px",
                      }}>
                        {q}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "clamp(13px, 1.3vw, 14px)",
                        color: "#b99887",
                        opacity: 0.55,
                        lineHeight: 1.75,
                      }}>
                        {a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Bottom note */}
            <p style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "12px",
              color: "#b99887",
              opacity: 0.35,
              lineHeight: 1.7,
            }}>
              For more information, see{" "}
              <Link href="/safety/privacy" style={{ color: "#b99887", opacity: 1, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                terms of use and privacy policy
              </Link>.
            </p>
          </div>

          {/* Right — sticky contact */}
          <div style={{ position: "sticky", top: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>

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

            <div style={{ position: "relative" }}>
              <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
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
                disabled={sending}
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: sent ? "rgba(104, 197, 134, 0.2)" : "rgba(185, 152, 135, 0.12)",
                  border: "1px solid rgba(185, 152, 135, 0.2)",
                  borderRadius: "999px",
                  padding: "7px 18px",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: sent ? "#68c586" : "#b99887",
                  cursor: sending ? "not-allowed" : "pointer",
                  opacity: sending ? 0.6 : 1,
                  transition: "all 0.2s",
                }}
              >
                {sent ? "Sent ✓" : sending ? "Sending..." : "Send"}
              </button>
            </div>

            {error && (
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "12px",
                color: "#e07070",
                textAlign: "center",
                marginTop: "4px",
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
              marginTop: "4px",
              lineHeight: 1.6,
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
      </div>

      <Footer />
      </div>
    </div>
  );
}
