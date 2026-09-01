"use client";

import Header from "@/components/Header";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="animated-reelms-bg" style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>

      <img
        src="/landinglight.svg"
        alt=""
        aria-hidden="true"
        className="light-beam"
        style={{ position: "absolute", top: "30vh", left: "50%", transform: "translateX(-50%)", width: "110vw", maxWidth: "1100px", height: "auto", pointerEvents: "none", zIndex: 0 }}
      />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4vh 24px 12vh",
          position: "relative",
          zIndex: 10,
        }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "48px", textAlign: "center" }}>

            {/* Heading */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#b99887",
                opacity: 0.4,
              }}>
                Desktop App
              </p>
              <h1 style={{
                fontFamily: "var(--font-dela), sans-serif",
                fontSize: "clamp(36px, 7vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.05,
                margin: 0,
                color: "#b99887",
              }}>
                Get Reelms{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Now.
                </span>
              </h1>
            </div>

            {/* Download buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>

              {/* Windows */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <a
                  href="https://github.com/berkantcaliskan/reelms-project/releases/download/v1.0.0/Reelms-Setup-1.0.0.exe"
                  download
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "rgba(185, 152, 135, 0.07)",
                    border: "1px solid rgba(185, 152, 135, 0.2)",
                    borderRadius: "999px",
                    padding: "16px 32px",
                    cursor: "pointer",
                    opacity: 1,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(185,152,135,0.12)"; e.currentTarget.style.borderColor = "rgba(185,152,135,0.35)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(185,152,135,0.07)"; e.currentTarget.style.borderColor = "rgba(185,152,135,0.2)"; }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    {/* top-left — only top-left corner rounded */}
                    <path d="M1.5,0 L9.25,0 L9.25,9.25 L0,9.25 L0,1.5 A1.5,1.5 0 0,1 1.5,0 Z" fill="#b99887" opacity="0.9"/>
                    {/* top-right — only top-right corner rounded */}
                    <path d="M10.75,0 L18.5,0 A1.5,1.5 0 0,1 20,1.5 L20,9.25 L10.75,9.25 Z" fill="#b99887" opacity="0.75"/>
                    {/* bottom-left — only bottom-left corner rounded */}
                    <path d="M0,10.75 L9.25,10.75 L9.25,20 L1.5,20 A1.5,1.5 0 0,1 0,18.5 Z" fill="#b99887" opacity="0.75"/>
                    {/* bottom-right — only bottom-right corner rounded */}
                    <path d="M10.75,10.75 L20,10.75 L20,18.5 A1.5,1.5 0 0,1 18.5,20 L10.75,20 Z" fill="#b99887" opacity="0.55"/>
                  </svg>
                  <span style={{ whiteSpace: "nowrap" }}>
                    <span style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "clamp(13px, 1.6vw, 15px)", color: "#b99887", fontWeight: 500 }}>Download for </span>
                    <span style={{ fontFamily: "var(--font-dela), sans-serif", fontSize: "clamp(14px, 1.8vw, 17px)", color: "#b99887", fontWeight: 400 }}>Windows</span>
                  </span>
                </a>
                <div style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "11px",
                  color: "#b99887",
                  opacity: 0.3,
                  letterSpacing: "0.08em",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}>
                  <span>Version 1.1 / 2026</span>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>Windows 10 / 11</span>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>x64</span>
                </div>
              </div>

              {/* Mac */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <button
                  disabled
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "rgba(185, 152, 135, 0.04)",
                    border: "1px solid rgba(185, 152, 135, 0.1)",
                    borderRadius: "999px",
                    padding: "16px 32px",
                    cursor: "not-allowed",
                    opacity: 0.45,
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#b99887"/>
                  </svg>
                  <span style={{ whiteSpace: "nowrap" }}>
                    <span style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "clamp(13px, 1.6vw, 15px)", color: "#b99887", fontWeight: 500 }}>Download for </span>
                    <span style={{ fontFamily: "var(--font-dela), sans-serif", fontSize: "clamp(14px, 1.8vw, 17px)", color: "#b99887", fontWeight: 400 }}>Mac</span>
                  </span>
                </button>
                <p style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontSize: "11px",
                  color: "#b99887",
                  opacity: 0.25,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  Coming Soon
                </p>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
