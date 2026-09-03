"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "0.95rem",
  fontWeight: 700,
  color: "var(--ta)",
  textDecoration: "none",
  transition: "opacity 0.2s",
  whiteSpace: "nowrap",
  opacity: 0.7,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSub = (key: string) => setOpenSub(prev => prev === key ? null : key);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{ padding: "20px 23px 20px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 200 }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none", cursor: "pointer" }}>
          <Image
            src="/reelms-logo.svg"
            alt="Reelms"
            width={40}
            height={40}
            style={{ flexShrink: 0, objectFit: "contain" }}
          />
          <span style={{
            fontFamily: "var(--font-karla), 'Karla', sans-serif",
            fontSize: "1.28rem",
            fontWeight: 800,
            color: "var(--ta)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            REELMS
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
                        style={{
                          ...linkStyle,
                          fontSize: "0.82rem",
                          opacity: 0.55,
                          display: "inline-flex",
                          alignItems: "flex-start",
                          gap: "5px",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-karla), 'Karla', sans-serif",
                            fontSize: "0.58rem",
                            fontWeight: 800,
                            opacity: 0.6,
                            lineHeight: 1,
                            marginTop: "-1px",
                            color: "var(--ta)",
                          }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{sl}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Reelms Web — desktop only */}
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
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "#b99887", fontWeight: 700 }}>Reelms </span>
          <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "14px", color: "#b99887", fontWeight: 800 }}>Web</span>
        </Link>

        {/* Hamburger button — mobile/tablet only */}
        <button
          className="flex lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
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
                opacity: i === 1 ? 0.65 : 1,
              }}
            />
          ))}
        </button>
      </header>

      {/* Slide-in Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(8, 6, 8, 0.65)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 998,
              }}
            />

            {/* Slide-in Drawer from Right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(340px, 86vw)",
                background: "rgba(24, 20, 22, 0.96)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                borderLeft: "1px solid rgba(185, 152, 135, 0.18)",
                boxShadow: "-16px 0 50px rgba(0, 0, 0, 0.6)",
                zIndex: 999,
                display: "flex",
                flexDirection: "column",
                padding: "24px 22px 32px",
                overflowY: "auto",
              }}
            >
              {/* Drawer Top Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
                >
                  <Image
                    src="/reelms-logo.svg"
                    alt="Reelms"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                  <span style={{
                    fontFamily: "var(--font-karla), 'Karla', sans-serif",
                    fontSize: "1.08rem",
                    fontWeight: 800,
                    color: "var(--ta)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}>
                    REELMS
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: "rgba(185, 152, 135, 0.08)",
                    border: "1px solid rgba(185, 152, 135, 0.15)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--ta)",
                    fontSize: "1.2rem",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.08)"; }}
                >
                  ✕
                </button>
              </div>

              {/* Start Reelms Web CTA Button */}
              <Link
                href="https://app.reelms.io"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "rgba(185, 152, 135, 0.12)",
                  border: "1.5px solid rgba(185, 152, 135, 0.35)",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  textDecoration: "none",
                  marginBottom: "26px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.22)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(185, 152, 135, 0.12)"; }}
              >
                <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "15px", color: "#b99887", fontWeight: 700 }}>Reelms </span>
                <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "15px", color: "#b99887", fontWeight: 800 }}>Web ›</span>
              </Link>

              {/* Navigation Links */}
              <nav style={{ display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}>
                {NAV_LINKS.map(({ label, href, sub }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {sub ? (
                      <button
                        type="button"
                        onClick={() => toggleSub(sub)}
                        style={{
                          ...linkStyle,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          fontSize: "0.95rem",
                          opacity: openSub === sub ? 1 : 0.75,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <span>{label}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.25s", transform: openSub === sub ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={href!}
                        onClick={() => setOpen(false)}
                        style={{ ...linkStyle, opacity: 0.75, fontSize: "0.95rem" }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                      >
                        {label}
                      </Link>
                    )}

                    {/* Submenu Accordion */}
                    {sub && (
                      <div
                        style={{
                          overflow: "hidden",
                          maxHeight: openSub === sub ? "280px" : "0",
                          transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          paddingLeft: "12px",
                        }}
                      >
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "10px", paddingBottom: "6px" }}>
                          {SUB_LINKS[sub].map(({ label: sl, href: sh }, idx) => (
                            <Link
                              key={sh}
                              href={sh}
                              onClick={() => { setOpen(false); setOpenSub(null); }}
                              style={{
                                ...linkStyle,
                                fontSize: "0.84rem",
                                opacity: 0.6,
                                display: "inline-flex",
                                alignItems: "flex-start",
                                gap: "6px",
                              }}
                              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                              onMouseLeave={e => (e.currentTarget.style.opacity = "0.6")}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-karla), 'Karla', sans-serif",
                                  fontSize: "0.58rem",
                                  fontWeight: 800,
                                  opacity: 0.6,
                                  lineHeight: 1,
                                  marginTop: "-1px",
                                  color: "var(--ta)",
                                }}
                              >
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span>{sl}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
