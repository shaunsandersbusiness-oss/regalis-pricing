// pricingData.ts — Regalis Realty Media, 2026. Source of truth for both markets.
// All values verbatim from the approved price sheets. Do not change any number or copy.

export type Market = 'nj' | 'mh';

export const sharedPricing = {
  "enhancements": [
    { "name": "Virtual Staging", "desc": "Furnish empty rooms so buyers can picture the life. 4-pack $120 · 8-pack $220.", "price": 35 },
    { "name": "Virtual Twilight", "desc": "Transform a daytime exterior into a golden-hour glow.", "price": 35 },
    { "name": "Object / Clutter Removal", "desc": "Simple clutter & small objects — bins, cars, personal items. +$7 each beyond 5. Complex removals that need a specialist: $35/photo.", "priceText": "$35 / 5 photos" },
    { "name": "Grass / Lawn Replacement", "desc": "Simple green-up of a patchy or dormant lawn. +$7 each beyond 5. Full/complex replacement that needs a specialist: $35/photo.", "priceText": "$35 / 5 photos" },
    { "name": "Virtual Renovation", "desc": "Show the potential — updated finishes, per scene.", "price": 30 },
    { "name": "Same-Day Photo Delivery", "desc": "Edited gallery back the same day.", "price": 35 },
    { "name": "Rush Video Delivery", "desc": "Editor Cut rushed for $150, Signature Film for $400. Photo-to-Video, Single-Take & Basic already deliver next day.", "priceText": "$150–$400" }
  ],
  "enhancementsNote": "Bundle & save — on Virtual Twilight & Virtual Renovation: 5+ photos 15% off · 10+ 25% off · whole gallery (20+) 35% off. Virtual Staging uses its own 4-/8-pack rates above; same-day & rush delivery are flat fees.",
  "plans": {
    "note": "Floor plan sizing is based on total scanned area — all drawn space including basement, garage, attic, deck and porches, not living area alone. Homes over 7,500 sq ft are quoted individually. Delivered next day up to 5,000 sq ft; larger homes 3–5 days.",
    "headers": [ "Service", "Up to 2,500 sq ft", "2,500–4,000", "4,000–5,000", "5,000–7,500", "7,500+ sq ft" ],
    "rows": [
      { "service": "2D Floor Plan", "desc": "Clear bird's-eye layout of the home.", "prices": [ 75, 99, 129, 169, "custom" ] },
      { "service": "3D Floor Plan", "desc": "Three-dimensional layout. Includes the 2D plan.", "prices": [ 189, 225, 265, 335, "custom" ] },
      { "service": "Zillow 3D Interactive Tour", "desc": "Immersive virtual walkthrough with interactive floor plan.", "prices": [ 150, 185, 225, 295, "custom" ] }
    ]
  },
  "growthEngine": {
    "eyebrow": "For agents & teams ready to scale",
    "headline": "Stop posting. Start building.",
    "lede": "The Agent Growth Engine is a 90-day system that builds your brand, produces your content, runs your ads, and fills your calendar with qualified leads. We handle the strategy, the shoots, the campaigns and the optimization — all you do is show up.",
    "phases": [
      { "days": "Days 1–30", "title": "Build the Brand", "desc": "Marketing strategy, profile optimization, and your first content shoot — 10 professional videos." },
      { "days": "Days 31–60", "title": "Create the Content", "desc": "A second shoot, a managed content calendar, and ad creatives produced for lead generation." },
      { "days": "Days 61–90", "title": "Turn On the Leads", "desc": "Third shoot, Facebook & Instagram campaigns launched, weekly optimization, and sales frameworks delivered." }
    ],
    "ctaLabel": "Book your free strategy call",
    "ctaHref": "https://branding.regalisrealtymedia.com/",
    "sub": "Tailored to your market & goals · 45-minute call, no commitment · Pricing scoped on the call."
  },
  "volumeMemberIncludes": "Every membership includes: rate locked all quarter · priority scheduling · member rates on every add-on.",
  "volumeMemberRates": "Member add-on rates: virtual staging & twilight $25 · object removal $5 · grass replacement $5 · virtual renovation $25 · 10% off video, aerial & branding. (Member rates don't stack with bundle discounts.)"
} as const;

