"use client";

import { useRef, useState } from "react";

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
  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && previewRef.current) previewRef.current.style.transform = `translate3d(${event.clientX - rect.left + 18}px, ${event.clientY - rect.top - 88}px, 0)`;
  }

  return <section className="project-index" ref={containerRef} onPointerMove={handlePointerMove} aria-label="Index des projets"><div className="index-head"><span>Index</span><span>Survolez pour prévisualiser</span></div><div ref={previewRef} className={`index-preview ${active === null ? "" : "is-visible"}`} aria-hidden="true">{projects.map((project, index) => <div key={project.id} className={`index-poster ${project.tone} ${active === index ? "is-active" : ""}`}><span>{project.number}</span><b>{project.title}</b><i>{project.stamp}</i></div>)}</div><div className="index-list">{projects.map((project, index) => <a key={project.id} href={`#${project.id}`} onPointerEnter={() => setActive(index)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(index)} onBlur={() => setActive(null)}><span>{project.number}</span><strong>{project.title}</strong><p>{project.detail}</p><i aria-hidden="true">↘</i></a>)}</div></section>;
}
