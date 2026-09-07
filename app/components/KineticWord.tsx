"use client";

import { useCallback, useState, type CSSProperties } from "react";

export function KineticWord({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const trigger = useCallback(() => {
    setPlaying(false);
    requestAnimationFrame(() => setPlaying(true));
  }, []);

  return (
    <button
      type="button"
      className={`kinetic-word ${playing ? "is-playing" : ""}`}
      aria-label={`Animer « ${text} »`}
      onPointerEnter={trigger}
      onClick={trigger}
    >
      {Array.from(text).map((letter, index) => (
        <span className="kinetic-letter" style={{ "--letter": index } as CSSProperties} aria-hidden="true" key={`${letter}-${index}`}>
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </button>
  );
}