const sharedVideoNote = "Scripted videos: standard runtime is up to 75 seconds. Final script is due 3 business days before the shoot, with a quick pre-production call to lock timing and lines. Runtime beyond 75 sec adds +$75 for every 30 seconds over — e.g. a 135-sec film is +$150 — and extends turnaround. Late scripts or a skipped call: revisions are billable and any overage fees applied at delivery are final.";

export const pricingData = {
  "nj": {
    "extraPhotoRate": 5,
    "packagesIntro": "Bundled to save money and decisions. Each includes up to 25 HDR photos — add more on each card. MLS-ready, with a free listing website. Flat prices cover homes up to 2,500 sq ft; the size add-on on each card applies above that.",
    "packages": [
      { "tier": "I", "name": "Essentials", "price": 219, "tag": null, "for": "Clean, MLS-ready coverage. Best for condos, starter homes & rentals.", "includes": [ "Up to 25 HDR photos", "2D floor plan", "2 virtual twilight images", "Free listing website" ], "size": "Over 2,500 sq ft: +$24 up to 4,000 · +$54 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$60 · up to 60 +$120" },
      { "tier": "II", "name": "Showcase Essential", "price": 369, "tag": "Zillow Showcase", "for": "Everything a Zillow Showcase listing requires — and a Zillow boost for every other listing.", "includes": [ "Up to 25 HDR photos", "Zillow 3D Home tour", "Zillow interactive floor plan", "2D floor plan (MLS)", "Free listing website" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$60 · up to 60 +$120" },
      { "tier": "III", "name": "Showcase Plus", "price": 599, "tag": null, "for": "Photo, video & 3D coverage without aerial. Best for standard listings that want a cinematic video.", "includes": [ "Up to 25 HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$60 · up to 60 +$120" },
      { "tier": "IV", "name": "Deluxe", "price": 729, "tag": "Best Value", "for": "The complete listing package. Best for most single-family homes.", "includes": [ "Up to 40 HDR photos", "Basic cinematic video", "Up to 10 aerial drone photos", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 60 +$60" },
      { "tier": "V", "name": "Brand Boost", "price": 879, "tag": null, "for": "Sell the home and grow your name. Best for agents building a personal brand.", "includes": [ "Up to 40 HDR photos", "Editor Cut video (you on camera)", "Up to 10 aerial drone photos", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 60 +$60" },
      { "tier": "VI", "name": "Signature Showcase", "price": 1249, "tag": "Premier", "for": "Cinematic, full-production showcase. Best for luxury & flagship listings.", "includes": [ "Up to 60 HDR photos", "Signature Film", "Drone photos & aerial video", "3D floor plan (incl. 2D)", "Zillow 3D tour", "4 virtual twilight images" ], "size": "Over 2,500 sq ft: +$70 up to 4,000 · +$150 up to 6,000 · custom above 6,000", "morePhotos": "More photos: $5 per photo beyond 60" }
    ],
    "photography": [
      { "name": "Up to 25 photos", "desc": "Condos, co-ops, starter homes & most standard listings.", "price": 189 },
      { "name": "Up to 40 photos", "desc": "Larger single-family homes with full detail coverage.", "price": 230 },
      { "name": "Up to 60 photos", "desc": "Estate-level interior & grounds.", "price": 290 },
      { "name": "Additional photos", "desc": "$5 per image over your tier — capped at the next package, so you never pay more than the tier above.", "price": 5, "unit": "each" }
    ],
    "video": [
      { "name": "Photo-to-Video", "desc": "Your existing photos animated into a polished property video. No shoot needed — fast and affordable for social and listing sites. Next-day delivery.", "price": 125 },
      { "name": "Single-Take Walkthrough", "desc": "One continuous vertical walkthrough on a single lens and gimbal. Fast-paced and scroll-stopping, built for Instagram & TikTok. Property-focused — no agent on camera. Next-day delivery.", "price": 200 }, { "name": "iPhone Reel", "desc": "Shot on iPhone and cut into a fast vertical reel — multiple clips edited for Instagram, TikTok & Reels, ready for you to post. Add an on-camera agent intro & outro +$100. Next-day delivery.", "price": 200 },
      { "name": "Basic Cinematic", "desc": "Multi-shot capture with cinematic pacing, color and music. A considered, property-focused listing video that feels produced, not rushed. Horizontal only; no agent on camera. Next-day delivery.", "price": 350 },
      { "name": "Editor Cut", "desc": "Premium editing from our senior editor — layered transitions, refined color grade, sound design and crisp upscaling, plus an on-camera agent feature so you're in the story. One video, your choice of reel (vertical) or horizontal — best for reels. Delivery in 2–3 days.", "price": 550 },
      { "name": "Signature Film", "desc": "Our flagship — shot and edited in-house with the full cinema kit: lighting, stabilization, integrated aerials and an on-camera agent feature. A bold, high-end cinematic film that sets the listing (and your brand) apart. Delivered in your choice of horizontal or social (vertical) format — one polished film, not a second cut. Delivery in 3–5 days.", "price": 850, "from": true },
      { "name": "Want to be on camera?", "desc": "An on-camera agent feature is included with Editor Cut & Signature Film — or add it to the iPhone Reel for +$100. Your face, your brand, in the listing video.", "note": "in 2 tiers" }
    ],
    "videoNote": sharedVideoNote,
    "aerialIntro": "Licensed Part-107 pilots. Show the lot, the location and the lifestyle from above.",
    "aerial": [
      { "name": "Drone Photos", "desc": "Up to 12 aerial stills showcasing the lot, location & surroundings.", "price": 199 },
      { "name": "Aerial Drone Video", "desc": "Cinematic aerial footage highlighting the property & its setting.", "price": 275 },
      { "name": "Drone Photo + Video", "desc": "Stills and motion in one flight — best aerial value.", "price": 349 },
      { "name": "Drone Add-On", "desc": "Added to a photo or video shoot.", "price": 75, "unit": "add" }
    ],
    "aerialNote": "Aerial photo counts are a maximum, not a guarantee — the delivered number depends on the property, airspace and flight conditions; the price is fixed whether a flight yields the full count or fewer.",
    "branding": [
      { "name": "30 minutes", "desc": "1 outfit, 1 location. A focused branding mini — polished and ready for your profile, signage & signature.", "price": 495, "from": true },
      { "name": "60 minutes", "desc": "2–3 outfits, 1 location. Headshots plus environmental & lifestyle images — a full brand library.", "price": 895, "from": true },
      { "name": "120+ minutes", "desc": "Multiple outfits, 1–3 locations. A complete personal-brand production with full styling direction.", "price": 1795, "from": true }
    ],
    "brandingNote": "1:1 personal-branding session — full edited gallery delivered, scaled to session length, with styling direction. Hair & makeup can be arranged on request (billed separately). Have a teammate? Add them from $350. Shot on location; backdrop add-on +$75; studio session quoted per booking.",
    "volume": {
      "unit": "Every program listing includes up to 30 HDR photos, a 2D floor plan, a Zillow 3D interactive tour, and a free listing website — for homes up to 5,000 sq ft, delivered next-day. Add video, drone or branding at locked member rates. Photos beyond 30 are $5 each; homes over 5,000 sq ft are quoted separately.",
      "tiers": [
        { "name": "Team", "commit": "8+ listings / quarter", "rate": 329, "feature": false },
        { "name": "Studio", "commit": "20+ listings / quarter", "rate": 299, "feature": true },
        { "name": "Brokerage", "commit": "40+ listings / quarter", "rate": 269, "feature": false, "from": true }
      ]
    },
    "brandContent": {
      "intro": "Your brand is your greatest leverage. Recurring content, team headshots and neighborhood films that sell you \u2014 not just the listing.",
      "headshotDay": { "session": 200, "perAgent": 95, "note": "5-agent minimum. Extra retouched finals +$25 each. Groups of 40+ quoted at a volume rate. Client provides the location; studio option quoted." },
      "contentBatch": [
        { "name": "5 videos", "price": 900, "desc": "Five short-form talking-head videos in one session \u2014 you on camera, captions, two-camera setup." },
        { "name": "8 videos", "price": 1290, "desc": "Eight videos in one session \u2014 a month-plus of content at a lower per-video rate." },
        { "name": "10 videos", "price": 1490, "desc": "Ten videos in one session \u2014 best per-video value." }
      ],
      "contentBatchNote": "30\u201345 sec each (60 max), captions & two-camera included, soft light for face. One location included; B-roll at nearby locations +$100 each (3 max). Script & topics due with a prep call 3 business days ahead. Client provides background/location.",
      "communityVideo": { "film": { "name": "Community Film", "price": 750, "extraLocation": 100, "desc": "Up to 2 minutes \u2014 aerials, B-roll and you on camera showcasing a neighborhood or area. Evergreen marketing you reuse all year. Additional areas +$100 each." }, "reel": [ { "name": "Community Reel", "price": 550, "from": true, "desc": "A 35\u201360 sec vertical reel of a neighborhood or area, built for social \u2014 you on camera, captions included." }, { "name": "Reel 3-pack", "price": 1485, "save": 165, "desc": "Three neighborhood reels \u2014 cover the areas you farm." }, { "name": "Reel 5-pack", "price": 2325, "save": 425, "desc": "Five neighborhood reels \u2014 a full farming series." } ], "note": "Reels delivered vertical for social; films horizontal. Captions included. Client provides a script or key talking points; prep call 3\u20135 days ahead. Aerials subject to weather, airspace & FAA conditions." }
    }
  },
  "mh": {
    "extraPhotoRate": 5,
    "packagesIntro": "Bundled to save money and decisions. Each includes up to 25 HDR photos — add more on each card. MLS-ready, with a free listing website. Flat prices cover homes up to 2,500 sq ft; the size add-on on each card applies above that.",
    "packages": [
      { "tier": "I", "name": "Essentials", "price": 349, "tag": null, "for": "Clean, MLS-ready coverage. Best for condos, co-ops & rentals.", "includes": [ "Up to 25 HDR photos", "2D floor plan", "2 virtual twilight images", "Free listing website" ], "size": "Over 2,500 sq ft: +$24 up to 4,000 · +$54 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$70 · up to 60 +$150" },
      { "tier": "II", "name": "Showcase Essential", "price": 499, "tag": "Zillow Showcase", "for": "Everything a Zillow Showcase listing requires — and a Zillow boost for every other listing.", "includes": [ "Up to 25 HDR photos", "Zillow 3D Home tour", "Zillow interactive floor plan", "2D floor plan (MLS)", "Free listing website" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$70 · up to 60 +$150" },
      { "tier": "III", "name": "Showcase Plus", "price": 779, "tag": null, "for": "Photo, video & 3D coverage without aerial. Best for standard listings that want a cinematic video.", "includes": [ "Up to 25 HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images", "Free listing website" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 40 +$70 · up to 60 +$150" },
      { "tier": "IV", "name": "Deluxe", "price": 909, "tag": "Best Value", "for": "The complete listing package. Best for most condos & townhouses.", "includes": [ "Up to 40 HDR photos", "Basic cinematic video", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 60 +$80" },
      { "tier": "V", "name": "Brand Boost", "price": 1089, "tag": null, "for": "Sell the home and grow your name. Best for agents building a personal brand.", "includes": [ "Up to 40 HDR photos", "Editor Cut video (you on camera)", "2D floor plan", "Zillow 3D tour", "2 virtual twilight images" ], "size": "Over 2,500 sq ft: +$59 up to 4,000 · +$129 up to 6,000 · custom above 6,000", "morePhotos": "More photos: up to 60 +$80" },
      { "tier": "VI", "name": "Signature Showcase", "price": 1739, "tag": "Premier", "for": "Cinematic, full-production showcase. Best for luxury & flagship listings.", "includes": [ "Up to 60 HDR photos", "Signature Film", "3D floor plan (incl. 2D)", "Zillow 3D tour", "4 virtual twilight images" ], "size": "Over 2,500 sq ft: +$70 up to 4,000 · +$150 up to 6,000 · custom above 6,000", "morePhotos": "More photos: $5 per photo beyond 60" }
    ],
    "photography": [
      { "name": "Up to 25 photos", "desc": "Studios, 1–2BR condos & co-ops — most standard listings.", "price": 299 },
      { "name": "Up to 40 photos", "desc": "Larger condos, townhouses & full-floor units.", "price": 369 },
      { "name": "Up to 60 photos", "desc": "Penthouses, brownstones & estate-level homes.", "price": 449 },
      { "name": "Additional photos", "desc": "$5 per image over your tier — capped at the next package, so you never pay more than the tier above.", "price": 5, "unit": "each" }
    ],
    "video": [
      { "name": "Photo-to-Video", "desc": "Your existing photos animated into a polished property video. No shoot needed — fast and affordable for social and listing sites. Next-day delivery.", "price": 175 },
      { "name": "Single-Take Walkthrough", "desc": "One continuous vertical walkthrough on a single lens and gimbal. Fast-paced and scroll-stopping, built for Instagram & TikTok. Property-focused — no agent on camera. Next-day delivery.", "price": 275 }, { "name": "iPhone Reel", "desc": "Shot on iPhone and cut into a fast vertical reel — multiple clips edited for Instagram, TikTok & Reels, ready for you to post. Add an on-camera agent intro & outro +$125. Next-day delivery.", "price": 275 },
      { "name": "Basic Cinematic", "desc": "Multi-shot capture with cinematic pacing, color and music. A considered, property-focused listing video that feels produced, not rushed. Horizontal only; no agent on camera. Next-day delivery.", "price": 450 },
      { "name": "Editor Cut", "desc": "Premium editing from our senior editor — layered transitions, refined color grade, sound design and crisp upscaling, plus an on-camera agent feature so you're in the story. One video, your choice of reel (vertical) or horizontal — best for reels. Delivery in 2–3 days.", "price": 675 },
      { "name": "Signature Film", "desc": "Our flagship — shot and edited in-house with the full cinema kit: lighting, stabilization, integrated aerials and an on-camera agent feature. A bold, high-end cinematic film that sets the listing (and your brand) apart. Delivered in your choice of horizontal or social (vertical) format — one polished film, not a second cut. Delivery in 3–5 days.", "price": 1025, "from": true },
      { "name": "Want to be on camera?", "desc": "An on-camera agent feature is included with Editor Cut & Signature Film — or add it to the iPhone Reel for +$125. Your face, your brand, in the listing video.", "note": "in 2 tiers" }
    ],
    "videoNote": sharedVideoNote,
    "aerialIntro": "Licensed Part-107 pilots, fully NYC-permitted. A premium, advance-booking service most studios can't legally offer in Manhattan.",
    "aerial": [
      { "name": "Drone Photos", "desc": "Up to 12 aerial stills showcasing the building, skyline & location.", "price": 350 },
      { "name": "Aerial Drone Video", "desc": "Cinematic aerial footage highlighting the property & its setting.", "price": 395 },
      { "name": "Drone Photo + Video", "desc": "Stills and motion in one flight — best aerial value.", "price": 525 },
      { "name": "Drone Add-On", "desc": "Added to a photo or video shoot, scheduled within the permit window.", "price": 250, "unit": "add" }
    ],
    "aerialNote": "Aerial photo counts are a maximum, not a guarantee — the delivered number depends on the building, airspace and flight conditions; the price is fixed whether a flight yields the full count or fewer.",
    "branding": [
      { "name": "30 minutes", "desc": "1 outfit, 1 location. A focused branding mini — polished and ready for your profile, signage & signature.", "price": 595, "from": true },
      { "name": "60 minutes", "desc": "2–3 outfits, 1 location. Headshots plus environmental & lifestyle images — a full brand library.", "price": 1095, "from": true },
      { "name": "120+ minutes", "desc": "Multiple outfits, 1–3 locations. A complete personal-brand production with full styling direction.", "price": 2250, "from": true }
    ],
    "brandingNote": "1:1 personal-branding session — full edited gallery delivered, scaled to session length, with styling direction. Hair & makeup can be arranged on request (billed separately). Have a teammate? Add them from $450. Shot on location; backdrop add-on +$75; studio session quoted per booking.",
    "volume": {
      "unit": "Every program listing includes up to 30 HDR photos, a 2D floor plan, a Zillow 3D interactive tour, and a free listing website — for homes up to 5,000 sq ft, delivered next-day. Add video, drone or branding at locked member rates. Photos beyond 30 are $5 each; homes over 5,000 sq ft are quoted separately.",
      "tiers": [
        { "name": "Team", "commit": "8+ listings / quarter", "rate": 479, "feature": false },
        { "name": "Studio", "commit": "20+ listings / quarter", "rate": 449, "feature": true },
        { "name": "Brokerage", "commit": "40+ listings / quarter", "rate": 399, "feature": false, "from": true }
      ]
    },
    "brandContent": {
      "intro": "Your brand is your greatest leverage. Recurring content, team headshots and neighborhood films that sell you \u2014 not just the listing.",
      "headshotDay": { "session": 250, "perAgent": 110, "note": "5-agent minimum. Extra retouched finals +$25 each. Groups of 40+ quoted at a volume rate. Client provides the location; studio option quoted." },
      "contentBatch": [
        { "name": "5 videos", "price": 1090, "desc": "Five short-form talking-head videos in one session \u2014 you on camera, captions, two-camera setup." },
        { "name": "8 videos", "price": 1540, "desc": "Eight videos in one session \u2014 a month-plus of content at a lower per-video rate." },
        { "name": "10 videos", "price": 1790, "desc": "Ten videos in one session \u2014 best per-video value." }
      ],
      "contentBatchNote": "30\u201345 sec each (60 max), captions & two-camera included, soft light for face. One location included; B-roll at nearby locations +$100 each (3 max). Script & topics due with a prep call 3 business days ahead. Client provides background/location.",
      "communityVideo": { "film": { "name": "Community Film", "price": 950, "extraLocation": 150, "desc": "Up to 2 minutes \u2014 aerials, B-roll and you on camera showcasing a neighborhood or area. Evergreen marketing you reuse all year. Additional areas +$150 each." }, "reel": [ { "name": "Community Reel", "price": 695, "from": true, "desc": "A 35\u201360 sec vertical reel of a neighborhood or area, built for social \u2014 you on camera, captions included." }, { "name": "Reel 3-pack", "price": 1875, "save": 210, "desc": "Three neighborhood reels \u2014 cover the areas you farm." }, { "name": "Reel 5-pack", "price": 2950, "save": 525, "desc": "Five neighborhood reels \u2014 a full farming series." } ], "note": "Reels delivered vertical for social; films horizontal. Captions included. Client provides a script or key talking points; prep call 3\u20135 days ahead. Aerials subject to weather, airspace, FAA & NYC permitting." }
    }
  }
} as const;
