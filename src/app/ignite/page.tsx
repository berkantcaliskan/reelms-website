"use client";

import Header from "@/components/Header";
import CatParticles from "@/components/CatParticles";

const features = [
  "Premium ecosystem upgrades",
  "High capacity media sharing",
  "Advanced scaling tools",
  "Exclusive creator assets",
  "More customization and expanded limits for usage",
];

export default function IgnitePage() {
  return (
    <div style={{ background: "color-mix(in srgb, #b99887 10%, #0c0c20)", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>

      <img
        src="/landinglight.svg"
        alt=""
        aria-hidden="true"
        className="light-beam"
        style={{ position: "absolute", top: "35vh", left: "50%", transform: "translateX(-50%)", width: "110vw", maxWidth: "1100px", height: "auto", pointerEvents: "none", zIndex: 0 }}
      />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <CatParticles />
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12vh", paddingBottom: "12vh", textAlign: "center", gap: "0", position: "relative", zIndex: 10 }}>

          {/* Reelms — small */}
          <p style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "clamp(12px, 3vw, 20px)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#b99887",
            opacity: 0.7,
            marginBottom: "6px",
          }}>
            Reelms
          </p>

          {/* Ignite — large rainbow */}
          <h1
            className="ignite-text"
            style={{
              fontFamily: "var(--font-dela), sans-serif",
              fontSize: "clamp(48px, 10vw, 96px)",
              fontWeight: 400,
            }}
          >
            Ignite
          </h1>

          {/* Body text */}
          <div style={{ maxWidth: "540px", marginTop: "52px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "#b99887",
              opacity: 0.65,
              lineHeight: 1.75,
            }}>
              Reelms is currently in its Beta phase. During this period, Ignite features and all in-app purchases are not active. Reelms Ignite will be officially available here with the upcoming full release.
            </p>

            <div style={{ textAlign: "left" }}>
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(13px, 1.5vw, 15px)",
                color: "#b99887",
                opacity: 0.65,
                lineHeight: 1.75,
                marginBottom: "16px",
              }}>
                Here are some of the exclusive features you will be able to unlock with Ignite soon:
              </p>

              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                {features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontSize: "clamp(13px, 1.5vw, 15px)",
                      color: "#b99887",
                      opacity: 0.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ flexShrink: 0, opacity: 0.6 }}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
