"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { id: "speed-to-lead", number: "01", title: "Speed-to-Lead", detail: "Du formulaire à une réponse qui sait déjà de quoi elle parle.", tone: "coral", stamp: "démo vidéo / 2–4 min" },
  { id: "recherche", number: "02", title: "Recherche B2B", detail: "Une entreprise remise en contexte avant le premier message.", tone: "paper", stamp: "dossier / sources" },
  { id: "voix", number: "03", title: "Voix en temps réel", detail: "Une conversation téléphonique, sans temps mort ni monologue forcé.", tone: "mint", stamp: "audio / à venir" },
];

// Adapté de « Project Showcase » par Jatin Yadav, 21st.dev :
// une liste éditoriale dont l’aperçu suit le curseur, sans assets génériques.
export function ProjectIndex() {
  const containerRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const animate = () => { current.current.x += (target.current.x - current.current.x) * 0.14; current.current.y += (target.current.y - current.current.y) * 0.14; if (previewRef.current) previewRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`; frame = requestAnimationFrame(animate); };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) { const rect = containerRef.current?.getBoundingClientRect(); if (rect) target.current = { x: event.clientX - rect.left + 18, y: event.clientY - rect.top - 88 }; }

  return <section className="project-index" ref={containerRef} onPointerMove={handlePointerMove} aria-label="Index des projets"><div className="index-head"><span>Index</span><span>Survolez pour prévisualiser</span></div><div ref={previewRef} className={`index-preview ${active === null ? "" : "is-visible"}`} aria-hidden="true">{projects.map((project, index) => <div key={project.id} className={`index-poster ${project.tone} ${active === index ? "is-active" : ""}`}><span>{project.number}</span><b>{project.title}</b><i>{project.stamp}</i></div>)}</div><div className="index-list">{projects.map((project, index) => <a key={project.id} href={`#${project.id}`} onPointerEnter={() => setActive(index)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(index)} onBlur={() => setActive(null)}><span>{project.number}</span><strong>{project.title}</strong><p>{project.detail}</p><i aria-hidden="true">↘</i></a>)}</div></section>;
}
