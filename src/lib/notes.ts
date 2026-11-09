import { getCollection } from "astro:content";

/** Published notes, newest first. Drafts are visible in `astro dev` only. */
export async function getNotes() {
  const notes = await getCollection("notes", ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Rough reading time in minutes, at 220 words a minute. */
export function readingTime(body: string | undefined) {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
}
