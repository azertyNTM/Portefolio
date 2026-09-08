const Arrow = () => <span aria-hidden="true">↗</span>;

const projects = [
  { number: "01", title: "Speed-to-Lead", description: "À chaque demande entrante, le contexte et la prochaine action sont prêts avant la première réponse.", tags: ["qualification", "CRM", "relance"], href: "#speed-to-lead" },
  { number: "02", title: "Recherche B2B", description: "Un dossier sourcé pour préparer une prise de contact qui a une vraie raison d’exister.", tags: ["signaux", "sources", "prospection"], href: "#recherche" },
  { number: "03", title: "Agent vocal", description: "Des conversations téléphoniques naturelles, en temps réel, avec reprise de main humaine.", tags: ["temps réel", "voix", "streaming"], href: "#voix" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour à l’accueil">Alexis<span>.</span></a>
        <nav aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#methode">Méthode</a></nav>
        <a className="header-cta" href="#contact">Me contacter <Arrow /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div><p className="eyebrow"><i /> Automatisations & IA métier</p><h1 id="hero-title">Des systèmes utiles.<br /><em>Pas du bruit.</em></h1></div>
        <div className="hero-aside"><p>J’aide les équipes commerciales à supprimer les tâches répétitives et à décider plus vite, sans perdre le contexte humain.</p><a className="button button-primary" href="#projets">Voir les projets <Arrow /></a></div>
      </section>

      <section className="principle" aria-label="Approche"><p>Le bon système ne cherche pas à impressionner. Il rend le travail plus simple, au bon moment.</p><div className="principle-mark" aria-hidden="true"><span>01</span><b>→</b></div></section>

      <section className="projects" id="projets" aria-labelledby="projects-title">
        <div className="section-heading"><p className="eyebrow"><i /> Sélection</p><h2 id="projects-title">Projets récents</h2></div>
        <div className="project-list">{projects.map((project) => <a className="project-card" href={project.href} key={project.number}><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><ul aria-label={`Thèmes : ${project.tags.join(", ")}`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><span className="project-arrow"><Arrow /></span></a>)}</div>
      </section>

      <section className="featured" id="speed-to-lead" aria-labelledby="featured-title">
        <div className="featured-label"><span>Focus</span><span>01 / Speed-to-Lead</span></div>
        <div className="featured-grid"><div><h2 id="featured-title">Le contexte, avant la réponse.</h2><p>Quand un prospect arrive, les éléments utiles sont déjà rassemblés. L’équipe commerciale n’a plus à reconstruire l’histoire avant d’agir.</p></div><ol className="flow" aria-label="Déroulé du système"><li><span>01</span><strong>Signal reçu</strong><p>Une demande déclenche le flux.</p></li><li><span>02</span><strong>Contexte préparé</strong><p>Les données utiles sont réunies.</p></li><li><span>03</span><strong>Action proposée</strong><p>La personne reprend la main.</p></li></ol></div>
      </section>

      <section className="capabilities" aria-label="Autres systèmes"><article id="recherche"><span>02</span><h2>Recherche B2B</h2><p>De l’entreprise au dossier de prospection sourcé : activité, personnes, signaux et angles de contact.</p></article><article id="voix"><span>03</span><h2>Agent vocal</h2><p>Un agent qui répond, écoute et sait se taire quand la conversation le demande.</p></article></section>

      <section className="method" id="methode" aria-labelledby="method-title"><p className="eyebrow"><i /> La méthode</p><div><h2 id="method-title">Comprendre le flux.<br />Construire juste.</h2><p>Je pars du travail réel : une information manquante, une décision qui attend, une tâche répétée. Puis je crée un système lisible, testable et facile à reprendre.</p></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><p className="eyebrow eyebrow-light"><i /> Un projet en tête ?</p><h2 id="contact-title">Parlons du travail<br />qui revient trop souvent.</h2><a className="button button-light" href="mailto:bonjour@votredomaine.fr?subject=Processus%20%C3%A0%20automatiser">Démarrer la conversation <Arrow /></a><p className="contact-note">bonjour@votredomaine.fr</p></section>
      <footer><a className="wordmark" href="#top">Alexis<span>.</span></a><p>Automatisations & IA métier</p><a href="#top">Haut de page ↑</a></footer>
    </main>
  );
}
