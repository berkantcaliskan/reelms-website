"use client";

import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";


const commitments = [
  {
    title: "Your data is not our product.",
    body: "We do not, and will never, sell your personal information to third parties or advertisers.",
  },
  {
    title: "No Ghost Tracking.",
    body: "We don't follow you across the web. What you do outside of Reelms is none of our business.",
  },
  {
    title: "Zero-Incentive Engineering.",
    body: "Our algorithms are built for relevance, not addiction. We don't profit from your \"time spent\" through manipulative loops.",
  },
  {
    title: "Total Portability.",
    body: "Your digital life shouldn't be a hostage situation. If you leave, you take your data with you. Period.",
  },
];

const ledger = [
  {
    type: "Account Identity",
    purpose: "Authentication & Security",
    duration: "Account Lifetime",
    unlike: "No shadow profiles or cross-app linking.",
  },
  {
    type: "Media Files",
    purpose: "Hosting your content",
    duration: "Until Deleted",
    unlike: "No AI Training. We don't use your files to train LLMs.",
  },
  {
    type: "Usage Metrics",
    purpose: "Performance & Load Testing",
    duration: "30 Days (Aggregated)",
    unlike: "No \"Micro-behavioral\" tracking of scroll depth/eye-tracking.",
  },
  {
    type: "IP Address",
    purpose: "Security & DDoS Protection",
    duration: "Session-based",
    unlike: "We don't use your location for targeted ads.",
  },
];

const technical = [
  {
    title: "Encryption",
    body: "All data in transit is protected via TLS 1.3, and data at rest is encrypted using AES-256. Private communications within the ecosystem utilize end-to-end encryption (E2EE) protocols.",
  },
  {
    title: "Server Architecture",
    body: "Our infrastructure is hosted on secure, high-performance nodes located in Frankfurt, Germany (EU), ensuring your data falls under some of the strictest privacy protections in the world.",
  },
  {
    title: "Third-Party Cleanliness",
    body: "Reelms is built with a Zero-Bloat policy. We do not use third-party marketing SDKs (like Facebook Pixel or Google Analytics) that leak user metadata.",
  },
];

const sovereignty = [
  {
    title: "The Kill Switch",
    body: "Deleting your account is a single-click process. When you hit delete, we trigger a hard-wipe of your data from our active servers within 24 hours.",
  },
  {
    title: "Data Export",
    body: "Download a complete JSON archive of your contributions, media, and settings at any time.",
  },
  {
    title: "Granular Visibility",
    body: "Our privacy settings default to the most restrictive options. You decide who sees your \"Reelms\" and when.",
  },
];

const body: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "clamp(14px, 1.4vw, 16px)",
  color: "rgba(245, 230, 222, 0.8)",
  lineHeight: 1.8,
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "clamp(20px, 2.5vw, 26px)",
  fontWeight: 800,
  color: "#b99887",
  marginBottom: "24px",
};

const divider: React.CSSProperties = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, transparent, rgba(185,152,135,0.25), transparent)",
  margin: "0",
};

