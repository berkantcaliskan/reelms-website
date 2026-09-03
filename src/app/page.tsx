"use client";

import Link from "next/link";
import Header from "@/components/Header";
import CatParticles from "@/components/CatParticles";
import AppPreviewShowcase from "@/components/AppPreviewShowcase";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import FeaturesSections from "@/components/FeaturesSections";
import Footer from "@/components/Footer";

export default function Beginning() {
  return (
    <div style={{ position: "relative", overflowX: "hidden", minHeight: "100vh", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      {/* First viewport */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <CatParticles />
        <Header />

        <main style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
          paddingTop: "2vh",
          paddingBottom: "8vh",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(28px, 4.5vw, 64px)",
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
              {/* Main Headline (All caps, strictly 2 rows) */}
              <h1 style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(26px, 5.8vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                margin: 0,
              }}>
                <span style={{ display: "block", color: "#f5e6de", whiteSpace: "nowrap" }}>
                  BRING YOUR
                </span>
                <span style={{
                  display: "block",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(90deg, #b99887 0%, #88ab86 50%, #68c586 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  FRIENDS TOGETHER.
                </span>
              </h1>

              {/* Subheading */}
              <p style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 21px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#b99887",
                margin: 0,
              }}>
                The world is in only one Reelm.
              </p>

              {/* Short English Summary */}
              <p style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                color: "rgba(245, 230, 222, 0.78)",
                lineHeight: 1.55,
                maxWidth: "460px",
                margin: "4px 0 8px",
              }}>
                A serene, all-in-one digital space built for meaningful communities, fluid voice hangouts, rich conversations, and expressive profiles.
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
                  Reelms Web ›
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
                  Download App
                </Link>
              </div>
            </div>

            {/* Right Cascading App Mockup Showcase */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <AppPreviewShowcase />
            </div>
          </div>
        </main>

        {/* Feature Highlights & Bento Sections */}
        <FeaturesSections />

        {/* Website Footer */}
        <Footer />
      </div>
    </div>
  );
}
