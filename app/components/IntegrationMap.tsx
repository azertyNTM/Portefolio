"use client";

import { useEffect, useRef, useState } from "react";

type Link = { x1: number; y1: number; x2: number; y2: number };

export function IntegrationMap({ tools }: { tools: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [links, setLinks] = useState<Link[]>([]);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const map = ref.current;
    if (!map) return;
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const measure = () => {
      const box = map.getBoundingClientRect();
      const centerOf = (element: Element) => { const r = element.getBoundingClientRect(); return [r.left + r.width / 2 - box.left, r.top + r.height / 2 - box.top]; };
      const center = map.querySelector(".map-center");
      if (!center) return;
      const [x2, y2] = centerOf(center);
      setLinks([...map.querySelectorAll(".map-node")].map((node) => { const [x1, y1] = centerOf(node); return { x1, y1, x2, y2 }; }));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(map);
    return () => observer.disconnect();
  }, []);

  return <div className="integration-map" ref={ref} aria-label="Le processus relie les outils existants">
    <svg className="map-links" aria-hidden="true">{links.map((link, index) => <g key={index}>
      <line {...link} />
      {!still && <circle r="3.5" opacity="0"><animateMotion dur="2.6s" begin={`${index * 0.7}s`} repeatCount="indefinite" path={index % 2 ? `M${link.x2},${link.y2} L${link.x1},${link.y1}` : `M${link.x1},${link.y1} L${link.x2},${link.y2}`} /><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="2.6s" begin={`${index * 0.7}s`} repeatCount="indefinite" /></circle>}
    </g>)}</svg>
    <div className="map-center">Votre<br />processus</div>
    {tools.map((tool, index) => <div className={`map-node map-node-${index + 1}`} key={tool}><span>{tool}</span></div>)}
  </div>;
}
