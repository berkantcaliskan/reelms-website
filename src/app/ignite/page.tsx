"use client";

import Header from "@/components/Header";
import CatParticles from "@/components/CatParticles";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";

const features = [
  "Premium ecosystem upgrades",
  "High capacity media sharing",
  "Advanced scaling tools",
  "Exclusive creator assets",
  "More customization and expanded limits for usage",
];

export default function IgnitePage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <CatParticles />
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "24px", paddingRight: "24px", paddingTop: "8vh", paddingBottom: "8vh", textAlign: "center", gap: "0", position: "relative", zIndex: 10 }}>

          {/* Reelms — small */}
          <p style={{
            fontFamily: "var(--font-karla), 'Karla', sans-serif",
            fontSize: "clamp(12px, 2vw, 16px)",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#68c586",
            marginBottom: "6px",
          }}>
            Reelms
          </p>

          {/* Ignite — large rainbow */}
          <h1
            className="ignite-text"
            style={{
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "clamp(42px, 9vw, 84px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Ignite
          </h1>

          {/* Body text */}
          <div style={{ maxWidth: "560px", marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "rgba(245, 230, 222, 0.8)",
              lineHeight: 1.65,
            }}>
              Reelms is currently in Beta. During this period, Ignite perks and in-app upgrades are unlocked for early testers. Reelms Ignite will be officially available with the upcoming full release.
            </p>

            <div style={{ textAlign: "left", background: "rgba(24, 20, 22, 0.6)", border: "1px solid rgba(185, 152, 135, 0.18)", borderRadius: "20px", padding: "24px" }}>
              <p style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--ta)",
                marginBottom: "16px",
              }}>
                Exclusive features you will unlock with Ignite:
              </p>

              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "12px 20px" }}>
                {features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "13px",
                      color: "rgba(245, 230, 222, 0.75)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ flexShrink: 0, color: "#68c586", fontWeight: 800 }}>✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
