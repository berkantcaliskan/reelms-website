"use client";

export default function AmbientGradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        backgroundColor: "#161314",
      }}
    >
      {/* ── Dynamic Floating Color Orbs ── */}

      {/* Orb 1: Warm Mocha / Rose Dark Tone (Top Left / Upper Area) */}
      <div
        className="ambient-orb-1"
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "65vw",
          height: "65vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58, 42, 46, 0.95) 0%, rgba(35, 26, 29, 0.6) 50%, transparent 75%)",
          filter: "blur(70px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* Orb 2: #b99887 Warm Apricot / Sandstone (Top Right / Center Floating) */}
      <div
        className="ambient-orb-2"
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(185, 152, 135, 0.32) 0%, rgba(185, 152, 135, 0.12) 45%, transparent 75%)",
          filter: "blur(85px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* Orb 3: #68c586 Site Emerald Green (Bottom Right / Lower Floating) */}
      <div
        className="ambient-orb-3"
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "5%",
          width: "60vw",
          height: "60vw",
          maxWidth: "750px",
          maxHeight: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(104, 197, 134, 0.26) 0%, rgba(104, 197, 134, 0.08) 50%, transparent 75%)",
          filter: "blur(90px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* Orb 4: Warm Deep Terracotta / Ambient Bridge (Center / Bottom Left) */}
      <div
        className="ambient-orb-4"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "15%",
          width: "50vw",
          height: "50vw",
          maxWidth: "650px",
          maxHeight: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74, 52, 48, 0.45) 0%, rgba(40, 30, 32, 0.2) 50%, transparent 75%)",
          filter: "blur(80px)",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* ── Subtle Film Grain Texture Overlay ── */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.045,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        <filter id="reelms-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#reelms-grain)" />
      </svg>
    </div>
  );
}
