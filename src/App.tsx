import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ForWhomSection } from './components/ForWhomSection';
import { WhatYouLearnSection } from './components/WhatYouLearnSection';
import { CurriculumSection } from './components/CurriculumSection';
import { BonusSection } from './components/BonusSection';
import { TeacherSection } from './components/TeacherSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { SocialProofToast } from './components/SocialProofToast';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2C2420] selection:bg-[#9E8581]/25 selection:text-[#4A3835]">
      {/* Top Urgent Countdown Announcement Bar */}
      <AnnouncementBar onOpenCheckout={handleOpenCheckout} />

      {/* Main Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenCheckout={handleOpenCheckout} />
        <ProblemSection />
        <ForWhomSection onOpenCheckout={handleOpenCheckout} />
        <WhatYouLearnSection />
        <CurriculumSection />
        <BonusSection />
        <TeacherSection />
        <PricingSection onOpenCheckout={handleOpenCheckout} />
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Low-Ticket Optimized Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* Mobile Sticky Bar for High Conversion */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* Recent Purchases Toast */}
      <SocialProofToast />
    </div>
  );
}

