// pricingData.ts — Regalis Realty Media, 2026. Source of truth for both markets.
// All values verbatim from the approved price sheets. Do not change any number or copy.

export type Market = 'nj' | 'mh';

export const sharedPricing = {
  sizeHeaders: [ "≤1,500 sq ft", "1,500–2,500", "2,500–3,500", "3,500–4,500", "4,500–5,500", "5,500+" ],
  enhancements: [
    { name: "Virtual Staging", desc: "Furnish empty rooms so buyers can picture the life. 4-pack $120 · 8-pack $220.", priceText: "$35 / photo" },
    { name: "Virtual Twilight", desc: "Transform a daytime exterior into a golden-hour glow.", priceText: "$35 / photo" },
    { name: "Object / Clutter Removal", desc: "Simple clutter & small objects — bins, cars, personal items. +$7 each beyond 5. Complex removals that need a specialist: $35/photo.", priceText: "$35 / 5 photos" },
    { name: "Grass / Lawn Replacement", desc: "Simple green-up of a patchy or dormant lawn. +$7 each beyond 5. Full/complex replacement that needs a specialist: $35/photo.", priceText: "$35 / 5 photos" },
    { name: "Virtual Renovation", desc: "Show the potential — updated finishes, per scene.", priceText: "$30 / scene" },
    { name: "Same-Day Photo Delivery", desc: "Edited gallery back the same day.", priceText: "$35" },
    { name: "Rush Video Delivery", desc: "Editor Cut rushed for $150, Signature Film for $400. Photo-to-Video, Single-Take & Basic already deliver next day.", priceText: "$150–$400" }
  ],
  enhancementsNote: "Bundle & save — on Virtual Twilight & Virtual Renovation: 5+ photos 15% off · 10+ 25% off · whole gallery (20+) 35% off. Virtual Staging uses its own 4-/8-pack rates above; same-day & rush delivery are flat fees.",
  plans: {
    note: "Floor plan sizing is based on total scanned area — all drawn space including basement, garage, attic, deck and porches, not living area alone. Homes over 5,500 sq ft are quoted individually. Delivered next day up to 5,000 sq ft; larger homes up to 3-5 days.",
    headers: [ "Service", "≤1,500", "1,500–2,500", "2,500–3,500", "3,500–4,500", "4,500–5,500", "5,500+" ],
    rows: [
      { service: "2D Floor Plan", desc: "Clear bird's-eye layout of the home.", prices: [ 75, 99, 119, 145, 175, "custom" ] },
      { service: "3D Floor Plan", desc: "Three-dimensional layout. Includes the 2D plan.", prices: [ 189, 219, 259, 299, 345, "custom" ] },
      { service: "Zillow 3D Interactive Tour", desc: "Immersive virtual walkthrough with interactive floor plan.", prices: [ 150, 179, 209, 245, 289, "custom" ] }
    ]
  },
  growthEngine: {
    eyebrow: "For agents & teams ready to scale",
    headline: "Stop posting. Start building.",
    lede: "The Agent Growth Engine is a 90-day system that builds your brand, produces your content, runs your ads, and fills your calendar with qualified leads. We handle the strategy, the shoots, the campaigns and the optimization — all you do is show up.",
    phases: [
      { days: "Days 1–30", title: "Build the Brand", desc: "Marketing strategy, profile optimization, and your first content shoot — 10 professional videos." },
      { days: "Days 31–60", title: "Create the Content", desc: "A second shoot, a managed content calendar, and ad creatives produced for lead generation." },
      { days: "Days 61–90", title: "Turn On the Leads", desc: "Third shoot, Facebook & Instagram campaigns launched, weekly optimization, and sales frameworks delivered." }
    ],
    ctaLabel: "Book your free strategy call",
    ctaHref: "https://branding.regalisrealtymedia.com/",
    sub: "Tailored to your market & goals · 45-minute call, no commitment · Pricing scoped on the call."
  },
  volumeMemberIncludes: "Every membership includes: rate locked all quarter · priority scheduling · member rates on every add-on.",
  volumeMemberRates: "Member add-on rates: object removal & grass $25 / 5 photos · virtual staging & twilight $25 / photo · virtual renovation $25 · 10% off video, aerial & branding. (Member rates don't stack with bundle discounts.)"
} as const;

