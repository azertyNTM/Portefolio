"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { title: "La demande arrive", copy: "Un formulaire est envoyé ou un e-mail arrive avec une demande formulée librement.", label: "Réception" },
  { title: "Les informations sont comprises", copy: "Le système repère l’objet de la demande et extrait les éléments nécessaires au traitement.", label: "Compréhension" },
  { title: "Le contexte est retrouvé", copy: "Il récupère uniquement les informations utiles dans le CRM, les documents ou les outils concernés.", label: "Contexte" },
  { title: "La demande est qualifiée", copy: "Des règles explicites permettent de classer la demande et de déterminer la prochaine étape.", label: "Qualification" },
  { title: "L’action est préparée", copy: "Une tâche, une mise à jour ou une réponse peut être préparée avec le contexte déjà rassemblé.", label: "Préparation" },
  { title: "Une personne valide si nécessaire", copy: "Si le cas est sensible ou ambigu, le système s’arrête au bon endroit et transmet le dossier à une personne.", label: "Validation" },
];

export function CaseNarrative() {
  const [active, setActive] = useState(0);
  const artRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    let frame: number | undefined;

    const updateActiveStep = () => {
      frame = undefined;
      const art = artRef.current;
      const visibleSteps = refs.current.filter((element): element is HTMLElement => element !== null);
      if (!art || visibleSteps.length === 0) return;

      const anchor = art.getBoundingClientRect().top + art.getBoundingClientRect().height / 2;
      const closestStep = visibleSteps.reduce((closest, step) => {
        const stepBounds = step.getBoundingClientRect();
        const stepCenter = stepBounds.top + stepBounds.height / 2;
        const closestBounds = closest.getBoundingClientRect();
        const closestCenter = closestBounds.top + closestBounds.height / 2;
        return Math.abs(stepCenter - anchor) < Math.abs(closestCenter - anchor) ? step : closest;
      });

      setActive(Number(closestStep.dataset.step));
    };

    const requestUpdate = () => {
      if (frame === undefined) frame = requestAnimationFrame(updateActiveStep);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, []);
  const current = steps[active];
  return <div className="case-narrative"><div className="narrative-art" ref={artRef} aria-hidden="true"><div className="narrative-sheet"><div className="sheet-topline"><span>Étape {active + 1} sur {steps.length}</span></div><strong>{current.label}</strong><div className="sheet-progress"><span style={{ width: `${((active + 1) / steps.length) * 100}%` }} /></div><p>{current.title}</p></div></div><div className="narrative-steps">{steps.map((step, index) => <article key={step.title} data-step={index} ref={(element) => { refs.current[index] = element; }} className={active === index ? "is-active" : ""}><span>Étape {index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div>;
}
