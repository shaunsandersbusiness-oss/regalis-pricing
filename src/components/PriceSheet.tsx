import React from 'react';
import { pricingData, sharedPricing, Market } from '../data/pricingData';
import { Check } from 'lucide-react';

interface Props {
  market: Market;
}

export default function PriceSheet({ market }: Props) {
  const data = pricingData[market];

  return (
    <div className="max-w-5xl mx-auto w-full pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Listing Packages */}
      <section className="mb-16">
        <div className="mb-8 border-b border-[#333] pb-4">
          <h2 className="text-[#c9a84c] text-[24px] font-bold">Listing Packages</h2>
          <p className="text-[#999] text-[14px] mt-2">{data.packagesIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.packages.map((pkg, idx) => (
            <div key={idx} className={`bg-[#0a0a0a] border ${pkg.tag === 'Best Value' || pkg.tag === 'Premier' ? 'border-[#c9a84c]' : 'border-[#1a1a1a]'} rounded-xl p-6 flex flex-col relative`}>
              {pkg.tag && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#c9a84c] text-black text-[11px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                  {pkg.tag}
                </div>
              )}
              <div className="text-[#999] text-[12px] font-bold tracking-widest uppercase mb-2">Package {pkg.tier}</div>
              <h3 className="text-white text-[22px] font-bold mb-2">{pkg.name}</h3>
              <p className="text-[#D4D4D4] text-[14px] mb-6 min-h-[40px]">{pkg.for}</p>
              
              <ul className="mb-6 flex-grow space-y-3">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start text-[14px] text-[#D4D4D4]">
                    <Check size={16} className="text-[#c9a84c] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-[#1a1a1a]">
                {sharedPricing.sizeHeaders.map((size, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-[#1a1a1a]/50 last:border-0">
                    <span className="text-[#999] text-[13px]">{size}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-[#333]"></div>
                    <span className={`text-[#c9a84c] text-[15px] font-bold tabular-nums ${pkg.prices[idx] === 'custom' ? 'italic text-[#999] font-normal text-[13px]' : ''}`}>
                      {pkg.prices[idx] === 'custom' ? 'custom' : `$${pkg.prices[idx]}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* 2. Photography */}
        <section>
          <div className="mb-6 border-b border-[#333] pb-3">
            <h2 className="text-[#c9a84c] text-[20px] font-bold">Photography</h2>
            <p className="text-[#D4D4D4] text-[15px] mt-2">{data.photographyIntro}</p>
          </div>
          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
            {data.photography.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#1a1a1a] last:border-0">
                <span className="text-[#d4d4d4] text-[14px]">{item.size}</span>
                <div className="flex-1 mx-4 border-b border-dotted border-[#333]"></div>
                <span className={`text-[#c9a84c] text-[16px] font-bold tabular-nums ${item.price === 'custom' ? 'italic text-[#999] font-normal text-[14px]' : ''}`}>
                   {item.price === 'custom' ? 'custom' : `$${item.price}`}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Video */}
        <section>
          <div className="mb-6 border-b border-[#333] pb-3">
            <h2 className="text-[#c9a84c] text-[20px] font-bold">Video</h2>
          </div>
          <div className="space-y-4">
            {data.video.map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-1">{item.name}</h4>
                  <p className="text-[#999] text-[13px]">{item.desc}</p>
                </div>
                <div className="text-[#c9a84c] text-[20px] whitespace-nowrap">
                  {item.priceText}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#c9a84c]/10 text-[#c9a84c] p-4 rounded-xl border border-[#c9a84c]/20 text-[13px] mt-4">
            <strong>Note:</strong> {data.videoNote}
          </div>
        </section>
      </div>

      {/* 4. Aerial & Drone */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3 flex flex-col md:flex-row md:items-end justify-between">
          <h2 className="text-[#c9a84c] text-[20px] font-bold">Aerial & Drone</h2>
          <p className="text-[#999] text-[14px] mt-2 md:mt-0">{data.aerialIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {data.aerial.map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col">
              <h4 className="text-white font-bold text-[16px] mb-2">{item.name}</h4>
              <div className="text-[#c9a84c] text-[20px] mb-3">
                {item.priceText}
              </div>
              <p className="text-[#999] text-[13px] mt-auto">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#c9a84c]/10 text-[#c9a84c] p-4 rounded-xl border border-[#c9a84c]/20 text-[13px]">
          <strong>Note:</strong> {data.aerialNote}
        </div>
      </section>

      {/* 5. Floor Plans & 3D */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3 flex flex-col md:flex-row md:items-end justify-between">
          <h2 className="text-[#c9a84c] text-[20px] font-bold">Floor Plans & 3D Tours</h2>
          <p className="text-[#999] text-[14px] mt-2 md:mt-0">{sharedPricing.plans.note}</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#1a1a1a]">
          <table className="w-full min-w-[800px] border-collapse bg-[#0a0a0a]">
            <thead>
              <tr className="bg-[#111]">
                {sharedPricing.plans.headers.map((h, i) => (
                  <th key={i} className="p-4 text-left text-[#999] font-bold text-[12px] uppercase tracking-wider border-b border-[#1a1a1a]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sharedPricing.plans.rows.map((row, i) => (
                <tr key={i} className="border-b border-[#1a1a1a] last:border-0 hover:bg-[#111] transition-colors">
                  <td className="p-4 align-top">
                    <div className="text-white font-bold mb-1">{row.service}</div>
                    <div className="text-[#999] text-[12px]">{row.desc}</div>
                  </td>
                  {row.prices.map((p, j) => (
                    <td key={j} className="p-4 align-top text-[#D4D4D4]">
                      {p === 'custom' ? <span className="text-[#999] italic">Custom</span> : `$${p}`}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Branding & Headshots */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3">
          <h2 className="text-[#c9a84c] text-[20px] font-bold">Branding & Headshots</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.branding.map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col justify-between gap-4">
              <div>
                <h4 className="text-white font-bold text-[16px] mb-1">{item.name}</h4>
                <div className="text-[#c9a84c] text-[20px] whitespace-nowrap mb-2">
                  {item.priceText}
                </div>
                <p className="text-[#999] text-[13px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#c9a84c]/10 text-[#c9a84c] p-4 rounded-xl border border-[#c9a84c]/20 text-[13px] mt-4">
          <strong>Note:</strong> {data.brandingNote}
        </div>
      </section>

      {/* 7. Agent & Brand Content */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3 flex flex-col md:flex-row md:items-end justify-between">
          <h2 className="text-[#c9a84c] text-[20px] font-bold">Agent & Brand Content</h2>
          <p className="text-[#999] text-[14px] mt-2 md:mt-0 md:max-w-xl md:text-right">{data.brandContent.intro}</p>
        </div>

        <div className="space-y-8">
          {/* Brokerage & Team Headshot Day */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4">Brokerage & Team Headshot Day</h3>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
                <div>
                  <div className="text-[#999] text-[12px] uppercase tracking-wider mb-1">Session Fee</div>
                  <div className="text-[#c9a84c] text-[24px]">{data.brandContent.headshotDay.session}</div>
                </div>
                <div className="hidden sm:block text-[#333] text-2xl">+</div>
                <div>
                  <div className="text-[#999] text-[12px] uppercase tracking-wider mb-1">Per Agent</div>
                  <div className="text-[#c9a84c] text-[24px]">{data.brandContent.headshotDay.perAgent}</div>
                </div>
              </div>
              <p className="text-[#999] text-[13px] max-w-md">{data.brandContent.headshotDay.note}</p>
            </div>
          </div>

          {/* Agent Content Batch */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4">Agent Content Batch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {data.brandContent.contentBatch.map((item, i) => (
                <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col">
                  <h4 className="text-white font-bold text-[16px] mb-2">{item.name}</h4>
                  <div className="text-[#c9a84c] text-[20px] mb-3">{item.priceText}</div>
                  <p className="text-[#999] text-[13px] mt-auto">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#111] border border-[#222] p-4 rounded-xl text-[13px] text-[#999]">
              {data.brandContent.contentBatchNote}
            </div>
          </div>

          {/* Community & Neighborhood Video */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-4">Community & Neighborhood Video</h3>
            <div className="space-y-4">
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-1">{data.brandContent.communityVideo.film.name}</h4>
                  <p className="text-[#999] text-[14px] max-w-2xl">{data.brandContent.communityVideo.film.desc}</p>
                </div>
                <div className="text-[#c9a84c] text-[24px] whitespace-nowrap">
                  {data.brandContent.communityVideo.film.priceText}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.brandContent.communityVideo.reel.map((item: any, i: number) => (
                  <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-5 flex flex-col">
                    <h4 className="text-white font-bold text-[16px] mb-2">{item.name}</h4>
                    <div className="text-[#c9a84c] text-[20px] mb-1">
                      {item.priceText}
                    </div>
                    {item.save && (
                      <div className="text-[#c9a84c]/80 text-[12px] uppercase tracking-wider mb-3">
                        Save {item.save}
                      </div>
                    )}
                    <p className="text-[#999] text-[13px] mt-auto">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111] border border-[#222] p-4 rounded-xl text-[13px] text-[#999] mt-4">
              {data.brandContent.communityVideo.note}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Enhancements */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3">
          <h2 className="text-[#c9a84c] text-[20px] font-bold">Enhancements</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sharedPricing.enhancements.map((item, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-bold text-[14px]">{item.name}</h4>
              </div>
              <div className="text-[#c9a84c] text-[16px] whitespace-nowrap mb-2">
                {item.priceText}
              </div>
              <p className="text-[#999] text-[12px]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#c9a84c]/10 text-[#c9a84c] p-4 rounded-xl border border-[#c9a84c]/20 text-[13px] mt-4">
          <strong>Note:</strong> {sharedPricing.enhancementsNote}
        </div>
      </section>

      {/* 9. Volume Program */}
      <section className="mb-16">
        <div className="mb-6 border-b border-[#333] pb-3">
          <h2 className="text-[#c9a84c] text-[24px] font-bold">Volume Program</h2>
          <p className="text-[#D4D4D4] text-[15px] mt-3 leading-relaxed">{data.volume.unit}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {data.volume.tiers.map((tier, i) => (
            <div key={i} className={`bg-[#0a0a0a] border ${tier.feature ? 'border-[#c9a84c]' : 'border-[#1a1a1a]'} rounded-xl p-6 text-center`}>
              <h4 className="text-white text-[20px] font-bold mb-1">{tier.name}</h4>
              <p className="text-[#999] text-[14px] mb-4">{tier.commit}</p>
              <div className="text-[#c9a84c] text-[28px] font-light">
                {tier.rate}
                <span className="text-[14px] text-[#999] ml-1 block">/ listing</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#111] border border-[#333] rounded-xl p-5 text-[14px]">
          <p className="text-[#D4D4D4] mb-2">{sharedPricing.volumeMemberIncludes}</p>
          <p className="text-[#999] italic">{sharedPricing.volumeMemberRates}</p>
        </div>
      </section>

      {/* 10. Agent Growth Engine */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] rounded-2xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-[#c9a84c] font-bold tracking-widest uppercase text-[12px] mb-3">{sharedPricing.growthEngine.eyebrow}</div>
          <h2 className="text-white text-[32px] md:text-[40px] font-bold mb-4">{sharedPricing.growthEngine.headline}</h2>
          <p className="text-[#D4D4D4] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-3xl">
            {sharedPricing.growthEngine.lede}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {sharedPricing.growthEngine.phases.map((phase, i) => (
              <div key={i} className="bg-black/30 border border-[#333] rounded-xl p-5 text-left backdrop-blur-sm">
                <div className="text-[#999] text-[12px] font-mono mb-2">{phase.days}</div>
                <h4 className="text-white font-bold text-[16px] mb-2">{phase.title}</h4>
                <p className="text-[#999] text-[13px] leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={sharedPricing.growthEngine.ctaHref}
              className="inline-block bg-[#c9a84c] text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors"
            >
              {sharedPricing.growthEngine.ctaLabel}
            </a>
            <p className="text-[#999] text-[12px] sm:max-w-[200px] text-center sm:text-left">
              {sharedPricing.growthEngine.sub}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
