import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "@/data/site";
import { getNotes } from "@/lib/notes";

export async function GET(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: `${site.name}: Blog`,
    description: "Posts on AI agents, evaluation and applied machine learning.",
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: `/blog/${note.id}/`,
    })),
  });
}
