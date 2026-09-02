"use client";

import Header from "@/components/Header";


const principles = [
  {
    label: "A",
    title: "Cognitive Load Reduction",
    subtitle: "We follow the \"Don't Make Me Think\" principle.",
    items: [
      {
        title: "Progressive Disclosure",
        body: "Complex features remain hidden until you actually need them.",
      },
      {
        title: "Intuitive Shortcuts",
        body: "Power users can navigate via commands, while beginners can use natural visual cues.",
      },
    ],
  },
  {
    label: "B",
    title: "Ethical Interaction Design",
    subtitle: null,
    items: [
      {
        title: "No Dark Patterns",
        body: "We never use manipulative UI tactics to keep you \"hooked.\"",
      },
      {
        title: "Intentional Friction",
        body: "For critical actions (like deleting data or making public posts), we introduce a small \"friction\" step to ensure you aren't acting by accident.",
      },
    ],
  },
  {
    label: "C",
    title: "Accessibility (A11y)",
    subtitle: "Safety and privacy aren't just for those who can see or hear perfectly. Our interface complies with WCAG 2.1 Level AA standards, ensuring that:",
    items: [
      {
        title: "Screen readers",
        body: "can navigate the entire structure.",
      },
      {
        title: "Color contrasts",
        body: "are optimized for users with visual impairments.",
      },
      {
        title: "Navigation",
        body: "is fully functional via keyboard-only inputs.",
      },
    ],
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

export default function HumanCentricPage() {
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
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(30px, 5.5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                color: "#ffffff",
                margin: 0,
              }}>
                Human-Centric{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Approach:
                </span>
                {" "}Design for{" "}
                <span style={{
                  background: "linear-gradient(90deg, #68c586, #b99887)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  People
                </span>
              </h1>
            </div>

            <div style={divider} />

            {/* Intro */}
            <p style={{ ...body, opacity: 0.6 }}>
              Technology should serve the human, not the other way around. Our &ldquo;Human-Centric&rdquo; philosophy is built on three specific design choices.
            </p>

            <div style={divider} />

            {/* Principles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {principles.map((p) => (
                <section key={p.label} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                  {/* Section heading */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                    <span style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(13px, 1.8vw, 16px)",
                      fontWeight: 800,
                      color: "#68c586",
                      opacity: 0.7,
                      flexShrink: 0,
                    }}>
                      {p.label}.
                    </span>
                    <p style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "#ffffff",
                      margin: 0,
                    }}>
                      {p.title}
                    </p>
                  </div>

                  {p.subtitle && (
                    <p style={{ ...body, opacity: 0.45 }}>{p.subtitle}</p>
                  )}

                  {/* Items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "18px", paddingLeft: "28px" }}>
                    {p.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                        <span style={{
                          fontFamily: "var(--font-jakarta), sans-serif",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "#68c586",
                          opacity: 0.6,
                          letterSpacing: "0.05em",
                          paddingTop: "4px",
                          flexShrink: 0,
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p style={{ ...body, opacity: 1, margin: 0 }}>
                          <span style={{ color: "#b99887", fontWeight: 600 }}>{item.title}: </span>
                          <span style={{ opacity: 0.55 }}>{item.body}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                </section>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
