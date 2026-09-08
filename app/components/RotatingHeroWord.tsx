"use client";

import { useEffect, useState } from "react";

const words = ["tâches répétitives.", "relances.", "processus.", "emails.", "opérations."];

export function RotatingHeroWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % words.length), 3400);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="hero-rotating-word" aria-live="off"><span key={words[index]}>{words[index]}</span></span>;
}
