"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Download",              href: "/download",  sub: null        },
  { label: "Ignite",                href: "/ignite",    sub: null        },
  { label: "Features",              href: "/features",  sub: null        },
  { label: "Safety & Transparency", href: null,         sub: "safety"    },
  { label: "The Manifesto",         href: null,         sub: "manifesto" },
];

const SUB_LINKS: Record<string, { label: string; href: string }[]> = {
  safety: [
    { label: "Help Center",                 href: "/safety/help"    },
    { label: "Radical Privacy",             href: "/safety/privacy" },
    { label: "Learn About Safety",          href: "/safety/learn"   },
    { label: "Report Bug or Vulnerability", href: "/safety/report"  },
  ],
  manifesto: [
    { label: "The Origin Story",          href: "/manifesto/origin"    },
    { label: "The All-in-One Structure",  href: "/manifesto/structure" },
    { label: "Human-Centric Approach",    href: "/manifesto/human"     },
    { label: "The Future Vision",         href: "/manifesto/future"    },
  ],
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-dela), sans-serif",
  fontSize: "0.88rem",
  color: "var(--ta)",
  textDecoration: "none",
  transition: "opacity 0.2s",
  whiteSpace: "nowrap",
  opacity: 0.65,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSub = (key: string) => setOpenSub(prev => prev === key ? null : key);

  return (
    <>
      <header
        style={{ padding: "20px 23px 20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 200 }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", cursor: "pointer" }}>
          <Image
            src="/reelms-logo.svg"
            alt="Reelms"
            width={48}
            height={48}
            style={{ flexShrink: 0, objectFit: "contain" }}
          />
          <span style={{ fontFamily: "var(--font-dela), sans-serif", fontSize: "1.4rem", color: "var(--ta)", letterSpacing: "0.02em" }}>
            Reelms
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", alignItems: "center", gap: "18px" }}>
          {NAV_LINKS.map(({ label, href, sub }) => (
            <div key={label} style={{ position: "relative" }}>
              {sub ? (
                <button
                  onClick={() => toggleSub(sub)}
                  style={{
                    ...linkStyle,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    opacity: openSub === sub ? 1 : 0.65,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => { if (openSub !== sub) e.currentTarget.style.opacity = "0.65"; }}
                >
                  {label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.25s", transform: openSub === sub ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <Link
                  href={href!}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.65")}
                >
                  {label}
                </Link>
              )}

              {/* Desktop submenu */}
              {sub && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 14px)",
                  left: 0,
                  opacity: openSub === sub ? 1 : 0,
                  pointerEvents: openSub === sub ? "auto" : "none",
                  transition: "opacity 0.2s",
                  minWidth: "210px",
                  zIndex: 300,
                }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingBottom: "4px" }}>
                    {SUB_LINKS[sub].map(({ label: sl, href: sh }, idx) => (
                      <Link
                        key={sh}
                        href={sh}
                        onClick={() => setOpenSub(null)}
                        style={{ ...linkStyle, fontSize: "0.8rem", opacity: 0.5, position: "relative" }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                      >
                        <span style={{ position: "absolute", right: "calc(100% + 4px)", top: "-1px", fontFamily: "var(--font-jakarta), sans-serif", fontSize: "0.55rem", opacity: 0.6, lineHeight: 1 }}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {sl}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Start Web App — desktop only */}
        <Link
          href="https://app.reelms.io"
          className="hidden lg:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(185, 152, 135, 0.07)",
            border: "1px solid rgba(185, 152, 135, 0.2)",
            borderRadius: "999px",
            padding: "9px 20px",
            textDecoration: "none",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(185,152,135,0.12)"; e.currentTarget.style.borderColor = "rgba(185,152,135,0.35)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(185,152,135,0.07)"; e.currentTarget.style.borderColor = "rgba(185,152,135,0.2)"; }}
        >
          <span style={{ fontFamily: "var(--font-jakarta), sans-serif", fontSize: "13px", color: "#b99887", fontWeight: 500 }}>Start </span>
          <span style={{ fontFamily: "var(--font-dela), sans-serif", fontSize: "14px", color: "#b99887", fontWeight: 400 }}>Web App</span>
        </Link>

        {/* Hamburger — mobile/tablet only */}
        <button
          className="flex lg:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", alignItems: "flex-end", gap: "5px", padding: "4px" }}
        >
          {[22, 15, 22].map((w, i) => (
            <span
              key={i}
              style={{
                display: "block",
                height: "2px",
                width: w,
                borderRadius: "999px",
                background: "var(--ta)",
                transition: "all 0.25s",
                opacity: i === 1 ? (open ? 0 : 0.65) : 1,
                transform: open
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                  : "none"
                  : "none",
              }}
            />
          ))}
        </button>
      </header>

      <div style={{ height: "1cm" }} />

      {/* Mobile dropdown — outside header, starts right below it */}
      {open && (
        <nav
          className="lg:hidden"
          style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 24px 28px", position: "relative", zIndex: 50 }}
        >
          <Link
            href="https://app.reelms.io"
            onClick={() => setOpen(false)}
            style={{
              ...linkStyle,
              opacity: 0.7,
              fontSize: "0.95rem",
              border: "1.5px solid var(--ta)",
              borderRadius: "999px",
              padding: "8px 18px",
              display: "inline-flex",
              alignSelf: "flex-start",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
          >
            Start Web App
          </Link>

          {NAV_LINKS.map(({ label, href, sub }) => (
            <div key={label}>
              {sub ? (
                <button
                  onClick={() => toggleSub(sub)}
                  style={{
                    ...linkStyle,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: "0.95rem",
                    opacity: openSub === sub ? 1 : 0.7,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.25s", transform: openSub === sub ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <Link
                  href={href!}
                  onClick={() => setOpen(false)}
                  style={{ ...linkStyle, opacity: 0.7, fontSize: "0.95rem" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
                >
                  {label}
                </Link>
              )}

              {/* Mobile submenu — paddingLeft trick so absolute numbers aren't clipped */}
              {sub && (
                <div style={{
                  overflow: "hidden",
                  maxHeight: openSub === sub ? "300px" : "0",
                  transition: "max-height 0.3s ease",
                  marginLeft: "-22px",
                  paddingLeft: "22px",
                }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "16px" }}>
                    {SUB_LINKS[sub].map(({ label: sl, href: sh }, idx) => (
                      <Link
                        key={sh}
                        href={sh}
                        onClick={() => { setOpen(false); setOpenSub(null); }}
                        style={{ ...linkStyle, fontSize: "0.85rem", opacity: 0.5, position: "relative" }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                      >
                        <span style={{ position: "absolute", right: "calc(100% + 4px)", top: "-1px", fontFamily: "var(--font-jakarta), sans-serif", fontSize: "0.55rem", opacity: 0.6, lineHeight: 1 }}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {sl}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
