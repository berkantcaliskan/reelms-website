"use client";

import { useEffect, useState } from "react";

export default function AmbientGradientBackground() {
  const [grainDataUrl, setGrainDataUrl] = useState<string>("");

  useEffect(() => {
    // Generate fine-grain 1:1 pixel monochromatic noise canvas
    const canvas = document.createElement("canvas");
    canvas.width = 160;
    canvas.height = 160;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const imgData = ctx.createImageData(160, 160);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        // High quality fine grain distribution
        const noise = Math.floor(Math.random() * 255);
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = Math.random() > 0.4 ? Math.floor(Math.random() * 45) + 15 : 0; // Alpha
      }
      ctx.putImageData(imgData, 0, 0);
      setGrainDataUrl(canvas.toDataURL("image/png"));
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background: "linear-gradient(135deg, #161314 0%, #20181c 15%, #342429 32%, #4d333b 48%, #785250 64%, #b99887 76%, #88ab86 88%, #68c586 100%)",
      }}
    >
      {/* ── Layer 1: Sweeping Moving Gradient Mesh ── */}
      <div
        className="ambient-mesh-canvas"
        style={{
          position: "absolute",
          inset: "-20%",
          width: "140%",
          height: "140%",
          background: `
            radial-gradient(ellipse 65% 55% at 12% 15%, #181416 0%, #291e23 35%, transparent 70%),
            radial-gradient(ellipse 60% 60% at 42% 38%, #563942 0%, #7e5554 40%, transparent 75%),
            radial-gradient(ellipse 65% 55% at 76% 58%, #b99887 0%, rgba(185, 152, 135, 0.4) 45%, transparent 75%),
            radial-gradient(ellipse 70% 65% at 88% 85%, #68c586 0%, rgba(104, 197, 134, 0.45) 45%, transparent 80%)
          `,
          filter: "blur(60px)",
          opacity: 0.85,
        }}
      />

      {/* ── Layer 2: Roaming Floating Color Spheres (Sequential Color Journey) ── */}

      {/* 1. Deep Default App Base (Top-Left) */}
      <div
        className="ambient-orb-1"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: "750px",
          maxHeight: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #181416 0%, #2d2126 50%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* 2. Lighter Mocha/Burgundy Tone (Top-Center / Diagonal Mid) */}
      <div
        className="ambient-orb-2"
        style={{
          position: "absolute",
          top: "20%",
          left: "25%",
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(94, 62, 70, 0.75) 0%, rgba(65, 45, 50, 0.4) 50%, transparent 80%)",
          filter: "blur(65px)",
        }}
      />

      {/* 3. #b99887 Warm Apricot / Sandstone (Center-Right) */}
      <div
        className="ambient-orb-3"
        style={{
          position: "absolute",
          top: "35%",
          right: "10%",
          width: "52vw",
          height: "52vw",
          maxWidth: "680px",
          maxHeight: "680px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(185, 152, 135, 0.7) 0%, rgba(185, 152, 135, 0.25) 50%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />

      {/* 4. #68c586 Site Emerald Green (Bottom-Right) */}
      <div
        className="ambient-orb-4"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "58vw",
          height: "58vw",
          maxWidth: "750px",
          maxHeight: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(104, 197, 134, 0.65) 0%, rgba(104, 197, 134, 0.2) 50%, transparent 80%)",
          filter: "blur(75px)",
        }}
      />

      {/* ── Layer 2.5: Contrast Comfort Dim Overlay (Enhance Typography Readability) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(ellipse 90% 80% at 50% 40%, rgba(22, 19, 20, 0.42) 0%, rgba(18, 15, 17, 0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 3: Direct Pixel-Level Micro Film Grain (Guaranteed Visibility & Ultra-Fine) ── */}
      {grainDataUrl && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundImage: `url(${grainDataUrl})`,
            backgroundRepeat: "repeat",
            opacity: 0.22,
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}
