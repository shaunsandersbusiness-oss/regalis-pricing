import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Market, TierIndex, TIERS } from '../data/pricingData';

interface ComparisonTableProps {
  market: Market;
  tierIndex: TierIndex;
  setTierIndex: (index: TierIndex) => void;
}

export default function ComparisonTable({ market, tierIndex, setTierIndex }: ComparisonTableProps) {
  
  const renderCheck = (isGold = false) => (
    <div className="flex justify-center">
      <Check size={20} className={isGold ? "text-[#c9a84c]" : "text-[#c9a84c]"} />
    </div>
  );

  const renderDash = () => (
    <div className="flex justify-center">
      <Minus size={20} className="text-[#444444]" />
    </div>
  );

  const renderText = (text: string) => (
    <span className="text-[#D4D4D4] text-[14px]">{text}</span>
  );

  return (
    <div className="w-full">
      {/* Property Size Selector for Table */}
      <div className="flex justify-end mb-4 items-center gap-3">
        <label className="text-[#999999] text-[14px]">Property Size:</label>
        <select 
          value={tierIndex}
          onChange={(e) => setTierIndex(Number(e.target.value) as TierIndex)}
          className="bg-[#111] border border-[#333] text-white rounded px-3 py-2 text-[14px] focus:outline-none focus:border-[#c9a84c]"
        >
          {TIERS.map((tier, i) => (
            <option key={i} value={i}>{tier}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#1a1a1a]">
        <table className="w-full min-w-[800px] border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="bg-[#111] text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-left w-1/4">
                SERVICE
              </th>
              <th className="bg-[#111] text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-center w-1/4">
                ESSENTIAL
              </th>
              <th className="bg-[#111] bg-opacity-100 text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-center w-1/4" style={{ backgroundColor: '#161616' }}>
                SIGNATURE
              </th>
              <th className="bg-[#111] text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-center w-1/4">
                CROWN
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Interior & Exterior Photos', ess: 'Silver (Bronze + FP)', sig: 'Gold (Bronze + FP + Drone + 3D)', crn: 'Gold' },
              { label: 'Floor Plan (2D Marketing)', ess: true, sig: true, crn: true, note: '(Silver/Gold)' },
              { label: 'Drone Aerial Stills', ess: false, sig: true, crn: true, note: '(Gold)' },
              { label: '3D Tour + Interactive Walkthrough', ess: false, sig: true, crn: true, note: '(Gold)' },
              { label: '2 Twilight Exterior Photos', ess: false, sig: 'Complimentary', crn: 'Complimentary' },
              { label: 'Quick Tour Video', ess: true, sig: false, crn: false },
              { label: 'Regalis Cinematic', ess: false, sig: true, crn: true },
              { label: 'Standard, Branding, or Spotlight (pick 1)', ess: false, sig: false, crn: true },
              { label: `Drone in Video (${market === 'NJ' ? 'NJ' : 'Manhattan'})`, 
                ess: market === 'NJ' ? 'Included FREE' : '$100 add-on', 
                sig: market === 'NJ' ? 'Included FREE' : '$100 add-on', 
                crn: market === 'NJ' ? 'Included FREE' : '$100 add-on' 
              },
              { label: 'Custom Listing Website', ess: 'Included', sig: 'Included', crn: 'Included' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]'}>
                <td className="p-4 border-t border-[#1a1a1a] text-[#D4D4D4] text-[15px] font-medium">
                  {row.label}
                </td>
                <td className="p-4 border-t border-[#1a1a1a] text-center">
                  {typeof row.ess === 'boolean' ? (row.ess ? renderCheck() : renderDash()) : renderText(row.ess)}
                </td>
                <td className="p-4 border-t border-[#1a1a1a] text-center bg-[#c9a84c] bg-opacity-5">
                  {typeof row.sig === 'boolean' ? (row.sig ? renderCheck(true) : renderDash()) : renderText(row.sig)}
                </td>
                <td className="p-4 border-t border-[#1a1a1a] text-center">
                  {typeof row.crn === 'boolean' ? (row.crn ? renderCheck() : renderDash()) : renderText(row.crn)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
