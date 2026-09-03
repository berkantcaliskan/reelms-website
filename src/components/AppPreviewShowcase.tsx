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
        height: "475px",
        margin: "0 auto",
        marginTop: "16px",
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
          top: "6px",
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
            <svg
              viewBox="55 51 96 78"
              width={25}
              height={25}
              style={{ display: "block", fill: "none", margin: "auto", color: "#383835" }}
              aria-hidden="true"
            >
              <g transform="matrix(1.3333333,0,0,-1.3333333,0,213.33333)">
                <g transform="translate(111.7166,84.8022)">
                  <path
                    style={{ fill: "none", stroke: "#383835", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
                    d="m 0,0 c -0.186,1.171 -0.532,2.311 -0.993,3.39 -0.546,1.275 -1.256,2.468 -2.101,3.536 -0.204,0.257 -0.416,0.508 -0.635,0.751 -0.25,0.276 -0.459,0.47 -0.585,0.708 -0.119,0.224 -0.164,0.487 -0.1,0.894 0.114,0.717 0.146,1.392 0.168,2.118 0.036,1.186 0.061,2.373 0.066,3.559 0.01,2.371 -0.057,4.745 -0.262,7.106 -0.071,0.811 -0.159,1.63 -0.419,2.395 -0.671,1.979 -2.556,3.398 -4.505,3.393 -0.607,-0.001 -1.209,-0.128 -1.8,-0.276 -2.679,-0.668 -5.255,-1.797 -7.618,-3.314 -1.327,-0.851 -2.586,-1.826 -3.759,-2.91 -0.533,-0.492 -1.048,-1.008 -1.543,-1.544 -0.366,-0.397 -0.672,-1.035 -1.109,-1.339 -0.415,-0.288 -0.976,0.002 -1.434,0.048 -0.599,0.061 -1.199,0.114 -1.799,0.157 -1.227,0.089 -2.456,0.141 -3.686,0.155 -1.742,0.023 -3.491,0.021 -5.234,0 -1.229,-0.014 -2.458,-0.066 -3.685,-0.155 -0.601,-0.043 -1.2,-0.096 -1.799,-0.157 -0.458,-0.046 -1.019,-0.336 -1.434,-0.048 -0.437,0.304 -0.744,0.942 -1.11,1.339 -0.495,0.536 -1.009,1.052 -1.542,1.544 -1.173,1.084 -2.432,2.059 -3.759,2.91 -2.363,1.517 -4.939,2.646 -7.618,3.314 -0.591,0.148 -1.193,0.275 -1.8,0.276 -1.95,0.005 -3.835,-1.414 -4.505,-3.393 -0.26,-0.765 -0.349,-1.584 -0.419,-2.395 -0.205,-2.361 -0.272,-4.735 -0.262,-7.106 0.005,-1.186 0.029,-2.373 0.066,-3.559 0.022,-0.726 0.054,-1.401 0.167,-2.118 0.065,-0.407 0.02,-0.67 -0.099,-0.894 -0.126,-0.238 -0.335,-0.432 -0.585,-0.708 -0.22,-0.243 -0.432,-0.494 -0.636,-0.751 -0.47,-0.595 -0.899,-1.228 -1.28,-1.893 -0.304,-0.529 -0.578,-1.078 -0.82,-1.643 -0.461,-1.079 -0.807,-2.219 -0.993,-3.39 -0.63,-3.958 -0.03,-7.821 2.054,-11.105 0.137,-0.216 0.279,-0.428 0.428,-0.638 0.779,-1.094 1.68,-2.094 2.72,-2.895 0.293,-0.226 0.597,-0.436 0.907,-0.632 0.566,-0.358 1.161,-0.655 1.763,-0.934 0.51,-0.236 1.025,-0.46 1.533,-0.695 1.158,-0.538 2.315,-1.078 3.475,-1.612 1.861,-0.856 3.728,-1.696 5.608,-2.501 0.541,-0.232 1.083,-0.461 1.626,-0.686 v 0 c 0.992,-0.411 1.985,-0.819 2.982,-1.215 1.373,-0.545 2.755,-1.067 4.152,-1.536 1.037,-0.349 2.082,-0.668 3.138,-0.947 1.456,-0.385 2.898,-0.713 4.344,-0.693 1.446,-0.02 2.889,0.308 4.345,0.693 1,0.264 1.991,0.565 2.975,0.893 1.452,0.483 2.888,1.024 4.314,1.59 0.098,0.038 0.196,0.077 0.293,0.116 0.461,0.184 0.921,0.371 1.381,0.559 0.437,0.179 0.873,0.359 1.309,0.54 2.431,1.008 4.838,2.085 7.234,3.187 1.16,0.534 2.317,1.074 3.475,1.612 1.109,0.514 2.251,0.969 3.296,1.629 0.31,0.196 0.614,0.406 0.907,0.632 1.04,0.801 1.941,1.801 2.719,2.895 0.112,0.157 0.22,0.315 0.324,0.475 C 0.01,-7.949 0.64,-4.024 0,0 Z"
                  />
                </g>
                <g transform="translate(72.9505,84.975)">
                  <path
                    style={{ fill: "none", stroke: "#383835", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
                    d="m 0,0 c -0.478,-3.398 -3.118,-5.836 -5.898,-5.445 -2.78,0.391 -4.647,3.462 -4.169,6.86 0.477,3.398 3.118,5.836 5.898,5.445 C -1.389,6.469 0.478,3.398 0,0 Z"
                  />
                </g>
                <g transform="translate(91.7297,86.3893)">
                  <path
                    style={{ fill: "none", stroke: "#383835", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
                    d="m 0,0 c 0.491,-3.496 -1.362,-6.647 -4.14,-7.037 -2.777,-0.391 -5.427,2.127 -5.919,5.623 -0.491,3.497 1.362,6.647 4.14,7.038 C -3.141,6.014 -0.491,3.496 0,0 Z"
                  />
                </g>
              </g>
            </svg>
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
