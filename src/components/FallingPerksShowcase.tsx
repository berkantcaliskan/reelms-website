"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Clean vector icons for falling perk cards
const FlameIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2c-.5 2-2 3.5-3.5 5.5C7 9.5 6 12 6 14.5 6 18.1 8.9 21 12.5 21s6.5-2.9 6.5-6.5c0-4-3-7-4.5-9-.5 2-1.5 3-2.5 3.5C12 7.5 12 4.5 12 2z"
      fill="#ff7a45"
    />
  </svg>
);

const AudioIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3v18M8 6v12M4 9v6M16 6v12M20 9v6" stroke="#ff8b60" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SparkIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="#ffd4be" />
  </svg>
);

const CrownIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 18h18v2H3v-2zm1-3l2.5-9 5.5 5 5.5-5L20 15H4z" fill="#b99887" />
  </svg>
);

const ShieldIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 5v6.5C4 16.8 7.4 21.6 12 23c4.6-1.4 8-6.2 8-11.5V5l-8-3z" fill="#68c586" />
  </svg>
);

export default function FallingPerksShowcase() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px",
      }}
    >
      {/* Background Radiant Flame Aura */}
      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 107, 74, 0.35) 0%, rgba(226, 138, 82, 0.15) 50%, transparent 75%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* Floating Centerpiece: Main Syndicate Hub Token */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1.5, 0],
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
          borderRadius: "28px",
          padding: "24px",
          width: "280px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 107, 74, 0.25)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "18px",
            background: "#b99887",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(185, 152, 135, 0.4)",
          }}
        >
          <Image src="/reelms-logo.svg" alt="Reelms" width={36} height={36} style={{ objectFit: "contain" }} />
        </div>

        <div>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", display: "block" }}>
            Reelms Ignite All
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", color: "#ff8b60", fontWeight: 700 }}>
            Level 3 • Max Ignition Active
          </span>
        </div>

        <div style={{ width: "100%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "999px", height: "7px", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #ff7a45, #e28a52, #68c586)" }} />
        </div>
      </motion.div>

      {/* ── Falling & Floating Satellite Cards ── */}

      {/* Card 1: 4K 60FPS (Top-Left Floating) */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: [-4, 4, -4],
          rotate: [-12, -8, -12],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          top: "8%",
          left: "2%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255, 122, 69, 0.4)",
          borderRadius: "20px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 74, 0.2)",
          cursor: "pointer",
        }}
      >
        <FlameIcon size={22} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#ffffff" }}>
            4K 60FPS Cast
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.6)" }}>
            Ultra-HD Watch Party
          </span>
        </div>
      </motion.div>

      {/* Card 2: 4 GB Uploads (Top-Right Floating) */}
      <motion.div
        animate={{
          y: [6, -10, 6],
          x: [4, -4, 4],
          rotate: [10, 14, 10],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          top: "6%",
          right: "4%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(185, 152, 135, 0.35)",
          borderRadius: "20px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
      >
        <SparkIcon size={22} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#ffffff" }}>
            4 GB Uploads
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.6)" }}>
            Lossless Media Sharing
          </span>
        </div>
      </motion.div>

      {/* Card 3: 3D Spatial Audio (Bottom-Left Floating) */}
      <motion.div
        animate={{
          y: [8, -8, 8],
          rotate: [6, 2, 6],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "4%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255, 107, 74, 0.35)",
          borderRadius: "20px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
      >
        <AudioIcon size={22} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#ffffff" }}>
            Spatial 3D Audio
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.6)" }}>
            Positional Squad Voice
          </span>
        </div>
      </motion.div>

      {/* Card 4: Animated Avatars (Bottom-Right Floating) */}
      <motion.div
        animate={{
          y: [-10, 6, -10],
          rotate: [-8, -12, -8],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
        style={{
          position: "absolute",
          bottom: "6%",
          right: "2%",
          zIndex: 12,
          background: "rgba(28, 22, 25, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(185, 152, 135, 0.35)",
          borderRadius: "20px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
      >
        <CrownIcon size={22} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.88rem", fontWeight: 800, color: "#ffffff" }}>
            Video Avatars
          </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.6)" }}>
            GIF Banners & Cosmetics
          </span>
        </div>
      </motion.div>

      {/* Floating Micro Badge: Auto Webhooks (Center Top-Right) */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [4, -4, 4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        style={{
          position: "absolute",
          top: "40%",
          right: "-2%",
          zIndex: 14,
          background: "rgba(104, 197, 134, 0.15)",
          border: "1px solid rgba(104, 197, 134, 0.4)",
          borderRadius: "999px",
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backdropFilter: "blur(16px)",
        }}
      >
        <ShieldIcon size={14} />
        <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.74rem", fontWeight: 800, color: "#86efac" }}>
          Auto Webhooks
        </span>
      </motion.div>
    </div>
  );
}
