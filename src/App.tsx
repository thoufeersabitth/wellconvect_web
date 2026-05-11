import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Section1About } from './components/Section1About';
import { Section1bServices } from './components/Section1bServices';
import { Section1cClients } from './components/Section1cClients';
import { Section1dCTA } from './components/Section1dCTA';
import { Section1eBrands } from './components/Section1eBrands';
import { Section2Services } from './components/Section2Services';
import { Section3WhyChooseUs } from './components/Section3WhyChooseUs';
import { Section4Blog } from './components/Section4Blog';
import { Section5NewsFooter } from './components/Section5NewsFooter';
import { BackgroundOrchestrator } from './components/BackgroundOrchestrator';

export default function App() {
  return (
    <main className="relative bg-[#010406] min-h-screen selection:bg-[#00AEEF]/30 selection:text-white overflow-x-hidden">
      {/* Cinematic Background Orchestrator */}
      <BackgroundOrchestrator />
      
      <Header />
      
      <HeroSection />

      <div className="relative z-10">
        
        {/* Services Bento Grid */}
        <div className="relative z-20">
           <Section1bServices />
        </div>
        
        {/* Main Content Flow */}
        <div className="space-y-48 md:space-y-64">
           <Section1About />
           <Section2Services />
           <Section3WhyChooseUs />
           <Section1cClients />
           <Section1dCTA />
           <Section1eBrands />
           <Section4Blog />
           <Section5NewsFooter />
        </div>
      </div>
    </main>
  );
}
