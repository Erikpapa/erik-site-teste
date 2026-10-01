import { ArrowRight, FileText } from 'lucide-react';
import { APPROVED_IMAGES, BRAND_INFO, CHECKOUT_LABEL, getCaktoCheckoutUrl } from '../data/courseData';
import { VeredaWheat } from './VeredaWheat';
import { trackAddToCart } from '../lib/metaPixel';

export function SectionOpening() {
  const checkoutUrl = getCaktoCheckoutUrl();
  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <div className="brand">
            <VeredaWheat className="brand-wheat" />
            <span>{BRAND_INFO.brandName}</span>
          </div>
          <a className="btn" href={checkoutUrl} data-checkout>
            Quero meu acesso <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <h1 id="hero-title">Você abre a Bíblia para se sentir mais perto de Deus. Mas fecha sem entender o que acabou de ler.</h1>
          <img className="photo" {...APPROVED_IMAGES.hero} fetchPriority="high" decoding="async" />
          <div className="hero-text">
            <p>Lê um versículo. Volta. Lê de novo. As palavras estão ali. Você quer entender. Mas não consegue ligar o que está escrito ao que está vivendo.</p>
            <blockquote>“Deus, eu quero me aproximar de Ti… mas não sei por onde começar.”</blockquote>
            <p className="lead">Comece com orientação, uma passagem e um próximo passo de cada vez.</p>
            <a className="btn cta" href={checkoutUrl} data-checkout onClick={trackAddToCart}>
              {CHECKOUT_LABEL} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="price"><FileText size={18} aria-hidden="true" /> Guia + caderno prático em PDF • <strong>{BRAND_INFO.priceFormatted}</strong></p>
          </div>
        </div>
      </section>
    </>
  );
}
