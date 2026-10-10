"use client";

import { useEffect, useState } from "react";

const emails = [
  { from: "SARL Martin", subject: "Relevés bancaires de mars", tag: "Pièces classées dans le dossier", tone: "done" },
  { from: "Boulangerie Roux", subject: "Re : bilan 2025", tag: "Facture d’achat manquante · relance prête", tone: "wait" },
  { from: "M. Lefèvre", subject: "Question sur ma TVA", tag: "Transmis à sa collaboratrice", tone: "route" },
  { from: "Garage Dubois", subject: "Courrier URSSAF reçu", tag: "Urgent · signalé à l’associé", tone: "alert" },
];
const STEP = 1_500;
const HOLD = 3_500;

export function InboxWidget() {
  const [done, setDone] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDone(emails.length); return; }
    const timer = window.setTimeout(() => setDone((count) => (count >= emails.length ? 0 : count + 1)), done >= emails.length ? HOLD : STEP);
    return () => window.clearTimeout(timer);
  }, [done]);

  return <section className="inbox-widget" aria-label="Exemple fictif : tri automatique des e-mails d’un cabinet">
    <header className="inbox-head"><div><p>Boîte du cabinet</p><h2>E-mails clients du matin</h2></div><span>Exemple fictif</span></header>
    <ul>{emails.map((email, index) => <li key={email.from} className={index < done ? "is-done" : index === done ? "is-active" : ""}>
      <div className="inbox-line"><strong>{email.from}</strong><span>{email.subject}</span></div>
      <span className={`inbox-tag inbox-tag--${email.tone}`}>{email.tag}</span>
    </li>)}</ul>
    <footer className="inbox-foot"><span aria-hidden="true" className={done >= emails.length ? "is-done" : ""} /><span>{done >= emails.length ? <>Tout est trié. <strong>1 relance attend votre validation.</strong></> : "Lecture et tri en cours…"}</span></footer>
  </section>;
}
