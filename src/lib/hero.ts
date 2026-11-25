export const FRAME_COUNT = 169;
const prefix = process.env.NODE_ENV === "development" ? "" : "/ordomind.novaveraai";
export const framePath = (n: number) =>
  `${prefix}/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  { id: "d1", show: 0.1, hide: 0.3, quote: "Unstructured tasks, organized into a plan.", speaker: "OrdoMind Engine", film: "DETERMINISTIC — 2026" },
  { id: "d2", show: 0.35, hide: 0.55, quote: "Offline. Secure. No cloud required.", speaker: "Nova Vera AI", film: "PRODUCTIVITY — 2026" },
  { id: "d3", show: 0.6, hide: 0.8, quote: "Intelligence that organizes your time.", speaker: "OrdoMind", film: "SCHEDULING CORE — 2026" },
];
export const HERO_TEXT_FADE_END = 0.08;
