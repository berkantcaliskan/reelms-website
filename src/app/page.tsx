"use client";

import Link from "next/link";
import Header from "@/components/Header";
import CatParticles from "@/components/CatParticles";

export default function Beginning() {
  return (
    <div className="animated-reelms-bg" style={{ position: "relative", overflowX: "hidden", minHeight: "100vh" }}>

      <img
        src="/landinglight.svg"
        alt=""
        aria-hidden="true"
        className="light-beam"
        style={{ position: "absolute", top: "35vh", left: "50%", transform: "translateX(-50%)", width: "110vw", maxWidth: "1100px", height: "auto", pointerEvents: "none", zIndex: 0 }}
      />

{/* First viewport */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <CatParticles />
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "18vh", textAlign: "center", gap: "14px", position: "relative", zIndex: 10 }}>

          {/* "THE WORLD IS IN" */}
          <p style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontSize: "clamp(12px, 3vw, 20px)",
            fontWeight: 700,
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
          <h1 style={{ fontFamily: "var(--font-dela), sans-serif", fontSize: "clamp(32px, 7vw, 68px)", fontWeight: 400, lineHeight: 1.05 }}>
            <span style={{ color: "#b99887" }}>only one </span>
            <span style={{ background: "linear-gradient(90deg, #b99887, #68c586)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Reelm.
            </span>
          </h1>

          {/* Download link */}
          <Link
            href="/download"
            style={{
              marginTop: "28px",
              fontFamily: "var(--font-jakarta), sans-serif",
              fontSize: "clamp(13px, 1.6vw, 16px)",
              fontWeight: 600,
              color: "var(--ta)",
              textDecoration: "none",
              opacity: 0.7,
              letterSpacing: "0.03em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >
            Download <strong>Reelms</strong> ›
          </Link>
        </main>
      </div>
    </div>
  );
}
