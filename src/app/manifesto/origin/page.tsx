"use client";

import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";

const milestones = [
  {
    title: "Scalability",
    body: "A space supporting up to 25,000 users in its core version, where anyone can establish their own \"kingdom.\"",
  },
  {
    title: "Freedom",
    body: "A sharing environment where creativity isn't stifled by technical constraints, featuring 2 GB file limits.",
  },
  {
    title: "Ecosystem-Centric",
    body: "More than just a social media alternative; it is a framework where communities can build their own economies and rules.",
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

export default function OriginStoryPage() {
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
                From Digital Echo{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Chambers
                </span>
                {" "}to Authentic{" "}
                <span style={{
                  background: "linear-gradient(90deg, #68c586, #b99887)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Ecosystems
                </span>
              </h1>
            </div>

            <div style={divider} />

            {/* Opening */}
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ ...body, opacity: 0.6 }}>
                Once upon a time, the internet was a vast playground where boundaries didn&rsquo;t exist and ideas flowed freely. However, over time, this expansive world gave way to algorithms, noise, and massive echo chambers where users are treated as nothing more than data points. Communities were gathering, but they weren&rsquo;t truly &ldquo;connecting.&rdquo;
              </p>
              <p style={{ ...body, opacity: 0.85, fontWeight: 600 }}>
                This is the void where the idea of Reelms took root.
              </p>
              <p style={{ ...body, opacity: 0.6 }}>
                The name represents both <span style={{ color: "#b99887", opacity: 1, fontWeight: 600 }}>Reality</span> and <span style={{ color: "#b99887", opacity: 1, fontWeight: 600 }}>Realms</span> — worlds with defined boundaries yet infinite possibilities. The project&rsquo;s starting point was the belief that managing a digital community isn&rsquo;t just about &ldquo;starting a group;&rdquo; it&rsquo;s about creating a living, breathing world with its own rules and growth.
              </p>
            </section>

            <div style={divider} />

            {/* MVP section */}
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{
                fontFamily: "var(--font-dela), sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                color: "#b99887",
                margin: 0,
              }}>
                The Turning Point:{" "}
                <span style={{ opacity: 0.5 }}>MVP and Beyond</span>
              </p>

              <p style={{ ...body, opacity: 0.6 }}>
                Reelms <span style={{ opacity: 0.45 }}>(formerly we have named it Hubbit)</span> was initially envisioned as a simple community management tool. However, as technology advanced and needs deepened, the vision evolved. By transitioning to modern architectures like Vite and Capacitor, the goal shifted: Reelms was no longer just a web tool, but a fast, flexible structure thriving in the mobile world.
              </p>

              <p style={{ ...body, opacity: 0.5 }}>
                As the boundaries became clearer, the character of Reelms took shape:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginTop: "4px" }}>
                {milestones.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: "#68c586",
                      opacity: 0.7,
                      letterSpacing: "0.05em",
                      paddingTop: "4px",
                      flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ ...body, opacity: 1, margin: 0 }}>
                      <span style={{ color: "#b99887", fontWeight: 600 }}>{m.title}: </span>
                      <span style={{ opacity: 0.6 }}>{m.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
