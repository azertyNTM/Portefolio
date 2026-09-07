"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const steps = [
  { number: "01", label: "Une demande arrive", copy: "Chaque nouveau contact entre avec ses premières informations, sans aucune action manuelle.", detail: "Formulaire / API entrante" },
  { number: "02", label: "Le système comprend le besoin", copy: "Les données utiles sont extraites, enrichies et remises dans leur contexte commercial.", detail: "Budget · besoin · urgence" },
  { number: "03", label: "Le lead est priorisé", copy: "Un score explique clairement ce qui mérite une réponse immédiate et pourquoi.", detail: "87 / 100 · priorité haute" },
  { number: "04", label: "Les actions partent automatiquement", copy: "Le commercial récupère déjà le contexte, le bon message et la prochaine action.", detail: "CRM · email · alerte · booking" },
];

export function LeadStory() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
    }), { rootMargin: "-36% 0px -48% 0px", threshold: 0 });
    const sections = root.current?.querySelectorAll<HTMLElement>("[data-step]");
    sections?.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="lead-story" id="lead-workflow" ref={root} aria-label="Déroulé du système Speed-to-Lead">
      <div className="lead-story-sticky">
        <div className="story-copy"><span className="mini-label">DANS LE SYSTÈME / SPEED-TO-LEAD</span>{steps.map((step, index) => <div className={`story-step ${active === index ? "is-active" : ""}`} key={step.number}><b>{step.number}</b><h3>{step.label}</h3><p>{step.copy}</p><small>{step.detail}</small></div>)}</div>
        <StoryScreen active={active} />
      </div>
      <div className="story-scroll-targets" aria-hidden="true">{steps.map((step, index) => <div key={step.number} data-step={index} />)}</div>
    </section>
  );
}

function StoryScreen({ active }: { active: number }) {
  return <div className={`story-screen screen-${active}`}>
    <div className="screen-top"><span><i /> SYSTÈME ACTIF</span><b>{String(active + 1).padStart(2, "0")} / 04</b></div>
    <div className="screen-canvas">
      <div className="visual visual-form"><span className="visual-caption">NOUVEAU CONTACT</span><strong>Parlons de votre projet</strong><p>Une équipe veut accélérer le traitement de ses demandes entrantes.</p><div className="field-row"><i /><i /></div><button>Envoyer la demande <span>→</span></button></div>
      <div className="visual visual-insight"><span className="visual-caption">LECTURE DU CONTEXTE</span><strong>Atelier Martin &amp; Co.</strong><div className="insight-tags"><b>5–10k</b><b>Automatisation commerciale</b><b>Urgence élevée</b></div><p><i /> Données consolidées</p></div>
      <div className="visual visual-score"><span className="visual-caption">SCORE D&apos;OPPORTUNITÉ</span><div className="large-score">87<span>/100</span></div><strong>PRIORITÉ HAUTE</strong><p><i /> Besoin précis &nbsp; <i /> Budget validé</p></div>
      <div className="visual visual-actions"><span className="visual-caption">ACTIONS LANCÉES</span>{["CRM mis à jour", "Email personnalisé", "Alerte commerciale", "Rendez-vous proposé"].map((item, i) => <p key={item} style={{ "--action": `${i * .12}s` } as CSSProperties}><b>{i === 3 ? "↗" : "✓"}</b>{item}<span>FAIT</span></p>)}</div>
    </div>
    <div className="screen-result"><i /> {active === 3 ? "Le commercial reçoit un lead exploitable." : "Les décisions restent visibles et justifiables."}</div>
  </div>;
}
