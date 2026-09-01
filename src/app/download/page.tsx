"use client";

import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(40px, 7vh, 80px) clamp(20px, 4.5vw, 56px)",
            position: "relative",
            zIndex: 10,
            maxWidth: "1240px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* ── Left Side: Get Reelms Now + Description ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", alignItems: "flex-start", textAlign: "left" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(104, 197, 134, 0.14)",
                  border: "1px solid rgba(104, 197, 134, 0.35)",
                  borderRadius: "999px",
                  padding: "6px 15px",
                }}
              >
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#68c586", boxShadow: "0 0 8px #68c586" }} />
                <span
                  style={{
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    color: "#86efac",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Native Desktop Client
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(38px, 5.8vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
                  margin: 0,
                }}
              >
                GET REELMS{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #d8b8a7 0%, #a8d5a6 50%, #68c586 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  NOW.
                </span>
              </h1>

              {/* Descriptive Overview */}
              <p
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 17px)",
                  color: "rgba(255, 255, 255, 0.88)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "520px",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                Experience the complete Reelms ecosystem with raw desktop performance. Enjoy ultra-low latency voice rooms, crisp 1080p screen sharing, global shortcuts, and zero-bloat resource efficiency.
              </p>

              {/* Highlights Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(255, 255, 255, 0.82)" }}>
                    Ultra-low memory footprint (<strong style={{ color: "#ffffff" }}>&lt; 120MB RAM</strong>)
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(255, 255, 255, 0.82)" }}>
                    Crystal clear noise-suppressed spatial audio
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(255, 255, 255, 0.82)" }}>
                    Instant standalone execution with zero bloatware
                  </span>
                </div>
              </div>

              {/* Web App Link Fallback */}
              <div style={{ marginTop: "8px" }}>
                <Link
                  href="https://app.reelms.io"
                  style={{
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--ta)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    opacity: 0.9,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.9")}
                >
                  Prefer to stay in your browser? Launch Web App ›
                </Link>
              </div>
            </div>

            {/* ── Right Side: Transparent Pill Download CTAs ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                width: "100%",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              {/* 1. Windows Download Pill (Primary Active) */}
              <a
                href="/api/download/windows"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(185, 152, 135, 0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(185, 152, 135, 0.4)",
                  borderRadius: "999px",
                  padding: "14px 22px 14px 20px",
                  textDecoration: "none",
                  transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(185, 152, 135, 0.16)";
                  e.currentTarget.style.borderColor = "rgba(104, 197, 134, 0.65)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(185, 152, 135, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.4)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(185, 152, 135, 0.14)",
                      border: "1px solid rgba(185, 152, 135, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M1.5,0 L9.25,0 L9.25,9.25 L0,9.25 L0,1.5 A1.5,1.5 0 0,1 1.5,0 Z" fill="#b99887" />
                      <path d="M10.75,0 L18.5,0 A1.5,1.5 0 0,1 20,1.5 L20,9.25 L10.75,9.25 Z" fill="#b99887" opacity="0.85" />
                      <path d="M0,10.75 L9.25,10.75 L9.25,20 L1.5,20 A1.5,1.5 0 0,1 0,18.5 Z" fill="#b99887" opacity="0.85" />
                      <path d="M10.75,10.75 L20,10.75 L20,18.5 A1.5,1.5 0 0,1 18.5,20 L10.75,20 Z" fill="#b99887" opacity="0.65" />
                    </svg>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "#ffffff" }}>
                      Download for Windows
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.68)" }}>
                      Windows 10 / 11 • 64-bit
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#b99887",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#181416",
                    fontWeight: 900,
                    fontSize: "14px",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  ↓
                </div>
              </a>

              {/* 2. macOS Download Pill (Coming Soon) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(185, 152, 135, 0.04)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(185, 152, 135, 0.18)",
                  borderRadius: "999px",
                  padding: "14px 22px 14px 20px",
                  opacity: 0.7,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(185, 152, 135, 0.1)",
                      border: "1px solid rgba(185, 152, 135, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        fill="#b99887"
                      />
                    </svg>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.98rem", fontWeight: 800, color: "#ffffff" }}>
                      Download for macOS
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.6)" }}>
                      Apple Silicon & Intel Universal
                    </span>
                  </div>
                </div>

                <span style={{ padding: "4px 11px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.14)", color: "#b99887", fontSize: "0.7rem", fontWeight: 700 }}>
                  Coming Soon
                </span>
              </div>

              {/* 3. Mobile Platforms: iOS App Store & Android Google Play (Side by Side) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {/* iOS App Store */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(185, 152, 135, 0.04)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(185, 152, 135, 0.18)",
                    borderRadius: "999px",
                    padding: "12px 14px",
                    opacity: 0.7,
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(185, 152, 135, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        fill="#b99887"
                      />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      App Store
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)", whiteSpace: "nowrap" }}>
                      iOS · Soon
                    </span>
                  </div>
                </div>

                {/* Android Google Play */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(185, 152, 135, 0.04)",
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",
                    border: "1px solid rgba(185, 152, 135, 0.18)",
                    borderRadius: "999px",
                    padding: "12px 14px",
                    opacity: 0.7,
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "rgba(185, 152, 135, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.296 2.296 0 0 1-.61-.954V2.768c.13-.377.346-.713.61-.954z" fill="#b99887" opacity="0.8"/>
                      <path d="M17.39 8.403l-3.597 3.597 3.597 3.597 4.092-2.338a1.737 1.737 0 0 0 0-3.018l-4.092-2.338z" fill="#68c586"/>
                      <path d="M13.793 12L3.609 1.814a2.27 2.27 0 0 1 1.637-.179l12.144 6.768-3.597 3.597z" fill="#b99887"/>
                      <path d="M13.793 12l3.597 3.597-12.144 6.768a2.27 2.27 0 0 1-1.637-.179L13.793 12z" fill="#b99887" opacity="0.9"/>
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      Google Play
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)", whiteSpace: "nowrap" }}>
                      Android · Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
