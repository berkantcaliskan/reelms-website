"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type BillingPeriod = "monthly" | "yearly";
type MobileComparePair = "free-ignite" | "ignite-all" | "free-all";

interface ComparisonRow {
  name: string;
  tooltip?: string;
  free: string | boolean;
  ignite: string | boolean;
  igniteAll: string | boolean;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    category: "⚡ Capacity & Scale",
    rows: [
      {
        name: "Member Capacity per Reelm",
        free: "250,000 members",
        ignite: "5,000,000 members",
        igniteAll: "Unlimited",
      },
      {
        name: "File & Media Upload Limit",
        free: "1 GB",
        ignite: "2 GB",
        igniteAll: "4 GB",
      },
      {
        name: "Group Chat (DM) Size",
        free: "48 members",
        ignite: "500 members",
        igniteAll: "Unlimited",
      },
      {
        name: "Ephemeral Vapor Rooms",
        free: "Up to 5 active",
        ignite: "Unlimited",
        igniteAll: "Unlimited",
      },
    ],
  },
  {
    category: "🎙️ Streaming & Audio Quality",
    rows: [
      {
        name: "Screen Share & Live Broadcast",
        free: "2K / 60 FPS",
        ignite: "4K / 60 FPS Ultra-HD",
        igniteAll: "4K / 60 FPS Ultra-HD",
      },
      {
        name: "Spatial 3D Audio Engine",
        free: false,
        ignite: "✓ Included (Spatial 3D)",
        igniteAll: "✓ Included (Spatial 3D)",
      },
      {
        name: "Remote Screen & Desktop Control",
        free: false,
        ignite: "✓ Full Remote Control",
        igniteAll: "✓ Full Remote Control",
      },
    ],
  },
  {
    category: "🚀 Server Ignition (Boosts)",
    rows: [
      {
        name: "Included Server Boosts",
        free: "A-la-carte add-on",
        ignite: "1 One-Time Server Boost",
        igniteAll: "1 Monthly Boost + 1 Bonus Boost",
      },
    ],
  },
  {
    category: "✨ Profile Cosmetics & Identity",
    rows: [
      {
        name: "Avatar & Banner Media",
        free: "Static Images only",
        ignite: "Video & Animated GIFs",
        igniteAll: "Video & Animated GIFs",
      },
      {
        name: "Animated Profile Greetings",
        free: false,
        ignite: "✓ Custom Animations & Emojis",
        igniteAll: "✓ Custom Animations & Emojis",
      },
      {
        name: "Custom Profile Themes",
        free: "Default Light & Dark",
        ignite: "Extended Multi-Palette Gradients",
        igniteAll: "Extended Multi-Palette Gradients",
      },
      {
        name: "Custom Emojis & Global Reactions",
        free: "Standard Emoji Pack",
        ignite: "Extended & Custom Global Emojis",
        igniteAll: "Extended & Custom Global Emojis",
      },
    ],
  },
  {
    category: "👑 Community & Syndicate Tools",
    rows: [
      {
        name: "Custom Server Roles",
        free: "Up to 20 roles",
        ignite: "Unlimited Roles",
        igniteAll: "Unlimited Roles",
      },
      {
        name: "Role Colors & Custom Icons",
        free: "Standard Colors only",
        ignite: "Custom Colors + Role Icons",
        igniteAll: "Custom Colors + Role Icons",
      },
      {
        name: "Custom Vanity Invite Link",
        free: "Random (reelms.io/...)",
        ignite: "✓ Custom (reelms.io/yourname)",
        igniteAll: "✓ Custom (reelms.io/yourname)",
      },
      {
        name: "Scheduled Feed & Forum Posts",
        free: false,
        ignite: "✓ Scheduled Feed & Forum Posts",
        igniteAll: "✓ Scheduled Feed & Forum Posts",
      },
      {
        name: "Deep Analytics & Insights",
        free: "Basic Counts",
        ignite: "✓ Deep Syndicate Insights",
        igniteAll: "✓ Deep Syndicate Insights",
      },
      {
        name: "Trigger-to-Action Automations",
        free: "Basic Rules",
        ignite: "✓ Auto-Replies & Webhooks",
        igniteAll: "✓ Auto-Replies & Webhooks",
      },
    ],
  },
  {
    category: "🧠 Intelligence",
    rows: [
      {
        name: "Reelms Intelligence AI Access",
        free: "Standard Access",
        ignite: "Full Priority High-Speed Access",
        igniteAll: "Full Priority High-Speed Access",
      },
    ],
  },
];

