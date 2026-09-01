"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(185, 152, 135, 0.15)",
        background: "rgba(18, 14, 16, 0.85)",
        backdropFilter: "blur(20px)",
        padding: "60px 24px 40px",
        marginTop: "60px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {/* Top Brand & Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "36px",
            justifyContent: "space-between",
          }}
        >
          {/* Logo & Slogan */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/reelms-logo.svg" alt="Reelms" width={34} height={34} />
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--ta)" }}>
                Reelms
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", color: "rgba(245, 230, 222, 0.65)", lineHeight: 1.5, maxWidth: "280px" }}>
              The serene all-in-one space for communities, gaming squads, and creators.
            </p>
          </div>

          {/* Product Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Product
            </span>
            <Link href="https://app.reelms.io" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Web App
            </Link>
            <Link href="/download" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Download Desktop
            </Link>
            <Link href="/ignite" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Ignite Boost
            </Link>
          </div>

          {/* Safety & Trust Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Safety & Trust
            </span>
            <Link href="/safety/privacy" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Radical Privacy
            </Link>
            <Link href="/safety/help" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Help Center
            </Link>
            <Link href="/safety/report" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Report Bug / Vulnerability
            </Link>
          </div>

          {/* Manifesto & Philosophy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.78rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The Manifesto
            </span>
            <Link href="/manifesto/origin" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              The Origin Story
            </Link>
            <Link href="/manifesto/structure" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              All-in-One Structure
            </Link>
            <Link href="/manifesto/future" style={{ color: "rgba(245, 230, 222, 0.75)", textDecoration: "none", fontSize: "0.85rem" }}>
              Future Vision
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(185, 152, 135, 0.1)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "0.85rem", fontWeight: 800, color: "var(--ta)", letterSpacing: "0.01em" }}>
              Reelms from Sun Intelligence
            </span>
            <span style={{ color: "rgba(245, 230, 222, 0.4)", fontSize: "0.78rem" }}>
              • © {new Date().getFullYear()}
            </span>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/safety/privacy" style={{ color: "rgba(245, 230, 222, 0.5)", textDecoration: "none", fontSize: "0.78rem" }}>
              Privacy
            </Link>
            <Link href="/safety/learn" style={{ color: "rgba(245, 230, 222, 0.5)", textDecoration: "none", fontSize: "0.78rem" }}>
              Terms
            </Link>
            <Link href="https://github.com/berkantcaliskan/reelms" style={{ color: "rgba(245, 230, 222, 0.5)", textDecoration: "none", fontSize: "0.78rem" }}>
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