const sharedVideoNote = "Scripted videos: standard runtime is up to 75 seconds. Final script is due 3 business days before the shoot, with a quick pre-production call to lock timing and lines. Runtime beyond 75 sec adds +$75 for every 30 seconds over — e.g. a 135-sec film is +$150 — and extends turnaround. Late scripts or a skipped call: revisions are billable and any overage fees applied at delivery are final.";

export const pricingData = {
  nj: {
    packagesIntro: "Bundled to save money and decisions. Each includes full interior & exterior HDR coverage scaled to the property. MLS-ready, with a free listing website.",
    packages: [
      { tier: "I", name: "Essentials", tag: null, for: "Clean, MLS-ready coverage. Best for condos, starter homes & rentals.", includes: [ "Full interior & exterior HDR photos", "2D floor plan", "2 virtual twilight images", "Free listing website" ], prices: [239, 299, 379, 459, 549, "custom"] },
      { tier: "II", name: "Showcase Essential", tag: "Zillow Showcase", for: "Everything a Zillow Showcase listing requires — and a Zillow boost for every other listing.", includes: [ "Full interior & exterior HDR photos", "Zillow 3D Home tour", "Zillow interactive floor plan", "2D floor plan (MLS)", "Free listing website" ], prices: [359, 429, 519, 629, 739, "custom"] },
      { tier: "III", name: "Showcase Plus", tag: null, for: "Photo, video & 3D coverage without aerial. Best for standard listings that want a cinematic video.", includes: [ "Full interior & exterior HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [589, 679, 779, 889, 999, "custom"] },
      { tier: "IV", name: "Deluxe", tag: "Best Value", for: "The complete listing package. Best for most single-family homes.", includes: [ "Full interior & exterior HDR photos", "Basic cinematic video", "Drone photos & aerial video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [719, 809, 909, 1019, 1139, "custom"] },
      { tier: "V", name: "Brand Boost", tag: null, for: "Sell the home and grow your name. Best for agents building a personal brand.", includes: [ "Full interior & exterior HDR photos", "Editor Cut video (you on camera)", "Drone photos & aerial video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [869, 989, 1109, 1229, 1359, "custom"] },
      { tier: "VI", name: "Signature Showcase", tag: "Premier", for: "Cinematic, full-production showcase. Best for luxury & flagship listings.", includes: [ "Full interior & exterior HDR photos", "Signature Film", "Drone photos & aerial video", "3D floor plan (incl. 2D)", "Zillow 3D tour", "4 virtual twilight images", "Free listing website" ], prices: [1239, 1379, 1519, 1659, 1809, "custom"] }
    ],
    photographyIntro: "Full HDR coverage, inside and out. Complete set scaled to the property — no caps, no per-photo fees. Typically 25–50 images.",
    photography: [
      { size: "≤1,500", price: 179 },
      { size: "1,500–2,500", price: 219 },
      { size: "2,500–3,500", price: 279 },
      { size: "3,500–4,500", price: 339 },
      { size: "4,500–5,500", price: 399 },
      { size: "5,500+", price: "custom" }
    ],
    video: [
      { name: "Photo-to-Video", desc: "Your existing photos animated into a polished property video. No shoot needed — fast and affordable for social and listing sites. Next-day delivery.", priceText: "$125" },
      { name: "Single-Take Walkthrough", desc: "One continuous vertical walkthrough on a single lens and gimbal. Fast-paced and scroll-stopping, built for Instagram & TikTok. Property-focused — no agent on camera. Next-day delivery.", priceText: "$200" }, 
      { name: "iPhone Reel", desc: "Shot on iPhone and cut into a fast vertical reel — multiple clips edited for Instagram, TikTok & Reels, ready for you to post. Add an on-camera agent intro & outro +$100. Next-day delivery.", priceText: "$200" },
      { name: "Basic Cinematic", desc: "Multi-shot capture with cinematic pacing, color and music. A considered, property-focused listing video that feels produced, not rushed. Horizontal only; no agent on camera. Next-day delivery.", priceText: "$350" },
      { name: "Editor Cut", desc: "Premium editing from our senior editor — layered transitions, refined color grade, sound design and crisp upscaling, plus an on-camera agent feature so you're in the story. One video, your choice of reel (vertical) or horizontal — best for reels. Delivery in 2–3 days.", priceText: "$550" },
      { name: "Signature Film", desc: "Our flagship — shot and edited in-house with the full cinema kit: lighting, stabilization, integrated aerials and an on-camera agent feature. A bold, high-end cinematic film that sets the listing (and your brand) apart. Delivered in your choice of horizontal or social (vertical) format — one polished film, not a second cut. Delivery in 3–5 days.", priceText: "from $850" },
    ],
    videoNote: sharedVideoNote,
    aerialIntro: "Licensed Part-107 pilots. Show the lot, the location and the lifestyle from above.",
    aerial: [
      { name: "Drone Photos", desc: "Up to 12 aerial stills showcasing the lot, location & surroundings.", priceText: "$199" },
      { name: "Aerial Drone Video", desc: "Cinematic aerial footage highlighting the property & its setting.", priceText: "$250" },
      { name: "Drone Photo + Video", desc: "Stills and motion in one flight — best aerial value.", priceText: "$299" },
      { name: "Drone Add-On", desc: "Added to a photo or video shoot.", priceText: "+$75" }
    ],
    aerialNote: "FAA Part 107 licensed & insured. Aerial photo counts are a maximum, not a guarantee — the delivered number depends on the property, airspace and flight conditions; the price is fixed whether a flight yields the full count or fewer.",
    branding: [
      { name: "30 minutes", desc: "1 outfit, 1 location. A focused branding mini — polished and ready for your profile, signage & signature.", priceText: "from $495" },
      { name: "60 minutes", desc: "2–3 outfits, 1 location. Headshots plus environmental & lifestyle images — a full brand library.", priceText: "from $895" },
      { name: "120+ minutes", desc: "Multiple outfits, 1–3 locations. A complete personal-brand production with full styling direction.", priceText: "from $1,795" }
    ],
    brandingNote: "1:1 personal-branding session — full edited gallery, scaled to session length, with styling direction. Hair & makeup can be arranged on request (billed separately). Teammate from $350. Backdrop +$75; studio session quoted.",
    volume: {
      unit: "Every program listing includes full interior & exterior HDR coverage, a 2D floor plan, a Zillow 3D interactive tour, and a free listing website — for homes up to 3,500 sq ft, delivered next-day. Add video, drone or branding at locked member rates. Homes over 3,500 sq ft add $100 per 1,000 sq ft.",
      tiers: [
        { name: "Team", commit: "8+ listings / quarter", rate: "$349", feature: false },
        { name: "Studio", commit: "20+ listings / quarter", rate: "$319", feature: true },
        { name: "Brokerage", commit: "40+ listings / quarter", rate: "from $289", feature: false }
      ]
    },
    brandContent: {
      intro: "Your brand is your greatest leverage. Recurring content, team headshots and neighborhood films that sell you — not just the listing.",
      headshotDay: { session: "$200 session", perAgent: "$95 / agent", note: "5-agent minimum. Extra retouched finals +$50 each. Groups of 40+ quoted at a volume rate. Client provides the location; studio option quoted." },
      contentBatch: [
        { name: "5 videos", priceText: "$900", desc: "Five short-form talking-head videos in one session — you on camera, captions, two-camera setup." },
        { name: "8 videos", priceText: "$1,290", desc: "Eight videos in one session — a month-plus of content at a lower per-video rate." },
        { name: "10 videos", priceText: "$1,490", desc: "Ten videos in one session — best per-video value." }
      ],
      contentBatchNote: "30–45 sec each (60 max), captions & two-camera included, soft light for face. One location included; B-roll at nearby locations +$100 each (3 max). Script & topics due with a prep call 3 business days ahead. Client provides background/location.",
      communityVideo: { 
        film: { name: "Community Film", priceText: "$750", desc: "Up to 2 minutes — aerials, B-roll and you on camera showcasing a neighborhood or area. Evergreen marketing you reuse all year. Additional areas +$100 each." }, 
        reel: [ 
          { name: "Community Reel", priceText: "from $550", desc: "A 35–60 sec vertical reel of a neighborhood or area, built for social — you on camera, captions included." }, 
          { name: "Reel 3-pack", priceText: "$1,485", save: "$165", desc: "Three neighborhood reels — cover the areas you farm." }, 
          { name: "Reel 5-pack", priceText: "$2,325", save: "$425", desc: "Five neighborhood reels — a full farming series." } 
        ], 
        note: "Reels delivered vertical for social; films horizontal. Captions included. Client provides a script or key talking points; prep call 3–5 days ahead. Aerials subject to weather, airspace & FAA conditions." 
      }
    }
  },
  mh: {
    packagesIntro: "Bundled to save money and decisions. Each includes full interior & exterior HDR coverage scaled to the property. MLS-ready, with a free listing website.",
    packages: [
      { tier: "I", name: "Essentials", tag: null, for: "Clean, MLS-ready coverage. Best for condos, co-ops & rentals.", includes: [ "Full interior & exterior HDR photos", "2D floor plan", "2 virtual twilight images", "Free listing website" ], prices: [319, 379, 459, 539, 629, "custom"] },
      { tier: "II", name: "Showcase Essential", tag: "Zillow Showcase", for: "Everything a Zillow Showcase listing requires — and a Zillow boost for every other listing.", includes: [ "Full interior & exterior HDR photos", "Zillow 3D Home tour", "Zillow interactive floor plan", "2D floor plan (MLS)", "Free listing website" ], prices: [439, 509, 599, 709, 819, "custom"] },
      { tier: "III", name: "Showcase Plus", tag: null, for: "Photo, video & 3D coverage without aerial. Best for standard listings that want a cinematic video.", includes: [ "Full interior & exterior HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [669, 759, 859, 969, 1079, "custom"] },
      { tier: "IV", name: "Deluxe", tag: "Best Value", for: "The complete listing package. Best for most condos & townhouses.", includes: [ "Full interior & exterior HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [799, 889, 989, 1099, 1219, "custom"] },
      { tier: "V", name: "Brand Boost", tag: null, for: "Sell the home and grow your name. Best for agents building a personal brand.", includes: [ "Full interior & exterior HDR photos", "Editor Cut video (you on camera)", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], prices: [949, 1069, 1189, 1309, 1439, "custom"] },
      { tier: "VI", name: "Signature Showcase", tag: "Premier", for: "Cinematic, full-production showcase. Best for luxury & flagship listings.", includes: [ "Full interior & exterior HDR photos", "Signature Film", "3D floor plan (incl. 2D)", "Zillow 3D tour", "4 virtual twilight images", "Free listing website" ], prices: [1319, 1459, 1599, 1739, 1889, "custom"] }
    ],
    photographyIntro: "Full HDR coverage, inside and out. Complete set scaled to the property — no caps, no per-photo fees. Typically 25–50 images.",
    photography: [
      { size: "≤1,500", price: 249 },
      { size: "1,500–2,500", price: 299 },
      { size: "2,500–3,500", price: 349 },
      { size: "3,500–4,500", price: 409 },
      { size: "4,500–5,500", price: 469 },
      { size: "5,500+", price: "custom" }
    ],
    video: [
      { name: "Photo-to-Video", desc: "Your existing photos animated into a polished property video. No shoot needed — fast and affordable for social and listing sites. Next-day delivery.", priceText: "$175" },
      { name: "Single-Take Walkthrough", desc: "One continuous vertical walkthrough on a single lens and gimbal. Fast-paced and scroll-stopping, built for Instagram & TikTok. Property-focused — no agent on camera. Next-day delivery.", priceText: "$275" }, 
      { name: "iPhone Reel", desc: "Shot on iPhone and cut into a fast vertical reel — multiple clips edited for Instagram, TikTok & Reels, ready for you to post. Add an on-camera agent intro & outro +$125. Next-day delivery.", priceText: "$275" },
      { name: "Basic Cinematic", desc: "Multi-shot capture with cinematic pacing, color and music. A considered, property-focused listing video that feels produced, not rushed. Horizontal only; no agent on camera. Next-day delivery.", priceText: "$450" },
      { name: "Editor Cut", desc: "Premium editing from our senior editor — layered transitions, refined color grade, sound design and crisp upscaling, plus an on-camera agent feature so you're in the story. One video, your choice of reel (vertical) or horizontal — best for reels. Delivery in 2–3 days.", priceText: "$675" },
      { name: "Signature Film", desc: "Our flagship — shot and edited in-house with the full cinema kit: lighting, stabilization, integrated aerials and an on-camera agent feature. A bold, high-end cinematic film that sets the listing (and your brand) apart. Delivered in your choice of horizontal or social (vertical) format — one polished film, not a second cut. Delivery in 3–5 days.", priceText: "from $1,025" },
    ],
    videoNote: sharedVideoNote,
    aerialIntro: "Licensed Part-107 pilots, fully NYC-permitted. A premium, advance-booking service most studios can't legally offer in Manhattan.",
    aerial: [
      { name: "Drone Photos", desc: "Up to 12 aerial stills showcasing the building, skyline & location.", priceText: "$350" },
      { name: "Aerial Drone Video", desc: "Cinematic aerial footage highlighting the property & its setting.", priceText: "$395" },
      { name: "Drone Photo + Video", desc: "Stills and motion in one flight — best aerial value.", priceText: "$525" },
      { name: "Drone Add-On", desc: "Added to a photo or video shoot, scheduled within the permit window.", priceText: "+$250" }
    ],
    aerialNote: "FAA Part 107 licensed & insured. Aerial photo counts are a maximum, not a guarantee — the delivered number depends on the building, airspace and flight conditions; the price is fixed whether a flight yields the full count or fewer.",
    branding: [
      { name: "30 minutes", desc: "1 outfit, 1 location. A focused branding mini — polished and ready for your profile, signage & signature.", priceText: "from $595" },
      { name: "60 minutes", desc: "2–3 outfits, 1 location. Headshots plus environmental & lifestyle images — a full brand library.", priceText: "from $1,095" },
      { name: "120+ minutes", desc: "Multiple outfits, 1–3 locations. A complete personal-brand production with full styling direction.", priceText: "from $2,250" }
    ],
    brandingNote: "1:1 personal-branding session — full edited gallery, scaled to session length, with styling direction. Hair & makeup can be arranged on request (billed separately). Teammate from $450. Backdrop +$75; studio session quoted.",
    volume: {
      unit: "Every program listing includes full interior & exterior HDR coverage, a 2D floor plan, a Zillow 3D interactive tour, and a free listing website — for homes up to 3,500 sq ft, delivered next-day. Add video, drone or branding at locked member rates. Homes over 3,500 sq ft add $100 per 1,000 sq ft.",
      tiers: [
        { name: "Team", commit: "8+ listings / quarter", rate: "$479", feature: false },
        { name: "Studio", commit: "20+ listings / quarter", rate: "$449", feature: true },
        { name: "Brokerage", commit: "40+ listings / quarter", rate: "from $399", feature: false }
      ]
    },
    brandContent: {
      intro: "Your brand is your greatest leverage. Recurring content, team headshots and neighborhood films that sell you — not just the listing.",
      headshotDay: { session: "$250 session", perAgent: "$110 / agent", note: "5-agent minimum. Extra retouched finals +$50 each. Groups of 40+ quoted at a volume rate. Client provides the location; studio option quoted." },
      contentBatch: [
        { name: "5 videos", priceText: "$1,090", desc: "Five short-form talking-head videos in one session — you on camera, captions, two-camera setup." },
        { name: "8 videos", priceText: "$1,540", desc: "Eight videos in one session — a month-plus of content at a lower per-video rate." },
        { name: "10 videos", priceText: "$1,790", desc: "Ten videos in one session — best per-video value." }
      ],
      contentBatchNote: "30–45 sec each (60 max), captions & two-camera included, soft light for face. One location included; B-roll at nearby locations +$100 each (3 max). Script & topics due with a prep call 3 business days ahead. Client provides background/location.",
      communityVideo: { 
        film: { name: "Community Film", priceText: "$950", desc: "Up to 2 minutes — aerials, B-roll and you on camera showcasing a neighborhood or area. Evergreen marketing you reuse all year. Additional areas +$150 each." }, 
        reel: [ 
          { name: "Community Reel", priceText: "from $695", desc: "A 35–60 sec vertical reel of a neighborhood or area, built for social — you on camera, captions included." }, 
          { name: "Reel 3-pack", priceText: "$1,875", save: "$210", desc: "Three neighborhood reels — cover the areas you farm." }, 
          { name: "Reel 5-pack", priceText: "$2,950", save: "$525", desc: "Five neighborhood reels — a full farming series." } 
        ], 
        note: "Reels delivered vertical for social; films horizontal. Captions included. Client provides a script or key talking points; prep call 3–5 days ahead. Aerials subject to weather, airspace, FAA & NYC permitting." 
      }
    }
  }
} as const;
