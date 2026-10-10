import type { Metadata } from "next";
import Image from "next/image";
import { CaseNarrative } from "../components/CaseNarrative";
import { InboxWidget } from "../components/InboxWidget";
import { NumberedList, SectionIntro } from "../components/Sections";
import { Showcase } from "../components/Showcase";

const title = "Lysere — Automatisations pour cabinets d’expertise comptable";
const description = "Relances de pièces manquantes, tri des e-mails clients, réponses aux questions courantes : des automatisations sur mesure pour les cabinets comptables.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "fr_FR", url: "/cabinets-comptables", images: [{ url: "/og-lysere.png", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-lysere.png"] },
};

const contactUrl = "mailto:contact@lysere.fr";

const problems = [
  ["Les pièces manquantes se réclament à la main.", "Relevés, factures, justificatifs : il faut repérer ce qui manque, écrire au client, puis penser à relancer. Encore et encore."],
  ["La boîte mail déborde en période fiscale.", "Documents, questions et urgences arrivent au même endroit. Quelqu’un doit tout lire avant de savoir qui doit s’en occuper."],
  ["Les mêmes questions reviennent.", "Échéances, documents à fournir, avancement d’un dossier : vos collaborateurs répondent souvent la même chose, plusieurs fois par jour."],
  ["L’information est ressaisie d’un outil à l’autre.", "Logiciel de production, GED, portail client, e-mails : chacun contient une partie du dossier, sans forcément communiquer avec les autres."],
];

const automations = [
  { name: "Relances", title: "Les pièces manquantes réclamées sans y penser.", copy: "Le système repère ce qui manque dans un dossier, prépare un message clair pour le client et relance au bon moment, jusqu’à réception." },
  { name: "Tri des e-mails", title: "Chaque message arrive chez la bonne personne.", copy: "Les e-mails clients sont lus, classés par dossier et transmis au collaborateur concerné. Les urgences remontent en haut de la pile." },
  { name: "Réponses", title: "Les questions courantes préparées d’avance.", copy: "Pour les demandes qui reviennent, une réponse est préparée à partir des informations du dossier. Le collaborateur relit et envoie." },
  { name: "Documents", title: "Moins de ressaisie, moins d’oublis.", copy: "Les informations utiles sont extraites des documents reçus et rangées au bon endroit dans vos outils." },
];

const demoSteps = [
  { label: "Réception", title: "Un client envoie ses relevés", copy: "Un e-mail arrive avec trois pièces jointes et un message rédigé librement : « Voici mes relevés, il me semble qu’il manque celui de février. »" },
  { label: "Lecture", title: "Le message est compris", copy: "Le système identifie le client, le dossier concerné et la nature des documents envoyés." },
  { label: "Dossier", title: "Les pièces sont rangées", copy: "Les relevés sont classés dans le bon dossier, au bon nom, sans qu’un collaborateur ait à les déplacer." },
  { label: "Contrôle", title: "Il manque une pièce", copy: "En comparant avec ce qui est attendu, le système constate que le relevé de février est toujours absent." },
  { label: "Relance", title: "Un message est préparé", copy: "Une relance polie et précise est rédigée pour le client, avec la pièce exacte à fournir." },
  { label: "Validation", title: "Le collaborateur valide en un clic", copy: "Rien ne part sans votre accord. Le collaborateur relit, ajuste si besoin, puis envoie." },
];

const method = [
  ["Un premier échange", "Vous m’expliquez comment le cabinet fonctionne aujourd’hui et ce qui fait perdre du temps à vos équipes."],
  ["Un seul processus pour commencer", "On choisit une tâche précise, assez petite pour être mise en place rapidement et mesurée sans risque."],
  ["Une première version testée chez vous", "Je construis le système autour de vos outils et de vos règles, puis on le fait tourner sur des cas réels."],
  ["On mesure, puis on décide", "Temps gagné, relances envoyées, oublis évités : on regarde ce qui a changé avant d’aller plus loin."],
];

