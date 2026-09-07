"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

const logs = [
  "Demande reçue · formulaire web",
  "Entreprise enrichie · secteur & taille",
  "Priorité calculée · besoin confirmé",
  "CRM synchronisé · contexte joint",
  "Réponse préparée · validation commerciale",
];

export function AgentPipeline() {
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const point = useRef({ x: 0, y: 0 });
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveLog((current) => (current + 1) % logs.length), 2300);
    return () => {
      window.clearInterval(interval);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const setPosition = () => {
    frame.current = null;
    root.current?.style.setProperty("--pointer-x", `${point.current.x * 0.018}px`);
    root.current?.style.setProperty("--pointer-y", `${point.current.y * 0.018}px`);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    point.current = { x: event.clientX - bounds.left - bounds.width / 2, y: event.clientY - bounds.top - bounds.height / 2 };
    if (frame.current === null) frame.current = requestAnimationFrame(setPosition);
  };

  const handlePointerLeave = () => {
    point.current = { x: 0, y: 0 };
    if (frame.current === null) frame.current = requestAnimationFrame(setPosition);
  };

  return (
    <div ref={root} className="agent-pipeline" aria-label="Pipeline de traitement d'un nouveau lead" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="pipeline-grid" />
      <div className="pipeline-topline"><span><i /> SYSTÈME EN ACTIVITÉ</span><b>04 ÉTAPES CONNECTÉES</b></div>
      <div className="pipeline-stage" aria-hidden="true">
        <div className="pipeline-flow"><i /><i /><i /><i /></div>
        <div className="pipeline-branch" />
      </div>

      <article className="pipeline-node node-lead"><span className="node-icon">↘</span><div><small>TRIGGER</small><strong>Nouveau lead</strong><em>Formulaire Web</em></div></article>
      <article className="pipeline-node node-enrich"><span className="node-icon">✦</span><div><small>CONTEXTE</small><strong>Enrichissement</strong><em>Entreprise + intention</em></div></article>
      <article className="pipeline-node node-score"><div className="score-ring"><b>87</b><span>/100</span></div><div><small>QUALIFICATION</small><strong>Priorité haute</strong><em>Besoin · budget · urgence</em></div></article>

      <article className="pipeline-action action-crm"><span>✓</span><div><small>CRM</small><strong>Fiche mise à jour</strong></div></article>
      <article className="pipeline-action action-mail"><span>↗</span><div><small>EMAIL</small><strong>Réponse personnalisée</strong></div></article>
      <article className="pipeline-action action-alert"><span>!</span><div><small>ÉQUIPE</small><strong>Alerte commerciale</strong></div></article>
      <article className="pipeline-action action-follow"><span>↻</span><div><small>SUIVI</small><strong>Relance programmée</strong></div></article>

      <div className="pipeline-log"><div className="pipeline-log-title"><span>JOURNAL D&apos;EXÉCUTION</span><b>LIVE</b></div>{logs.map((log, index) => <p key={log} className={activeLog === index ? "is-current" : ""} style={{ "--delay": `${index * .8}s` } as CSSProperties}><i /> {log}<time>00:0{index + 1}</time></p>)}</div>
      <div className="pipeline-footer"><span><i /> Traitement lisible, décision humaine</span><b>00:01:47</b></div>
    </div>
  );
}
