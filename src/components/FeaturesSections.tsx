"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSections() {
  return (
    <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 24px) clamp(60px, 8vw, 100px)", display: "flex", flexDirection: "column", gap: "clamp(48px, 7vw, 90px)" }}>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURE 1: FOR FRIENDS & GAMING SQUADS (Drop In / Voice / Co-Listen)
         ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "rgba(24, 20, 22, 0.72)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(185, 152, 135, 0.18)",
          borderRadius: "28px",
          padding: "clamp(24px, 4vw, 56px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(28px, 4vw, 48px)",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient background glow inside card */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(104, 197, 134, 0.16) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        {/* Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(104, 197, 134, 0.12)", border: "1px solid rgba(104, 197, 134, 0.3)", borderRadius: "999px", padding: "4px 12px", alignSelf: "flex-start" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#68c586", boxShadow: "0 0 8px #68c586" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#86efac", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Voice Hangouts & Squad Co-op
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-karla), 'Karla', sans-serif",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#f5e6de",
            margin: 0,
          }}>
            DROP IN, VIBE OUT, <br />
            <span style={{ background: "linear-gradient(90deg, #b99887, #68c586)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              SEE WHO’S AROUND TO CHILL.
            </span>
          </h2>

          <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: "rgba(245, 230, 222, 0.75)", lineHeight: 1.6, margin: 0 }}>
            No ringing calls. No awkward joins. Hop into crystal-clear, zero-latency voice rooms whenever you’re gaming, streaming, or co-listening to Spotify with the squad.
          </p>
        </div>

        {/* Animated Visual Demonstration */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "100%",
            maxWidth: "440px",
            background: "rgba(18, 14, 16, 0.92)",
            border: "1px solid rgba(185, 152, 135, 0.22)",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}>
            {/* Header / Active Room */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(185, 152, 135, 0.12)", paddingBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: "#b99887", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/reelms-logo.svg" alt="Reelms" width={16} height={16} />
                </div>
                <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "#fff" }}>
                  The Lounge • Voice Active
                </span>
              </div>
              <span style={{ fontSize: "0.72rem", color: "#68c586", fontWeight: 700 }}>● 4 Connected</span>
            </div>

            {/* Speaking Member Row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(104, 197, 134, 0.08)", border: "1px solid rgba(104, 197, 134, 0.25)", borderRadius: "12px", padding: "10px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#68c586", border: "2px solid #86efac", boxShadow: "0 0 10px rgba(104, 197, 134, 0.5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#181416", fontWeight: 800, fontSize: "0.85rem" }}>
                  A
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.82rem", fontWeight: 800, color: "#fff" }}>alex_clutch</span>
                  <span style={{ fontSize: "0.68rem", color: "#86efac" }}>🎙️ Speaking now...</span>
                </div>
              </div>
              <span style={{ fontSize: "0.68rem", color: "rgba(185, 152, 135, 0.6)" }}>14ms</span>
            </div>

            {/* Spotify Activity Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(29, 185, 84, 0.08)", border: "1px solid rgba(29, 185, 84, 0.2)", borderRadius: "12px", padding: "10px 14px" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#1DB954", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontSize: "11px", fontWeight: 900, flexShrink: 0 }}>
                ▶
              </div>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", fontWeight: 800, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Listening to Synthwave Chill Mix
                </span>
                <span style={{ fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.65)" }}>Co-listening with 3 friends</span>
              </div>
            </div>

            {/* In-Game Tag */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(185, 152, 135, 0.08)", border: "1px solid rgba(185, 152, 135, 0.15)", borderRadius: "12px", padding: "8px 14px" }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "rgba(245, 230, 222, 0.85)" }}>
                🎮 Playing <strong>Valorant</strong> • In Overtime
              </span>
              <span style={{ fontSize: "0.68rem", color: "#b99887", fontWeight: 700 }}>Join Squad ›</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURE 2: FOR CREATORS, HUBS & STREAMERS (Ignite, Roles, Custom Hubs)
         ══════════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "rgba(24, 20, 22, 0.72)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(185, 152, 135, 0.18)",
          borderRadius: "28px",
          padding: "clamp(24px, 4vw, 56px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(28px, 4vw, 48px)",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow inside */}
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(185, 152, 135, 0.18) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        {/* Visual Mockup (Left Side) */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", order: 2 }}>
          <div style={{
            width: "100%",
            maxWidth: "440px",
            background: "rgba(20, 16, 18, 0.94)",
            border: "1px solid rgba(185, 152, 135, 0.25)",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}>
            {/* Creator Hub Banner */}
            <div style={{
              height: "75px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, rgba(185, 152, 135, 0.35) 0%, rgba(65, 50, 54, 0.7) 100%)",
              border: "1px solid rgba(185, 152, 135, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#b99887", display: "flex", alignItems: "center", justifyContent: "center", color: "#181416", fontWeight: 800 }}>
                  ✨
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.95rem", fontWeight: 800, color: "#fff" }}>
                    Creator Syndicate
                  </span>
                  <span style={{ fontSize: "0.68rem", color: "rgba(255, 255, 255, 0.75)" }}>Level 3 Boosted • 2.8k members</span>
                </div>
              </div>
              <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#68c586", color: "#181416", fontSize: "0.65rem", fontWeight: 800 }}>
                IGNITE
              </span>
            </div>

            {/* Custom Roles Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "rgba(185, 152, 135, 0.65)", letterSpacing: "0.08em" }}>
                TIERED COMMUNITY ROLES
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(185, 152, 135, 0.15)", border: "1px solid rgba(185, 152, 135, 0.4)", color: "#f5e6de", fontSize: "0.72rem", fontWeight: 700 }}>
                  👑 Head Producer
                </span>
                <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(104, 197, 134, 0.15)", border: "1px solid rgba(104, 197, 134, 0.4)", color: "#86efac", fontSize: "0.72rem", fontWeight: 700 }}>
                  ⚡ Core VIP
                </span>
                <span style={{ padding: "3px 10px", borderRadius: "999px", background: "rgba(147, 197, 253, 0.15)", border: "1px solid rgba(147, 197, 253, 0.4)", color: "#93c5fd", fontSize: "0.72rem", fontWeight: 700 }}>
                  🎨 Beta Artist
                </span>
              </div>
            </div>

            {/* Announcement snippet */}
            <div style={{ background: "rgba(185, 152, 135, 0.06)", border: "1px solid rgba(185, 152, 135, 0.16)", borderRadius: "12px", padding: "10px 14px" }}>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.76rem", color: "#f5e6de", lineHeight: 1.4 }}>
                📢 <strong>Tonight’s Live Podcast:</strong> Dropping early access keys to all Core VIPs at 8 PM EST!
              </span>
            </div>
          </div>
        </div>

        {/* Copy (Right Side) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 2, order: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(185, 152, 135, 0.12)", border: "1px solid rgba(185, 152, 135, 0.3)", borderRadius: "999px", padding: "4px 12px", alignSelf: "flex-start" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b99887", boxShadow: "0 0 8px #b99887" }} />
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#e0c9bc", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              For Creators & Community Leaders
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-karla), 'Karla', sans-serif",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#f5e6de",
            margin: 0,
          }}>
            NO CLUTTER. NO ADS. <br />
            <span style={{ background: "linear-gradient(90deg, #68c586, #b99887)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              BUILD A REELM THEY WILL NEVER LEAVE.
            </span>
          </h2>

          <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: "rgba(245, 230, 222, 0.75)", lineHeight: 1.6, margin: 0 }}>
            Escape algorithm burnout and chaotic, oversized servers. Reelms gives creators bespoke hubs with granular roles, rich media sharing, and tiered Ignite perks.
          </p>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURE 3: 3-PILLAR BENTO (Privacy, Zero Bloat, Instant Web Access)
         ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {/* Card A */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "rgba(24, 20, 22, 0.68)",
            border: "1px solid rgba(185, 152, 135, 0.16)",
            borderRadius: "22px",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>⚡</span>
          <h3 style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#fff", margin: 0 }}>
            Zero Bloatware
          </h3>
          <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.9rem", color: "rgba(245, 230, 222, 0.7)", lineHeight: 1.5, margin: 0 }}>
            No 500MB memory hog. Built from the ground up for instantaneous startup and featherweight CPU/RAM footprints.
          </p>
        </motion.div>

        {/* Card B */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "rgba(24, 20, 22, 0.68)",
            border: "1px solid rgba(185, 152, 135, 0.16)",
            borderRadius: "22px",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>🛡️</span>
          <h3 style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#fff", margin: 0 }}>
            Radical Privacy
          </h3>
          <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.9rem", color: "rgba(245, 230, 222, 0.7)", lineHeight: 1.5, margin: 0 }}>
            Zero data brokerage. No invasive trackers or targeted advertising. What happens in your Reelm stays strictly in your Reelm.
          </p>
        </motion.div>

        {/* Card C */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: "rgba(24, 20, 22, 0.68)",
            border: "1px solid rgba(185, 152, 135, 0.16)",
            borderRadius: "22px",
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>🌐</span>
          <h3 style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#fff", margin: 0 }}>
            Instant Web Parity
          </h3>
          <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.9rem", color: "rgba(245, 230, 222, 0.7)", lineHeight: 1.5, margin: 0 }}>
            Jump into full features instantly from any browser tab, or install the native lightweight desktop app when you’re ready.
          </p>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4: FINAL CALL TO ACTION (CTA BANNER)
         ══════════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, rgba(35, 26, 30, 0.95) 0%, rgba(20, 16, 18, 0.95) 100%)",
          border: "1.5px solid rgba(185, 152, 135, 0.28)",
          borderRadius: "32px",
          padding: "clamp(40px, 6vw, 70px) 32px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h2 style={{
          fontFamily: "var(--font-karla), 'Karla', sans-serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.035em",
          textTransform: "uppercase",
          color: "#fff",
          margin: 0,
        }}>
          YOUR NEXT DIGITAL SPACE <br />
          <span style={{ background: "linear-gradient(90deg, #b99887, #68c586)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            STARTS RIGHT HERE.
          </span>
        </h2>

        <p style={{
          fontFamily: "var(--font-karla), 'Karla', sans-serif",
          fontSize: "clamp(15px, 1.4vw, 18px)",
          color: "rgba(245, 230, 222, 0.8)",
          maxWidth: "520px",
          lineHeight: 1.5,
          margin: 0,
        }}>
          Bring your friends, assemble your gaming squad, or build a thriving creator ecosystem. Free to start, free forever.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "12px" }}>
          <Link
            href="https://app.reelms.io"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#b99887",
              color: "#181416",
              padding: "14px 32px",
              borderRadius: "999px",
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "16px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(185, 152, 135, 0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Launch Web App ›
          </Link>

          <Link
            href="/download"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(185, 152, 135, 0.1)",
              border: "1px solid rgba(185, 152, 135, 0.3)",
              color: "#f5e6de",
              padding: "13px 26px",
              borderRadius: "999px",
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.2)"; e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.1)"; e.currentTarget.style.borderColor = "rgba(185, 152, 135, 0.3)"; }}
          >
            Download Desktop
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
