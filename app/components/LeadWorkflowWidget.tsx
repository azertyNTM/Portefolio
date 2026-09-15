"use client";

import { useEffect, useState } from "react";

const steps = ["Demande reçue", "Données récupérées", "Informations vérifiées", "Règle appliquée", "Action préparée"];

export function LeadWorkflowWidget() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 1700);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);
  const current = reducedMotion ? steps.length - 1 : active;
  return <section className="workflow-widget" aria-label="Exemple générique du fonctionnement d’une automatisation"><div className="workflow-body"><header className="workflow-heading"><p>FLUX AUTOMATISÉ · EXEMPLE</p><h2>Une demande avance.</h2></header><ol className="workflow-checklist">{steps.map((step, index) => { const status = index < current ? "complete" : index === current ? "active" : "pending"; return <li className={`workflow-step workflow-step--${status}`} key={step}><span className="step-icon" aria-hidden="true">{status === "complete" ? "✓" : String(index + 1)}</span><span>{step}</span>{status === "active" && <i aria-hidden="true" />}</li>; })}</ol><p className="workflow-caption">Le système exécute le prévisible. L’équipe garde la décision utile.</p></div></section>;
}
