"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Le signal arrive", copy: "Le système part de ce qui existe vraiment : un formulaire, un message, une prise de contact ou un autre signal entrant.", label: "signal", note: "demande reçue" },
  { title: "Le dossier se forme", copy: "Les informations utiles se réunissent autour de la demande. Ce qui manque ou mérite d’être vérifié devient visible avant la première réponse.", label: "dossier", note: "contexte rassemblé" },
  { title: "La priorité se décide", copy: "Le lead est qualifié ou priorisé selon les règles prévues. L’équipe sait ce qui demande une réaction, et ce qui peut attendre.", label: "priorité", note: "attention orientée" },
  { title: "La vente reprend la main", copy: "La sortie n’est pas une animation : c’est une réponse, une relance ou une prise de rendez-vous à ajuster avec le contexte déjà disponible.", label: "reprise", note: "action préparée" },
];

// Structure adaptée de « Scroll 01 » par Felipe Menezes, 21st.dev :
// le récit et son artefact restent synchronisés au défilement sur grand écran.
export function CaseNarrative() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step)); }); }, { threshold: 0.58 }); refs.current.forEach((element) => element && observer.observe(element)); return () => observer.disconnect(); }, []);
  const current = steps[active];
  return <section className="case-narrative" aria-label="Le déroulé du projet Speed-to-Lead"><div className="narrative-art" aria-hidden="true"><div className={`narrative-sheet sheet-${active}`}><div className="sheet-topline"><span>Speed-to-Lead / {String(active + 1).padStart(2, "0")}</span><i>en cours</i></div><strong>{current.label}</strong><div className="sheet-ledger"><span>{current.note}</span><b>●</b></div><p>une prochaine action, pas une boîte noire</p></div></div><div className="narrative-steps">{steps.map((step, index) => <article key={step.title} data-step={index} ref={(element) => { refs.current[index] = element; }} className={active === index ? "is-active" : ""}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p><small>{step.note}</small></article>)}</div></section>;
}
