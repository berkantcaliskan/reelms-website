"use client";

import Header from "@/components/Header";


const stack = [
  {
    layer: "Interface",
    component: "Cross-Platform UI",
    function: "Consistent experience across Web, Mobile, and Desktop.",
  },
  {
    layer: "Engine",
    component: "Processing Core",
    function: "Real-time data sync and AI computation.",
  },
  {
    layer: "Storage",
    component: "Hybrid Database",
    function: "Local-first storage with secure cloud backup.",
  },
  {
    layer: "Integrations",
    component: "API Gateway",
    function: "Seamless connection to external professional tools.",
  },
];

const body: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), sans-serif",
  fontSize: "clamp(13px, 1.4vw, 15px)",
  color: "#b99887",
  lineHeight: 1.85,
};

const divider: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, transparent, rgba(185,152,135,0.25), transparent)",
};

export default function StructurePage() {
  return (
    <div style={{ background: "color-mix(in srgb, #b99887 10%, #0c0c20)", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>


      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10vh 24px 14vh", position: "relative", zIndex: 10 }}>
          <div style={{ width: "100%", maxWidth: "680px", display: "flex", flexDirection: "column", gap: "52px" }}>

            {/* Hero */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "clamp(11px, 1.5vw, 13px)",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #68c586, #b99887)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                The Manifesto
              </p>

              <h1 style={{
                fontFamily: "var(--font-dela), sans-serif",
                fontSize: "clamp(28px, 5.5vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#b99887",
                margin: 0,
              }}>
                All-in-One{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Structure:
                </span>
                {" "}The Unified{" "}
                <span style={{
                  background: "linear-gradient(90deg, #68c586, #b99887)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Ecosystem
                </span>
              </h1>
            </div>

            <div style={divider} />

            {/* Intro */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={{ ...body, opacity: 0.6 }}>
                Our platform is designed to eliminate &ldquo;context switching.&rdquo; Instead of jumping between fragmented tools, everything exists within a single, high-performance environment.
              </p>
            </section>

            <div style={divider} />

            {/* Technical Stack */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={{
                fontFamily: "var(--font-dela), sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                color: "#b99887",
                marginBottom: "16px",
              }}>
                The Unified Technical Stack
              </p>

              <p style={{ ...body, opacity: 0.5, marginBottom: "32px" }}>
                We utilize a{" "}
                <span style={{ color: "#b99887", fontWeight: 600, opacity: 1 }}>Modular Monolith</span>
                {" "}architecture. This means that while the user sees one seamless app, the backend is composed of specialized engines working in parallel.
              </p>

              {/* Table header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr 1.8fr",
                gap: "0 16px",
                paddingBottom: "10px",
                marginBottom: "4px",
                borderBottom: "1px solid rgba(185,152,135,0.15)",
              }}>
                {["Layer", "Component", "Function"].map(h => (
                  <span key={h} style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#68c586",
                    opacity: 0.7,
                  }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Table rows */}
              {stack.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.8fr 1.2fr 1.8fr",
                    gap: "0 16px",
                    padding: "18px 0",
                    borderBottom: i < stack.length - 1 ? "1px solid rgba(185,152,135,0.08)" : "none",
                    alignItems: "start",
                  }}
                >
                  <span style={{ ...body, opacity: 0.85, fontWeight: 600 }}>{row.layer}</span>
                  <span style={{ ...body, opacity: 0.65 }}>{row.component}</span>
                  <span style={{ ...body, opacity: 0.45, fontSize: "clamp(11px, 1.2vw, 13px)" }}>{row.function}</span>
                </div>
              ))}

              {/* Single Source of Truth */}
              <div style={{
                marginTop: "28px",
                padding: "20px 24px",
                borderLeft: "2px solid #68c586",
                background: "rgba(104,197,134,0.04)",
              }}>
                <p style={{ ...body, opacity: 0.7, margin: 0 }}>
                  <span style={{ color: "#68c586", fontWeight: 600, opacity: 1 }}>The &ldquo;Single Source of Truth&rdquo; Benefit: </span>
                  By keeping your creative projects, community data, and personal insights in one structure, the AI gains a holistic understanding of your goals, leading to significantly higher accuracy in its assistance.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
