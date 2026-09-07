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
        <div className="hero-meta"><p>Portfolio / 2026</p><p>Automatisations commerciales<br />Recherche B2B · voix</p></div>
        <div className="hero-main"><h1 id="hero-title">Des systèmes pour le travail qui <em>n’attend pas.</em></h1><p className="hero-intro">Je conçois des automatisations qui traitent une demande, mettent une entreprise en contexte et tiennent une conversation. Trois projets, documentés sans décor de SaaS.</p></div>
        <a className="scroll-cue" href="#projets">Découvrir les projets <span aria-hidden="true">↓</span></a>
      </section>

      <section className="hero-reel" aria-label="Projet mis en avant : Speed-to-Lead">
        <div className="reel-topline"><span>01 / EN PREMIER</span><span>Démo vidéo à venir · 2–4 min</span></div>
        <div className="reel-typography"><p>UNE DEMANDE<br />N’EST PAS<br /><i>UN TICKET.</i></p><span>Speed-to-Lead<br />Automation</span></div>
        <div className="reel-object"><div className="reel-strip reel-strip-a">demande entrante</div><div className="reel-strip reel-strip-b">contexte commercial</div><div className="reel-strip reel-strip-c">réponse préparée</div><div className="reel-play" aria-hidden="true">Lecture<br />bientôt</div></div>
        <p className="reel-caption">Emplacement réservé à la vraie démonstration produit. Cette composition n’est pas une capture d’écran.</p>
      </section>

      <section className="project-intro" id="projets"><p className="section-kicker">Trois systèmes / trois matières</p><h2>Les projets ne se ressemblent pas, parce que les problèmes non plus.</h2></section>
      <ProjectIndex />

      <section className="case speed-case" id="speed-to-lead" aria-labelledby="speed-title">
        <div className="case-label"><span>01</span><span>Speed-to-Lead<br />Automation</span></div>
        <div className="case-heading"><h2 id="speed-title">Rendre la première réponse <em>exploitable.</em></h2><p>Une demande arrive. Le système récupère son contexte, prépare la qualification et laisse une trace nette pour la personne qui reprend la main.</p></div>
        <div className="case-facts"><div><span>Point de départ</span><p>Les réponses initiales et les relances dépendent d’actions manuelles, souvent au moment où l’attention est la plus fragile.</p></div><div><span>Ce qui est construit</span><p>Un passage fiable entre la demande, les informations utiles et une suite commerciale lisible — sans prétendre remplacer la décision humaine.</p></div></div>
      </section>

      <CaseNarrative />

      <section className="case research-case" id="recherche" aria-labelledby="research-title">
        <div className="case-label"><span>02</span><span>Recherche commerciale<br />& prospection B2B</span></div>
        <div className="research-layout"><div className="research-copy"><h2 id="research-title">Avant d’écrire, il faut avoir <em>quelque chose à dire.</em></h2><p>Un espace de recherche transforme une entreprise en contexte de prospection : activité, dirigeants, actualités, signaux, angles possibles et sources qui permettent de vérifier.</p><p className="note">Le but n’est pas de produire une liste. C’est de préparer une conversation qui connaît déjà son sujet.</p></div><figure className="research-dossier"><div className="dossier-top"><span>Dossier / aperçu de structure</span><span>02</span></div><div className="dossier-title">Entreprise,<br /><i>pas juste</i><br />un nom.</div><div className="dossier-lines"><p><b>Activité</b><span>Ce que l’entreprise vend et à qui.</span></p><p><b>Personnes</b><span>Décideurs, responsabilités, prises de parole.</span></p><p><b>Signaux</b><span>Recrutements, mouvement, nouvelles, priorités.</span></p><p><b>Sources</b><span>Les liens qui permettent de remonter à l’origine.</span></p></div><figcaption>Maquette de contenu à remplacer par une capture du produit.</figcaption></figure></div>
      </section>

      <section className="case voice-case" id="voix" aria-labelledby="voice-title">
        <div className="case-label"><span>03</span><span>Agent vocal<br />temps réel</span></div>
        <div className="voice-layout"><div className="voice-art" aria-label="Aperçu d’un extrait audio à venir"><div className="waveform" aria-hidden="true">{Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--bar": `${(index * 17) % 64 + 16}%` } as React.CSSProperties} />)}</div><p>Extrait audio / à intégrer</p></div><div className="voice-copy"><h2 id="voice-title">Une voix qui écoute aussi quand on <em>l’interrompt.</em></h2><p>Un agent vocal en streaming pour la téléphonie : faible latence, conversation naturelle et barge-in pour ne pas parler par-dessus l’interlocuteur.</p><dl><div><dt>Interaction</dt><dd>Conversation téléphonique en temps réel</dd></div><div><dt>Point d’attention</dt><dd>Répondre vite sans perdre le fil</dd></div><div><dt>À venir</dt><dd>Démo audio ou vidéo issue du système réel</dd></div></dl></div></div>
      </section>

      <section className="method" id="methode"><div className="method-title"><p className="section-kicker">Le travail derrière les écrans</p><h2>Ce qui rend un système <em>tenable.</em></h2></div><ol><li><span>01</span><p><b>Observer le flux.</b> Où une information disparaît, où une personne doit décider, où l’exception devient la règle.</p></li><li><span>02</span><p><b>Fabriquer le bon passage.</b> Des entrées compréhensibles, des sorties actionnables et une place nette pour le contrôle humain.</p></li><li><span>03</span><p><b>Éprouver dans le réel.</b> Les cas limites, les retours terrain et les détails qui font qu’on utilise vraiment l’outil.</p></li></ol></section>

      <section className="contact" id="contact"><p className="section-kicker">Alexis, une personne — pas une agence</p><h2>Vous avez un flux qui mérite d’être <em>regardé de près ?</em></h2><p>Décrivez-moi simplement la tâche, les outils déjà en place et ce qui bloque aujourd’hui.</p><a href="mailto:bonjour@votredomaine.fr">bonjour@votredomaine.fr <Arrow /></a><small>Adresse à remplacer par votre adresse professionnelle.</small></section>

      <footer><a className="wordmark" href="#top">Alexis <span>Automations</span></a><p>© 2026</p><a href="#top">Haut de page ↑</a></footer>
    </main>
  );
}
