type Shot = { src: string; alt: string; url: string; caption: string };
type Project = {
  label: string;
  title: string;
  copy: string;
  points: string[];
  main: Shot;
  phone?: Shot;
  chip: [string, string];
  extras: Shot[];
};

const projects: Project[] = [
  {
    label: "Relance des pièces manquantes",
    title: "Le cabinet voit ce qui manque. Le client dépose depuis son téléphone.",
    copy: "Un seul e-mail par client regroupe toutes les pièces à fournir. Les relances partent toutes seules à J+3 puis J+7, s’arrêtent dès que la pièce arrive, et le collaborateur n’est prévenu qu’à J+10, avec le numéro du client à appeler.",
    points: ["Tableau de bord : qui bloque la prochaine TVA", "Lien de dépôt sans compte ni mot de passe", "Import CSV depuis le logiciel comptable"],
    main: { src: "/realisations/rp-dashboard.webp", alt: "Tableau de bord des pièces manquantes : 20 pièces manquantes, 15 bloquent la TVA du 19/10, liste des clients et de leurs relances", url: "relances.cabinet.fr", caption: "Tableau de bord du cabinet" },
    phone: { src: "/realisations/rp-portal.webp", alt: "Page de dépôt du client sur mobile : il manque 5 documents, bouton pour prendre une photo de chaque facture", url: "", caption: "Page de dépôt du client" },
    chip: ["Facture Kiloutou reçue", "retirée des prochaines relances"],
    extras: [
      { src: "/realisations/rp-email.webp", alt: "E-mail envoyé au client listant les 6 factures manquantes avec un bouton « Déposer mes documents »", url: "Boîte mail du client", caption: "L’e-mail reçu par le client : la liste exacte, un seul bouton." },
      { src: "/realisations/rp-client.webp", alt: "Fiche client : pièces reçues et en attente, séquence de relances J0, J+3, J+7, J+10 et historique", url: "relances.cabinet.fr/clients", caption: "La fiche client : chaque pièce, chaque relance, l’historique complet." },
    ],
  },
  {
    label: "Réponse aux demandes de nouveaux clients",
    title: "Une demande arrive sur le site. Elle est traitée en quelques secondes.",
    copy: "Le prospect reçoit tout de suite un accusé de réception personnalisé. La demande est résumée, notée selon des règles écrites noir sur blanc, puis transmise à l’associé concerné. Les relances partent si personne ne prend rendez-vous.",
    points: ["Réponse au prospect en moins d’une seconde", "Score expliqué ligne par ligne, sans boîte noire", "Relances J+1 et J+3, annulées dès le rendez-vous pris"],
    main: { src: "/realisations/stl-lead.webp", alt: "Fiche d’une demande : Julie Perrin, Boulangerie Perrin, score de priorité 65 détaillé par critère et résumé de la demande", url: "cabinet-aubrac.fr/espace-cabinet", caption: "Fiche d’une demande" },
    chip: ["Réponse envoyée", "0,008 s après la demande"],
    extras: [
      { src: "/realisations/stl-form.webp", alt: "Formulaire de contact du cabinet : « Parlez-nous de votre entreprise. Un expert-comptable vous répond. »", url: "cabinet-aubrac.fr", caption: "Le formulaire, côté futur client." },
      { src: "/realisations/stl-crm.webp", alt: "Liste des demandes à traiter, triées par priorité : urgente, prioritaire, normale", url: "cabinet-aubrac.fr/espace-cabinet", caption: "L’espace cabinet : les demandes triées par priorité." },
    ],
  },
];

function Browser({ shot, className = "" }: { shot: Shot; className?: string }) {
  return (
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{shot.url}</span></div>
      <a href={shot.src} target="_blank" rel="noopener" aria-label={`Agrandir : ${shot.caption}`}><img src={shot.src} alt={shot.alt} width={1600} height={1180} loading="lazy" decoding="async" /></a>
    </figure>
  );
}

export function Showcase() {
  return (
    <div className="showcase">
      {projects.map((project, index) => (
        <article className={`showcase-item${index % 2 ? " showcase-item--flip" : ""}`} key={project.label}>
          <div className="showcase-copy">
            <span className="category-label">Réalisation {index + 1} · {project.label}</span>
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
            <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
          <div className="showcase-stage">
            <Browser shot={project.main} />
            {project.phone && (
              <figure className="phone-frame">
                <img src={project.phone.src} alt={project.phone.alt} width={780} height={1688} loading="lazy" decoding="async" />
              </figure>
            )}
            <p className="showcase-chip"><strong>{project.chip[0]}</strong>{project.chip[1]}</p>
          </div>
          <div className="showcase-extras">
            {project.extras.map((shot) => (
              <div key={shot.src}><Browser shot={shot} className="browser-frame--small" /><p>{shot.caption}</p></div>
            ))}
          </div>
        </article>
      ))}
      <p className="showcase-note">Captures réelles des outils, prises sur une démonstration avec des données fictives.</p>
    </div>
  );
}
