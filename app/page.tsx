import Image from "next/image";
import { CaseNarrative } from "./components/CaseNarrative";
import { LeadWorkflowWidget } from "./components/LeadWorkflowWidget";

const problems = [
  ["Les mêmes informations sont ressaisies.", "Vos logiciels possèdent déjà une partie des données nécessaires, mais quelqu’un doit encore les déplacer ou les reformater."],
  ["Les actions arrivent trop tard.", "Une demande entre, mais plusieurs étapes manuelles sont nécessaires avant qu’une personne puisse agir."],
  ["Vos outils travaillent séparément.", "E-mails, CRM, formulaires, documents et logiciels métier contiennent de l’information sans forcément communiquer entre eux."],
  ["Le savoir reste dans la tête des équipes.", "Certaines tâches fonctionnent uniquement parce qu’une personne sait quoi chercher, où le trouver et quoi faire ensuite."],
];

const automationAreas = [
  { name: "Commercial", title: "Réagir plus vite aux opportunités.", copy: "Qualifier les demandes, enrichir les prospects, préparer le contexte, déclencher les relances et maintenir les informations à jour." },
  { name: "Administration", title: "Faire disparaître une partie de la ressaisie.", copy: "Extraire des informations, traiter des documents, classer les demandes et faire circuler les données entre vos outils." },
  { name: "Opérations", title: "Faire circuler le travail automatiquement.", copy: "Déclencher des actions, synchroniser différents logiciels et éviter les étapes intermédiaires inutiles." },
  { name: "Support", title: "Faire arriver la demande au bon endroit avec le bon contexte.", copy: "Comprendre une demande, rechercher l’information disponible et préparer ou transmettre la bonne réponse." },
];

const methodSteps = [
  ["Comprendre", "Observer le processus tel qu’il fonctionne réellement : les personnes, les outils, les informations et les décisions."],
  ["Cibler", "Choisir un problème prioritaire, assez précis pour être traité et évalué sans bouleverser toute l’entreprise."],
  ["Construire", "Créer une première version autour de vos outils, de vos règles et des points qui doivent rester humains."],
  ["Tester", "Faire fonctionner le système dans les conditions réelles et regarder où il aide — ou où il doit être ajusté."],
  ["Mesurer", "Comparer le temps de traitement, les étapes manuelles, les délais, les erreurs ou le volume traité."],
  ["Étendre", "Aller plus loin uniquement si la première automatisation apporte une amélioration observable."],
];

const measures = ["Temps de traitement", "Étapes manuelles", "Délais de réponse", "Erreurs ou oublis", "Volume traité", "Temps humain mobilisé"];

