export type Market = 'NJ' | 'MAN';
export type TierIndex = 0 | 1 | 2 | 3 | 4 | 5;

export const TIERS = [
  "0–1,500 sqft","1,501–2,000 sqft","2,001–3,000 sqft",
  "3,001–4,000 sqft","4,001–5,000 sqft","5,000+ sqft",
];

export const PRICING_DATA = {
  NJ: {
    photography: {
      bronze:          [170, 215, 260, 320, 395, "Contact Us"],
      twilight:        [200, 215, 245, 285, 335, "Contact Us"],
      floorPlan:       [95,  95,  115, 145, 185, "Contact Us"],
      threeDTour:      [175, 175, 210, 250, 300, "Contact Us"],
      droneAddOn:      75,
      droneStandalone: 150,
    },
    video: {
      editorCut:          [450, 490, 535, 585, 650, "Contact Us"],
      signature_video:    [750, 800, 875, 950, 1050, "Contact Us"],
      agentBrandingEditor: 600,
      agentBrandingSignature: 950,
      communitySpotlightEditor: 550,
      communitySpotlightSignature: 850,
      droneInVideo:       0,  // INCLUDED FREE in NJ
    },
    addOns: {
      virtualStaging: 25, virtualTwilight: 25, virtualRenovation: 30,
      objectRemoval: 15, sameDayDelivery: 35, nextDayVideo: 150, listingWebsite: 150,
    },
  },
  MAN: {
    photography: {
      bronze:          [245, 290, 335, 395, 470, "Contact Us"],
      twilight:        [275, 290, 320, 360, 410, "Contact Us"],
      floorPlan:       [95,  95,  115, 145, 185, "Contact Us"],
      threeDTour:      [175, 175, 210, 250, 300, "Contact Us"],
      droneAddOn:      100,
      droneStandalone: 250,
    },
    video: {
      editorCut:          [525, 565, 610, 660, 725, "Contact Us"],
      signature_video:    [825, 875, 950, 1025, 1125, "Contact Us"],
      agentBrandingEditor: 675,
      agentBrandingSignature: 1025,
      communitySpotlightEditor: 625,
      communitySpotlightSignature: 925,
      droneInVideo:       100,  // $100 add-on in Manhattan
    },
    addOns: {
      virtualStaging: 25, virtualTwilight: 25, virtualRenovation: 30,
      objectRemoval: 15, sameDayDelivery: 35, nextDayVideo: 150, listingWebsite: 150,
    },
  },
};

// ── Pre-calculated bundle component sums (à la carte totals before discount) ──
export const SILVER_RAW: Record<Market, (number | string)[]> = {
  NJ:  [265, 310, 375, 465, 580, "Contact Us"],
  MAN: [340, 385, 450, 540, 655, "Contact Us"],
};
export const GOLD_RAW: Record<Market, (number | string)[]> = {
  NJ:  [515, 560, 660, 790,  955,  "Contact Us"],
  MAN: [615, 660, 760, 890, 1055, "Contact Us"],
};

// ── Pre-calculated DISCOUNTED package prices ──────────────────────────────────
// NEVER recalculate these — use these arrays directly for display.

// Gold Bundle = Gold × 0.90 (10% off, photo only)
export const GOLD_BUNDLE_PRICES: Record<Market, (number | string)[]> = {
  NJ:  [465, 505, 595,  710,  860, "Contact Us"],
  MAN: [555, 595, 685,  800,  950, "Contact Us"],
};

export const PRESTIGE_PRICES: Record<Market, (number | string)[]> = {
  NJ:  [820,  895,  1015, 1170, 1365, "Contact Us"],
  MAN: [970,  1040, 1165, 1320, 1515, "Contact Us"]
};

export const PRESTIGE_ALC: Record<Market, (number | string)[]> = {
  NJ:  [965,  1050, 1195, 1375, 1605, "Contact Us"],
  MAN: [1140, 1225, 1370, 1550, 1780, "Contact Us"]
};

export const LEGACY_PRICES: Record<Market, (number | string)[]> = {
  NJ:  [1010, 1090, 1230, 1390, 1605, "Contact Us"],
  MAN: [1150, 1230, 1370, 1530, 1745, "Contact Us"]
};

export const LEGACY_ALC: Record<Market, (number | string)[]> = {
  NJ:  [1265, 1360, 1535, 1740, 2005, "Contact Us"],
  MAN: [1440, 1535, 1710, 1915, 2180, "Contact Us"]
};

