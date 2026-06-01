"use client";

import Header from "./Header";

export default function ComingSoon() {
  return (
    <div style={{ background: "color-mix(in srgb, #b99887 10%, #0c0c20)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{
          fontFamily: "var(--font-jakarta), sans-serif",
          color: "var(--ta)",
          opacity: 0.35,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontSize: "clamp(11px, 1.8vw, 15px)",
          fontWeight: 600,
        }}>
          we are getting ready
        </p>
      </main>
    </div>
  );
}
