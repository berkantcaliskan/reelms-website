"use client";

import Link from "next/link";

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), sans-serif",
  fontSize: "clamp(13px, 1.6vw, 16px)",
  fontWeight: 600,
  color: "var(--ta)",
  textDecoration: "none",
  opacity: 0.7,
  letterSpacing: "0.03em",
  transition: "opacity 0.2s",
};

export default function CTALinks() {
  return (
    <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
      <Link
        href="https://app.reelms.io"
        style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
      >
        <strong>Reelms Web</strong> ›
      </Link>

      <span style={{ opacity: 0.25, color: "var(--ta)", fontSize: "clamp(13px, 1.6vw, 16px)" }}>|</span>

      <Link
        href="/download"
        style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
      >
        Download <strong>Reelms</strong> ›
      </Link>
    </div>
  );
}
