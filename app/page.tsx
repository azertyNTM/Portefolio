import { RotatingHeroWord } from "./components/RotatingHeroWord";
import { LeadWorkflowWidget } from "./components/LeadWorkflowWidget";

const projects = [
  { number: "01", title: "Speed-to-Lead", description: "À chaque demande entrante, le contexte et la prochaine action sont prêts avant la première réponse.", href: "#speed-to-lead" },
  { number: "02", title: "Recherche B2B", description: "Un dossier sourcé pour préparer une prise de contact qui a une vraie raison d’exister.", href: "#projets" },
  { number: "03", title: "Agent vocal", description: "Des conversations téléphoniques naturelles, en temps réel, avec reprise de main humaine.", href: "#projets" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour à l’accueil">Alexis<span>.</span></a>
        <nav aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#methode">Méthode</a></nav>
        <a className="header-cta" href="#contact">Me contacter</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title">J’automatise vos<br /><em><RotatingHeroWord /></em></h1><div className="hero-aside"><p>Je conçois des automatisations sur mesure pour réduire les tâches manuelles, accélérer vos processus et faire gagner du temps à vos équipes.</p><div className="hero-actions"><a className="button button-primary" href="#projets">Voir mes réalisations</a><a className="button button-secondary" href="#contact">Discuter de votre projet</a></div></div></div>
        <LeadWorkflowWidget />
      </section>

      <section className="projects" id="projets" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">Projets récents</h2></div>
        <div className="project-list">{projects.map((project) => <a className="project-card" href={project.href} key={project.number}><div><h3>{project.title}</h3><p>{project.description}</p></div></a>)}</div>
      </section>

      <section className="featured" id="speed-to-lead" aria-labelledby="featured-title">
        <div className="featured-grid"><div><h2 id="featured-title">Le contexte, avant la réponse.</h2><p>Quand un prospect arrive, les éléments utiles sont déjà rassemblés. L’équipe commerciale n’a plus à reconstruire l’histoire avant d’agir.</p></div><ol className="flow" aria-label="Déroulé du système"><li><strong>Signal reçu</strong><p>Une demande déclenche le flux.</p></li><li><strong>Contexte préparé</strong><p>Les données utiles sont réunies.</p></li><li><strong>Action proposée</strong><p>La personne reprend la main.</p></li></ol></div>
      </section>

      <section className="method" id="methode" aria-labelledby="method-title"><div><h2 id="method-title">Comprendre le flux.<br />Construire juste.</h2><p>Je pars du travail réel : une information manquante, une décision qui attend, une tâche répétée. Puis je crée un système lisible, testable et facile à reprendre.</p></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Parlons du travail<br />qui revient trop souvent.</h2><a className="button button-light" href="mailto:bonjour@votredomaine.fr?subject=Processus%20%C3%A0%20automatiser">Démarrer la conversation</a><p className="contact-note">bonjour@votredomaine.fr</p></section>
      <footer><a className="wordmark" href="#top">Alexis<span>.</span></a></footer>
    </main>
  );
}
