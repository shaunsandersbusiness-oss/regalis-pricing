import React from 'react';
import { Check, Minus } from 'lucide-react';
import { Market, TierIndex, TIERS } from '../data/pricingData';

interface ComparisonTableProps {
  market: Market;
  tierIndex: TierIndex;
}

export default function ComparisonTable({ market, tierIndex }: ComparisonTableProps) {
  
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
      <div className="overflow-x-auto rounded-xl border border-[#1a1a1a]">
        <table className="w-full min-w-[800px] border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="bg-[#111] text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-left w-1/4">
                SERVICE
              </th>
              <th className="bg-[#111] text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-center w-1/3">
                PRESTIGE
              </th>
              <th className="bg-[#111] bg-opacity-100 text-[#c9a84c] text-[12px] font-bold uppercase tracking-wider p-4 text-center w-1/3" style={{ backgroundColor: '#161616' }}>
                LEGACY
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Silver Photos', pre: false, leg: false },
              { label: 'Gold Photos', pre: true, leg: true },
              { label: 'Floor Plan', pre: true, leg: true },
              { label: 'Custom Listing Website', pre: true, leg: true },
              { label: 'Drone Photos', pre: true, leg: true },
              { label: '3D Tour', pre: true, leg: true },
              { label: 'Editor Cut Video', pre: true, leg: 'Included (Choice)' },
              { label: 'Signature Video', pre: false, leg: true },
              { label: 'Agent Branding OR Community Spotlight Video', pre: false, leg: 'Choice (+$200)' },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]'}>
                <td className="p-4 border-t border-[#1a1a1a] text-[#D4D4D4] text-[15px] font-medium">
                  {row.label}
                </td>
                <td className="p-4 border-t border-[#1a1a1a] text-center">
                  {typeof row.pre === 'boolean' ? (row.pre ? renderCheck() : renderDash()) : renderText(row.pre)}
                </td>
                <td className="p-4 border-t border-[#1a1a1a] text-center bg-[#c9a84c] bg-opacity-5">
                  {typeof row.leg === 'boolean' ? (row.leg ? renderCheck(true) : renderDash()) : renderText(row.leg)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
