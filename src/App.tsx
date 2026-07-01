import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Market } from './data/pricingData';
import PriceSheet from './components/PriceSheet';

export default function App() {
  const [market, setMarket] = useState<Market>('nj');

  return (
    <div className="min-h-screen relative flex flex-col font-sans bg-black text-[#D4D4D4] overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-28 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full pb-[70px] md:pb-0">
        
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-white text-[32px] md:text-[48px] font-bold mb-4">Our Services & Pricing</h1>
          <p className="text-[#D4D4D4] text-[16px] md:text-[18px]">Professional real estate media for every listing</p>
        </div>

        {/* Market Selector ONLY */}
        <div className="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex bg-[#111] p-1 rounded-full border border-[#333]">
            <button
              onClick={() => setMarket('nj')}
              className={`px-6 md:px-8 py-3 rounded-full text-[16px] font-bold transition-all duration-300 ${
                market === 'nj' 
                  ? 'bg-[#c9a84c] text-black shadow-lg shadow-[#c9a84c]/20' 
                  : 'text-[#D4D4D4] hover:bg-[#333]'
              }`}
            >
              NJ & Boroughs
            </button>
            <button
              onClick={() => setMarket('mh')}
              className={`px-6 md:px-8 py-3 rounded-full text-[16px] font-bold transition-all duration-300 ${
                market === 'mh' 
                  ? 'bg-[#c9a84c] text-black shadow-lg shadow-[#c9a84c]/20' 
                  : 'text-[#D4D4D4] hover:bg-[#333]'
              }`}
            >
              Manhattan
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="min-h-[600px]">
          <PriceSheet market={market} />
        </div>

      </main>
      <Footer />
    </div>
  );
}
