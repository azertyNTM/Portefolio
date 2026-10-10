import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mentions légales — Lysere",
  description: "Mentions légales et politique de confidentialité du site lysere.fr.",
  robots: { index: false },
};

// Informations de l’éditeur (null = pas encore fourni, la ligne est masquée).
const editeur = {
  nom: "Alexis Eydoux",
  statut: "Entrepreneur individuel (EI), micro-entreprise" as string | null,
  siret: "980 408 058 00017" as string | null,
  adresse: null as string | null, // domicile ou adresse de domiciliation
  telephone: null as string | null,
  tva: "TVA non applicable, article 293 B du Code général des impôts" as string | null,
};

function Line({ label, value }: { label: string; value: string | null }) {
  return value ? <li>{label} : {value}</li> : null;
}

export default function MentionsLegales() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand-lockup" href="/" aria-label="Lysere — Accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={1414} height={630} priority /></a>
        <nav aria-label="Navigation principale" />
        <a className="header-cta" href="mailto:contact@lysere.fr">Me contacter</a>
      </header>

      <section className="section legal" aria-labelledby="legal-title">
        <h1 id="legal-title">Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>Le site lysere.fr est édité par :</p>
        <ul>
          <li><strong>{editeur.nom} EI</strong>, sous le nom commercial Lysere</li>
          <Line label="Statut" value={editeur.statut} />
          <Line label="SIRET" value={editeur.siret} />
          <Line label="Adresse" value={editeur.adresse} />
          <Line label="Téléphone" value={editeur.telephone} />
          <li>E-mail : <a href="mailto:contact@lysere.fr">contact@lysere.fr</a></li>
          <Line label="TVA" value={editeur.tva} />
        </ul>
        <p>Directeur de la publication : {editeur.nom}.</p>

        <h2>Hébergement</h2>
        <p>Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis. Site : <a href="https://www.cloudflare.com">cloudflare.com</a>.</p>

        <h2>Propriété intellectuelle</h2>
        <p>Les textes, le logo, les visuels et les captures d’écran présents sur ce site appartiennent à {editeur.nom}, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite. Les captures d’écran des outils montrent des démonstrations avec des données fictives : les noms de personnes et d’entreprises qui y figurent sont inventés.</p>

        <h2>Données personnelles</h2>
        <p>Ce site ne contient aucun formulaire et ne dépose aucun cookie publicitaire ni de mesure d’audience. Aucune donnée n’est collectée lorsque vous le consultez, en dehors des journaux techniques de l’hébergeur (adresse IP, date de la visite), conservés pour la sécurité du site.</p>
        <p>Si vous m’écrivez à <a href="mailto:contact@lysere.fr">contact@lysere.fr</a>, j’utilise votre adresse et le contenu de votre message uniquement pour vous répondre et assurer le suivi de notre échange. Ces informations ne sont jamais vendues ni transmises à des tiers, et sont conservées au maximum trois ans après notre dernier contact.</p>
        <p>Pour ma prospection, j’utilise les coordonnées professionnelles de dirigeants d’entreprise (nom, fonction, e-mail et téléphone professionnels), issues de sources publiques et d’outils de recherche d’entreprises. Ce traitement repose sur mon intérêt légitime à présenter mes services aux professionnels concernés. Chaque e-mail permet de refuser tout nouveau message : il suffit de répondre, et vos coordonnées sont alors retirées de mes listes.</p>
        <p>Conformément au Règlement général sur la protection des données (RGPD), vous pouvez à tout moment demander l’accès, la rectification ou la suppression de vos données, ou vous opposer à leur utilisation, en écrivant à <a href="mailto:contact@lysere.fr">contact@lysere.fr</a>. Vous pouvez aussi adresser une réclamation à la CNIL (<a href="https://www.cnil.fr">cnil.fr</a>).</p>

        <p className="legal-date">Dernière mise à jour : 10 octobre 2026.</p>
      </section>

      <footer><a className="brand-lockup brand-lockup--footer" href="/" aria-label="Lysere — Accueil"><Image src="/lysere-logo-horizontal.svg" alt="" width={1414} height={630} /></a><p><a href="/">Retour au site</a></p></footer>
    </main>
  );
}
