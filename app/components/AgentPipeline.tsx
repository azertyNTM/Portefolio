import type { CSSProperties } from "react";

const logs = ["Lead reçu", "Entreprise enrichie", "Score calculé", "CRM synchronisé", "Réponse générée"];

export function AgentPipeline() {
  return (
    <div className="agent-pipeline" aria-label="Pipeline de traitement d'un nouveau lead">
      <div className="pipeline-grid" />
      <div className="pipeline-topline"><span><i /> PIPELINE EN DIRECT</span><b>04 ÉTAPES ACTIVES</b></div>
      <div className="pipeline-flow" aria-hidden="true"><i /><i /><i /><i /></div>

      <article className="pipeline-node node-lead"><span className="node-icon">↘</span><div><small>TRIGGER</small><strong>Nouveau lead</strong><em>Formulaire Web</em></div></article>
      <article className="pipeline-node node-enrich"><span className="node-icon">✦</span><div><small>DONNÉES</small><strong>Enrichissement</strong><em>Entreprise + contexte</em></div></article>
      <article className="pipeline-node node-score"><div className="score-ring"><b>87</b><span>/100</span></div><div><small>QUALIFICATION IA</small><strong>Priorité haute</strong><em>Budget · besoin · urgence</em></div></article>

      <div className="pipeline-branch" aria-hidden="true" />
      <article className="pipeline-action action-crm"><span>✓</span><div><small>CRM</small><strong>Fiche mise à jour</strong></div></article>
      <article className="pipeline-action action-mail"><span>↗</span><div><small>EMAIL</small><strong>Réponse personnalisée</strong></div></article>
      <article className="pipeline-action action-alert"><span>!</span><div><small>ÉQUIPE</small><strong>Alerte commerciale</strong></div></article>
      <article className="pipeline-action action-follow"><span>↻</span><div><small>SUIVI</small><strong>Relance programmée</strong></div></article>

      <div className="pipeline-log"><div className="pipeline-log-title"><span>JOURNAL D&apos;EXÉCUTION</span><b>LIVE</b></div>{logs.map((log, index) => <p key={log} style={{ "--delay": `${index * .8}s` } as CSSProperties}><i /> {log}<time>00:0{index + 1}</time></p>)}</div>
      <div className="pipeline-footer"><span><i /> Traitement en cours</span><b>12:48:03</b></div>
    </div>
  );
}
