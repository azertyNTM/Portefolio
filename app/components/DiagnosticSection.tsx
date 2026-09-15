"use client";

import { useState } from "react";

const questions = [
  "Cette tâche revient-elle chaque semaine ?",
  "Quelqu’un doit-il recopier ou rechercher des informations ?",
  "Plusieurs logiciels sont-ils nécessaires pour terminer le travail ?",
  "Une partie du processus consiste-t-elle à appliquer toujours les mêmes règles ?",
  "Un oubli ou un retard peut-il faire perdre du temps ou une opportunité ?",
  "Le volume augmente-t-il plus vite que la capacité de l’équipe ?",
];

export function DiagnosticSection() {
  const [selected, setSelected] = useState<number[]>([]);
  function toggle(index: number) {
    setSelected((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  }
  return <section className="section diagnostic" id="diagnostic" aria-labelledby="diagnostic-title"><div className="section-intro"><span className="section-label">PAR OÙ COMMENCER ?</span><h2 id="diagnostic-title">Commencez par le travail<br />qui revient.</h2><div className="section-copy"><p>Vous n’avez pas besoin de savoir quelle automatisation construire.</p><p>Cherchez simplement un processus pour lequel vous répondez oui à plusieurs de ces questions :</p></div></div><div className="diagnostic-list">{questions.map((question, index) => { const isSelected = selected.includes(index); return <button type="button" className={isSelected ? "is-selected" : ""} aria-pressed={isSelected} onClick={() => toggle(index)} key={question}><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i aria-hidden="true">{isSelected ? "●" : "○"}</i></button>; })}</div><div className={`diagnostic-result ${selected.length >= 2 ? "is-visible" : ""}`} aria-live="polite">{selected.length >= 2 ? "Ce processus mérite probablement d’être regardé de plus près." : "Si oui, il y a probablement quelque chose à simplifier."}</div></section>;
}
