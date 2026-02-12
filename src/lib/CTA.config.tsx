export const CTA_CONFIG = {
  // Used in the Hero Section & Final Transformation Section
  // Focus: The ultimate outcome (Clarity & Starting)
  HomeCTA: {
    text: "Register Now at Just ₹99",
  },

  // Used in the Roadmap/Timer Section
  // Focus: Tangible value and immediate action
  RoadmapCTA: {
    text: "Register Now at Just ₹99",
  },

  // Used in the Sticky Bottom Bar
  // Focus: Urgency and FOMO (Fear Of Missing Out)
  FixedCountdownCTA: {
    text: "Register Now at Just ₹99",
  },

  // Used in the Student Results/Gallery Section
  // Focus: Emotional desire to replicate those results
  journeyCTA: {
    text: "Register Now at Just ₹99",
  },

  // Used only when the webinar has already started (Past Due)
  // Focus: Direct instruction to jump in immediately
  CounterTimerButton: {
    text: "Register Now at Just ₹99",
  },
} as const;

export type CTAKey = keyof typeof CTA_CONFIG;
