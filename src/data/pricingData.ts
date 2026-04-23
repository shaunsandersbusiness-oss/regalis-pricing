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
      editorCut:          450,
      signature_video:    750,
      agentBranding: 600,
      communitySpotlight: 600,
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
      editorCut:          525,
      signature_video:    825,
      agentBranding: 675,
      communitySpotlight: 675,
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
  NJ:  [820,  860,  945,  1055, 1195, "Contact Us"],
  MAN: [970,  1005, 1090, 1205, 1345, "Contact Us"]
};

export const PRESTIGE_ALC: Record<Market, (number | string)[]> = {
  NJ:  [965,  1010, 1110, 1240, 1405, "Contact Us"],
  MAN: [1140, 1185, 1285, 1415, 1580, "Contact Us"]
};

export const LEGACY_PRICES: Record<Market, (number | string)[]> = {
  NJ:  [1010, 1050, 1130, 1230, 1365, "Contact Us"],
  MAN: [1150, 1190, 1270, 1370, 1505, "Contact Us"]
};

export const LEGACY_ALC: Record<Market, (number | string)[]> = {
  NJ:  [1265, 1310, 1410, 1540, 1705, "Contact Us"],
  MAN: [1440, 1485, 1585, 1715, 1880, "Contact Us"]
};

