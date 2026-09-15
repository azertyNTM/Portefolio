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

const incomingDetails = [["Type", "Nouvelle demande"], ["Source", "Formulaire"], ["Contexte", "Données disponibles"], ["État", "À traiter"]];
const analysisSteps = ["Informations vérifiées", "Contexte rassemblé", "Règles appliquées", "Étape suivante définie"];
const actionSteps = ["Données mises à jour", "Tâche créée", "Notification préparée", "Contexte transmis", "Suivi programmé"];

export function LeadWorkflowWidget() {
  const [elapsed, setElapsed] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference(); media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);
  useEffect(() => {
    if (reducedMotion) return;
    const startedAt = performance.now();
    const interval = window.setInterval(() => setElapsed((performance.now() - startedAt) % CYCLE_DURATION), 100);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);
  const { phase, revealed } = reducedMotion ? { phase: "complete" as const, revealed: 4 } : getWorkflowState(elapsed);
  return <section className={`workflow-widget workflow-widget--${phase}`} aria-label="Exemple générique d’un flux d’automatisation">
    {phase === "detected" && <DetectedWorkflow revealed={revealed} />}
    {phase === "qualified" && <Analysis revealed={revealed} />}
    {phase === "actions" && <TriggeredActions revealed={revealed} />}
    {phase === "complete" && <CompletedWorkflow />}
  </section>;
}

function DetectedWorkflow({ revealed }: { revealed: number }) {
  return <div className="workflow-body" key="detected"><WorkflowHeading eyebrow="01 · Réception" title="Nouvelle demande détectée" /><dl className="prospect-details">{incomingDetails.map(([label, value], index) => <div className={index < revealed ? "is-visible" : ""} key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><ActivityLine active>{revealed < 4 ? "Informations récupérées…" : "Analyse du flux…"}</ActivityLine></div>;
}
function Analysis({ revealed }: { revealed: number }) {
  const progress = Math.min(100, Math.max(0, (revealed - 1) * 34));
  return <div className="workflow-body" key="qualified"><WorkflowHeading eyebrow="02 · Analyse" title="Contexte préparé" /><ul className="workflow-checklist">{analysisSteps.map((step, index) => <WorkflowStep key={step} label={step} status={index < revealed ? "complete" : index === revealed ? "active" : "pending"} />)}</ul><div className="qualification-result"><div><span>Avancement</span><strong>{progress}<small> / 100</small></strong></div><div className="priority"><span>Suite</span><strong>Préparée</strong></div></div><div className="score-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div></div>;
}
function TriggeredActions({ revealed }: { revealed: number }) {
  return <div className="workflow-body" key="actions"><WorkflowHeading eyebrow="03 · Exécution" title="Actions préparées" /><ul className="workflow-checklist workflow-checklist--actions">{actionSteps.map((step, index) => <WorkflowStep key={step} label={step} status={index < revealed ? "complete" : index === revealed ? "active" : "pending"} />)}</ul></div>;
}
function CompletedWorkflow() {
  return <div className="workflow-body workflow-complete" key="complete"><WorkflowHeading eyebrow="04 · Terminé" title="Flux préparé" /><div className="completion-summary"><div><span>Données</span><strong>Prêtes</strong></div><div><span>Action</span><strong>Préparée</strong></div><div><span>Équipe</span><strong>Informée</strong></div></div><div className="workflow-duration"><span aria-hidden="true">✓</span> Le contexte est prêt pour <strong>la prochaine décision</strong></div></div>;
}
function WorkflowHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <header className="workflow-heading"><p>{eyebrow}</p><h2>{title}</h2></header>; }
function WorkflowStep({ label, status }: { label: string; status: "complete" | "active" | "pending" }) { return <li className={`workflow-step workflow-step--${status}`}><span className="step-icon" aria-hidden="true">{status === "complete" ? "✓" : ""}</span><span>{label}</span>{status === "active" && <i aria-label="Traitement en cours" />}</li>; }
function ActivityLine({ children, active }: { children: React.ReactNode; active?: boolean }) { return <div className={`activity-line${active ? " activity-line--active" : ""}`}><span aria-hidden="true" />{children}</div>; }
