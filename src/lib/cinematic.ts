export const CINE_FRAME_COUNT = 169;
const prefix = process.env.NODE_ENV === "development" ? "" : "/ordomind.novaveraai";
export const cineFramePath = (n: number) =>
  `${prefix}/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  { id: "b1", show: 0.1, hide: 0.3, label: "01 — Input", quote: "Natural language becomes a schedule.", speaker: "OrdoMind", film: "ENGINE — 2026" },
  { id: "b2", show: 0.35, hide: 0.55, label: "02 — Sync", quote: "Priorities and dependencies tracked instantly.", speaker: "Nova Vera AI", film: "CORE — 2026" },
  { id: "b3", show: 0.6, hide: 0.8, label: "03 — Output", quote: "A perfect, actionable time plan.", speaker: "OrdoMind", film: "SCHEDULING — 2026" },
];
