import Image from "next/image";
import { CaseNarrative } from "./components/CaseNarrative";
import { DiagnosticSection } from "./components/DiagnosticSection";
import { LeadWorkflowWidget } from "./components/LeadWorkflowWidget";
import { RotatingHeroWord } from "./components/RotatingHeroWord";
import { CONTACT_EMAIL } from "./config";

const problems = [
  ["Les mêmes informations sont ressaisies.", "Vos logiciels possèdent déjà une partie des données nécessaires, mais quelqu’un doit encore les déplacer ou les reformater."],
  ["Les actions arrivent trop tard.", "Une demande entre, mais plusieurs étapes manuelles sont nécessaires avant qu’une personne puisse agir."],
  ["Vos outils travaillent séparément.", "E-mails, CRM, formulaires, documents et logiciels métier contiennent de l’information sans forcément communiquer entre eux."],
  ["Le savoir reste dans la tête des équipes.", "Certaines tâches fonctionnent uniquement parce qu’une personne sait quoi chercher, où le trouver et quoi faire ensuite."],
];

const automationAreas = [
  { name: "Commercial", title: "Réagir plus vite aux opportunités.", copy: "Qualifier les demandes, enrichir les prospects, préparer le contexte, déclencher les relances et maintenir les informations à jour.", tags: ["qualification", "CRM", "prospection", "relances"] },
  { name: "Administration", title: "Faire disparaître une partie de la ressaisie.", copy: "Extraire des informations, traiter des documents, classer les demandes et faire circuler les données entre vos outils.", tags: ["documents", "saisie", "classement", "transfert"] },
  { name: "Opérations", title: "Faire circuler le travail automatiquement.", copy: "Déclencher des actions, synchroniser différents logiciels et éviter les étapes intermédiaires inutiles.", tags: ["workflows", "API", "synchronisation", "alertes"] },
  { name: "Support", title: "Faire arriver la demande au bon endroit avec le bon contexte.", copy: "Comprendre une demande, rechercher l’information disponible et préparer ou transmettre la bonne réponse.", tags: ["tri", "routage", "recherche", "réponses"] },
];

const methodSteps = [
  ["Observer", "Comprendre le processus tel qu’il existe réellement : les personnes, les outils, les informations et les décisions."],
  ["Identifier", "Repérer les étapes répétitives, lentes ou susceptibles de provoquer des erreurs."],
  ["Concevoir", "Déterminer ce qui doit être automatisé, ce qui doit rester humain et comment les deux doivent communiquer."],
  ["Construire", "Créer le système autour de vos outils et de vos contraintes."],
  ["Mesurer", "Vérifier que le processus est réellement devenu plus rapide, plus simple ou plus fiable."],
];

const values = [
  ["Moins de tâches répétitives", "Les équipes passent moins de temps à copier, rechercher, classer et transmettre des informations."],
  ["Moins d’attente", "Les prochaines étapes peuvent être déclenchées dès que les informations nécessaires sont disponibles."],
  ["Moins d’oublis", "Le processus ne dépend plus entièrement de quelqu’un qui doit penser à effectuer l’action suivante."],
  ["Plus de contexte", "Lorsqu’une personne doit intervenir, les informations nécessaires sont déjà rassemblées."],
  ["Des processus plus simples à faire évoluer", "Le fonctionnement devient explicite plutôt que dispersé entre plusieurs outils et habitudes internes."],
];