export default function IgnitePage() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [mobileCompare, setMobileCompare] = useState<MobileComparePair>("ignite-all");

  const isYearly = billing === "yearly";

  const getColValue = (row: ComparisonRow, tier: "free" | "ignite" | "igniteAll") => {
    const val = row[tier];
    if (typeof val === "boolean") {
      return val ? (
        <span style={{ color: "#68c586", fontWeight: 800, fontSize: "15px" }}>✓</span>
      ) : (
        <span style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: "16px" }}>—</span>
      );
    }
    return val;
  };

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
            padding: "clamp(36px, 6vh, 72px) clamp(18px, 4vw, 48px) clamp(60px, 8vh, 100px)",
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* ══════════════════════════════════════════════════════════
              HERO SECTION: LEFT COPY & FLAME + RIGHT GRAPHIC
          ══════════════════════════════════════════════════════════ */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
              width: "100%",
              marginBottom: "clamp(56px, 8vh, 96px)",
            }}
          >
            {/* Left: Reelms / Ignite / and Ignite All with Flame Aura */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", textAlign: "left" }}>
              {/* Eyebrow badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 107, 74, 0.12)",
                  border: "1px solid rgba(255, 107, 74, 0.3)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  alignSelf: "flex-start",
                }}
              >
                <span style={{ fontSize: "14px" }}>🔥</span>
                <span
                  style={{
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    color: "#ff8b60",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Supercharge Your Experience
                </span>
              </div>

              {/* Title with Fiery Flame Background Glow */}
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Organic Flame Aura Backdrop */}
                <div className="ignite-flame-aura" />

                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#b99887",
                      marginBottom: "4px",
                    }}
                  >
                    Reelms
                  </span>

                  <h1
                    className="ignite-animated-title"
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(46px, 7.5vw, 84px)",
                      fontWeight: 800,
                      lineHeight: 0.96,
                      letterSpacing: "-0.04em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Ignite
                  </h1>

                  <span
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(26px, 4.5vw, 50px)",
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      color: "#f5e6de",
                      marginTop: "6px",
                      textShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    and Ignite All.
                  </span>
                </div>
              </div>

              {/* Tier Introductions Overview */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
                {/* Ignite Overview */}
                <div
                  style={{
                    background: "rgba(32, 25, 29, 0.65)",
                    border: "1px solid rgba(185, 152, 135, 0.2)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "16px" }}>⚡</span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff" }}>
                      Reelms Ignite
                    </span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, padding: "2px 8px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.15)", color: "#b99887" }}>
                      Monthly / Annual
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.86rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: 1.5, margin: 0 }}>
                    Unlocks full personal premium power, 4K screen streaming, 2GB uploads, and includes <strong style={{ color: "#f5e6de" }}>1 One-Time Server Ignition (Boost)</strong> for your favorite community.
                  </p>
                </div>

                {/* Ignite All Overview */}
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(42, 28, 25, 0.75) 0%, rgba(24, 20, 22, 0.75) 100%)",
                    border: "1.5px solid rgba(255, 107, 74, 0.4)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 30px rgba(255, 107, 74, 0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "16px" }}>🔥</span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff" }}>
                      Reelms Ignite All
                    </span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, padding: "2px 8px", borderRadius: "999px", background: "rgba(255, 107, 74, 0.2)", color: "#ff8b60" }}>
                      Ultimate Tier
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.86rem", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.5, margin: 0 }}>
                    The all-inclusive package with 4GB uploads, unlimited groups, plus <strong style={{ color: "#86efac" }}>1 Recurring Server Boost every month</strong> AND <strong style={{ color: "#ff8b60" }}>1 bonus one-time Boost</strong> with no extra fees.
                  </p>
                </div>
              </div>

              {/* CTA jump button */}
              <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
                <a
                  href="#compare-table"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #b99887 0%, #e28a52 100%)",
                    color: "#181416",
                    padding: "12px 28px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "14px",
                    fontWeight: 800,
                    textDecoration: "none",
                    transition: "transform 0.2s ease, filter 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.filter = "brightness(1)"; }}
                >
                  Compare All Features ↓
                </a>
              </div>
            </div>

            {/* Right: Custom Aesthetic Holographic Ignite Visual Showcase */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {/* Floating Ambient Glow */}
              <div
                style={{
                  position: "absolute",
                  width: "360px",
                  height: "360px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255, 107, 74, 0.35) 0%, rgba(226, 138, 82, 0.2) 45%, transparent 70%)",
                  filter: "blur(60px)",
                  zIndex: 0,
                }}
              />

              {/* Main Visual Showcase Card */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "420px",
                  background: "linear-gradient(145deg, rgba(36, 26, 29, 0.92) 0%, rgba(20, 16, 18, 0.95) 100%)",
                  border: "1.5px solid rgba(255, 107, 74, 0.35)",
                  borderRadius: "28px",
                  padding: "28px 24px",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.65), 0 0 40px rgba(255, 107, 74, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {/* Header in Card */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #ff6b4a 0%, #e28a52 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                      }}
                    >
                      🔥
                    </div>
                    <div>
                      <h2 style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: 0 }}>
                        Reelms Syndicate
                      </h2>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.74rem", color: "#ff8b60", fontWeight: 700 }}>
                        Ignited Level 3 • Max Power
                      </span>
                    </div>
                  </div>

                  <span style={{ fontSize: "0.68rem", fontWeight: 800, padding: "4px 10px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.2)", color: "#86efac", border: "1px solid rgba(104, 197, 134, 0.4)" }}>
                    4K LIVE
                  </span>
                </div>

                {/* Boost Gauge Bar */}
                <div style={{ background: "rgba(185, 152, 135, 0.08)", borderRadius: "14px", padding: "14px", border: "1px solid rgba(185, 152, 135, 0.15)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.7)", fontWeight: 700 }}>
                      Community Ignition Progress
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.75rem", color: "#ff8b60", fontWeight: 800 }}>
                      14 / 14 Boosts Active
                    </span>
                  </div>
                  <div style={{ width: "100%", height: "8px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "999px", overflow: "hidden" }}>
                    <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #ff6b4a 0%, #e28a52 50%, #68c586 100%)", borderRadius: "999px" }} />
                  </div>
                </div>

                {/* Unlocked Badges Showcase */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div style={{ background: "rgba(185, 152, 135, 0.06)", border: "1px solid rgba(185, 152, 135, 0.15)", borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>🎬</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "#fff" }}>4K 60FPS</span>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>Ultra-HD Cast</span>
                    </div>
                  </div>

                  <div style={{ background: "rgba(185, 152, 135, 0.06)", border: "1px solid rgba(185, 152, 135, 0.15)", borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>🎧</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "#fff" }}>Spatial Audio</span>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>3D Positioning</span>
                    </div>
                  </div>

                  <div style={{ background: "rgba(185, 152, 135, 0.06)", border: "1px solid rgba(185, 152, 135, 0.15)", borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>🚀</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "#fff" }}>4 GB Uploads</span>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>Lossless Media</span>
                    </div>
                  </div>

                  <div style={{ background: "rgba(185, 152, 135, 0.06)", border: "1px solid rgba(185, 152, 135, 0.15)", borderRadius: "12px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>✨</span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "#fff" }}>Video Avatars</span>
                      <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>Animated Profiles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              COMPARISON PANEL & PRICING HEADER
          ══════════════════════════════════════════════════════════ */}
          <section id="compare-table" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                Choose Your Plan.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(14px, 1.4vw, 16px)",
                  color: "rgba(255, 255, 255, 0.75)",
                  maxWidth: "520px",
                  margin: "0 auto 24px",
                }}
              >
                Everything in Reelms is designed with zero bloatware. Upgrade whenever you want more scale, exclusive media power, and server boosts.
              </p>

              {/* Billing Toggle Switcher */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(24, 20, 22, 0.8)",
                  border: "1px solid rgba(185, 152, 135, 0.25)",
                  borderRadius: "999px",
                  padding: "4px",
                  gap: "4px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  style={{
                    background: billing === "monthly" ? "rgba(185, 152, 135, 0.2)" : "transparent",
                    color: billing === "monthly" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "8px 20px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  style={{
                    background: billing === "yearly" ? "linear-gradient(135deg, rgba(226, 138, 82, 0.3) 0%, rgba(185, 152, 135, 0.3) 100%)" : "transparent",
                    color: billing === "yearly" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "8px 20px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>Yearly Billing</span>
                  <span style={{ background: "#68c586", color: "#181416", fontSize: "10px", fontWeight: 900, padding: "1px 6px", borderRadius: "999px" }}>
                    -20%
                  </span>
                </button>
              </div>
            </div>

            {/* ── Mobile Pair Switcher (Displayed on Small Viewports) ── */}
            <div className="flex md:hidden" style={{ width: "100%", justifyContent: "center", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  background: "rgba(24, 20, 22, 0.8)",
                  border: "1px solid rgba(185, 152, 135, 0.2)",
                  borderRadius: "999px",
                  padding: "4px",
                  gap: "4px",
                  width: "100%",
                  maxWidth: "360px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setMobileCompare("free-ignite")}
                  style={{
                    flex: 1,
                    background: mobileCompare === "free-ignite" ? "rgba(185, 152, 135, 0.25)" : "transparent",
                    color: mobileCompare === "free-ignite" ? "#fff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "6px 8px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Free vs Ignite
                </button>
                <button
                  type="button"
                  onClick={() => setMobileCompare("ignite-all")}
                  style={{
                    flex: 1,
                    background: mobileCompare === "ignite-all" ? "rgba(255, 107, 74, 0.25)" : "transparent",
                    color: mobileCompare === "ignite-all" ? "#ff8b60" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "6px 8px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Ignite vs All
                </button>
                <button
                  type="button"
                  onClick={() => setMobileCompare("free-all")}
                  style={{
                    flex: 1,
                    background: mobileCompare === "free-all" ? "rgba(185, 152, 135, 0.25)" : "transparent",
                    color: mobileCompare === "free-all" ? "#fff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "6px 8px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Free vs All
                </button>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
                DESKTOP & RESPONSIVE COMPARISON TABLE
            ══════════════════════════════════════════════════════════ */}
            <div
              style={{
                width: "100%",
                background: "rgba(24, 20, 22, 0.7)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(185, 152, 135, 0.22)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Table Column Headers & Pricing Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                  borderBottom: "1px solid rgba(185, 152, 135, 0.2)",
                  background: "rgba(32, 25, 29, 0.6)",
                }}
                className="hidden md:grid"
              >
                {/* Feature Label Column Header */}
                <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Features & Limits
                  </span>
                </div>

                {/* Free Tier Header */}
                <div style={{ padding: "28px 20px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(185, 152, 135, 0.12)" }}>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
                    Free
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>
                      $0
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
                      / forever
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.6)", minHeight: "36px" }}>
                    Essential high-performance squad communication.
                  </span>
                  <Link
                    href="https://app.reelms.io"
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                      background: "rgba(185, 152, 135, 0.08)",
                      border: "1px solid rgba(185, 152, 135, 0.25)",
                      color: "#f5e6de",
                      padding: "9px 16px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "13px",
                      fontWeight: 800,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.16)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.08)"; }}
                  >
                    Start Free
                  </Link>
                </div>

                {/* Ignite Tier Header */}
                <div style={{ padding: "28px 20px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(185, 152, 135, 0.12)", background: "rgba(185, 152, 135, 0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
                      Ignite
                    </span>
                    <span style={{ fontSize: "13px" }}>⚡</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
                      {isYearly ? "$3.99" : "$4.99"}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
                      / month
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.6)", minHeight: "36px" }}>
                    4K streaming, 2GB files & 1 one-time Server Boost.
                  </span>
                  <button
                    type="button"
                    style={{
                      marginTop: "10px",
                      background: "rgba(185, 152, 135, 0.15)",
                      border: "1px solid rgba(185, 152, 135, 0.4)",
                      color: "#ffffff",
                      padding: "9px 16px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "13px",
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.25)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.15)"; }}
                  >
                    Get Ignite
                  </button>
                </div>

                {/* Ignite All Tier Header (Featured) */}
                <div
                  style={{
                    padding: "28px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderLeft: "1px solid rgba(255, 107, 74, 0.35)",
                    background: "linear-gradient(180deg, rgba(255, 107, 74, 0.12) 0%, rgba(24, 20, 22, 0.02) 100%)",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: "10px", right: "14px", background: "linear-gradient(135deg, #ff6b4a 0%, #e28a52 100%)", color: "#181416", fontSize: "10px", fontWeight: 900, padding: "2px 8px", borderRadius: "999px" }}>
                    MOST POPULAR
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
                      Ignite All
                    </span>
                    <span style={{ fontSize: "13px" }}>🔥</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#ff8b60" }}>
                      {isYearly ? "$7.99" : "$9.99"}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
                      / month
                    </span>
                  </div>

                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.75)", minHeight: "36px" }}>
                    Unlimited scale, 4GB uploads + 1 Monthly Server Boost.
                  </span>

                  <button
                    type="button"
                    style={{
                      marginTop: "10px",
                      background: "linear-gradient(135deg, #ff6b4a 0%, #e28a52 100%)",
                      border: "none",
                      color: "#181416",
                      padding: "9px 16px",
                      borderRadius: "999px",
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "13px",
                      fontWeight: 800,
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(255, 107, 74, 0.3)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; }}
                  >
                    Get Ignite All
                  </button>
                </div>
              </div>

              {/* ── Table Comparison Rows ── */}
              <div>
                {COMPARISON_DATA.map((cat, catIdx) => (
                  <div key={cat.category}>
                    {/* Category Divider Header */}
                    <div
                      style={{
                        padding: "16px 24px",
                        background: "rgba(36, 28, 32, 0.8)",
                        borderTop: catIdx > 0 ? "1px solid rgba(185, 152, 135, 0.2)" : "none",
                        borderBottom: "1px solid rgba(185, 152, 135, 0.12)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-karla), 'Karla', sans-serif",
                          fontSize: "0.86rem",
                          fontWeight: 800,
                          color: "#ffd4be",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {cat.category}
                      </span>
                    </div>

                    {/* Category Rows (Desktop Grid) */}
                    <div className="hidden md:block">
                      {cat.rows.map((row, rowIdx) => (
                        <div
                          key={row.name}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                            alignItems: "center",
                            borderBottom: "1px solid rgba(185, 152, 135, 0.08)",
                            background: rowIdx % 2 === 1 ? "rgba(185, 152, 135, 0.02)" : "transparent",
                            transition: "background 0.15s ease",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "rgba(185, 152, 135, 0.05)")}
                          onMouseLeave={e => (e.currentTarget.style.background = rowIdx % 2 === 1 ? "rgba(185, 152, 135, 0.02)" : "transparent")}
                        >
                          {/* Row Feature Name */}
                          <div style={{ padding: "16px 24px" }}>
                            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "rgba(255, 255, 255, 0.9)" }}>
                              {row.name}
                            </span>
                          </div>

                          {/* Free Column */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(185, 152, 135, 0.1)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.65)" }}>
                            {getColValue(row, "free")}
                          </div>

                          {/* Ignite Column */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(185, 152, 135, 0.1)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "#f5e6de", fontWeight: 700 }}>
                            {getColValue(row, "ignite")}
                          </div>

                          {/* Ignite All Column */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(255, 107, 74, 0.2)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "#ff8b60", fontWeight: 800 }}>
                            {getColValue(row, "igniteAll")}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category Rows (Mobile 2-Column Mode) */}
                    <div className="block md:hidden">
                      {cat.rows.map((row) => {
                        const leftKey = mobileCompare === "ignite-all" ? "ignite" : "free";
                        const rightKey = mobileCompare === "free-ignite" ? "ignite" : "igniteAll";
                        const leftLabel = leftKey === "free" ? "Free" : "Ignite";
                        const rightLabel = rightKey === "ignite" ? "Ignite" : "Ignite All";

                        return (
                          <div
                            key={row.name}
                            style={{
                              padding: "14px 18px",
                              borderBottom: "1px solid rgba(185, 152, 135, 0.1)",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#fff" }}>
                              {row.name}
                            </span>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                              <div style={{ background: "rgba(185, 152, 135, 0.05)", borderRadius: "10px", padding: "8px 12px" }}>
                                <div style={{ fontSize: "10px", fontFamily: "var(--font-karla), 'Karla', sans-serif", color: "rgba(255, 255, 255, 0.45)", textTransform: "uppercase", marginBottom: "2px", fontWeight: 700 }}>
                                  {leftLabel}
                                </div>
                                <div style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 600 }}>
                                  {getColValue(row, leftKey)}
                                </div>
                              </div>

                              <div style={{ background: "rgba(255, 107, 74, 0.08)", border: "1px solid rgba(255, 107, 74, 0.2)", borderRadius: "10px", padding: "8px 12px" }}>
                                <div style={{ fontSize: "10px", fontFamily: "var(--font-karla), 'Karla', sans-serif", color: "#ff8b60", textTransform: "uppercase", marginBottom: "2px", fontWeight: 800 }}>
                                  {rightLabel}
                                </div>
                                <div style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "#ff8b60", fontWeight: 800 }}>
                                  {getColValue(row, rightKey)}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
