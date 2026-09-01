"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FlameIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path
      d="M12 2c-.5 2-2 3.5-3.5 5.5C7 9.5 6 12 6 14.5 6 18.1 8.9 21 12.5 21s6.5-2.9 6.5-6.5c0-4-3-7-4.5-9-.5 2-1.5 3-2.5 3.5C12 7.5 12 4.5 12 2z"
      fill="#ff7a45"
    />
  </svg>
);

const AudioIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 3v18M8 6v12M4 9v6M16 6v12M20 9v6" stroke="#ff8b60" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SparkIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="#ffd4be" />
  </svg>
);

const ShieldIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2L4 5v6.5C4 16.8 7.4 21.6 12 23c4.6-1.4 8-6.2 8-11.5V5l-8-3z" fill="#68c586" />
  </svg>
);

export default function FallingPerksShowcase() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        height: "clamp(340px, 45vw, 420px)",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px",
        overflow: "visible",
      }}
    >
      {/* Background Radiant Flame Aura */}
      <div
        style={{
          position: "absolute",
          width: "min(360px, 90vw)",
          height: "min(360px, 90vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 107, 74, 0.35) 0%, rgba(226, 138, 82, 0.15) 50%, transparent 75%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      {/* Floating Centerpiece: Main Syndicate Hub Token */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1.2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "relative",
          zIndex: 10,
          background: "linear-gradient(145deg, rgba(38, 28, 32, 0.95) 0%, rgba(20, 16, 18, 0.98) 100%)",
          border: "2px solid rgba(255, 122, 69, 0.5)",
          borderRadius: "24px",
          padding: "clamp(16px, 3vw, 22px)",
          width: "clamp(220px, 60vw, 270px)",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 107, 74, 0.25)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: "#b99887",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(185, 152, 135, 0.4)",
          }}
        >
          <Image src="/reelms-logo.svg" alt="Reelms" width={32} height={32} style={{ objectFit: "contain" }} />
        </div>

        <div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", fontWeight: 800, color: "#ffffff", display: "block" }}>
            Reelms Ignite All
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", color: "#ff8b60", fontWeight: 700 }}>
            Level 3 • Max Ignition Active
          </span>
        </div>

        <div style={{ width: "100%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "999px", height: "6px", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #ff7a45, #e28a52, #68c586)" }} />
        </div>
      </motion.div>

      {/* ── Balanced 4-Corner Floating Cards (Responsive Sizing) ── */}

      {/* Card 1: 4K 60FPS (Top-Left) */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: [-2, 2, -2],
          rotate: [-8, -5, -8],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          top: "2%",
          left: "0%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(255, 122, 69, 0.45)",
          borderRadius: "16px",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          maxWidth: "48%",
        }}
      >
        <FlameIcon size={18} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap" }}>
            4K 60FPS Cast
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.6)", whiteSpace: "nowrap" }}>
            Ultra-HD Stream
          </span>
        </div>
      </motion.div>

      {/* Card 2: 4 GB Uploads (Top-Right) */}
      <motion.div
        animate={{
          y: [5, -7, 5],
          x: [2, -2, 2],
          rotate: [6, 10, 6],
        }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          top: "2%",
          right: "0%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(185, 152, 135, 0.35)",
          borderRadius: "16px",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          maxWidth: "48%",
        }}
      >
        <SparkIcon size={18} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap" }}>
            4 GB Files
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.6)", whiteSpace: "nowrap" }}>
            Lossless Media
          </span>
        </div>
      </motion.div>

      {/* Card 3: 3D Spatial Audio (Bottom-Left) */}
      <motion.div
        animate={{
          y: [6, -5, 6],
          rotate: [5, 2, 5],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          bottom: "3%",
          left: "0%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(255, 107, 74, 0.35)",
          borderRadius: "16px",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          maxWidth: "48%",
        }}
      >
        <AudioIcon size={18} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap" }}>
            Spatial 3D
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.6)", whiteSpace: "nowrap" }}>
            3D Squad Voice
          </span>
        </div>
      </motion.div>

      {/* Card 4: Trigger Automations (Bottom-Right) */}
      <motion.div
        animate={{
          y: [-6, 5, -6],
          rotate: [-5, -8, -5],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          bottom: "3%",
          right: "0%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(104, 197, 134, 0.35)",
          borderRadius: "16px",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
          maxWidth: "48%",
        }}
      >
        <ShieldIcon size={18} />
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)", fontWeight: 800, color: "#ffffff", whiteSpace: "nowrap" }}>
            Automations
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.62rem", color: "rgba(255, 255, 255, 0.6)", whiteSpace: "nowrap" }}>
            Smart Auto-Hooks
          </span>
        </div>
      </motion.div>
    </div>
  );
}
