"use client";

import { useEffect, useState } from "react";

type Phase = "detected" | "qualified" | "actions" | "complete";

const CYCLE_DURATION = 15_200;

function getWorkflowState(elapsed: number): { phase: Phase; revealed: number } {
  if (elapsed < 4_000) return { phase: "detected", revealed: Math.min(4, Math.floor(elapsed / 700) + 1) };
  if (elapsed < 7_600) return { phase: "qualified", revealed: Math.min(4, Math.floor((elapsed - 4_000) / 580) + 1) };
  if (elapsed < 11_800) return { phase: "actions", revealed: Math.min(5, Math.floor((elapsed - 7_600) / 620) + 1) };
  return { phase: "complete", revealed: 4 };
}

const prospectDetails = [
  ["Nom", "Thomas Martin"],
  ["Entreprise", "Nova Bâtiment"],
  ["Demande", "Devis"],
  ["Source", "Formulaire du site"],
];

const qualificationSteps = ["Informations vérifiées", "Besoin identifié", "Entreprise enrichie", "Priorité évaluée"];
const actionSteps = ["Contact ajouté au CRM", "Opportunité créée", "Responsable assigné", "Réponse préparée", "Relance programmée"];

export function LeadWorkflowWidget() {
  const [elapsed, setElapsed] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const startedAt = performance.now();
    const interval = window.setInterval(() => {
      setElapsed((performance.now() - startedAt) % CYCLE_DURATION);
    }, 100);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const { phase, revealed } = reducedMotion
    ? { phase: "complete" as const, revealed: 4 }
    : getWorkflowState(elapsed);

  return (
    <section className={`workflow-widget workflow-widget--${phase}`} aria-label="Démonstration d’un traitement automatique de prospect">
      {phase === "detected" && <DetectedProspect revealed={revealed} />}
      {phase === "qualified" && <Qualification revealed={revealed} />}
      {phase === "actions" && <TriggeredActions revealed={revealed} />}
      {phase === "complete" && <CompletedWorkflow />}
    </section>
  );
}

function DetectedProspect({ revealed }: { revealed: number }) {
  return <div className="workflow-body" key="detected">
    <WorkflowHeading eyebrow="01 · Réception" title="Nouveau prospect détecté" />
    <dl className="prospect-details">
      {prospectDetails.map(([label, value], index) => <div className={index < revealed ? "is-visible" : ""} key={label}>
        <dt>{label}</dt><dd>{value}</dd>
      </div>)}
    </dl>
    <ActivityLine active>{revealed < 4 ? "Informations récupérées…" : "Analyse de la demande…"}</ActivityLine>
  </div>;
}

function Qualification({ revealed }: { revealed: number }) {
  const score = Math.min(87, Math.max(0, (revealed - 1) * 29));
  return <div className="workflow-body" key="qualified">
    <WorkflowHeading eyebrow="02 · Analyse" title="Qualification automatique" />
    <ul className="workflow-checklist">
      {qualificationSteps.map((step, index) => <WorkflowStep key={step} label={step} status={index < revealed ? "complete" : index === revealed ? "active" : "pending"} />)}
    </ul>
    <div className="qualification-result">
      <div><span>Score</span><strong>{score} <small>/ 100</small></strong></div>
      <div className="priority"><span>Priorité</span><strong>Élevée</strong></div>
    </div>
    <div className="score-track" aria-hidden="true"><span style={{ width: `${score}%` }} /></div>
  </div>;
}

function TriggeredActions({ revealed }: { revealed: number }) {
  return <div className="workflow-body" key="actions">
    <WorkflowHeading eyebrow="03 · Exécution" title="Actions déclenchées" />
    <ul className="workflow-checklist workflow-checklist--actions">
      {actionSteps.map((step, index) => <WorkflowStep key={step} label={step} status={index < revealed ? "complete" : index === revealed ? "active" : "pending"} />)}
    </ul>
  </div>;
}

function CompletedWorkflow() {
  return <div className="workflow-body workflow-complete" key="complete">
    <WorkflowHeading eyebrow="04 · Terminé" title="Automatisation terminée" />
    <div className="completion-summary">
      <div><span>Prospect</span><strong>Qualifié</strong></div>
      <div><span>CRM</span><strong>Synchronisé</strong></div>
      <div><span>Suivi</span><strong>Programmé</strong></div>
    </div>
    <div className="workflow-duration"><span aria-hidden="true">✓</span> Temps de traitement <strong>quelques secondes</strong></div>
  </div>;
}

function WorkflowHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <header className="workflow-heading"><p>{eyebrow}</p><h2>{title}</h2></header>;
}

function WorkflowStep({ label, status }: { label: string; status: "complete" | "active" | "pending" }) {
  return <li className={`workflow-step workflow-step--${status}`}><span className="step-icon" aria-hidden="true">{status === "complete" ? "✓" : ""}</span><span>{label}</span>{status === "active" && <i aria-label="Traitement en cours" />}</li>;
}

function ActivityLine({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return <div className={`activity-line${active ? " activity-line--active" : ""}`}><span aria-hidden="true" />{children}</div>;
}
