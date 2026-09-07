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
        <div className="hero-intro-block"><p className="hero-index">Alexis / systèmes métier / 2026</p><h1 id="hero-title">Une demande ne devrait jamais repartir de zéro.</h1><p>J’automatise le passage entre un contact, son contexte et la prochaine action. Ce portfolio montre aussi un outil de recherche B2B et un agent vocal temps réel.</p><a href="#projets">Voir les systèmes <Arrow /></a></div>
        <article className="hero-case" aria-labelledby="hero-case-title"><div className="hero-case-top"><span>Premier dossier</span><span>01</span></div><div className="hero-case-main"><p>Speed-to-Lead</p><h2 id="hero-case-title">Le contexte arrive avant la première réponse.</h2></div><div className="hero-case-notes"><span>Demande reçue</span><span>Contexte réuni</span><span>Suite préparée</span></div><div className="hero-case-footer"><strong>Démo vidéo en préparation</strong><span>2–4 minutes · emplacement remplaçable</span></div></article>
      </section>

      <section className="project-intro" id="projets"><p className="section-kicker">Trois systèmes, trois points de départ</p><h2>Chaque projet change de forme parce qu’il répond à une situation différente.</h2></section>
      <ProjectIndex />

      <section className="case speed-case" id="speed-to-lead" aria-labelledby="speed-title">
        <div className="case-label"><span>01</span><span>Speed-to-Lead<br />Automation</span></div>
        <div className="case-heading"><h2 id="speed-title">Rendre la première réponse exploitable.</h2><p>Une demande arrive. Le système récupère son contexte, prépare la qualification et laisse une trace nette pour la personne qui reprend la main.</p></div>
        <div className="case-facts"><div><span>Point de départ</span><p>Les réponses initiales et les relances dépendent d’actions manuelles, souvent au moment où l’attention est la plus fragile.</p></div><div><span>Ce qui est construit</span><p>Un passage fiable entre la demande, les informations utiles et une suite commerciale lisible — sans prétendre remplacer la décision humaine.</p></div></div>
      </section>

      <CaseNarrative />

      <section className="case research-case" id="recherche" aria-labelledby="research-title">
        <div className="case-label"><span>02</span><span>Recherche commerciale<br />& prospection B2B</span></div>
        <div className="research-layout"><div className="research-copy"><h2 id="research-title">Avant d’écrire, il faut avoir quelque chose à dire.</h2><p>Un espace de recherche transforme une entreprise en contexte de prospection : activité, dirigeants, actualités, signaux, angles possibles et sources qui permettent de vérifier.</p><p className="note">Une recherche utile garde l’origine de ce qu’elle avance.</p></div><figure className="research-dossier"><div className="dossier-top"><span>Dossier / aperçu de structure</span><span>02</span></div><div className="dossier-title">Une entreprise,<br />pas juste<br />un nom.</div><div className="dossier-lines"><p><b>Activité</b><span>Ce que l’entreprise vend et à qui.</span></p><p><b>Personnes</b><span>Décideurs, responsabilités, prises de parole.</span></p><p><b>Signaux</b><span>Recrutements, mouvement, nouvelles, priorités.</span></p><p><b>Sources</b><span>Les liens qui permettent de remonter à l’origine.</span></p></div><figcaption>Maquette de contenu à remplacer par une capture du produit.</figcaption></figure></div>
      </section>

      <section className="case voice-case" id="voix" aria-labelledby="voice-title">
        <div className="case-label"><span>03</span><span>Agent vocal<br />temps réel</span></div>
        <div className="voice-layout"><div className="voice-art" aria-label="Aperçu d’un extrait audio à venir"><div className="waveform" aria-hidden="true">{Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--bar": `${(index * 17) % 64 + 16}%` } as React.CSSProperties} />)}</div><p>Extrait audio à intégrer</p></div><div className="voice-copy"><h2 id="voice-title">Une voix qui écoute aussi quand on l’interrompt.</h2><p>Un agent vocal en streaming pour la téléphonie : faible latence, conversation naturelle et barge-in pour ne pas parler par-dessus l’interlocuteur.</p><dl><div><dt>Interaction</dt><dd>Conversation téléphonique en temps réel</dd></div><div><dt>Point d’attention</dt><dd>Répondre vite sans perdre le fil</dd></div><div><dt>À venir</dt><dd>Démo audio ou vidéo issue du système réel</dd></div></dl></div></div>
      </section>

      <section className="method" id="methode"><div className="method-title"><p className="section-kicker">Le travail derrière les écrans</p><h2>Un système tient quand quelqu’un peut le comprendre, le contredire et le reprendre.</h2></div><div className="method-copy"><p>Je commence par ce qui circule réellement : l’information qui manque, la décision qui tarde, l’exception que personne n’a documentée.</p><p>Ensuite, je construis un passage lisible — puis je le confronte aux cas qui ne rentrent pas dans la démonstration.</p></div></section>

      <section className="contact" id="contact"><p className="section-kicker">Alexis, une personne, pas une agence</p><h2>Parlons du travail qui revient trop souvent.</h2><p>Un flux, un outil déjà en place, une tâche que personne n’a envie de refaire : c’est suffisant pour commencer l’échange.</p><a href="mailto:bonjour@votredomaine.fr">bonjour@votredomaine.fr <Arrow /></a><small>Adresse à remplacer par votre adresse professionnelle.</small></section>

      <footer><a className="wordmark" href="#top">Alexis <span>Automations</span></a><p>© 2026</p><a href="#top">Haut de page ↑</a></footer>
    </main>
  );
}
