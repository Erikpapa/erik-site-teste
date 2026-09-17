import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { WhatYouLearnSection } from './components/WhatYouLearnSection';
import { OrnamentDivider } from './components/OrnamentDivider';
import { ForWhomSection } from './components/ForWhomSection';
import { CurriculumSection } from './components/CurriculumSection';
import { KitVeredaSection } from './components/KitVeredaSection';
import { AboutCourseSection } from './components/AboutCourseSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F0] text-[#222725] font-sans antialiased selection:bg-[#173F38] selection:text-[#FFF9F0]">
      {/* Editorial Announcement Bar */}
      <AnnouncementBar />

      {/* Main Brand Navigation Header */}
      <Navbar />

      {/* Sales & Method Page Sections */}
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <WhatYouLearnSection />
        <OrnamentDivider />
        <ForWhomSection />
        <CurriculumSection />
        <AboutCourseSection />
        <KitVeredaSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
      </main>

      {/* Official Brand Footer */}
      <Footer />

      {/* Non-intrusive Sticky Bottom CTA Bar */}
      <StickyBottomBar />
    </div>
  );
}