export default function CabinetsComptables() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand-lockup" href="/" aria-label="Lysere — Accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={1414} height={630} priority /></a>
        <nav aria-label="Navigation principale"><a href="#automatisations">Automatisations</a><a href="#realisations">Réalisations</a><a href="#qui">Qui suis-je</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href={contactUrl}>Me contacter</a>
      </header>

      <section className="hero hero--long" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="hero-kicker">Pour les cabinets d’expertise comptable</p><h1 id="hero-title">Moins d’e-mails à trier.<br /><em>Plus de temps pour vos dossiers.</em></h1><div className="hero-aside"><p>J’automatise les tâches répétitives de votre cabinet : relances de pièces manquantes, tri des e-mails clients, réponses aux questions courantes. Sur mesure, autour des outils que vous utilisez déjà.</p><div className="hero-actions"><a className="button button-primary" href={contactUrl}>Me contacter par e-mail</a><a className="button button-secondary" href="#demonstration">Voir un exemple concret</a></div></div></div>
        <InboxWidget />
      </section>

      <section className="section problems" aria-labelledby="problems-title">
        <SectionIntro id="problems-title" title="Ce qui grignote les journées de vos collaborateurs."><p>Vos équipes sont formées pour conseiller et produire. Pourtant, une bonne partie de leur journée passe à réclamer des documents, trier des messages et répondre aux mêmes questions.</p><p>Pris séparément, ce sont quelques minutes.<br />Sur une saison fiscale, ce sont des semaines.</p></SectionIntro>
        <NumberedList items={problems} />
      </section>

      <section className="section automation" id="automatisations" aria-labelledby="automation-title">
        <SectionIntro id="automation-title" title={<>Ce que je peux automatiser<br />dans votre cabinet.</>}><p>Pas de logiciel de plus à apprendre. Le système travaille en arrière-plan, dans vos e-mails et vos outils actuels, et vos collaborateurs gardent la main sur ce qui part chez le client.</p></SectionIntro>
        <div className="area-grid">{automations.map((area) => <article className="area" key={area.name}><span className="category-label">{area.name}</span><h3>{area.title}</h3><p>{area.copy}</p></article>)}</div>
      </section>

      <section className="section realisations" id="realisations" aria-labelledby="realisations-title">
        <SectionIntro eyebrow="Réalisations" id="realisations-title" title={<>Deux outils déjà construits,<br />à quoi ils ressemblent.</>}><p>Voici deux systèmes que j’ai développés pour le quotidien d’un cabinet comptable. Ce sont de vrais outils qui tournent, pas des maquettes : chacun peut être adapté à vos règles et branché sur vos logiciels.</p></SectionIntro>
        <Showcase />
      </section>

      <section className="section workflow" id="demonstration" aria-labelledby="workflow-title">
        <SectionIntro eyebrow="Démonstration · Exemple fictif" id="workflow-title" title={<>Un client envoie ses relevés.<br />Il en manque un.</>}><p>Voici ce qui se passe quand ce genre d’e-mail arrive dans un cabinet équipé. Ce n’est pas un cas client, mais exactement le type de système que je construis.</p></SectionIntro>
        <CaseNarrative steps={demoSteps} />
      </section>

      <section className="section integration trust" aria-labelledby="trust-title">
        <div className="integration-copy"><SectionIntro eyebrow="Secret professionnel" id="trust-title" title={<>Vos données clients<br />restent sous contrôle.</>}><p>Un cabinet comptable manipule des informations sensibles. Chaque automatisation est conçue en partant de cette contrainte, pas en l’ajoutant à la fin.</p></SectionIntro></div>
        <div className="trust-list">
          <article><h3>Accès limité au strict nécessaire</h3><p>Le système n’accède qu’aux boîtes, dossiers et outils utiles à la tâche automatisée. Rien de plus.</p></article>
          <article><h3>Rien ne part sans validation</h3><p>Aucun message n’est envoyé à un client sans qu’un collaborateur l’ait relu, tant que vous le souhaitez.</p></article>
          <article><h3>Un fonctionnement lisible</h3><p>Les règles sont écrites noir sur blanc. Vous savez ce que fait le système, quand, et pourquoi.</p></article>
        </div>
      </section>

      <section className="section about" id="qui" aria-labelledby="about-title">
        <div className="about-portrait" aria-hidden="true"><span>A</span></div>
        <div>
          <SectionIntro eyebrow="Qui est derrière Lysere" id="about-title" title={<>Un interlocuteur unique,<br />du premier appel à la mise en service.</>}><p>Je m’appelle Alexis. Je conçois chaque automatisation moi-même : je comprends votre fonctionnement, je construis le système, je le teste chez vous et je l’ajuste jusqu’à ce qu’il soit vraiment utile.</p><p>Avant de proposer ces outils aux cabinets, je les ai construits pour moi. Ma recherche d’entreprises, ma prospection et le montage de mes vidéos tournent sur des automatisations que j’ai développées et que j’utilise chaque jour.</p></SectionIntro>
          <div className="pilot-note"><strong>Premiers cabinets partenaires</strong><p>J’accompagne en ce moment un petit nombre de cabinets pour mes premiers projets. Vous êtes en contact direct avec moi, et on commence petit : un seul processus, mesuré dans le réel.</p></div>
        </div>
      </section>

      <section className="section method" id="methode" aria-labelledby="method-title">
        <SectionIntro eyebrow="Une première amélioration, pas un grand chantier" id="method-title" title={<>Commencer petit.<br />Vérifier dans le réel.</>} />
        <NumberedList items={method} />
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Quelle tâche revient trop souvent<br />dans votre cabinet ?</h2><p>Pas besoin d’avoir imaginé la solution. Racontez-moi simplement ce qui fait perdre du temps à vos équipes, je vous dirai franchement ce qui peut être automatisé.</p><div className="contact-actions"><a className="button contact-booking" href={contactUrl}>Me contacter par e-mail</a><a className="contact-email" href="mailto:contact@lysere.fr">Écrire à contact@lysere.fr</a></div><p className="contact-note">Je vous réponds personnellement, sans engagement.</p></section>
      <footer><a className="brand-lockup brand-lockup--footer" href="/" aria-label="Lysere — Accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={1414} height={630} /></a><p>Automatisations sur mesure pour cabinets comptables.</p></footer>
    </main>
  );
}
