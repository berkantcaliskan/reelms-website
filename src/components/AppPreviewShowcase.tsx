"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppPreviewShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setHoveredCard(prev => (prev === id ? null : id));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        height: "460px",
        margin: "0 auto",
        perspective: "1000px",
      }}
    >
      {/* ── CARD 1: Reelms Community & Voice Channel (Top-Left Stack) ── */}
      <div
        onClick={() => toggleCard(1)}
        onMouseEnter={() => setHoveredCard(1)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "90%",
          background: "rgba(24, 20, 22, 0.90)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(185, 152, 135, 0.22)",
          borderRadius: "18px",
          padding: "clamp(12px, 3vw, 16px)",
          boxShadow:
            hoveredCard === 1
              ? "0 28px 70px rgba(0, 0, 0, 0.75), 0 0 0 1.5px rgba(185, 152, 135, 0.45)"
              : "0 16px 45px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(185, 152, 135, 0.12)",
          zIndex: hoveredCard === 1 ? 40 : 10,
          transform:
            hoveredCard === 1
              ? "translateY(-10px) scale(1.02) rotate(0deg)"
              : hoveredCard !== null
              ? "translateY(0px) scale(0.97) rotate(-2deg)"
              : "translateY(0px) scale(1) rotate(-2deg)",
          opacity: hoveredCard !== null && hoveredCard !== 1 ? 0.75 : 1,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Window Top Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f87171", opacity: 0.8 }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fbbf24", opacity: 0.8 }} />
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", opacity: 0.8 }} />
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(185, 152, 135, 0.65)", fontWeight: 700 }}>
            Reelms Space
          </span>
        </div>

        {/* Community Cover Banner with Genuine Beige Cat Icon */}
        <div
          style={{
            height: "68px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(185, 152, 135, 0.35) 0%, rgba(65, 50, 54, 0.65) 100%)",
            border: "1px solid rgba(185, 152, 135, 0.2)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: "10px",
            marginBottom: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "#b99887",
              border: "1.5px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
              flexShrink: 0,
            }}
          >
            <Image src="/reelms-logo.svg" alt="Reelms Logo" width={26} height={26} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.9rem", fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Reelms Community
            </span>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.75)" }}>
              General Hub • 1.4k members
            </span>
          </div>
        </div>

        {/* Voice Active Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(104, 197, 134, 0.12)",
            border: "1px solid rgba(104, 197, 134, 0.3)",
            borderRadius: "9px",
            padding: "5px 10px",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#68c586", boxShadow: "0 0 8px #68c586" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#68c586" }}>
              Live Voice • The Lounge
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.66rem", color: "rgba(104, 197, 134, 0.85)", fontWeight: 600 }}>
            4 Connected
          </span>
        </div>

        {/* Message preview snippet */}
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#b99887", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, color: "#181416", flexShrink: 0 }}>
            B
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", fontWeight: 800, color: "#f5e6de" }}>Berkant</span>
              <span style={{ fontSize: "0.6rem", color: "rgba(185, 152, 135, 0.6)" }}>14:20</span>
            </div>
            <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.74rem", color: "rgba(245, 230, 222, 0.85)", margin: 0, lineHeight: 1.25 }}>
              Welcome to our new quiet space! 🌿
            </p>
          </div>
        </div>
      </div>

      {/* ── CARD 2: Friend Profile Popup with ROLES & Spotify (Middle Stack) ── */}
      <div
        onClick={() => toggleCard(2)}
        onMouseEnter={() => setHoveredCard(2)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "115px",
          left: "clamp(12px, 4vw, 24px)",
          width: "90%",
          background: "rgba(28, 22, 25, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(185, 152, 135, 0.25)",
          borderRadius: "18px",
          padding: "clamp(12px, 3vw, 16px)",
          boxShadow:
            hoveredCard === 2
              ? "0 32px 80px rgba(0, 0, 0, 0.8), 0 0 0 1.5px rgba(185, 152, 135, 0.5)"
              : "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(185, 152, 135, 0.15)",
          zIndex: hoveredCard === 2 ? 40 : 20,
          transform:
            hoveredCard === 2
              ? "translateY(-10px) scale(1.02) rotate(0deg)"
              : hoveredCard !== null
              ? "translateY(0px) scale(0.97) rotate(1.5deg)"
              : "translateY(0px) scale(1) rotate(1.5deg)",
          opacity: hoveredCard !== null && hoveredCard !== 2 ? 0.75 : 1,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* User Identity Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #b99887, #68c586)", display: "flex", alignItems: "center", justifyContent: "center", color: "#181416", fontWeight: 800, fontSize: "1rem" }}>
              R
            </div>
            <span style={{ position: "absolute", bottom: "0px", right: "0px", width: "9px", height: "9px", borderRadius: "50%", background: "#4ade80", border: "2px solid #1c1619" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.92rem", fontWeight: 800, color: "#f5e6de" }}>
              Reelms Explorer
            </span>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(185, 152, 135, 0.75)" }}>
              @explorer
            </span>
          </div>
        </div>

        {/* Roles Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginBottom: "10px" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", fontWeight: 800, color: "rgba(185, 152, 135, 0.65)", letterSpacing: "0.08em" }}>
            ROLES
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            <span style={{ padding: "2px 7px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.15)", border: "1px solid rgba(185, 152, 135, 0.4)", color: "#e0c9bc", fontSize: "0.68rem", fontWeight: 700 }}>
              Founder
            </span>
            <span style={{ padding: "2px 7px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.15)", border: "1px solid rgba(104, 197, 134, 0.4)", color: "#86efac", fontSize: "0.68rem", fontWeight: 700 }}>
              Core Member
            </span>
            <span style={{ padding: "2px 7px", borderRadius: "999px", background: "rgba(147, 197, 253, 0.15)", border: "1px solid rgba(147, 197, 253, 0.4)", color: "#93c5fd", fontSize: "0.68rem", fontWeight: 700 }}>
              Verified
            </span>
          </div>
        </div>

        {/* Spotify Now Playing Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(29, 185, 84, 0.1)",
            border: "1px solid rgba(29, 185, 84, 0.28)",
            borderRadius: "10px",
            padding: "6px 10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#1DB954", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#000", fontSize: "9px", fontWeight: 900 }}>▶</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Cornfield Chase
              </span>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.7)" }}>
                Hans Zimmer • Interstellar
              </span>
            </div>
          </div>
          <span style={{ fontSize: "0.65rem", color: "#1DB954", fontWeight: 700 }}>Spotify</span>
        </div>
      </div>

      {/* ── CARD 3: Instant Screen Share & Squad Watch Party (Foreground Stack) ── */}
      <div
        onClick={() => toggleCard(3)}
        onMouseEnter={() => setHoveredCard(3)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "235px",
          left: "clamp(24px, 8vw, 48px)",
          width: "90%",
          background: "rgba(20, 16, 18, 0.95)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(104, 197, 134, 0.3)",
          borderRadius: "18px",
          padding: "clamp(12px, 3vw, 16px)",
          boxShadow:
            hoveredCard === 3
              ? "0 36px 90px rgba(0, 0, 0, 0.85), 0 0 0 1.5px rgba(104, 197, 134, 0.55)"
              : "0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(104, 197, 134, 0.18)",
          zIndex: hoveredCard === 3 ? 40 : 30,
          transform:
            hoveredCard === 3
              ? "translateY(-10px) scale(1.02) rotate(0deg)"
              : hoveredCard !== null
              ? "translateY(0px) scale(0.97) rotate(-1deg)"
              : "translateY(0px) scale(1) rotate(-1deg)",
          opacity: hoveredCard !== null && hoveredCard !== 3 ? 0.75 : 1,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Screen Share / Watch Party Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "999px",
              padding: "3px 8px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", fontWeight: 800, color: "#fca5a5" }}>
              Live Stream • 1080p 60FPS
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.66rem", color: "#68c586", fontWeight: 700 }}>
            ● 3 Watching
          </span>
        </div>

        {/* Live Stream Showcase Snippet */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30, 24, 28, 0.8) 0%, rgba(20, 16, 18, 0.9) 100%)",
          border: "1px solid rgba(185, 152, 135, 0.18)",
          borderRadius: "10px",
          padding: "8px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <span style={{ fontSize: "1.1rem" }}>🎮</span>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Ranked Squad Match
              </span>
              <span style={{ fontSize: "0.62rem", color: "rgba(185, 152, 135, 0.7)" }}>
                Zero-lag screen co-watch
              </span>
            </div>
          </div>
          <span style={{ padding: "2px 7px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.15)", color: "#86efac", fontSize: "0.64rem", fontWeight: 700, flexShrink: 0 }}>
            Watch ›
          </span>
        </div>

        {/* Quick Chat Snippet */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(0, 0, 0, 0.35)", border: "1px solid rgba(185, 152, 135, 0.16)", borderRadius: "8px", padding: "5px 8px" }}>
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#68c586", color: "#181416", fontSize: "0.6rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            M
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.68rem", color: "rgba(245, 230, 222, 0.9)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            That clutch play in the final round was insane! 🔥
          </span>
        </div>
      </div>
    </div>
  );
}
