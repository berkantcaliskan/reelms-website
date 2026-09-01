"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppPreviewShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "520px",
        height: "560px",
        margin: "0 auto",
        perspective: "1000px",
      }}
    >
      {/* ── CARD 1: Reelm Community & Voice Channel (Top-Left Stack) ── */}
      <div
        onMouseEnter={() => setHoveredCard(1)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "88%",
          background: "rgba(24, 20, 22, 0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(185, 152, 135, 0.22)",
          borderRadius: "20px",
          padding: "16px",
          boxShadow:
            hoveredCard === 1
              ? "0 28px 70px rgba(0, 0, 0, 0.75), 0 0 0 1.5px rgba(185, 152, 135, 0.45)"
              : "0 16px 45px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(185, 152, 135, 0.12)",
          zIndex: hoveredCard === 1 ? 40 : 10,
          transform:
            hoveredCard === 1
              ? "translateY(-12px) scale(1.03) rotate(0deg)"
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#f87171", opacity: 0.8 }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#fbbf24", opacity: 0.8 }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#4ade80", opacity: 0.8 }} />
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", color: "rgba(185, 152, 135, 0.65)", fontWeight: 700 }}>
            Reelms Community
          </span>
        </div>

        {/* Community Cover Banner */}
        <div
          style={{
            height: "80px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(185, 152, 135, 0.4) 0%, rgba(65, 50, 54, 0.6) 100%)",
            border: "1px solid rgba(185, 152, 135, 0.2)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: "12px",
            marginBottom: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "#b99887",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              flexShrink: 0,
            }}
          >
            <Image src="/reelms-logo.svg" alt="Reelms Logo" width={28} height={28} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.98rem", fontWeight: 800, color: "#fff" }}>
              Reelms Topluluğu
            </span>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.75)" }}>
              Ana Topluluk Odası • 1.4k üye
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
            borderRadius: "10px",
            padding: "6px 12px",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#68c586", boxShadow: "0 0 8px #68c586" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", fontWeight: 700, color: "#68c586" }}>
              Canlı Ses Odası • Lounge
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(104, 197, 134, 0.85)", fontWeight: 600 }}>
            4 Kişi Yayında
          </span>
        </div>

        {/* Message preview snippet */}
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#b99887", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#181416", flexShrink: 0 }}>
            B
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", fontWeight: 800, color: "#f5e6de" }}>Berkant</span>
              <span style={{ fontSize: "0.65rem", color: "rgba(185, 152, 135, 0.6)" }}>14:20</span>
            </div>
            <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "rgba(245, 230, 222, 0.85)", margin: 0, lineHeight: 1.3 }}>
              Sakin ve samimi yeni alanımıza hoş geldiniz! 🌿
            </p>
          </div>
        </div>
      </div>

      {/* ── CARD 2: Friend Profile Popup with ROLES & Spotify (Middle Stack) ── */}
      <div
        onMouseEnter={() => setHoveredCard(2)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "140px",
          left: "40px",
          width: "88%",
          background: "rgba(28, 22, 25, 0.92)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(185, 152, 135, 0.25)",
          borderRadius: "20px",
          padding: "16px",
          boxShadow:
            hoveredCard === 2
              ? "0 32px 80px rgba(0, 0, 0, 0.8), 0 0 0 1.5px rgba(185, 152, 135, 0.5)"
              : "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(185, 152, 135, 0.15)",
          zIndex: hoveredCard === 2 ? 40 : 20,
          transform:
            hoveredCard === 2
              ? "translateY(-12px) scale(1.03) rotate(0deg)"
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #b99887, #68c586)", display: "flex", alignItems: "center", justifyContent: "center", color: "#181416", fontWeight: 800, fontSize: "1.1rem" }}>
              R
            </div>
            <span style={{ position: "absolute", bottom: "1px", right: "1px", width: "11px", height: "11px", borderRadius: "50%", background: "#4ade80", border: "2px solid #1c1619" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#f5e6de" }}>
              Reelms Explorer
            </span>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.75rem", color: "rgba(185, 152, 135, 0.75)" }}>
              @explorer
            </span>
          </div>
        </div>

        {/* Roles Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "12px" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.65rem", fontWeight: 800, color: "rgba(185, 152, 135, 0.65)", letterSpacing: "0.08em" }}>
            ROLES
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            <span style={{ padding: "2px 8px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.15)", border: "1px solid rgba(185, 152, 135, 0.4)", color: "#e0c9bc", fontSize: "0.7rem", fontWeight: 700 }}>
              Founder
            </span>
            <span style={{ padding: "2px 8px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.15)", border: "1px solid rgba(104, 197, 134, 0.4)", color: "#86efac", fontSize: "0.7rem", fontWeight: 700 }}>
              Core Member
            </span>
            <span style={{ padding: "2px 8px", borderRadius: "999px", background: "rgba(147, 197, 253, 0.15)", border: "1px solid rgba(147, 197, 253, 0.4)", color: "#93c5fd", fontSize: "0.7rem", fontWeight: 700 }}>
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
            borderRadius: "12px",
            padding: "8px 12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1DB954", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#000", fontSize: "10px", fontWeight: 900 }}>▶</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.75rem", fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                Cornfield Chase
              </span>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.66rem", color: "rgba(255, 255, 255, 0.7)" }}>
                Hans Zimmer • Interstellar
              </span>
            </div>
          </div>
          <span style={{ fontSize: "0.68rem", color: "#1DB954", fontWeight: 700 }}>Spotify</span>
        </div>
      </div>

      {/* ── CARD 3: Dynamic Floating Hub & Clean DMs (Foreground Stack) ── */}
      <div
        onMouseEnter={() => setHoveredCard(3)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: "absolute",
          top: "300px",
          left: "80px",
          width: "88%",
          background: "rgba(20, 16, 18, 0.94)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(104, 197, 134, 0.3)",
          borderRadius: "20px",
          padding: "16px",
          boxShadow:
            hoveredCard === 3
              ? "0 36px 90px rgba(0, 0, 0, 0.85), 0 0 0 1.5px rgba(104, 197, 134, 0.55)"
              : "0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(104, 197, 134, 0.18)",
          zIndex: hoveredCard === 3 ? 40 : 30,
          transform:
            hoveredCard === 3
              ? "translateY(-12px) scale(1.03) rotate(0deg)"
              : hoveredCard !== null
              ? "translateY(0px) scale(0.97) rotate(-1deg)"
              : "translateY(0px) scale(1) rotate(-1deg)",
          opacity: hoveredCard !== null && hoveredCard !== 3 ? 0.75 : 1,
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Dynamic Floating Bar Mockup Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(185, 152, 135, 0.12)",
              border: "1px solid rgba(185, 152, 135, 0.25)",
              borderRadius: "999px",
              padding: "4px 10px",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#b99887" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#e0c9bc" }}>
              Dynamic Bar Active
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "#68c586", fontWeight: 700 }}>
            ● Real-time
          </span>
        </div>

        {/* Interactive Chat Snippet */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
          <div style={{ background: "rgba(185, 152, 135, 0.08)", border: "1px solid rgba(185, 152, 135, 0.14)", borderRadius: "12px", padding: "8px 12px" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "#f5e6de", lineHeight: 1.3 }}>
              Web ve Desktop arasında kesintisiz, sıfır gecikme senkronizasyon. ⚡
            </span>
          </div>
        </div>

        {/* Input Bar Preview */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(185, 152, 135, 0.2)",
            borderRadius: "12px",
            padding: "8px 12px",
          }}
        >
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.74rem", color: "rgba(185, 152, 135, 0.5)" }}>
            Bir mesaj yaz...
          </span>
          <span style={{ fontSize: "0.85rem", color: "#b99887" }}>✨</span>
        </div>
      </div>
    </div>
  );
}
