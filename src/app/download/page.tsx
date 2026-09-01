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
            padding: "clamp(32px, 6vh, 60px) clamp(18px, 4vw, 48px)",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* ── Left Side: Get Reelms Now + Description ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start", textAlign: "left" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(104, 197, 134, 0.12)",
                  border: "1px solid rgba(104, 197, 134, 0.3)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                }}
              >
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#68c586", boxShadow: "0 0 8px #68c586" }} />
                <span
                  style={{
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "0.74rem",
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
                  fontSize: "clamp(36px, 5.5vw, 60px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                  textTransform: "uppercase",
                  color: "#f5e6de",
                  margin: 0,
                }}
              >
                GET REELMS{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #b99887 0%, #88ab86 50%, #68c586 100%)",
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
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  color: "rgba(245, 230, 222, 0.8)",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: "520px",
                }}
              >
                Experience the complete Reelms ecosystem with raw desktop performance. Enjoy ultra-low latency voice rooms, crisp 1080p screen sharing, global shortcuts, and zero-bloat resource efficiency.
              </p>

              {/* Highlights Feature List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(245, 230, 222, 0.75)" }}>
                    Ultra-low memory footprint (<strong style={{ color: "#f5e6de" }}>&lt; 120MB RAM</strong>)
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(245, 230, 222, 0.75)" }}>
                    Crystal clear noise-suppressed spatial audio
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "#68c586", fontWeight: 800, fontSize: "14px" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "rgba(245, 230, 222, 0.75)" }}>
                    Instant automatic updates & zero bloatware
                  </span>
                </div>
              </div>

              {/* Web App Link Fallback */}
              <div style={{ marginTop: "12px" }}>
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
                    opacity: 0.85,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.85")}
                >
                  Prefer to stay in your browser? Launch Web App ›
                </Link>
              </div>
            </div>

            {/* ── Right Side: Vertical Stacked Download CTAs ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                width: "100%",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              {/* 1. Windows Download Card (Primary Active) */}
              <a
                href="/api/download/windows"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "linear-gradient(135deg, rgba(32, 25, 29, 0.95) 0%, rgba(20, 16, 18, 0.95) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1.5px solid rgba(185, 152, 135, 0.4)",
                  borderRadius: "20px",
                  padding: "20px 24px",
                  textDecoration: "none",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(185, 152, 135, 0.15)",
                  transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(104, 197, 134, 0.6)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 22px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(104, 197, 134, 0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.4)";
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(185, 152, 135, 0.15)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Windows Icon Tile */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(185, 152, 135, 0.14)",
                      border: "1px solid rgba(185, 152, 135, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M1.5,0 L9.25,0 L9.25,9.25 L0,9.25 L0,1.5 A1.5,1.5 0 0,1 1.5,0 Z" fill="#b99887" />
                      <path d="M10.75,0 L18.5,0 A1.5,1.5 0 0,1 20,1.5 L20,9.25 L10.75,9.25 Z" fill="#b99887" opacity="0.85" />
                      <path d="M0,10.75 L9.25,10.75 L9.25,20 L1.5,20 A1.5,1.5 0 0,1 0,18.5 Z" fill="#b99887" opacity="0.85" />
                      <path d="M10.75,10.75 L20,10.75 L20,18.5 A1.5,1.5 0 0,1 18.5,20 L10.75,20 Z" fill="#b99887" opacity="0.65" />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>
                        Download for Windows
                      </span>
                      <span style={{ padding: "2px 8px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.18)", color: "#86efac", fontSize: "0.68rem", fontWeight: 800 }}>
                        Direct .exe
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(245, 230, 222, 0.65)" }}>
                      Windows 10 / 11 • 64-bit • Auto-updates
                    </span>
                  </div>
                </div>

                {/* Arrow Action Icon */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#b99887",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#181416",
                    fontWeight: 900,
                    fontSize: "14px",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  ↓
                </div>
              </a>

              {/* 2. macOS Download Card (Coming Soon) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(24, 20, 22, 0.65)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(185, 152, 135, 0.15)",
                  borderRadius: "20px",
                  padding: "18px 24px",
                  opacity: 0.75,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Apple Icon Tile */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(185, 152, 135, 0.08)",
                      border: "1px solid rgba(185, 152, 135, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        fill="#b99887"
                      />
                    </svg>
                  </div>

                  {/* Copy */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#f5e6de" }}>
                      Download for macOS
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "rgba(245, 230, 222, 0.55)" }}>
                      Apple Silicon & Intel Universal
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <span style={{ padding: "4px 10px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.12)", color: "#b99887", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                  Coming Soon
                </span>
              </div>

              {/* 3. Linux Download Card (Coming Soon) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(24, 20, 22, 0.65)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(185, 152, 135, 0.15)",
                  borderRadius: "20px",
                  padding: "18px 24px",
                  opacity: 0.75,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Linux Terminal Icon Tile */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(185, 152, 135, 0.08)",
                      border: "1px solid rgba(185, 152, 135, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>🐧</span>
                  </div>

                  {/* Copy */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#f5e6de" }}>
                      Download for Linux
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "rgba(245, 230, 222, 0.55)" }}>
                      .AppImage, .deb & Flatpak
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <span style={{ padding: "4px 10px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.12)", color: "#b99887", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
