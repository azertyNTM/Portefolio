import { AgentPipeline } from "./components/AgentPipeline";
import { KineticWord } from "./components/KineticWord";
import { LeadStory } from "./components/LeadStory";

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;

const projects = [
  {
    index: "02",
    title: "Recherche commerciale\n& prospection B2B",
    summary: "Un CRM de recherche qui transforme une entreprise en contexte commercial exploitable.",
    outcome: "Une préparation de prospection plus personnalisée, ancrée dans des signaux et des sources vérifiables.",
    tags: ["Recherche adaptative", "Signaux commerciaux", "Sources & preuves"],
  },
  {
    index: "03",
    title: "IA vocale\nen temps réel",
    summary: "Un agent vocal conçu pour tenir une conversation téléphonique naturelle, en streaming et avec très faible latence.",
    outcome: "Système en développement — pour des interactions téléphoniques fluides et réellement utiles.",
    tags: ["Streaming", "Barge-in", "Téléphonie"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Accueil">
          <span className="wordmark-mark" />
          Alexis <em>Automations</em>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#realisations">Réalisations</a>
          <a href="#approche">Approche</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Parlons-en <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Automatisation IA sur mesure</p>
          <h1>Moins de tâches.<br />Plus d&apos;élan <i>métier.</i></h1>
          <p className="hero-intro">
            Je conçois des systèmes qui transforment les tâches commerciales et opérationnelles répétitives en processus fiables, utiles et pilotables.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#realisations">Voir mes réalisations <Arrow /></a>
            <a className="text-link" href="#contact">Me contacter <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-metrics" aria-label="Principes de conception">
            <div><strong>01</strong><span>Flux simplifiés</span></div>
            <div><strong>24/7</strong><span>Systèmes disponibles</span></div>
            <div><strong>∞</strong><span>Itérations utiles</span></div>
          </div>
          <p className="hero-note">Pour les équipes qui veulent avancer sans ajouter de complexité.</p>
        </div>

        <AgentPipeline />
      </section>

      <section className="preview-proof" aria-label="Présentation du portfolio">
        <p>DES SYSTÈMES PENSÉS POUR LE TERRAIN</p>
        <span>Prospection <b>·</b> Qualification <b>·</b> Opérations <b>·</b> Voix</span>
      </section>

      <section className="section-intro" id="realisations">
        <p className="eyebrow"><span /> Réalisations sélectionnées</p>
        <div>
          <h2>Des projets qui partent d&apos;un <i>problème concret.</i></h2>
          <p>Chaque système est conçu autour d&apos;un flux métier, de ses exceptions et de la décision qu&apos;il doit faciliter.</p>
        </div>
      </section>

      <section className="featured-case" aria-labelledby="lead-title">
        <div className="case-heading">
          <span className="case-number">01 / RÉALISATION</span>
          <h2 id="lead-title">Speed-to-Lead<br /><i>Automation</i></h2>
          <p>Un système automatisé de traitement, qualification et suivi des leads entrants.</p>
          <a className="text-link" href="#lead-workflow">Voir le fonctionnement <Arrow /></a>
        </div>
        <div className="case-story">
          <div className="case-columns">
            <div><span className="mini-label">LE PROBLÈME</span><p>Une demande arrive, mais la qualification, la première réponse et le suivi reposent trop souvent sur des actions manuelles.</p></div>
            <div><span className="mini-label">LA RÉPONSE</span><p>Le système transforme l&apos;entrée en lead qualifié, priorisé, informé et suivi — sans perdre le contexte commercial.</p></div>
          </div>
          <div className="video-frame" role="img" aria-label="Emplacement de la démonstration vidéo Speed-to-Lead">
            <div className="video-grid" />
            <span className="video-eyebrow">DÉMONSTRATION / 2—4 MIN</span>
            <button type="button" className="play-button" aria-label="Vidéo de démonstration à ajouter"><span>▶</span></button>
            <div className="video-caption"><strong>De la demande au rendez-vous.</strong><span>Emplacement prêt pour la vidéo de démonstration</span></div>
          </div>
          <p className="disclaimer">Les métriques visibles dans la démonstration sont des mesures locales de démo. Elles ne représentent pas des résultats obtenus chez un client.</p>
        </div>
      </section>

      <LeadStory />

      <section className="project-grid" aria-label="Autres réalisations">
        {projects.map((project) => (
          <article className="project-card" key={project.index}>
            <div className="project-top"><span>{project.index} / RÉALISATION</span><span className="project-icon">↗</span></div>
            <div className="project-art" aria-hidden="true"><span /><i /><b /></div>
            <h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
            <p className="project-summary">{project.summary}</p>
            <p className="project-outcome">{project.outcome}</p>
            <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-demo">Vidéo de démonstration <span>à ajouter</span></div>
          </article>
        ))}
      </section>

      <section className="coming-soon">
        <span className="mini-label">EN CONSTRUCTION</span>
        <h2>Automatisation <i>opérationnelle</i></h2>
        <p>Planning, réservations, gestion des conflits, affichage et supports : un futur système pour fluidifier le quotidien des équipes.</p>
        <span className="coming-mark">COMING SOON</span>
      </section>

      <section className="approach" id="approche">
        <div className="approach-intro"><p className="eyebrow"><span /> Comment je travaille</p><h2>Simple dans la méthode.<br /><i>Exigeant dans l&apos;exécution.</i></h2></div>
        <ol>
          <li><b>01</b><div><h3>Comprendre le flux réel</h3><p>Les tâches, les décisions, les frictions — et les exceptions qui comptent.</p></div></li>
          <li><b>02</b><div><h3>Concevoir le bon système</h3><p>Une automatisation lisible qui s&apos;intègre aux outils déjà en place.</p></div></li>
          <li><b>03</b><div><h3>Tester, déployer, améliorer</h3><p>Le système est vérifié en conditions utiles, puis ajusté au terrain.</p></div></li>
        </ol>
      </section>

      <section className="about-contact" id="contact">
        <div className="about"><span className="mini-label">À PROPOS</span><p>Je construis des automatisations IA et des outils sur mesure pour les entreprises qui veulent rendre leurs opérations plus nettes, plus rapides et plus fiables.</p><p>Curieux par nature, pragmatique par méthode : j&apos;aime les systèmes complets, de l&apos;idée jusqu&apos;à l&apos;usage réel.</p></div>
        <div className="contact-card"><span className="mini-label">PREMIER ÉCHANGE</span><h2>Un processus encore géré <KineticWord text="manuellement ?" /></h2><p>Parlons de ce qui pourrait être simplifié, accéléré ou mieux suivi.</p><a className="button button-primary" href="mailto:bonjour@votredomaine.fr">Écrire un message <Arrow /></a><small>Remplacez <b>bonjour@votredomaine.fr</b> par votre adresse professionnelle.</small></div>
      </section>

      <footer><a className="wordmark" href="#top"><span className="wordmark-mark" />Alexis <em>Automations</em></a><p>© 2026 — Systèmes IA utiles, conçus avec intention.</p><a href="#top">Retour en haut ↑</a></footer>
    </main>
  );
}
