"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  phase: "in" | "out";
}

let uid = 0;
const COUNT         = 14;
const MIN_DIST      = 10;
const SWAP_INTERVAL = 1560;
const FADE_MS       = 2000;

function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function isForbiddenZone(x: number, y: number): boolean {
  // 1. Top header, logo, nav bar and dropdown menus
  if (y < 20) return true;
  // 2. Central content, titles, headings, and CTA buttons
  if (x > 16 && x < 84 && y <= 82) return true;
  // 3. Extreme viewport bleed
  if (y > 96 || x < 3 || x > 97) return true;
  return false;
}

function makeParticle(others: Particle[]): Particle {
  let x = 8, y = 50;
  for (let i = 0; i < 120; i++) {
    const zone = Math.random();
    let cx = 0, cy = 0;
    if (zone < 0.45) {
      // Left ambient wing
      cx = rand(4, 16);
      cy = rand(22, 85);
    } else if (zone < 0.90) {
      // Right ambient wing
      cx = rand(84, 96);
      cy = rand(22, 85);
    } else {
      // Bottom ambient margin
      cx = rand(15, 85);
      cy = rand(84, 94);
    }

    const forbidden = isForbiddenZone(cx, cy);
    const clear = !forbidden && others.every(e => Math.hypot(e.x - cx, e.y - cy) >= MIN_DIST);
    if (clear) { x = cx; y = cy; break; }
  }
  return { id: uid++, x, y, rotation: rand(-18, 18), size: rand(32, 54), phase: "in" };
}

export default function CatParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const retiring = useRef<Set<number>>(new Set());
  const cursor   = useRef(0);

  useEffect(() => {
    let alive = true;

    const retire = (id: number) => {
      if (!alive) return;
      retiring.current.add(id);
      setParticles(prev => prev.map(p => p.id === id ? { ...p, phase: "out" as const } : p));
    };

    const init: Particle[] = [];
    for (let i = 0; i < COUNT; i++) init.push(makeParticle(init));
    setParticles(init);

    const interval = setInterval(() => {
      setParticles(prev => {
        const available = prev.filter(p => p.phase === "in" && !retiring.current.has(p.id));
        if (!available.length) return prev;
        const target = available[cursor.current % available.length];
        cursor.current++;
        if (alive) {
          retiring.current.add(target.id);
          return prev.map(p => p.id === target.id ? { ...p, phase: "out" as const } : p);
        }
        return prev;
      });
    }, SWAP_INTERVAL);

    return () => { alive = false; clearInterval(interval); };
  }, []);

  // When fade-out animation ends: remove particle and spawn a new one
  const onDone = (id: number, phase: Particle["phase"]) => {
    if (phase !== "out") return;
    retiring.current.delete(id);
    setParticles(prev => {
      const others = prev.filter(p => p.id !== id);
      return [...others, makeParticle(others)];
    });
  };

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map(p => (
        <img
          key={p.id}
          src="/reelms-logo.svg"
          alt=""
          aria-hidden="true"
          onAnimationEnd={() => onDone(p.id, p.phase)}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            objectFit: "contain",
            animation: `${p.phase === "in" ? "p-in" : "p-out"} ${FADE_MS}ms ease-in-out forwards`,
          }}
        />
      ))}
    </div>
  );
}
