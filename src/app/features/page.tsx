"use client";

import Link from "next/link";
import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Clean vector icons
const AudioWaveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2v20M8 5v14M4 8v8M16 5v14M20 8v8" stroke="#68c586" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const ForumIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      stroke="#b99887"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldLockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L4 5v6.5C4 16.8 7.4 21.6 12 23c4.6-1.4 8-6.2 8-11.5V5l-8-3z"
      stroke="#68c586"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 11v4M12 8h.01" stroke="#68c586" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VaporIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z"
      stroke="#ffd4be"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"
      stroke="#e28a52"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M9.5 2A4.5 4.5 0 005 6.5c0 .77.19 1.5.53 2.14A4 4 0 004 12a4 4 0 002.08 3.5A4.5 4.5 0 0010 20h.5M14.5 2A4.5 4.5 0 0119 6.5c0 .77-.19 1.5-.53 2.14A4 4 0 0120 12a4 4 0 01-2.08 3.5A4.5 4.5 0 0114 20h-.5M12 2v18"
      stroke="#86efac"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#ff8b60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossPlatformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#b99887" strokeWidth="2" />
    <path d="M8 21h8M12 17v4" stroke="#b99887" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FEATURES_LIST = [
  {
    icon: <AudioWaveIcon />,
    title: "Spatial 3D Audio & 4K Streaming",
    desc: "Experience lifelike squad voice with directional spatial acoustics and crystal clear screen casting up to 4K 60FPS.",
    tag: "Ultra Quality",
  },
  {
    icon: <ForumIcon />,
    title: "Rich Feeds & Forum Discussions",
    desc: "Keep ideas organized with structured channel feeds, threaded conversations, and media embeds that never get lost.",
    tag: "Communication",
  },
  {
    icon: <ShieldLockIcon />,
    title: "Radical Privacy & Data Control",
    desc: "Zero tracking, zero surveillance advertising. Built from the ground up to respect user sovereignty and community privacy.",
    tag: "Security",
  },
  {
    icon: <VaporIcon />,
    title: "Ephemeral Vapor Rooms",
    desc: "Temporary voice & video hangouts that leave zero digital footprint once the conversation concludes. Speak freely.",
    tag: "Privacy",
  },
  {
    icon: <SparklesIcon />,
    title: "Expressive Custom Identity",
    desc: "Personalize your presence with animated video avatars, vibrant profile banners, custom roles, and unique global reactions.",
    tag: "Cosmetics",
  },
  {
    icon: <BrainIcon />,
    title: "Reelms Intelligence",
    desc: "Built-in smart assistance to effortlessly summarize channels, discover discussions, and power proactive moderation.",
    tag: "AI Powered",
  },
  {
    icon: <AutomationIcon />,
    title: "Trigger-to-Action Automations",
    desc: "Set up smart auto-replies, webhooks, and channel automations directly inside Reelms without messy bot setups.",
    tag: "Productivity",
  },
  {
    icon: <CrossPlatformIcon />,
    title: "Universal Cross-Platform Sync",
    desc: "Instant synchronization between Web, Windows Desktop, macOS, and Mobile devices with ultra-fast startup times.",
    tag: "Ecosystem",
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "clamp(40px, 6vh, 72px) clamp(20px, 4vw, 56px) clamp(60px, 8vh, 100px)",
            position: "relative",
            zIndex: 10,
            maxWidth: "1240px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* ══════════════════════════════════════════════════════════
              HERO HEADER
          ══════════════════════════════════════════════════════════ */}
          <div style={{ textAlign: "center", maxWidth: "780px", marginBottom: "clamp(48px, 7vh, 80px)" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#68c586",
                marginBottom: "12px",
              }}
            >
              Discover Reelms
            </span>

            <h1
              style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(32px, 6vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                color: "#ffffff",
                margin: "0 0 18px",
              }}
            >
              EVERYTHING YOU NEED.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #b99887 0%, #ffd4be 50%, #68c586 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ZERO BLOATWARE.
              </span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "rgba(245, 230, 222, 0.78)",
                lineHeight: 1.6,
                margin: "0 auto 32px",
              }}
            >
              A serene, high-performance community platform designed for high-fidelity audio, seamless communication, expressive identity, and absolute privacy.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="https://app.reelms.io"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#b99887",
                  color: "#181416",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(185, 152, 135, 0.35)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Start Web App ›
              </Link>

              <Link
                href="/download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(185, 152, 135, 0.08)",
                  border: "1px solid rgba(185, 152, 135, 0.25)",
                  color: "#f5e6de",
                  padding: "11px 24px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.16)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.08)"; }}
              >
                Download App
              </Link>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              FEATURES GRID (2 ROWS OF 4 — CARDLESS SLEEK LAYOUT)
          ══════════════════════════════════════════════════════════ */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: "48px 32px",
              width: "100%",
              marginBottom: "clamp(60px, 9vh, 96px)",
            }}
          >
            {FEATURES_LIST.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                }}
              >
                {/* Top Row: Icon + Tag */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(185, 152, 135, 0.08)",
                      border: "1px solid rgba(185, 152, 135, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {feat.icon}
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#b99887",
                      opacity: 0.8,
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "1.12rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: "0 0 8px",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.72)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════════
              BOTTOM CTA BOX
          ══════════════════════════════════════════════════════════ */}
          <div
            style={{
              width: "100%",
              background: "linear-gradient(135deg, rgba(38, 28, 32, 0.9) 0%, rgba(20, 16, 18, 0.9) 100%)",
              border: "1.5px solid rgba(185, 152, 135, 0.3)",
              borderRadius: "26px",
              padding: "clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Ready to experience the next evolution?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-karla), 'Karla', sans-serif",
                fontSize: "15px",
                color: "rgba(245, 230, 222, 0.75)",
                maxWidth: "520px",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Create your Reelm, invite your squad, and hang out with unmatched audio clarity and zero distractions.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "6px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link
                href="https://app.reelms.io"
                style={{
                  background: "#b99887",
                  color: "#181416",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Launch Reelms Now ›
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