export default function RadicalPrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "6vh 24px 8vh", position: "relative", zIndex: 10 }}>
          <div style={{ width: "100%", maxWidth: "680px", display: "flex", flexDirection: "column", gap: "56px" }}>

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
                Safety &amp; Transparency
              </p>

              <h1 style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(32px, 6vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                color: "#ffffff",
                margin: 0,
              }}>
                Radical Privacy{" "}
                <span style={{
                  background: "linear-gradient(90deg, #b99887, #68c586)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Manifesto
                </span>
              </h1>
            </div>

            <div style={divider} />

            {/* Core Commitments */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={sectionTitle}>Our Core Commitments</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {commitments.map((c, i) => (
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
                    <p style={{ ...body, opacity: 1 }}>
                      <span style={{ color: "#b99887", fontWeight: 600, opacity: 1 }}>{c.title}</span>{" "}
                      <span style={{ opacity: 0.6 }}>{c.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div style={divider} />

            {/* Transparency Ledger */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={sectionTitle}>
                What We Collect &amp; Why{" "}
                <span style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "clamp(13px, 1.4vw, 15px)", fontWeight: 500, opacity: 0.5 }}>
                  — The Transparency Ledger
                </span>
              </p>

              <p style={{ ...body, opacity: 0.5, marginBottom: "32px" }}>
                We only collect what is mechanically necessary to keep the lights on and the community safe.
              </p>

              {/* Table header */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr 1.1fr 1.6fr",
                gap: "0 16px",
                paddingBottom: "10px",
                marginBottom: "4px",
                borderBottom: "1px solid rgba(185,152,135,0.15)",
              }}>
                {["Data Type", "Purpose", "Duration", "Unlike Others…"].map(h => (
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
              {ledger.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.1fr 1.4fr 1.1fr 1.6fr",
                    gap: "0 16px",
                    padding: "18px 0",
                    borderBottom: i < ledger.length - 1 ? "1px solid rgba(185,152,135,0.08)" : "none",
                    alignItems: "start",
                  }}
                >
                  <span style={{ ...body, opacity: 0.85, fontWeight: 600 }}>{row.type}</span>
                  <span style={{ ...body, opacity: 0.55 }}>{row.purpose}</span>
                  <span style={{ ...body, opacity: 0.55 }}>{row.duration}</span>
                  <span style={{ ...body, opacity: 0.45, fontSize: "clamp(11px, 1.2vw, 13px)" }}>{row.unlike}</span>
                </div>
              ))}

              {/* Reelms Difference */}
              <div style={{
                marginTop: "28px",
                padding: "20px 24px",
                borderLeft: "2px solid #68c586",
                background: "rgba(104,197,134,0.04)",
              }}>
                <p style={{ ...body, opacity: 0.7, margin: 0 }}>
                  <span style={{ color: "#68c586", fontWeight: 600, opacity: 1 }}>The Reelms Difference: </span>
                  We do not collect your contacts, your microphone data, or your browsing history from other apps. If we don't need it to run the ecosystem, we don't touch it.
                </p>
              </div>
            </section>

            <div style={divider} />

            {/* Technical Infrastructure */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={sectionTitle}>Technical Infrastructure</p>
              <p style={{ ...body, opacity: 0.45, marginBottom: "28px" }}>
                We believe privacy is a technical feature, not just a legal promise.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {technical.map((t, i) => (
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
                    <p style={{ ...body, opacity: 1 }}>
                      <span style={{ color: "#b99887", fontWeight: 600 }}>{t.title}: </span>
                      <span style={{ opacity: 0.6 }}>{t.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div style={divider} />

            {/* Absolute User Sovereignty */}
            <section style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <p style={sectionTitle}>Absolute User Sovereignty</p>
              <p style={{ ...body, opacity: 0.45, marginBottom: "28px" }}>
                You are the admin of your own presence. We provide the tools to prove it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {sovereignty.map((s, i) => (
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
                    <p style={{ ...body, opacity: 1 }}>
                      <span style={{ color: "#b99887", fontWeight: 600 }}>{s.title}: </span>
                      <span style={{ opacity: 0.6 }}>{s.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div style={divider} />

            {/* Why Radical */}
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={sectionTitle}>Why &ldquo;Radical&rdquo;?</p>
              <p style={{ ...body, opacity: 0.6 }}>
                In the current digital age, following the law (GDPR) is the bare minimum. We call it Radical Privacy because we are intentionally choosing to leave money on the table.
              </p>
              <p style={{ ...body, opacity: 0.6 }}>
                Most platforms view users as &ldquo;data-producing livestock.&rdquo; Reelms views you as a citizen of an ecosystem. We have redesigned the business model to rely on tiered memberships and utility, rather than the extraction of your private life. Radical privacy isn&rsquo;t just a feature; it&rsquo;s the foundation of the trust required to build a true digital community.
              </p>
            </section>

            <div style={divider} />

            {/* Version footer */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
              <span style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#b99887",
                opacity: 0.3,
              }}>
                Version 1.1 / 2026
              </span>
              <span style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                fontSize: "0.7rem",
                color: "#b99887",
                opacity: 0.3,
              }}>
                Last Updated: May 2026
              </span>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
