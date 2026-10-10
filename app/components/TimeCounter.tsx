"use client";

import { useEffect, useRef, useState } from "react";

// 5 min par jour × 240 jours ouvrés = 1 200 min = 20 h
const DAILY = 5;
const YEARLY = DAILY * 240;

export function TimeCounter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [minutes, setMinutes] = useState(DAILY);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = instant ? 1 : Math.min((now - start) / 2200, 1);
        setMinutes(Math.round(DAILY + (YEARLY - DAILY) * t * t * t));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => { observer.disconnect(); if (frame !== undefined) cancelAnimationFrame(frame); };
  }, []);

  const done = minutes === YEARLY;
  const value = minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} h${minutes % 60 && !done ? ` ${String(minutes % 60).padStart(2, "0")}` : ""}`;
  return <div className={`time-counter${done ? " is-done" : ""}`} ref={ref}><strong aria-hidden="true">{value}</strong><p><span className="sr-only">20 heures par an. </span>Une tâche de 5 minutes, répétée chaque jour ouvré pendant un an.</p></div>;
}
