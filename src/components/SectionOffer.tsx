import { ArrowRight, FileText } from 'lucide-react';
import { APPROVED_IMAGES, BRAND_INFO, CHECKOUT_LABEL, FAQS, getCaktoCheckoutUrl } from '../data/courseData';
import { VeredaWheat } from './VeredaWheat';
import { trackAddToCart } from '../lib/metaPixel';

export function SectionOffer() {
  return (
    <>
      <section id="oferta" className="offer" aria-labelledby="offer-title">
        <div className="wrap">
          <div className="card">
            <VeredaWheat className="stem" />
            <div className="offer-grid">
              <div>
                <p className="tag">Oferta oficial</p>
                <h2 id="offer-title">Seu próximo passo começa aqui.</h2>
                <p className="name">{BRAND_INFO.productName}</p>
                <p className="what">{BRAND_INFO.format}</p>
                <p className="big">{BRAND_INFO.priceFormatted}</p>
                <p className="one">{BRAND_INFO.paymentType}</p>
              </div>
              <img className="covers" {...APPROVED_IMAGES.covers} loading="lazy" decoding="async" />
            </div>
            <a className="btn" href={getCaktoCheckoutUrl()} data-checkout onClick={trackAddToCart}>
              {CHECKOUT_LABEL} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="note"><FileText size={18} aria-hidden="true" /><span>Material digital em PDF. Nenhum livro físico será enviado.</span></p>
          </div>
        </div>
      </section>
      <section className="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Dúvidas frequentes</h2>
        {FAQS.map(faq => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
      <footer>
        <div className="brand"><VeredaWheat className="footer-wheat" /><span>{BRAND_INFO.brandName}</span></div>
        <p>© 2026 {BRAND_INFO.brandName}. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
