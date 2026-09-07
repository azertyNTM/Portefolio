import { CaseNarrative } from "./components/CaseNarrative";
import { ProjectIndex } from "./components/ProjectIndex";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour au début">Alexis <span>Automations</span></a>
        <nav aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#methode">Méthode</a><a href="#contact">Contact</a></nav>
        <a className="header-link" href="mailto:bonjour@votredomaine.fr">Écrire <Arrow /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-intro-block"><p className="hero-index">Alexis / systèmes métier / 2026</p><h1 id="hero-title">Une demande ne devrait jamais repartir de zéro.</h1><p>Je conçois des automatisations métier et des systèmes IA qui réduisent les tâches manuelles, accélèrent le traitement des prospects et donnent aux équipes les bonnes informations au bon moment.</p><p className="hero-support">Ici : automatisation commerciale, recherche B2B et conversation téléphonique en temps réel.</p><a href="#projets">Voir les systèmes <Arrow /></a></div>
        <article className="hero-case" aria-labelledby="hero-case-title"><div className="hero-case-top"><span>Premier dossier</span><span>01</span></div><div className="hero-case-main"><p>Speed-to-Lead</p><h2 id="hero-case-title">Le contexte arrive avant la première réponse.</h2></div><ol className="hero-case-notes"><li>Prospect reçu</li><li>Informations utiles récupérées</li><li>Lead qualifié et priorisé</li><li>Réponse ou action préparée</li></ol><div className="hero-case-footer"><strong>Démo vidéo en préparation</strong><span>Le scénario réel sera visible en 2–4 minutes.</span></div></article>
      </section>

      <section className="project-intro" id="projets"><p className="section-kicker">Trois systèmes, trois points de départ</p><h2>Chaque projet change de forme parce qu’il répond à une situation différente.</h2></section>
      <ProjectIndex />

      <section className="case speed-case" id="speed-to-lead" aria-labelledby="speed-title">
        <div className="case-label"><span>01</span><span>Speed-to-Lead<br />Automation</span></div>
        <div className="case-heading"><h2 id="speed-title">Rendre la première réponse exploitable.</h2><p>Un prospect arrive. Au lieu de chercher les informations, de qualifier à la main puis de reconstruire le contexte, la personne commerciale retrouve une base déjà préparée.</p></div>
        <div className="case-facts"><div><span>Le problème</span><p>Les demandes entrantes, la qualification et le suivi initial reposent souvent sur des actions manuelles, au moment où l’attention est la plus fragile.</p></div><div><span>Le système construit</span><p>Il récupère les éléments utiles, qualifie ou priorise le lead, puis prépare une réponse ou une prochaine action.</p></div><div><span>Ce qui sera observable</span><p>La démo montrera le passage complet : arrivée du prospect, contexte rassemblé, action préparée et reprise de main humaine.</p></div></div>
      </section>

      <CaseNarrative />

      <section className="case research-case" id="recherche" aria-labelledby="research-title">
        <div className="case-label"><span>02</span><span>Recherche commerciale<br />& prospection B2B</span></div>
        <div className="research-layout"><div className="research-copy"><h2 id="research-title">Avant d’écrire, il faut avoir quelque chose à dire.</h2><p>À partir d’une entreprise, le système construit un dossier exploitable : activité, dirigeants, actualités, signaux commerciaux, besoins potentiels, angles de prospection et sources vérifiables.</p><p className="note">L’objectif n’est pas de générer un message. C’est de donner à la personne qui contacte une entreprise une raison précise de le faire.</p></div><figure className="research-dossier"><div className="dossier-top"><span>Dossier / aperçu de structure</span><span>02</span></div><div className="dossier-title">Une entreprise,<br />pas juste<br />un nom.</div><div className="dossier-lines"><p><b>Activité</b><span>Ce que l’entreprise vend et à qui.</span></p><p><b>Personnes</b><span>Décideurs, responsabilités, prises de parole.</span></p><p><b>Signaux</b><span>Recrutements, mouvement, nouvelles, priorités.</span></p><p><b>Angles</b><span>Les besoins ou sujets à explorer.</span></p><p><b>Sources</b><span>Les liens qui permettent de vérifier.</span></p></div><figcaption>Future capture du dossier réel et de ses sources.</figcaption></figure></div>
      </section>

      <section className="case voice-case" id="voix" aria-labelledby="voice-title">
        <div className="case-label"><span>03</span><span>Agent vocal<br />temps réel</span></div>
        <div className="voice-layout"><div className="voice-art" aria-label="Aperçu d’un extrait audio à venir"><div className="waveform" aria-hidden="true">{Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--bar": `${(index * 17) % 64 + 16}%` } as React.CSSProperties} />)}</div><p>Extrait audio à intégrer</p></div><div className="voice-copy"><h2 id="voice-title">Une voix qui écoute aussi quand on l’interrompt.</h2><p>Un agent qui peut tenir une conversation téléphonique en temps réel, sans donner l’impression de réciter un script. Il répond vite, traite le flux au fil de l’échange et se tait naturellement lorsqu’une personne reprend la parole.</p><dl><div><dt>Ce qu’il fait</dt><dd>Conversation téléphonique, en streaming et avec faible latence</dd></div><div><dt>Point d’attention</dt><dd>Ne pas couper l’interlocuteur ni perdre le fil de l’échange</dd></div><div><dt>À voir bientôt</dt><dd>Extrait audio ou vidéo issu du système réel</dd></div></dl></div></div>
      </section>

      <section className="method" id="methode"><div className="method-title"><p className="section-kicker">Le travail derrière les écrans</p><h2>Un système tient quand quelqu’un peut le comprendre, le contredire et le reprendre.</h2></div><div className="method-copy"><p>Je commence par ce qui circule réellement : l’information qui manque, la décision qui tarde, l’exception que personne n’a documentée.</p><p>Ensuite, je construis un passage lisible — puis je le confronte aux cas qui ne rentrent pas dans la démonstration.</p></div></section>

      <section className="contact" id="contact"><p className="section-kicker">Un interlocuteur unique, du premier échange au système livré</p><h2>Parlons du travail qui revient trop souvent.</h2><p>Je comprends le processus, construis le système, le teste et documente son fonctionnement. Un flux, un outil déjà en place ou une tâche que personne n’a envie de refaire : c’est suffisant pour commencer l’échange.</p><a className="contact-action" href="mailto:bonjour@votredomaine.fr?subject=Processus%20%C3%A0%20automatiser">Me parler d’un processus à automatiser <Arrow /></a><a className="contact-email" href="mailto:bonjour@votredomaine.fr">bonjour@votredomaine.fr</a><small>Adresse à remplacer par votre adresse professionnelle.</small></section>

      <footer><a className="wordmark" href="#top">Alexis <span>Automations</span></a><p>© 2026</p><a href="#top">Haut de page ↑</a></footer>
    </main>
  );
}
