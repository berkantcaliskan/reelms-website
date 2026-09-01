"use client";

import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";

const phases = [
  {
    phase: "Phase 1",
    title: "Deep Integration",
    date: "Late 2026",
    body: "Expanding the \"All-in-One\" structure to include autonomous agent capabilities that handle repetitive tasks (scheduling, file organization) without user input.",
  },
  {
    phase: "Phase 2",
    title: "Private Edge Computing",
    date: "2027",
    body: "Moving more AI processing to your local device. This ensures that the \"Safety & Privacy\" standards reach their theoretical limit — data that never even leaves your hardware.",
  },
  {
    phase: "Phase 3",
    title: "The Global Creative Mesh",
    date: "2028+",
    body: "Connecting individual \"Reelms\" into a decentralized network where creators can collaborate securely without relying on giant, data-harvesting intermediaries.",
  },
];

const body: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "clamp(14px, 1.4vw, 16px)",
  color: "rgba(245, 230, 222, 0.8)",
  lineHeight: 1.8,
};

const divider: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, transparent, rgba(185,152,135,0.25), transparent)",
};

export default function FutureVisionPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "6vh 24px 8vh", position: "relative", zIndex: 10 }}>
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
                The Future{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Vision:
                </span>
                {" "}Beyond{" "}
                <span style={{
                  background: "linear-gradient(90deg, #68c586, #b99887)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  2026
                </span>
              </h1>
            </div>

            <div style={divider} />

            {/* Intro */}
            <p style={{ ...body, opacity: 0.6 }}>
              Our roadmap isn&rsquo;t just about adding features; it&rsquo;s about evolving the relationship between humans and digital ecosystems.
            </p>

            <div style={divider} />

            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {phases.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: "0" }}>

                  {/* Timeline column */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "32px", flexShrink: 0 }}>
                    {/* Big dot */}
                    <div style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#68c586",
                      opacity: 0.7,
                      flexShrink: 0,
                      marginTop: "5px",
                    }} />
                    {/* Connector — dotted line to next phase */}
                    {i < phases.length - 1 && (
                      <div style={{
                        flex: 1,
                        width: "2px",
                        backgroundImage: "radial-gradient(circle, rgba(104,197,134,0.4) 1px, transparent 1px)",
                        backgroundSize: "2px 9px",
                        backgroundRepeat: "repeat-y",
                        margin: "7px 0",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{
                    paddingLeft: "24px",
                    paddingBottom: i < phases.length - 1 ? "44px" : "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#68c586",
                        opacity: 0.7,
                      }}>
                        {p.phase}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "clamp(11px, 1.2vw, 12px)",
                        color: "#b99887",
                        opacity: 0.3,
                      }}>
                        {p.date}
                      </span>
                    </div>

                    <p style={{
                      fontFamily: "var(--font-dela), sans-serif",
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontWeight: 400,
                      color: "#b99887",
                      margin: 0,
                    }}>
                      {p.title}
                    </p>

                    <p style={{ ...body, opacity: 0.55, margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={divider} />

            {/* Takeaway */}
            <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#b99887",
                opacity: 0.35,
              }}>
                The Takeaway
              </p>
              <p style={{ ...body, opacity: 0.65 }}>
                Our vision is to build a digital home that is as safe as a vault, as functional as a professional workstation, and as intuitive as a conversation with a friend.
              </p>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
