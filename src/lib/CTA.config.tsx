export const CTA_CONFIG = {
  // Used in the Hero Section & Final Transformation Section
  // Focus: The ultimate outcome (Clarity & Starting)
  HomeCTA: {
    text: "Yes! Give Me Clarity For ₹99",
  },

  // Used in the Roadmap/Timer Section
  // Focus: Tangible value and immediate action
  RoadmapCTA: {
    text: "Claim My Roadmap (₹99 Only)",
  },

  // Used in the Sticky Bottom Bar
  // Focus: Urgency and FOMO (Fear Of Missing Out)
  FixedCountdownCTA: {
    text: "Save My Spot Before Time Ends",
  },

  // Used in the Student Results/Gallery Section
  // Focus: Emotional desire to replicate those results
  journeyCTA: {
    text: "I Want to Draw Like This",
  },

  // Used only when the webinar has already started (Past Due)
  // Focus: Direct instruction to jump in immediately
  CounterTimerButton: {
    text: "Join Live Session Now",
  },
} as const;

export type CTAKey = keyof typeof CTA_CONFIG;
