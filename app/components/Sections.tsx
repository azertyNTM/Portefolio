export function SectionIntro({ id, title, eyebrow, children }: { id: string; title: React.ReactNode; eyebrow?: string; children?: React.ReactNode }) {
  return <div className="section-intro">{eyebrow && <p className="section-kicker">{eyebrow}</p>}<h2 id={id}>{title}</h2>{children && <div className="section-copy">{children}</div>}</div>;
}

export function NumberedList({ items, progress }: { items: string[][]; progress?: boolean }) {
  return <div className={`numbered-list${progress ? " numbered-list--progress" : ""}`}>{items.map(([title, copy], index) => <article key={title}><span className="item-number">{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}
