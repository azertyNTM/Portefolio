"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Un prospect arrive", copy: "Le système part de ce qui existe vraiment : formulaire, message, prise de contact ou autre signal entrant.", label: "arrivée" },
  { title: "Le lead est préparé", copy: "Les informations utiles sont réunies, le lead est qualifié ou priorisé, et le point à éclaircir devient visible avant la première réponse.", label: "préparation" },
  { title: "La personne reprend la main", copy: "La sortie n’est pas une animation : c’est une réponse, une relance ou une prise de rendez-vous à ajuster avec le contexte déjà disponible.", label: "reprise" },
];

// Structure adaptée de « Scroll 01 » par Felipe Menezes, 21st.dev :
// le récit et son artefact restent synchronisés au défilement sur grand écran.
export function CaseNarrative() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step)); }); }, { threshold: 0.58 }); refs.current.forEach((element) => element && observer.observe(element)); return () => observer.disconnect(); }, []);
  return <section className="case-narrative" aria-label="Le déroulé du projet Speed-to-Lead"><div className="narrative-art" aria-hidden="true"><div className={`narrative-sheet sheet-${active}`}><span>Speed-to-Lead / {String(active + 1).padStart(2, "0")}</span><strong>{steps[active].label}</strong><p>{active === 0 ? "une intention" : active === 1 ? "une histoire" : "une prochaine action"}</p></div></div><div className="narrative-steps">{steps.map((step, index) => <article key={step.title} data-step={index} ref={(element) => { refs.current[index] = element; }} className={active === index ? "is-active" : ""}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>;
}
