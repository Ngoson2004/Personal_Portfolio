// Bold the figures in a sentence (percentages, money, counts, scores) so results
// read at a glance. Returns escaped HTML for set:html.
const escape = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const FIGURE = /(?:Top\s)?(?:US\$|\$)?\d(?:[\d,.]*\d)?(?:K|M)?\+?%?/g;

export function boldFigures(text: string, className = "font-bold text-fg"): string {
  let out = "";
  let last = 0;
  for (const m of text.matchAll(FIGURE)) {
    out += escape(text.slice(last, m.index)) + `<strong class="${className}">${escape(m[0])}</strong>`;
    last = m.index! + m[0].length;
  }
  return out + escape(text.slice(last));
}
