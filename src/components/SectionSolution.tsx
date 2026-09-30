import { BookOpen, Pencil } from 'lucide-react';
import { APPROVED_IMAGES } from '../data/courseData';

export function SectionSolution() {
  return (
    <section className="support" aria-labelledby="support-title">
      <div className="wrap">
        <div>
          <p className="tag">Apoio concreto</p>
          <h2 id="support-title">Para quando você lê e pensa: “E agora?”</h2>
          <p className="sub">Um caminho para compreender, refletir e levar o aprendizado ao cotidiano.</p>
          <ul className="ben">
            <li>
              <span className="num" aria-hidden="true">01</span>
              <span className="ico" aria-hidden="true"><BookOpen size={28} strokeWidth={1.6} /></span>
              <div className="t"><h3>Guia de leitura</h3><p>Uma direção para compreender o que você lê.</p></div>
            </li>
            <li>
              <span className="num" aria-hidden="true">02</span>
              <span className="ico" aria-hidden="true"><Pencil size={28} strokeWidth={1.6} /></span>
              <div className="t"><h3>Caderno prático</h3><p>Organize suas dúvidas, reflexões e próximos passos.</p></div>
            </li>
          </ul>
        </div>
        <div className="read"><img {...APPROVED_IMAGES.reading} loading="lazy" decoding="async" /></div>
      </div>
    </section>
  );
}