const connectedTools = ["CRM", "E-mail", "Formulaire", "Documents", "API", "Logiciel métier"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Lysere — Retour à l’accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={560} height={220} priority /></a>
        <nav aria-label="Navigation principale"><a href="#automatisation">Automatisation</a><a href="#methode">Méthode</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Parler de votre processus</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title">J’automatise vos<br /><em>processus.</em></h1><div className="hero-aside"><p>Je conçois des systèmes sur mesure pour réduire les tâches manuelles, connecter vos outils et accélérer le travail de vos équipes.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Parler de votre processus</a><a className="button button-secondary" href="#demonstration">Voir un exemple concret</a></div></div></div>
        <LeadWorkflowWidget />
      </section>

      <section className="section problems" aria-labelledby="problems-title">
        <SectionIntro id="problems-title" title={<>Beaucoup de travail ne devrait<br />plus être manuel.</>}><p>Une information copiée d’un outil à l’autre. Un document qu’il faut encore ouvrir, lire puis ressaisir. Un prospect qu’il faut rechercher avant de pouvoir lui répondre. Une relance qui dépend de quelqu’un qui doit penser à la faire. Une demande qui attend parce que l’information nécessaire se trouve ailleurs.</p><p>Pris séparément, ce sont quelques minutes.<br />Répétés chaque jour, ce sont des heures.</p></SectionIntro>
        <NumberedList items={problems} />
      </section>

      <section className="section automation" id="automatisation" aria-labelledby="automation-title">
        <SectionIntro id="automation-title" title={<>Votre processus d’abord.<br />La technologie ensuite.</>}><p>Je ne pars pas d’une automatisation préfabriquée.</p><p>Je regarde comment le travail circule aujourd’hui, quelles étapes prennent du temps et lesquelles peuvent être prises en charge par un système.</p></SectionIntro>
        <div className="area-grid">{automationAreas.map((area) => <article className="area" key={area.name}><span className="category-label">{area.name}</span><h3>{area.title}</h3><p>{area.copy}</p></article>)}</div>
      </section>

      <section className="section workflow" id="demonstration" aria-labelledby="workflow-title">
        <SectionIntro eyebrow="Démonstration · Exemple de système" id="workflow-title" title={<>Une demande arrive.<br />La suite se prépare.</>}><p>Voici un flux possible : le système comprend les informations, retrouve le contexte utile et prépare l’étape suivante. Ce n’est pas un cas client, mais une représentation concrète de ce qui peut être construit.</p></SectionIntro>
        <CaseNarrative />
        <div className="control-strip" aria-label="Principes de contrôle du système">
          <article><h3>Accès limité au nécessaire</h3><p>Le système utilise uniquement les outils et les informations utiles au processus.</p></article>
          <article><h3>Validation quand elle compte</h3><p>Une étape sensible ou ambiguë peut rester soumise à une personne.</p></article>
          <article><h3>Un flux qui reste lisible</h3><p>Les règles, les actions et les points de reprise sont définis dès la conception.</p></article>
        </div>
      </section>

      <section className="section integration" aria-labelledby="integration-title">
        <div className="integration-copy"><SectionIntro id="integration-title" title={<>Vos outils restent<br />vos outils.</>}><p>Pas besoin de reconstruire votre entreprise autour d’un nouvel outil.</p><p>Une bonne automatisation doit s’adapter à votre façon de travailler. Pas l’inverse.</p><p>L’objectif n’est pas d’ajouter une plateforme de plus. C’est de faire travailler ensemble celles que vous avez déjà.</p></SectionIntro></div>
        <div className="integration-map" aria-label="Le processus relie les outils existants"><div className="map-center">Votre<br />processus</div>{connectedTools.map((tool, index) => <div className={`map-node map-node-${index + 1}`} key={tool}><span>{tool}</span></div>)}</div>
      </section>

      <section className="section method" id="methode" aria-labelledby="method-title">
        <SectionIntro eyebrow="Une première amélioration, pas un grand chantier" id="method-title" title={<>Commencer petit.<br />Vérifier dans le réel.</>}><p>Pas besoin d’automatiser toute votre entreprise. On part d’un processus précis, on vérifie ce que le système change, puis on l’étend uniquement si cela se justifie.</p></SectionIntro>
        <NumberedList items={methodSteps} />
      </section>

      <section className="section value" aria-labelledby="value-title">
        <SectionIntro eyebrow="Choisir le moyen le plus simple" id="value-title" title={<>De l’IA seulement<br />lorsqu’elle apporte quelque chose.</>}><p>Quand une règle simple suffit, j’utilise une règle simple. L’objectif n’est pas de mettre de l’IA partout, mais de choisir la solution adaptée au travail à accomplir.</p></SectionIntro>
        <div className="solution-choice">
          <article><span className="item-number">Automatisation simple</span><h3>Quand les étapes sont connues.</h3><p>Déplacer une donnée, déclencher une action ou synchroniser deux outils ne demande pas nécessairement d’IA.</p></article>
          <article><span className="item-number">IA utile</span><h3>Quand l’information ne rentre pas dans des cases.</h3><p>Comprendre un e-mail, lire un document, retrouver du contexte ou préparer une réponse peut demander plus qu’une règle fixe.</p></article>
        </div>
        <div className="measure-panel"><div><span className="item-number">Ce que l’on mesure</span><h3>On regarde ce qui a réellement changé.</h3><p>Les indicateurs dépendent du processus. Ils sont choisis avant d’étendre le système, sans promesse chiffrée inventée.</p></div><ul>{measures.map((measure) => <li key={measure}>{measure}</li>)}</ul></div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Parlons du travail<br />qui revient trop souvent.</h2><p>Pas besoin d’avoir déjà imaginé la solution. Expliquez-moi simplement comment le processus fonctionne aujourd’hui et ce qui vous fait perdre du temps.</p><p className="contact-note">Une situation réelle suffit pour commencer.</p></section>
      <footer><a className="brand-lockup brand-lockup--footer" href="#top" aria-label="Lysere — Retour en haut"><Image src="/lysere-logo-horizontal.svg" alt="" width={560} height={220} /></a><p>Automatisations et systèmes sur mesure.</p></footer>
    </main>
  );
}

function SectionIntro({ id, title, eyebrow, children }: { id: string; title: React.ReactNode; eyebrow?: string; children?: React.ReactNode }) {
  return <div className="section-intro">{eyebrow && <p className="section-kicker">{eyebrow}</p>}<h2 id={id}>{title}</h2>{children && <div className="section-copy">{children}</div>}</div>;
}

function NumberedList({ items }: { items: string[][] }) {
  return <div className="numbered-list">{items.map(([title, copy], index) => <article key={title}><span className="item-number">{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}
