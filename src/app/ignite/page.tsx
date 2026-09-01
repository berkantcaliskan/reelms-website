"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";
import Link from "next/link";
import RealFireCanvas from "@/components/RealFireCanvas";
import FallingPerksShowcase from "@/components/FallingPerksShowcase";

type BillingPeriod = "monthly" | "yearly";
type MobileComparePair = "free-ignite" | "ignite-all" | "free-all";

interface ComparisonRow {
  name: string;
  free: string | boolean;
  ignite: string | boolean;
  igniteAll: string | boolean;
}

interface ComparisonCategory {
  category: string;
  icon: React.ReactNode;
  rows: ComparisonRow[];
}

// Clean SVG Icons
const FlameIcon = ({ size = 16, color = "#ff7a45" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2c-.5 2-2 3.5-3.5 5.5C7 9.5 6 12 6 14.5 6 18.1 8.9 21 12.5 21s6.5-2.9 6.5-6.5c0-4-3-7-4.5-9-.5 2-1.5 3-2.5 3.5C12 7.5 12 4.5 12 2z"
      fill={color}
    />
  </svg>
);

const SparkIcon = ({ size = 16, color = "#b99887" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"
      fill={color}
    />
  </svg>
);

const ShieldIcon = ({ size = 16, color = "#68c586" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2L4 5v6.5C4 16.8 7.4 21.6 12 23c4.6-1.4 8-6.2 8-11.5V5l-8-3z"
      fill={color}
      opacity="0.85"
    />
  </svg>
);

const AudioIcon = ({ size = 16, color = "#ff8b60" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 3v18M8 6v12M4 9v6M16 6v12M20 9v6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CrownIcon = ({ size = 16, color = "#ffd4be" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M3 18h18v2H3v-2zm1-3l2.5-9 5.5 5 5.5-5L20 15H4z" fill={color} />
  </svg>
);

const BrainIcon = ({ size = 16, color = "#86efac" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M9.5 2A4.5 4.5 0 005 6.5c0 .77.19 1.5.53 2.14A4 4 0 004 12a4 4 0 002.08 3.5A4.5 4.5 0 0010 20h.5M14.5 2A4.5 4.5 0 0119 6.5c0 .77-.19 1.5-.53 2.14A4 4 0 0120 12a4 4 0 01-2.08 3.5A4.5 4.5 0 0114 20h-.5M12 2v18"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    category: "Capacity & Scale",
    icon: <SparkIcon size={18} color="#ffd4be" />,
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
    category: "Streaming & Audio Quality",
    icon: <AudioIcon size={18} color="#ff8b60" />,
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
    category: "Server Ignition (Boosts)",
    icon: <FlameIcon size={18} color="#ff7a45" />,
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
    category: "Profile Cosmetics & Identity",
    icon: <CrownIcon size={18} color="#b99887" />,
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
        ignite: "✓ Custom Animations & Effects",
        igniteAll: "✓ Custom Animations & Effects",
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
    category: "Community & Syndicate Tools",
    icon: <ShieldIcon size={18} color="#68c586" />,
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
    category: "Reelms Intelligence",
    icon: <BrainIcon size={18} color="#86efac" />,
    rows: [
      {
        name: "Reelms Intelligence AI Access",
        free: "Standard Access to Reelms Intelligence",
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

  const getTierDetails = (tier: "free" | "ignite" | "igniteAll") => {
    switch (tier) {
      case "free":
        return {
          title: "Free",
          price: "$0",
          period: "/ forever",
          desc: "Essential squad communication.",
          btnText: "Start Free",
          btnHref: "https://app.reelms.io",
          isHighlighted: false,
        };
      case "ignite":
        return {
          title: "Ignite",
          price: isYearly ? "$3.99" : "$4.99",
          period: "/ month",
          desc: "4K streaming & 1 Server Boost.",
          btnText: "Get Ignite",
          btnHref: null,
          isHighlighted: false,
        };
      case "igniteAll":
        return {
          title: "Ignite All",
          price: isYearly ? "$7.99" : "$9.99",
          period: "/ month",
          desc: "Unlimited + 1 Monthly Boost.",
          btnText: "Get Ignite All",
          btnHref: null,
          isHighlighted: true,
        };
    }
  };

  const getMobileKeys = () => {
    switch (mobileCompare) {
      case "free-ignite":
        return { left: "free" as const, right: "ignite" as const };
      case "ignite-all":
        return { left: "ignite" as const, right: "igniteAll" as const };
      case "free-all":
        return { left: "free" as const, right: "igniteAll" as const };
    }
  };

  const mobileKeys = getMobileKeys();
  const leftTier = getTierDetails(mobileKeys.left);
  const rightTier = getTierDetails(mobileKeys.right);

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
            padding: "clamp(32px, 5vh, 64px) clamp(16px, 3vw, 48px) clamp(60px, 8vh, 100px)",
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* ══════════════════════════════════════════════════════════
              HERO SECTION: 2-COLUMN GRID (REAL FIRE + FALLING PERKS)
          ══════════════════════════════════════════════════════════ */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
              gap: "clamp(32px, 4vw, 64px)",
              alignItems: "center",
              width: "100%",
              marginBottom: "clamp(48px, 7vh, 96px)",
            }}
          >
            {/* ── Left Column: Reelms / Ignite / and Ignite All with Real Fire Flame Canvas ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left", width: "100%" }}>
              {/* Eyebrow badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 122, 69, 0.12)",
                  border: "1px solid rgba(255, 122, 69, 0.35)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  alignSelf: "flex-start",
                }}
              >
                <FlameIcon size={14} color="#ff7a45" />
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

              {/* Title with REAL Dynamic Particle Fire Simulation Burning Behind */}
              <div style={{ position: "relative", display: "inline-block", width: "fit-content", maxWidth: "100%" }}>
                {/* 60fps Real Fire Physics Particle Canvas */}
                <RealFireCanvas width={520} height={220} />

                {/* Text Content overlaying the flame */}
                <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(16px, 2.2vw, 24px)",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#b99887",
                      marginBottom: "4px",
                    }}
                  >
                    Reelms
                  </span>

                  {/* Ignite — Silky Smooth Flowing Gradient */}
                  <h1
                    className="ignite-flowing-gradient"
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(44px, 7.5vw, 84px)",
                      fontWeight: 800,
                      lineHeight: 0.94,
                      letterSpacing: "-0.04em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    IGNITE
                  </h1>

                  {/* and Ignite All — Fiery Gradient Harmony */}
                  <span
                    style={{
                      fontFamily: "var(--font-karla), 'Karla', sans-serif",
                      fontSize: "clamp(24px, 4.2vw, 48px)",
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      background: "linear-gradient(90deg, #ffd4be 0%, #ff8b60 50%, #ff5230 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginTop: "6px",
                      textShadow: "0 4px 24px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    and Ignite All.
                  </span>
                </div>
              </div>

              {/* Tier Introductions Overview */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "4px" }}>
                {/* Ignite Overview */}
                <div
                  style={{
                    background: "rgba(32, 25, 29, 0.75)",
                    border: "1px solid rgba(185, 152, 135, 0.25)",
                    borderRadius: "16px",
                    padding: "16px 18px",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <SparkIcon size={16} color="#b99887" />
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.98rem", fontWeight: 800, color: "#ffffff" }}>
                      Reelms Ignite
                    </span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, padding: "2px 8px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.15)", color: "#b99887" }}>
                      Monthly / Annual
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.5, margin: 0 }}>
                    Unlocks full personal premium perks, 4K screen streaming, 2GB uploads, and includes <strong style={{ color: "#ffffff" }}>1 One-Time Server Ignition (Boost)</strong> for your favorite community.
                  </p>
                </div>

                {/* Ignite All Overview */}
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(48, 28, 25, 0.85) 0%, rgba(26, 20, 22, 0.85) 100%)",
                    border: "1.5px solid rgba(255, 122, 69, 0.45)",
                    borderRadius: "16px",
                    padding: "16px 18px",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 8px 30px rgba(255, 107, 74, 0.15)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <FlameIcon size={16} color="#ff7a45" />
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.98rem", fontWeight: 800, color: "#ffffff" }}>
                      Reelms Ignite All
                    </span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 800, padding: "2px 8px", borderRadius: "999px", background: "rgba(255, 107, 74, 0.25)", color: "#ff8b60" }}>
                      Ultimate Tier
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.88)", lineHeight: 1.5, margin: 0 }}>
                    The all-inclusive power package with 4GB uploads, unlimited groups, plus <strong style={{ color: "#86efac" }}>1 Recurring Server Boost every month</strong> AND <strong style={{ color: "#ff8b60" }}>1 bonus one-time Boost</strong> with no recurring extra fees.
                  </p>
                </div>
              </div>

              {/* Jump button */}
              <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                <a
                  href="#compare-table"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #b99887 0%, #e28a52 100%)",
                    color: "#181416",
                    padding: "11px 26px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "13.5px",
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

            {/* ── Right Column: Playful Falling & Floating Perks Showcase ── */}
            <FallingPerksShowcase />
          </section>

          {/* ══════════════════════════════════════════════════════════
              COMPARISON PANEL & PRICING
          ══════════════════════════════════════════════════════════ */}
          <section id="compare-table" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "32px", width: "100%" }}>
              <h2
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(26px, 4.5vw, 46px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.035em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                LEVEL UP YOUR SQUAD.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                  fontSize: "clamp(13px, 1.4vw, 16px)",
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "540px",
                  margin: "0 auto 20px",
                  padding: "0 8px",
                }}
              >
                Pick your ignition tier, unlock radical capabilities, and power up your community with zero bloatware.
              </p>

              {/* Billing Toggle Switcher */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(24, 20, 22, 0.85)",
                  border: "1px solid rgba(185, 152, 135, 0.3)",
                  borderRadius: "999px",
                  padding: "4px",
                  gap: "4px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  style={{
                    background: billing === "monthly" ? "rgba(185, 152, 135, 0.22)" : "transparent",
                    color: billing === "monthly" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 18px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "12.5px",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  style={{
                    background: billing === "yearly" ? "linear-gradient(135deg, rgba(226, 138, 82, 0.35) 0%, rgba(185, 152, 135, 0.35) 100%)" : "transparent",
                    color: billing === "yearly" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 18px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "12.5px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>Yearly</span>
                  <span style={{ background: "#68c586", color: "#181416", fontSize: "10px", fontWeight: 900, padding: "1px 6px", borderRadius: "999px" }}>
                    -20%
                  </span>
                </button>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
                MOBILE SEGMENTED PAIR SWITCHER
            ══════════════════════════════════════════════════════════ */}
            <div className="flex md:hidden" style={{ width: "100%", justifyContent: "center", marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  background: "rgba(24, 20, 22, 0.85)",
                  border: "1px solid rgba(185, 152, 135, 0.25)",
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
                    background: mobileCompare === "free-ignite" ? "rgba(185, 152, 135, 0.28)" : "transparent",
                    color: mobileCompare === "free-ignite" ? "#fff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 6px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Free vs Ignite
                </button>
                <button
                  type="button"
                  onClick={() => setMobileCompare("ignite-all")}
                  style={{
                    flex: 1,
                    background: mobileCompare === "ignite-all" ? "rgba(255, 107, 74, 0.3)" : "transparent",
                    color: mobileCompare === "ignite-all" ? "#ff8b60" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 6px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ignite vs All
                </button>
                <button
                  type="button"
                  onClick={() => setMobileCompare("free-all")}
                  style={{
                    flex: 1,
                    background: mobileCompare === "free-all" ? "rgba(185, 152, 135, 0.28)" : "transparent",
                    color: mobileCompare === "free-all" ? "#fff" : "rgba(255, 255, 255, 0.6)",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 6px",
                    fontSize: "11px",
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontWeight: 800,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Free vs All
                </button>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
                COMPARISON TABLE (DESKTOP & MOBILE)
            ══════════════════════════════════════════════════════════ */}
            <div
              style={{
                width: "100%",
                background: "rgba(24, 20, 22, 0.75)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(185, 152, 135, 0.22)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* ── Table Column Headers & Pricing Cards (Desktop Grid) ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                  borderBottom: "1px solid rgba(185, 152, 135, 0.2)",
                  background: "rgba(32, 25, 29, 0.65)",
                }}
                className="hidden md:grid"
              >
                {/* Features Column */}
                <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Features & Limits
                  </span>
                </div>

                {/* Free Card */}
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
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.65)", minHeight: "36px" }}>
                    Essential squad communication with zero bloat.
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

                {/* Ignite Card */}
                <div style={{ padding: "28px 20px", display: "flex", flexDirection: "column", gap: "8px", borderLeft: "1px solid rgba(185, 152, 135, 0.12)", background: "rgba(185, 152, 135, 0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
                      Ignite
                    </span>
                    <SparkIcon size={14} color="#b99887" />
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>
                      {isYearly ? "$3.99" : "$4.99"}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
                      / month
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.65)", minHeight: "36px" }}>
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

                {/* Ignite All Card (Featured) */}
                <div
                  style={{
                    padding: "28px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    borderLeft: "1px solid rgba(255, 122, 69, 0.35)",
                    background: "linear-gradient(180deg, rgba(255, 107, 74, 0.14) 0%, rgba(24, 20, 22, 0.02) 100%)",
                    position: "relative",
                  }}
                >
                  <div style={{ position: "absolute", top: "10px", right: "14px", background: "linear-gradient(135deg, #ff7a45 0%, #e28a52 100%)", color: "#181416", fontSize: "10px", fontWeight: 900, padding: "2px 8px", borderRadius: "999px" }}>
                    MOST POPULAR
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
                      Ignite All
                    </span>
                    <FlameIcon size={14} color="#ff7a45" />
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#ff8b60" }}>
                      {isYearly ? "$7.99" : "$9.99"}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)" }}>
                      / month
                    </span>
                  </div>

                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.8)", minHeight: "36px" }}>
                    Unlimited scale, 4GB uploads + 1 Monthly Server Boost.
                  </span>

                  <button
                    type="button"
                    style={{
                      marginTop: "10px",
                      background: "linear-gradient(135deg, #ff7a45 0%, #e28a52 100%)",
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

              {/* ── Mobile Tier Pricing Header Cards ── */}
              <div
                className="grid md:hidden"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid rgba(185, 152, 135, 0.2)",
                  background: "rgba(32, 25, 29, 0.8)",
                  padding: "16px 12px",
                  gap: "10px",
                }}
              >
                {/* Left Card */}
                <div
                  style={{
                    background: leftTier.isHighlighted ? "rgba(255, 107, 74, 0.12)" : "rgba(185, 152, 135, 0.06)",
                    border: `1px solid ${leftTier.isHighlighted ? "rgba(255, 107, 74, 0.35)" : "rgba(185, 152, 135, 0.2)"}`,
                    borderRadius: "16px",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.95rem", fontWeight: 800, color: leftTier.isHighlighted ? "#ff8b60" : "#ffffff" }}>
                    {leftTier.title}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#ffffff" }}>
                      {leftTier.price}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>
                      {leftTier.period}
                    </span>
                  </div>
                  {leftTier.btnHref ? (
                    <Link
                      href={leftTier.btnHref}
                      style={{
                        marginTop: "6px",
                        textAlign: "center",
                        background: "rgba(185, 152, 135, 0.12)",
                        border: "1px solid rgba(185, 152, 135, 0.25)",
                        color: "#f5e6de",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        fontFamily: "var(--font-karla), 'Karla', sans-serif",
                        fontSize: "11px",
                        fontWeight: 800,
                        textDecoration: "none",
                      }}
                    >
                      {leftTier.btnText}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      style={{
                        marginTop: "6px",
                        background: leftTier.isHighlighted ? "linear-gradient(135deg, #ff7a45, #e28a52)" : "rgba(185, 152, 135, 0.15)",
                        border: leftTier.isHighlighted ? "none" : "1px solid rgba(185, 152, 135, 0.35)",
                        color: leftTier.isHighlighted ? "#181416" : "#ffffff",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        fontFamily: "var(--font-karla), 'Karla', sans-serif",
                        fontSize: "11px",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      {leftTier.btnText}
                    </button>
                  )}
                </div>

                {/* Right Card */}
                <div
                  style={{
                    background: rightTier.isHighlighted ? "rgba(255, 107, 74, 0.12)" : "rgba(185, 152, 135, 0.06)",
                    border: `1px solid ${rightTier.isHighlighted ? "rgba(255, 107, 74, 0.35)" : "rgba(185, 152, 135, 0.2)"}`,
                    borderRadius: "16px",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.95rem", fontWeight: 800, color: rightTier.isHighlighted ? "#ff8b60" : "#ffffff" }}>
                    {rightTier.title}
                  </span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#ffffff" }}>
                      {rightTier.price}
                    </span>
                    <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.55)" }}>
                      {rightTier.period}
                    </span>
                  </div>
                  {rightTier.btnHref ? (
                    <Link
                      href={rightTier.btnHref}
                      style={{
                        marginTop: "6px",
                        textAlign: "center",
                        background: "rgba(185, 152, 135, 0.12)",
                        border: "1px solid rgba(185, 152, 135, 0.25)",
                        color: "#f5e6de",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        fontFamily: "var(--font-karla), 'Karla', sans-serif",
                        fontSize: "11px",
                        fontWeight: 800,
                        textDecoration: "none",
                      }}
                    >
                      {rightTier.btnText}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      style={{
                        marginTop: "6px",
                        background: rightTier.isHighlighted ? "linear-gradient(135deg, #ff7a45, #e28a52)" : "rgba(185, 152, 135, 0.15)",
                        border: rightTier.isHighlighted ? "none" : "1px solid rgba(185, 152, 135, 0.35)",
                        color: rightTier.isHighlighted ? "#181416" : "#ffffff",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        fontFamily: "var(--font-karla), 'Karla', sans-serif",
                        fontSize: "11px",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      {rightTier.btnText}
                    </button>
                  )}
                </div>
              </div>

              {/* ── Table Comparison Rows ── */}
              <div>
                {COMPARISON_DATA.map((cat, catIdx) => (
                  <div key={cat.category}>
                    {/* Category Header */}
                    <div
                      style={{
                        padding: "14px 20px",
                        background: "rgba(36, 28, 32, 0.85)",
                        borderTop: catIdx > 0 ? "1px solid rgba(185, 152, 135, 0.2)" : "none",
                        borderBottom: "1px solid rgba(185, 152, 135, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {cat.icon}
                      <span
                        style={{
                          fontFamily: "var(--font-karla), 'Karla', sans-serif",
                          fontSize: "0.85rem",
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
                          {/* Row Name */}
                          <div style={{ padding: "16px 24px" }}>
                            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 700, color: "rgba(255, 255, 255, 0.9)" }}>
                              {row.name}
                            </span>
                          </div>

                          {/* Free */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(185, 152, 135, 0.1)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.65)" }}>
                            {getColValue(row, "free")}
                          </div>

                          {/* Ignite */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(185, 152, 135, 0.1)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "#f5e6de", fontWeight: 700 }}>
                            {getColValue(row, "ignite")}
                          </div>

                          {/* Ignite All */}
                          <div style={{ padding: "16px 20px", borderLeft: "1px solid rgba(255, 122, 69, 0.22)", fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", color: "#ff8b60", fontWeight: 800 }}>
                            {getColValue(row, "igniteAll")}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category Rows (Mobile 2-Column Mode) */}
                    <div className="block md:hidden">
                      {cat.rows.map((row) => {
                        const leftVal = getColValue(row, mobileKeys.left);
                        const rightVal = getColValue(row, mobileKeys.right);

                        return (
                          <div
                            key={row.name}
                            style={{
                              padding: "12px 14px",
                              borderBottom: "1px solid rgba(185, 152, 135, 0.08)",
                              display: "flex",
                              flexDirection: "column",
                              gap: "6px",
                            }}
                          >
                            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.84rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}>
                              {row.name}
                            </span>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                              <div
                                style={{
                                  background: "rgba(185, 152, 135, 0.06)",
                                  borderRadius: "10px",
                                  padding: "8px 10px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "2px",
                                }}
                              >
                                <div style={{ fontSize: "9.5px", fontFamily: "var(--font-karla), 'Karla', sans-serif", color: "rgba(255, 255, 255, 0.45)", textTransform: "uppercase", fontWeight: 800 }}>
                                  {leftTier.title}
                                </div>
                                <div style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 600, wordBreak: "break-word" }}>
                                  {leftVal}
                                </div>
                              </div>

                              <div
                                style={{
                                  background: rightTier.isHighlighted ? "rgba(255, 107, 74, 0.1)" : "rgba(185, 152, 135, 0.06)",
                                  border: rightTier.isHighlighted ? "1px solid rgba(255, 107, 74, 0.25)" : "none",
                                  borderRadius: "10px",
                                  padding: "8px 10px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "2px",
                                }}
                              >
                                <div style={{ fontSize: "9.5px", fontFamily: "var(--font-karla), 'Karla', sans-serif", color: rightTier.isHighlighted ? "#ff8b60" : "rgba(255, 255, 255, 0.45)", textTransform: "uppercase", fontWeight: 800 }}>
                                  {rightTier.title}
                                </div>
                                <div style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: rightTier.isHighlighted ? "#ff8b60" : "#ffffff", fontWeight: 800, wordBreak: "break-word" }}>
                                  {rightVal}
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
