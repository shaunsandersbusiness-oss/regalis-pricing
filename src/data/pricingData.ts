export type Market = 'NJ' | 'MAN';
export type TierIndex = 0 | 1 | 2 | 3 | 4;

export const TIERS = [
  "0–1,500 sqft",
  "1,501–3,500 sqft",
  "3,501–5,000 sqft",
  "5,001–7,000 sqft",
  "7,001–10,000 sqft"
];

export const PRICING_DATA = {
  NJ: {
    photography: {
      bronze: [170, 215, 275, 375, 465],
      twilight: [200, 225, 275, 325, 375],
      floorPlan: [75, 75, 125, 195, 275],
      threeDTour: [145, 145, 195, 255, 325],
      droneAddOn: 50,
      droneStandalone: 150
    },
    video: {
      quickTour: 150, // flat
      standard: [300, 365, 400, 475, 575],
      cinematic: [500, 560, 600, 685, 815],
      agentBranding: 600, // flat
      communitySpotlight: 500, // flat
      droneInVideo: 0 // Included in NJ
    },
    addOns: {
      virtualStaging: 15, // per photo
      virtualTwilight: 25, // per photo
      sameDayDelivery: 75,
      virtualRenovation: 30, // per scene
      listingWebsite: 150 // standalone, free with package
    },
    bundles: {
      silver: {
        raw: [245, 290, 400, 570, 740],
        discounted: [220, 260, 360, 515, 665]
      },
      gold: {
        raw: [440, 485, 645, 875, 1115],
        discounted: [395, 435, 580, 790, 1005]
      }
    },
    packages: {
      essential: [335, 375, 470, 610, 755], // 15% off
      signature: [750, 835, 995, 1250, 1545], // 20% off
      crownBranding: [1080, 1150, 1290, 1510, 1770], // 30% off
      crownStandard: [870, 985, 1150, 1425, 1755], // 30% off
      crownSpotlight: [1010, 1080, 1220, 1440, 1700] // 30% off
    }
  },
  MAN: {
    photography: {
      bronze: [245, 290, 350, 450, 540],
      twilight: [275, 300, 350, 400, 450],
      floorPlan: [75, 75, 125, 195, 275], // Same as NJ
      threeDTour: [145, 145, 195, 255, 325], // Same as NJ
      droneAddOn: 100,
      droneStandalone: 250
    },
    video: {
      quickTour: 225, // flat
      standard: [375, 440, 475, 550, 650],
      cinematic: [575, 635, 675, 760, 890],
      agentBranding: 675, // flat
      communitySpotlight: 575, // flat
      droneInVideo: 100 // Add-on in MAN
    },
    addOns: {
      virtualStaging: 15,
      virtualTwilight: 25,
      sameDayDelivery: 75,
      virtualRenovation: 30,
      listingWebsite: 150
    },
    bundles: {
      silver: {
        raw: [320, 365, 475, 645, 815],
        discounted: [290, 330, 430, 580, 735]
      },
      gold: {
        raw: [565, 610, 770, 1000, 1240],
        discounted: [510, 550, 695, 900, 1115]
      }
    },
    packages: {
      essential: [400, 440, 530, 675, 820], // 15% off
      signature: [910, 995, 1155, 1410, 1705], // 20% off
      crownBranding: [1270, 1345, 1485, 1705, 1965], // 30% off
      crownStandard: [1060, 1180, 1345, 1615, 1945], // 30% off
      crownSpotlight: [1200, 1275, 1415, 1635, 1895] // 30% off
    }
  }
};
