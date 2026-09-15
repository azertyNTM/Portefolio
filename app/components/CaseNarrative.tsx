"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "Le signal arrive", copy: "Un formulaire est envoyé, un e-mail arrive, un document est ajouté ou une donnée change dans votre logiciel.", label: "SIGNAL", note: "demande reçue" },
  { title: "Le contexte est récupéré", copy: "Le système recherche automatiquement les informations nécessaires dans les outils disponibles.", label: "CONTEXTE", note: "informations rassemblées" },
  { title: "Les règles sont appliquées", copy: "Il peut vérifier, classer, enrichir, comparer, résumer ou décider de l’étape suivante selon vos règles.", label: "RÈGLES", note: "traitement explicite" },
  { title: "L’action est préparée", copy: "Mettre à jour un CRM, envoyer une notification, créer une tâche, préparer une réponse ou transmettre un dossier.", label: "ACTION", note: "prochaine étape prête" },
  { title: "L’humain reprend la main", copy: "Tout n’a pas besoin d’être automatisé. Le système prend en charge le prévisible et transmet le reste avec le contexte nécessaire.", label: "REPRISE", note: "décision humaine" },
];

export function CaseNarrative() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
    }), { threshold: 0.58 });
    refs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const current = steps[active];
  return <div className="case-narrative"><div className="narrative-art" aria-hidden="true"><div className="narrative-sheet"><div className="sheet-topline"><span>PROCESSUS / {String(active + 1).padStart(2, "0")}</span><i>en cours</i></div><strong>{current.label}</strong><div className="sheet-ledger"><span>{current.note}</span><b>●</b></div><p>un flux lisible, pas une boîte noire</p></div></div><div className="narrative-steps">{steps.map((step, index) => <article key={step.title} data-step={index} ref={(element) => { refs.current[index] = element; }} className={active === index ? "is-active" : ""}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p><small>{step.note}</small></article>)}</div></div>;
}