const connectedTools = ["CRM", "MAIL", "FORMULAIRE", "DOCUMENTS", "API", "LOGICIEL MÉTIER"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Lysere — Retour à l’accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={560} height={220} priority /></a>
        <nav aria-label="Navigation principale"><a href="#automatisation">Automatisation</a><a href="#methode">Méthode</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Parler de votre processus</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title">J’automatise vos<br /><em><RotatingHeroWord /></em></h1><div className="hero-aside"><p>Je conçois des systèmes sur mesure pour réduire les tâches manuelles, connecter vos outils et accélérer le travail de vos équipes.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Parler de votre processus</a><a className="button button-secondary" href="#automatisation">Voir ce que j’automatise</a></div></div></div>
        <LeadWorkflowWidget />
      </section>

      <section className="section problems" aria-labelledby="problems-title">
        <SectionIntro label="LÀ OÙ LE TRAVAIL RALENTIT" id="problems-title" title={<>Beaucoup de travail ne devrait<br />plus être manuel.</>}><p>Une information copiée d’un outil à l’autre. Un document qu’il faut encore ouvrir, lire puis ressaisir. Un prospect qu’il faut rechercher avant de pouvoir lui répondre. Une relance qui dépend de quelqu’un qui doit penser à la faire. Une demande qui attend parce que l’information nécessaire se trouve ailleurs.</p><p>Pris séparément, ce sont quelques minutes.<br />Répétés chaque jour, ce sont des heures.</p></SectionIntro>
        <NumberedList items={problems} />
      </section>

      <section className="section automation" id="automatisation" aria-labelledby="automation-title">
        <SectionIntro label="PAS UN CATALOGUE DE SOLUTIONS" id="automation-title" title={<>Votre processus d’abord.<br />La technologie ensuite.</>}><p>Je ne pars pas d’une automatisation préfabriquée.</p><p>Je regarde comment le travail circule aujourd’hui, quelles étapes prennent du temps et lesquelles peuvent être prises en charge par un système.</p></SectionIntro>
        <div className="area-grid">{automationAreas.map((area, index) => <article className="area" key={area.name}><span className="item-number">{String(index + 1).padStart(2, "0")} — {area.name}</span><h3>{area.title}</h3><p>{area.copy}</p><ul className="tags" aria-label={`Domaines liés à ${area.name}`}>{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="section workflow" aria-labelledby="workflow-title">
        <SectionIntro label="UN FLUX, PAS UNE BOÎTE NOIRE" id="workflow-title" title={<>Une information entre.<br />Le système fait le reste.</>} />
        <CaseNarrative />
      </section>

      <section className="section integration" aria-labelledby="integration-title">
        <div className="integration-copy"><SectionIntro label="INTÉGRATION" id="integration-title" title={<>Vos outils restent<br />vos outils.</>}><p>Pas besoin de reconstruire votre entreprise autour d’un nouvel outil.</p><p>Une bonne automatisation doit s’adapter à votre façon de travailler. Pas l’inverse.</p><p>L’objectif n’est pas d’ajouter une plateforme de plus. C’est de faire travailler ensemble celles que vous avez déjà.</p></SectionIntro></div>
        <div className="integration-map" aria-label="Le processus relie les outils existants"><div className="map-center">VOTRE<br />PROCESSUS</div>{connectedTools.map((tool, index) => <div className={`map-node map-node-${index + 1}`} key={tool}><span>{tool}</span></div>)}</div>
      </section>

      <section className="section method" id="methode" aria-labelledby="method-title">
        <SectionIntro label="COMPRENDRE AVANT D’AUTOMATISER" id="method-title" title={<>Comprendre le flux.<br />Construire juste.</>} />
        <NumberedList items={methodSteps} />
      </section>

      <section className="section value" aria-labelledby="value-title">
        <SectionIntro label="L’IA N’EST PAS LE RÉSULTAT" id="value-title" title={<>La technologie doit disparaître<br />derrière le travail.</>}><p>Une automatisation n’a pas de valeur parce qu’elle utilise de l’IA.</p><p>Elle a de la valeur lorsqu’elle réduit quelque chose de concret.</p></SectionIntro>
        <NumberedList items={values} />
      </section>

      <DiagnosticSection />

      <section className="contact" id="contact" aria-labelledby="contact-title"><span className="section-label section-label--light">UN PROCESSUS EN TÊTE ?</span><h2 id="contact-title">Parlons du travail<br />qui revient trop souvent.</h2><p>Pas besoin d’avoir déjà imaginé la solution. Expliquez-moi simplement comment le processus fonctionne aujourd’hui et ce qui vous fait perdre du temps.</p>{CONTACT_EMAIL ? <a className="button button-light" href={`mailto:${CONTACT_EMAIL}?subject=Processus%20%C3%A0%20automatiser`}>Discuter de votre processus</a> : <span className="button button-light is-disabled" aria-disabled="true" title="Adresse de contact à renseigner">Discuter de votre processus</span>}<p className="contact-note">Une situation réelle suffit pour commencer.{!CONTACT_EMAIL && " · Adresse de contact à venir"}</p></section>
      <footer><a className="brand-lockup brand-lockup--footer" href="#top" aria-label="Lysere — Retour en haut"><Image src="/lysere-logo-horizontal.svg" alt="" width={560} height={220} /></a><p>Automatisations et systèmes sur mesure.</p></footer>
    </main>
  );
}

function SectionIntro({ label, id, title, children }: { label: string; id: string; title: React.ReactNode; children?: React.ReactNode }) {
  return <div className="section-intro"><span className="section-label">{label}</span><h2 id={id}>{title}</h2>{children && <div className="section-copy">{children}</div>}</div>;
}

function NumberedList({ items }: { items: string[][] }) {
  return <div className="numbered-list">{items.map(([title, copy], index) => <article key={title}><span className="item-number">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}
