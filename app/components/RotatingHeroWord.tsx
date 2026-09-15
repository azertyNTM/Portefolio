"use client";

import { useEffect, useState } from "react";

const words = ["processus.", "tâches.", "opérations."];

export function RotatingHeroWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % words.length), 4000);
    return () => window.clearInterval(interval);
  }, []);
  return <span className="hero-rotating-word" aria-live="off"><span key={words[index]}>{words[index]}</span></span>;
}
