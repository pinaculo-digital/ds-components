export type Color = (typeof colors)[number];
export type ColorName = Color["name"];

export const colors = [
  { name: "white", value: "#FFFFFF" },
  { name: "black", value: "#000000" },
  { name: "transparent", value: "transparent" },
  /* Neutral */
  { name: "neutral-0", value: "var(--color-neutral-0)" },
  { name: "neutral-50", value: "var(--color-neutral-50)" },
  { name: "neutral-100", value: "var(--color-neutral-100)" },
  { name: "neutral-200", value: "var(--color-neutral-200)" },
  { name: "neutral-300", value: "var(--color-neutral-300)" },
  { name: "neutral-400", value: "var(--color-neutral-400)" },
  { name: "neutral-500", value: "var(--color-neutral-500)" },
  { name: "neutral-600", value: "var(--color-neutral-600)" },
  { name: "neutral-700", value: "var(--color-neutral-700)" },
  { name: "neutral-800", value: "var(--color-neutral-800)" },
  { name: "neutral-900", value: "var(--color-neutral-900)" },
  { name: "neutral-950", value: "var(--color-neutral-950)" },

  /* Red */
  { name: "red-50", value: "var(--color-red-50)" },
  { name: "red-100", value: "var(--color-red-100)" },
  { name: "red-200", value: "var(--color-red-200)" },
  { name: "red-300", value: "var(--color-red-300)" },
  { name: "red-400", value: "var(--color-red-400)" },
  { name: "red-500", value: "var(--color-red-500)" },
  { name: "red-600", value: "var(--color-red-600)" },
  { name: "red-700", value: "var(--color-red-700)" },
  { name: "red-800", value: "var(--color-red-800)" },
  { name: "red-900", value: "var(--color-red-900)" },
  { name: "red-950", value: "var(--color-red-950)" },

  /* Orange */
  { name: "orange-50", value: "var(--color-orange-50)" },
  { name: "orange-100", value: "var(--color-orange-100)" },
  { name: "orange-200", value: "var(--color-orange-200)" },
  { name: "orange-300", value: "var(--color-orange-300)" },
  { name: "orange-400", value: "var(--color-orange-400)" },
  { name: "orange-500", value: "var(--color-orange-500)" },
  { name: "orange-600", value: "var(--color-orange-600)" },
  { name: "orange-700", value: "var(--color-orange-700)" },
  { name: "orange-800", value: "var(--color-orange-800)" },
  { name: "orange-900", value: "var(--color-orange-900)" },
  { name: "orange-950", value: "var(--color-orange-950)" },

  /* Yellow */
  { name: "yellow-50", value: "var(--color-yellow-50)" },
  { name: "yellow-100", value: "var(--color-yellow-100)" },
  { name: "yellow-200", value: "var(--color-yellow-200)" },
  { name: "yellow-300", value: "var(--color-yellow-300)" },
  { name: "yellow-400", value: "var(--color-yellow-400)" },
  { name: "yellow-500", value: "var(--color-yellow-500)" },
  { name: "yellow-600", value: "var(--color-yellow-600)" },
  { name: "yellow-700", value: "var(--color-yellow-700)" },
  { name: "yellow-800", value: "var(--color-yellow-800)" },
  { name: "yellow-900", value: "var(--color-yellow-900)" },
  { name: "yellow-950", value: "var(--color-yellow-950)" },

  /* Green */
  { name: "green-50", value: "var(--color-green-50)" },
  { name: "green-100", value: "var(--color-green-100)" },
  { name: "green-200", value: "var(--color-green-200)" },
  { name: "green-300", value: "var(--color-green-300)" },
  { name: "green-400", value: "var(--color-green-400)" },
  { name: "green-500", value: "var(--color-green-500)" },
  { name: "green-600", value: "var(--color-green-600)" },
  { name: "green-700", value: "var(--color-green-700)" },
  { name: "green-800", value: "var(--color-green-800)" },
  { name: "green-900", value: "var(--color-green-900)" },
  { name: "green-950", value: "var(--color-green-950)" },

  /* Teal */
  { name: "teal-50", value: "var(--color-teal-50)" },
  { name: "teal-100", value: "var(--color-teal-100)" },
  { name: "teal-200", value: "var(--color-teal-200)" },
  { name: "teal-300", value: "var(--color-teal-300)" },
  { name: "teal-400", value: "var(--color-teal-400)" },
  { name: "teal-500", value: "var(--color-teal-500)" },
  { name: "teal-600", value: "var(--color-teal-600)" },
  { name: "teal-700", value: "var(--color-teal-700)" },
  { name: "teal-800", value: "var(--color-teal-800)" },
  { name: "teal-900", value: "var(--color-teal-900)" },
  { name: "teal-950", value: "var(--color-teal-950)" },

  /* Sky */
  { name: "sky-50", value: "var(--color-sky-50)" },
  { name: "sky-100", value: "var(--color-sky-100)" },
  { name: "sky-200", value: "var(--color-sky-200)" },
  { name: "sky-300", value: "var(--color-sky-300)" },
  { name: "sky-400", value: "var(--color-sky-400)" },
  { name: "sky-500", value: "var(--color-sky-500)" },
  { name: "sky-600", value: "var(--color-sky-600)" },
  { name: "sky-700", value: "var(--color-sky-700)" },
  { name: "sky-800", value: "var(--color-sky-800)" },
  { name: "sky-900", value: "var(--color-sky-900)" },
  { name: "sky-950", value: "var(--color-sky-950)" },

  /* Blue */
  { name: "blue-50", value: "var(--color-blue-50)" },
  { name: "blue-100", value: "var(--color-blue-100)" },
  { name: "blue-200", value: "var(--color-blue-200)" },
  { name: "blue-300", value: "var(--color-blue-300)" },
  { name: "blue-400", value: "var(--color-blue-400)" },
  { name: "blue-500", value: "var(--color-blue-500)" },
  { name: "blue-600", value: "var(--color-blue-600)" },
  { name: "blue-700", value: "var(--color-blue-700)" },
  { name: "blue-800", value: "var(--color-blue-800)" },
  { name: "blue-900", value: "var(--color-blue-900)" },
  { name: "blue-950", value: "var(--color-blue-950)" },

  /* Purple */
  { name: "purple-50", value: "var(--color-purple-50)" },
  { name: "purple-100", value: "var(--color-purple-100)" },
  { name: "purple-200", value: "var(--color-purple-200)" },
  { name: "purple-300", value: "var(--color-purple-300)" },
  { name: "purple-400", value: "var(--color-purple-400)" },
  { name: "purple-500", value: "var(--color-purple-500)" },
  { name: "purple-600", value: "var(--color-purple-600)" },
  { name: "purple-700", value: "var(--color-purple-700)" },
  { name: "purple-800", value: "var(--color-purple-800)" },
  { name: "purple-900", value: "var(--color-purple-900)" },
  { name: "purple-950", value: "var(--color-purple-950)" },

  /* Pink */
  { name: "pink-50", value: "var(--color-pink-50)" },
  { name: "pink-100", value: "var(--color-pink-100)" },
  { name: "pink-200", value: "var(--color-pink-200)" },
  { name: "pink-300", value: "var(--color-pink-300)" },
  { name: "pink-400", value: "var(--color-pink-400)" },
  { name: "pink-500", value: "var(--color-pink-500)" },
  { name: "pink-600", value: "var(--color-pink-600)" },
  { name: "pink-700", value: "var(--color-pink-700)" },
  { name: "pink-800", value: "var(--color-pink-800)" },
  { name: "pink-900", value: "var(--color-pink-900)" },
  { name: "pink-950", value: "var(--color-pink-950)" },

  /* Alpha Red */
  { name: "alpha-red-10", value: "var(--color-alpha-red-10)" },
  { name: "alpha-red-16", value: "var(--color-alpha-red-16)" },
  { name: "alpha-red-24", value: "var(--color-alpha-red-24)" },

  /* Alpha Orange */
  { name: "alpha-orange-10", value: "var(--color-alpha-orange-10)" },
  { name: "alpha-orange-16", value: "var(--color-alpha-orange-16)" },
  { name: "alpha-orange-24", value: "var(--color-alpha-orange-24)" },

  /* Alpha Yellow */
  { name: "alpha-yellow-10", value: "var(--color-alpha-yellow-10)" },
  { name: "alpha-yellow-16", value: "var(--color-alpha-yellow-16)" },
  { name: "alpha-yellow-24", value: "var(--color-alpha-yellow-24)" },

  /* Alpha Green */
  { name: "alpha-green-10", value: "var(--color-alpha-green-10)" },
  { name: "alpha-green-16", value: "var(--color-alpha-green-16)" },
  { name: "alpha-green-24", value: "var(--color-alpha-green-24)" },

  /* Alpha Teal */
  { name: "alpha-teal-10", value: "var(--color-alpha-teal-10)" },
  { name: "alpha-teal-16", value: "var(--color-alpha-teal-16)" },
  { name: "alpha-teal-24", value: "var(--color-alpha-teal-24)" },

  /* Alpha Sky */
  { name: "alpha-sky-10", value: "var(--color-alpha-sky-10)" },
  { name: "alpha-sky-16", value: "var(--color-alpha-sky-16)" },
  { name: "alpha-sky-24", value: "var(--color-alpha-sky-24)" },

  /* Alpha Blue */
  { name: "alpha-blue-10", value: "var(--color-alpha-blue-10)" },
  { name: "alpha-blue-16", value: "var(--color-alpha-blue-16)" },
  { name: "alpha-blue-24", value: "var(--color-alpha-blue-24)" },

  /* Alpha Purple */
  { name: "alpha-purple-10", value: "var(--color-alpha-purple-10)" },
  { name: "alpha-purple-16", value: "var(--color-alpha-purple-16)" },
  { name: "alpha-purple-24", value: "var(--color-alpha-purple-24)" },

  /* Alpha Pink */
  { name: "alpha-pink-10", value: "var(--color-alpha-pink-10)" },
  { name: "alpha-pink-16", value: "var(--color-alpha-pink-16)" },
  { name: "alpha-pink-24", value: "var(--color-alpha-pink-24)" },

  /* Alpha Neutral */
  { name: "alpha-neutral-10", value: "var(--color-alpha-neutral-10)" },
  { name: "alpha-neutral-16", value: "var(--color-alpha-neutral-16)" },
  { name: "alpha-neutral-24", value: "var(--color-alpha-neutral-24)" },

  /* Alpha White */
  { name: "alpha-white-2", value: "var(--color-alpha-white-2)" },
  { name: "alpha-white-4", value: "var(--color-alpha-white-4)" },
  { name: "alpha-white-6", value: "var(--color-alpha-white-6)" },
  { name: "alpha-white-10", value: "var(--color-alpha-white-10)" },
  { name: "alpha-white-16", value: "var(--color-alpha-white-16)" },
  { name: "alpha-white-24", value: "var(--color-alpha-white-24)" },

  /* Alpha Black */
  { name: "alpha-black-2", value: "var(--color-alpha-black-2)" },
  { name: "alpha-black-4", value: "var(--color-alpha-black-4)" },
  { name: "alpha-black-6", value: "var(--color-alpha-black-6)" },
  { name: "alpha-black-10", value: "var(--color-alpha-black-10)" },
  { name: "alpha-black-16", value: "var(--color-alpha-black-16)" },
  { name: "alpha-black-24", value: "var(--color-alpha-black-24)" },
  { name: "alpha-black-32", value: "var(--color-alpha-black-32)" },
  { name: "alpha-black-40", value: "var(--color-alpha-black-40)" },
  { name: "alpha-black-50", value: "var(--color-alpha-black-50)" },
] as const;

