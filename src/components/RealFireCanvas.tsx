"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function RealFireCanvas({
  width = 600,
  height = 240,
}: {
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const maxParticles = 140;

    const createParticle = (): Particle => {
      // Spawn across the width baseline
      const x = Math.random() * (canvas.width * 0.9) + canvas.width * 0.05;
      const y = canvas.height * 0.85 + (Math.random() * 20 - 10);
      const life = 0;
      const maxLife = Math.random() * 35 + 25;
      const size = Math.random() * 26 + 18;
      const vx = (Math.random() - 0.5) * 1.8;
      const vy = -(Math.random() * 3.5 + 2.8); // Rise upward
      // Hue: Yellow (45) to Orange-Red (12)
      const hue = Math.random() * 30 + 15;
      return { x, y, vx, vy, size, life, maxLife, hue };
    };

    // Pre-populate particles
    for (let i = 0; i < maxParticles; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.x += p.vx + (Math.random() - 0.5) * 0.6;
        p.y += p.vy;
        p.size *= 0.96; // Shrink as it rises

        const progress = p.life / p.maxLife;
        if (progress >= 1 || p.size <= 1) {
          particles[i] = createParticle();
          continue;
        }

        // Color transition: Yellow -> Deep Orange -> Fiery Red
        const alpha = Math.sin(progress * Math.PI) * 0.65;
        const currentHue = p.hue - progress * 20; // shifts from yellow to intense orange/red
        const lightness = 65 - progress * 30; // gets darker towards top

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `hsla(${currentHue + 15}, 100%, 75%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${currentHue}, 100%, ${lightness}%, ${alpha * 0.8})`);
        gradient.addColorStop(1, `hsla(${Math.max(0, currentHue - 15)}, 100%, 30%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add a few floating ember sparks
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(255, 210, 150, 0.8)";
      for (let j = 0; j < 12; j++) {
        const sparkX = Math.random() * canvas.width;
        const sparkY = Math.random() * canvas.height * 0.7;
        const sparkSize = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, sparkSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: "absolute",
        bottom: "-15%",
        left: "-8%",
        width: "116%",
        height: "140%",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(4px)",
      }}
    />
  );
}
