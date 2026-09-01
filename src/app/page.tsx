"use client";

import Link from "next/link";
import Header from "@/components/Header";
import CatParticles from "@/components/CatParticles";
import AppPreviewShowcase from "@/components/AppPreviewShowcase";

export default function Beginning() {
  return (
    <div className="animated-reelms-bg" style={{ position: "relative", overflowX: "hidden", minHeight: "100vh" }}>

      <img
        src="/landinglight.svg"
        alt=""
        aria-hidden="true"
        className="light-beam"
        style={{ position: "absolute", top: "25vh", left: "50%", transform: "translateX(-50%)", width: "110vw", maxWidth: "1100px", height: "auto", pointerEvents: "none", zIndex: 0 }}
      />

      {/* First viewport */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <CatParticles />
        <Header />

        <main style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "clamp(20px, 4vw, 48px)",
          paddingRight: "clamp(20px, 4vw, 48px)",
          paddingTop: "2vh",
          paddingBottom: "10vh",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
            width: "100%",
          }}>
            {/* Left Copy Section */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              gap: "16px",
            }}>
              {/* "THE WORLD IS IN" */}
              <p style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(12px, 2vw, 18px)",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #68c586, #b99887)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                The world is in
              </p>

              {/* "only one Reelm." */}
              <h1 style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(38px, 6vw, 76px)",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
              }}>
                <span style={{ color: "#b99887" }}>only one </span>
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Reelm.
                </span>
              </h1>

              <p style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: "rgba(245, 230, 222, 0.78)",
                lineHeight: 1.5,
                maxWidth: "460px",
                margin: "4px 0 12px",
              }}>
                Toplulukların, canlı ses odalarının, mesajların ve özel profil alanlarının birleştiği sakin ve samimi yeni alan.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="https://app.reelms.io"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#b99887",
                    color: "#181416",
                    padding: "12px 26px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "15px",
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(185, 152, 135, 0.35)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Web Betaya Gir ›
                </Link>

                <Link
                  href="/download"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(185, 152, 135, 0.08)",
                    border: "1px solid rgba(185, 152, 135, 0.25)",
                    color: "#f5e6de",
                    padding: "11px 22px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.16)"; e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.08)"; e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.25)"; }}
                >
                  Desktop Sürümü
                </Link>
              </div>
            </div>

            {/* Right Cascading App Mockup Showcase */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <AppPreviewShowcase />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