export const colorsMap: Record<ColorName, Color> = colors.reduce(
  (acc, color) => {
    acc[color.name] = color;
    return acc;
  },
  {} as Record<ColorName, Color>
);

export function getColor<N extends ColorName>(name: N): Color {
  const found = colorsMap[name];
  if (!found) throw new Error(`Color "${name}" não encontrado`);
  return found;
}

export const dsColorsTokens = [
  {
    name: "primary",
    colors: [
      { name: "bg-primary-dark", value: "--color-neutral-950", white: true },
      { name: "bg-primary-darker", value: "--color-neutral-900", white: true },
      { name: "bg-primary-base", value: "--color-neutral-800", white: true },
      { name: "bg-primary-light", value: "--color-neutral-400", white: false },
      {
        name: "bg-primary-lighter",
        value: "--color-neutral-300",
        white: false,
      },
      {
        name: "bg-primary-alpha-4",
        value: "--color-alpha-neutral-4",
        white: false,
      },
      {
        name: "bg-primary-alpha-8",
        value: "--color-alpha-neutral-8",
        white: false,
      },
      {
        name: "bg-primary-alpha-10",
        value: "--color-alpha-neutral-10",
        white: false,
      },
      {
        name: "bg-primary-alpha-16",
        value: "--color-alpha-neutral-16",
        white: false,
      },
    ],
  },
  {
    name: "static",
    colors: [
      { name: "static-black", value: "--color-static-black", white: true },
      { name: "static-white", value: "--color-static-white", white: false },
    ],
  },
  {
    name: "background",
    colors: [
      { name: "bg-strong-950", value: "--color-neutral-950", white: true },
      { name: "bg-surface-800", value: "--color-neutral-800", white: true },
      { name: "bg-sub-300", value: "--color-neutral-300", white: false },
      { name: "bg-soft-200", value: "--color-neutral-200", white: false },
      { name: "bg-soft-100", value: "--color-neutral-100", white: false },
      { name: "bg-weak-50", value: "--color-neutral-50", white: false },
      { name: "bg-white-0", value: "--color-neutral-0", white: false },
    ],
  },
  {
    name: "text",
    colors: [
      { name: "text-strong-950", value: "--color-neutral-950", white: true },
      { name: "text-sub-600", value: "--color-neutral-600", white: false },
      { name: "text-soft-400", value: "--color-neutral-400", white: false },
      { name: "text-disabled-300", value: "--color-neutral-300", white: false },
      { name: "text-white-0", value: "--color-neutral-0", white: false },
    ],
  },
  {
    name: "stroke",
    colors: [
      { name: "stroke-strong-950", value: "--color-neutral-950", white: true },
      { name: "stroke-sub-300", value: "--color-neutral-300", white: false },
      { name: "stroke-soft-200", value: "--color-neutral-200", white: false },
      { name: "stroke-white-0", value: "--color-neutral-0", white: false },
    ],
  },
  {
    name: "icon",
    colors: [
      { name: "icon-strong-950", value: "--color-neutral-950", white: true },
      { name: "icon-sub-600", value: "--color-neutral-600", white: true },
      { name: "icon-sub-400", value: "--color-neutral-400", white: false },
      { name: "icon-disabled-300", value: "--color-neutral-300", white: false },
      { name: "icon-white-0", value: "--color-neutral-0", white: false },
    ],
  },
  {
    name: "state faded",
    colors: [
      { name: "faded-dark", value: "--color-neutral-950", white: true },
      { name: "faded-base", value: "--color-neutral-300", white: false },
      { name: "faded-light", value: "--color-neutral-200", white: false },
      { name: "faded-lighter", value: "--color-neutral-100", white: false },
    ],
  },
  {
    name: "state information",
    colors: [
      { name: "info-dark", value: "--color-blue-950", white: true },
      { name: "info-base", value: "--color-blue-500", white: false },
      { name: "info-light", value: "--color-blue-200", white: false },
      { name: "info-lighter", value: "--color-blue-50", white: false },
    ],
  },
  {
    name: "state warning",
    colors: [
      { name: "warning-dark", value: "--color-orange-950", white: true },
      { name: "warning-base", value: "--color-orange-500", white: false },
      { name: "warning-light", value: "--color-orange-200", white: false },
      { name: "warning-lighter", value: "--color-orange-50", white: false },
    ],
  },
  {
    name: "state error",
    colors: [
      { name: "error-dark", value: "--color-red-950", white: true },
      { name: "error-base", value: "--color-red-500", white: false },
      { name: "error-light", value: "--color-red-200", white: false },
      { name: "error-lighter", value: "--color-red-50", white: false },
    ],
  },
  {
    name: "state success",
    colors: [
      { name: "success-dark", value: "--color-green-950", white: true },
      { name: "success-base", value: "--color-green-500", white: false },
      { name: "success-light", value: "--color-green-200", white: false },
      { name: "success-lighter", value: "--color-green-50", white: false },
    ],
  },
  {
    name: "state away",
    colors: [
      { name: "away-dark", value: "--color-yellow-950", white: true },
      { name: "away-base", value: "--color-yellow-500", white: false },
      { name: "away-light", value: "--color-yellow-200", white: false },
      { name: "away-lighter", value: "--color-yellow-50", white: false },
    ],
  },
  {
    name: "state feature",
    colors: [
      { name: "feature-dark", value: "--color-purple-950", white: true },
      { name: "feature-base", value: "--color-purple-500", white: false },
      { name: "feature-light", value: "--color-purple-200", white: false },
      { name: "feature-lighter", value: "--color-purple-50", white: false },
    ],
  },
  {
    name: "state verified",
    colors: [
      { name: "verified-dark", value: "--color-sky-950", white: true },
      { name: "verified-base", value: "--color-sky-500", white: false },
      { name: "verified-light", value: "--color-sky-200", white: false },
      { name: "verified-lighter", value: "--color-sky-50", white: false },
    ],
  },
  {
    name: "state highlighed",
    colors: [
      { name: "highlighted-dark", value: "--color-pink-950", white: true },
      { name: "highlighted-base", value: "--color-pink-500", white: false },
      { name: "highlighted-light", value: "--color-pink-200", white: false },
      { name: "highlighted-lighter", value: "--color-pink-50", white: false },
    ],
  },
  {
    name: "state stable",
    colors: [
      { name: "stable-dark", value: "--color-teal-950", white: true },
      { name: "stable-base", value: "--color-teal-500", white: false },
      { name: "stable-light", value: "--color-teal-200", white: false },
      { name: "stable-lighter", value: "--color-teal-50", white: false },
    ],
  },
];

export const dsColors = [
  {
    name: "neutral",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 0],
  },
  {
    name: "red",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "orange",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "yellow",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "green",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "teal",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "sky",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "blue",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "purple",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
  {
    name: "pink",
    variations: [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
  },
];
