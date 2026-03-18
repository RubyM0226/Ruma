// frontend-mobile/theme.ts

export const COLORS = {
  // Core brand
  lavender: "#A083F9",
  lavenderDeep: "#5A1FC1",
  lavenderSoft: "#DED2FF",

  // Sage/willow
  sage: "#A7C7A1",
  sageSoft: "#DDEBDD",

  // Surfaces
  background: "#FFFBF9", // snow
  card: "rgba(255,255,255,0.72)", // “glass” base
  cardSolid: "#FFFFFF",

  // Text
  text: "#222222",
  textMuted: "rgba(34,34,34,0.55)",

  // Hairline borders
  border: "rgba(34,34,34,0.10)",
};

export const RADIUS = {
  sm: 14,
  md: 18,
  lg: 24,
  xl: 30,
  pill: 999,
};

export const SPACING = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  xxl: 32,
};

export const SHADOW = {
  soft: {
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
};