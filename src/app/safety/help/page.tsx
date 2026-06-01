"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

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
        a: "We utilize modern architecture and encryption standards compatible with Vite and Capacitor to ensure data security.",
      },
      {
        q: "Where can I find the Privacy Policy?",
        a: "The full Privacy Policy is available within the platform documentation, detailing how your account information and content are handled.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, users have the right to request the deletion of their accounts and the permanent removal of their data from the system.",
      },
    ],
  },
  {
    title: "Technical Limits & Ignite",
    faqs: [
      {
        q: "What are the file upload limits?",
        a: "During the current phase, individual file uploads are subject to specific capacity thresholds to maintain system performance.",
      },
      {
        q: "Why can't I access Ignite features?",
        a: "Reelms is currently in its Beta phase. Ignite features and in-app purchases are temporarily disabled while we optimize the infrastructure.",
      },
      {
        q: "What will Ignite offer?",
        a: "Once launched, Ignite will provide premium tier ecosystems, enhanced file allocation, and specialized scaling toolkits for growing communities.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        q: "I am experiencing a technical bug.",
        a: "Since we are in the Beta phase, we are constantly fine-tuning the ecosystem. Please report any technical issues through our official contact channels.",
      },
      {
        q: "Is the platform mobile-friendly?",
        a: "Yes, the architecture is built using Capacitor to ensure a consistent experience across different devices.",
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
    <div style={{ background: "color-mix(in srgb, #b99887 10%, #0c0c20)", minHeight: "100vh" }}>
      <Header />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Full-width title */}
        <h1 style={{
          fontFamily: "var(--font-dela), sans-serif",
          fontSize: "clamp(28px, 5vw, 44px)",
          color: "#b99887",
          fontWeight: 400,
          marginBottom: "52px",
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
          gridTemplateColumns: "1fr 300px",
          gap: "72px",
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
                        fontFamily: "var(--font-dela), sans-serif",
                        fontSize: "clamp(14px, 1.7vw, 17px)",
                        color: "#b99887",
                        fontWeight: 400,
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
    </div>
  );
}
