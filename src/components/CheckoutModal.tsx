import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Lock, 
  ShieldCheck, 
  QrCode, 
  CreditCard, 
  ExternalLink, 
  Copy, 
  CheckCheck, 
  Sparkles, 
  AlertCircle,
  Clock,
  Zap
} from 'lucide-react';
import { COURSE_INFO, ORDER_BUMP_DATA } from '../data/courseData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pix' | 'card' | 'eduzz'>('pix');
  const [includeOrderBump, setIncludeOrderBump] = useState<boolean>(false);
  const [copiedPix, setCopiedPix] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Card State
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [installments, setInstallments] = useState('1');

  if (!isOpen) return null;

  const basePrice = COURSE_INFO.price;
  const bumpPrice = includeOrderBump ? ORDER_BUMP_DATA.price : 0;
  const totalPrice = (basePrice + bumpPrice).toFixed(2).replace('.', ',');

  const pixCode = `00020126580014br.gov.bcb.pix0136fp48-eduzz-pagamentos-pix-leituracrista520400005303986540${(basePrice + bumpPrice).toFixed(2)}5802BR5925FILIPENSES QUATRO OITO6009SAO PAULO62070503***6304`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail para envio do acesso.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full border border-[#E7DDD5] shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#493734] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#5E4744]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-[#2C2420] flex items-center justify-center font-bold text-xs">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="font-serif-title font-bold text-base sm:text-lg leading-tight">
                Checkout Expresso 1-Clique
              </h2>
              <span className="text-[11px] text-amber-200 block">
                Ambiente 100% Seguro • Acesso Imediato
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#2C2420]">
              Inscrição Confirmada com Sucesso!
            </h3>
            <p className="text-sm text-[#675953] max-w-md mx-auto leading-relaxed">
              Parabéns, <strong>{name || 'Aluna'}</strong>! Os seus dados de acesso ao mini-curso foram enviados agora mesmo para o e-mail:
            </p>
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-sm rounded-xl max-w-md mx-auto">
              {email || 'seu-email@exemplo.com'}
            </div>
            <div className="text-xs text-[#8A7972] leading-relaxed max-w-md mx-auto pt-2">
              Verifique sua caixa de entrada ou spam. Você tem 15 dias de acesso para maratonar e transformar a sua leitura!
            </div>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#9E8581] hover:bg-[#886F6B] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors"
              >
                Concluir e Voltar
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-7 max-h-[85vh] overflow-y-auto">
            
            {/* Product Summary Box */}
            <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#E9DFD7] mb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-serif-title font-bold text-sm sm:text-base text-[#2C2420]">
                  Mini-Curso: Leitura Cristã Que Transforma
                </span>
                <span className="text-sm sm:text-base font-bold text-[#2C2420]">
                  R$ 27,00
                </span>
              </div>
              <p className="text-xs text-[#7A6C66] mb-3">
                Inclui 6 Blocos em vídeo + Checklist das 7 Perguntas + Caderno de Apoio em PDF + Acesso de 15 dias.
              </p>

              {/* Order Bump Box (High Conversion Low Ticket tactic) */}
              <div 
                onClick={() => setIncludeOrderBump(!includeOrderBump)}
                className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                  includeOrderBump 
                    ? 'bg-amber-50/80 border-amber-400' 
                    : 'bg-white border-dashed border-[#D6C5BC] hover:border-[#9E8581]'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                  includeOrderBump 
                    ? 'bg-amber-500 border-amber-600 text-[#2C2420]' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {includeOrderBump && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="text-left flex-1">
                  <div className="flex items-center justify-between gap-1 flex-wrap">
                    <span className="text-xs font-bold text-[#2C2420]">
                      {ORDER_BUMP_DATA.title}
                    </span>
                    <span className="text-xs font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded">
                      + R$ 14,90
                    </span>
                  </div>
                  <p className="text-[11px] text-[#695B55] mt-1 leading-snug">
                    {ORDER_BUMP_DATA.description}
                  </p>
                </div>
              </div>

              {/* Total Row */}
              <div className="mt-3 pt-3 border-t border-[#E8DDD5] flex items-center justify-between text-sm">
                <span className="font-semibold text-[#5F514A]">Total a pagar:</span>
                <span className="font-serif-title text-xl font-extrabold text-[#2C2420]">
                  R$ {totalPrice}
                </span>
              </div>
            </div>

            {/* Step 1: User data */}
            <div className="space-y-3 mb-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E6D68] flex items-center gap-1.5">
                <span>1. Seus dados para liberação do acesso</span>
              </h3>

              <div>
                <label className="block text-xs font-semibold text-[#50443F] mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Clara Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D9CCC3] focus:border-[#9E8581] focus:ring-1 focus:ring-[#9E8581] outline-hidden bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#50443F] mb-1">
                    E-mail (Recebimento das aulas)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D9CCC3] focus:border-[#9E8581] focus:ring-1 focus:ring-[#9E8581] outline-hidden bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#50443F] mb-1">
                    WhatsApp / Celular
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 90000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D9CCC3] focus:border-[#9E8581] focus:ring-1 focus:ring-[#9E8581] outline-hidden bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Payment options */}
            <div className="mb-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8E6D68] mb-2.5">
                2. Escolha como prefere pagar
              </h3>

              {/* Payment Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-[#F0E8E2] mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('pix')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'pix' 
                      ? 'bg-white text-emerald-800 shadow-xs' 
                      : 'text-[#6C5E57] hover:text-[#2C2420]'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>PIX Instantâneo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('card')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'card' 
                      ? 'bg-white text-[#2C2420] shadow-xs' 
                      : 'text-[#6C5E57] hover:text-[#2C2420]'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Cartão</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('eduzz')}
                  className={`py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'eduzz' 
                      ? 'bg-white text-[#8E6D68] shadow-xs' 
                      : 'text-[#6C5E57] hover:text-[#2C2420]'
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Eduzz Oficial</span>
                </button>
              </div>

              {/* Tab Content: PIX */}
              {activeTab === 'pix' && (
                <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#E7DDD5] space-y-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 py-1 px-3 rounded-full mx-auto w-fit">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Aprovação em segundos e liberação automática</span>
                  </div>

                  {/* Simulated QR Code */}
                  <div className="w-40 h-40 mx-auto bg-white p-2 rounded-xl border border-[#D9CDC3] shadow-xs flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-[radial-gradient(#2C2420_2px,transparent_2px)] [background-size:8px_8px] border-4 border-[#2C2420] flex items-center justify-center relative">
                      <div className="w-8 h-8 rounded bg-white flex items-center justify-center border border-[#2C2420]">
                        <QrCode className="w-5 h-5 text-[#2C2420]" />
                      </div>
                    </div>
                  </div>

                  {/* Copy Pix button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2C2420] hover:bg-black text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      {copiedPix ? (
                        <>
                          <CheckCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-300">Código Pix Copiado com Sucesso!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar Código Pix (Copia e Cola)</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#86766F] mt-1.5">
                      Abra o app do seu banco, escolha <strong>Pix Copia e Cola</strong> e cole o código.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulatePayment}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    Já realizei o Pix! Liberar Meu Acesso
                  </button>
                </div>
              )}

              {/* Tab Content: Card */}
              {activeTab === 'card' && (
                <form onSubmit={handleSimulatePayment} className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#E7DDD5] space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#50443F] mb-1">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#D9CCC3] bg-white outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#50443F] mb-1">
                      Nome impresso no cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Como está no cartão"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#D9CCC3] bg-white outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#50443F] mb-1">
                        Validade (MM/AA)
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-[#D9CCC3] bg-white outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#50443F] mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-[#D9CCC3] bg-white outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#50443F] mb-1">
                      Parcelas
                    </label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-[#D9CCC3] bg-white outline-hidden"
                    >
                      <option value="1">1x de R$ {totalPrice} à vista</option>
                      <option value="2">2x de R$ {(parseFloat(totalPrice.replace(',', '.')) / 2).toFixed(2).replace('.', ',')}</option>
                      <option value="3">3x de R$ 9,68</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#9E8581] hover:bg-[#886F6B] text-white font-extrabold text-sm py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    Pagar R$ {totalPrice} e Acessar Agora
                  </button>
                </form>
              )}

              {/* Tab Content: Eduzz Direct */}
              {activeTab === 'eduzz' && (
                <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#E7DDD5] text-center space-y-3">
                  <p className="text-xs text-[#63544D] leading-relaxed">
                    Você será redirecionada com segurança para a página oficial do produto na Eduzz com o cupom <strong>MINI27</strong> já aplicado.
                  </p>
                  <a
                    href={COURSE_INFO.eduzzUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#8E6D68] hover:bg-[#785955] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                  >
                    <span>Ir Para Checkout Seguro na Eduzz</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

            </div>

            {/* Bottom Guarantee Banner */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6C66] text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias • Seus dados estão 100% seguros</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
