// Scroll choreography after pda.archi, scrubbed by GSAP ScrollTrigger on top of Lenis.
// Like PDA it only runs on desktop: below 1024px, and under reduced motion (motion.ts
// never calls this), the page scrolls plainly.
//
//  - Projects band: the full-bleed photo opens out of an inset as it arrives, pins,
//    then shrinks into the first project's card while the list rises underneath.
//  - The statement above it recedes as the band comes up; the project list sinks and
//    fades as the section leaves.
//  - Any [data-parallax] frame drifts against the scroll (whole frames, never cropped).
//    The project rows do not use it, so each image stays level with its text.
//  - Inner-page heroes sink behind the page.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const DESKTOP = "(min-width: 1024px)";

// Position inside an ancestor through the offsetParent chain. Unlike
// getBoundingClientRect it ignores transforms, so it holds while tweens are running.
const offsetWithin = (el: HTMLElement, root: HTMLElement) => {
  let x = 0;
  let y = 0;
  let n: HTMLElement | null = el;
  while (n && n !== root) {
    x += n.offsetLeft;
    y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return { x, y };
};

export function initScroll() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.matchMedia().add(DESKTOP, () => {
    const cleanups = [feature(), parallax(), bleed()];
    return () => cleanups.forEach((c) => c?.());
  });
}

function feature() {
  const section = document.querySelector<HTMLElement>("[data-feature]");
  if (!section) return;
  const get = (name: string) => section.querySelector<HTMLElement>(`[data-feature-${name}]`)!;
  const wrap = get("wrap");
  const sticky = get("sticky");
  const clip = get("clip");
  const frame = get("frame");
  const zoom = get("zoom");
  const inner = get("inner");
  const overlay = get("overlay");
  const title = get("title");
  const band = get("band");
  const card = get("card");
  const listInner = get("list-inner");
  const veil = get("veil");
  const swap = section.querySelector<HTMLElement>("[data-feature-swap]");
  const row = card.closest<HTMLElement>("[data-feature-row]");

  // The first row has to sit still for the hand-off, and its card waits hidden.
  row?.classList.remove("reveal");
  card.style.opacity = "0";

  // Where the card will be when the pin ends, relative to the pinned screen, and the
  // transform that takes the full-screen cover there.
  let g = { x: 0, y: 0, s: 1, clip: "inset(0px 0px 0px 0px)" };
  const measure = () => {
    const W = sticky.offsetWidth;
    const H = sticky.offsetHeight;
    const cw = card.offsetWidth;
    const ch = card.offsetHeight;
    const c = offsetWithin(card, section);
    const w = offsetWithin(wrap, section);
    const left = c.x - w.x;
    const top = c.y - w.y - H; // the list starts one screen into the 200vh track
    // The cover keeps its own aspect and fills the screen like object-fit: cover,
    // so scaling it by cw / fw lands it exactly on the card's image.
    const fw = Math.max(W, (H * cw) / ch);
    const fh = (fw * ch) / cw;
    if (swap) Object.assign(swap.style, { width: `${fw}px`, height: `${fh}px`, left: `${(W - fw) / 2}px`, top: `${(H - fh) / 2}px` });
    g = {
      s: cw / fw,
      x: left + cw / 2 - W / 2,
      y: top + ch / 2 - H / 2,
      clip: `inset(${top}px ${W - left - cw}px ${H - top - ch}px ${left}px)`,
    };
  };
  measure();
  ScrollTrigger.addEventListener("refreshInit", measure);

  const split = SplitText.create(title, { type: "lines,words", mask: "lines", linesClass: "line" });

  // 1. Entry: the photo opens from a 2rem inset to full bleed and settles from 1.1x
  //    (scaled about the face, so the face never leaves the frame); the scrim comes
  //    up and the title lines rise.
  gsap.set(zoom, { transformOrigin: zoom.dataset.featureZoom || "50% 50%" });
  gsap
    .timeline({ scrollTrigger: { trigger: wrap, start: "top 90%", end: "top 10%", scrub: 0.3 } })
    .fromTo(clip, { clipPath: "inset(32px 32px 32px 32px)" }, { clipPath: "inset(0px 0px 0px 0px)", duration: 1 }, 0)
    .fromTo(zoom, { scale: 1.1 }, { scale: 1, duration: 1 }, 0)
    .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
    .from(split.lines, { yPercent: 110, duration: 0.5, ease: "power2.out", stagger: { amount: 0.2 } }, 0.5);

  // 2. Approach: the title trails the scroll as the band comes up. (PDA also drifts
  //    the photo; here that would push the face out of the top of the frame.)
  gsap.fromTo(
    title,
    { yPercent: -200 },
    { yPercent: 0, ease: "none", scrollTrigger: { trigger: wrap, start: "top bottom", end: "top top", scrub: true } },
  );

  // 3. Shrink: pinned for one screen, the frame clips down to the card while the cover
  //    scales into it. The photo dissolves to the project's cover early on, the title's
  //    words drop out in random order and the scrim lifts.
  const setTone = (tone: string) => {
    if (sticky.dataset.tone === tone) return;
    sticky.dataset.tone = tone;
    dispatchEvent(new Event("tone-change"));
  };
  const shrink = gsap.timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: () => `+=${sticky.offsetHeight}`,
      scrub: 0.3,
      invalidateOnRefresh: true,
    },
    onUpdate: () => {
      // Header ink: paper only while the photo still runs under the header line.
      const top = parseFloat(frame.style.clipPath.slice(6)) || 0;
      setTone(top < 34 ? "dark" : "light");
      // Hand-off: once the frame has landed, the real card takes over.
      const landed = shrink.progress() > 0.999;
      card.style.opacity = landed ? "" : "0";
      sticky.style.visibility = landed ? "hidden" : "";
    },
  });
  shrink
    .fromTo(frame, { clipPath: "inset(0px 0px 0px 0px)" }, { clipPath: () => g.clip, duration: 1, immediateRender: false }, 0)
    .fromTo(inner, { x: 0, y: 0, scale: 1 }, { x: () => g.x, y: () => g.y, scale: () => g.s, duration: 1, immediateRender: false }, 0)
    .to(band, { autoAlpha: 0, duration: 0.18 }, 0.05)
    .fromTo(overlay, { opacity: 1 }, { opacity: 0, duration: 0.7, immediateRender: false }, 0.3)
    .to(split.words, { autoAlpha: 0, duration: 0.02, stagger: { amount: 0.2, from: "random" } }, 0.1);

  // 4. The statement recedes under the band: it sinks, fades and steps back slightly.
  const statement = document.querySelector<HTMLElement>("[data-statement]");
  const statementInner = statement?.querySelector<HTMLElement>("[data-statement-inner]");
  if (statement && statementInner) {
    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: statement, start: "bottom bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      })
      .to(statementInner, { y: () => innerHeight * 0.6, duration: 1 }, 0)
      .to(statementInner, { autoAlpha: 0, duration: 0.6 }, 0.3)
      .to(statementInner, { scale: 0.98, transformOrigin: "50% 100%", duration: 0.35 }, 0.3);
  }

  // 5. Exit: the list sinks at half speed and fades into the page.
  gsap
    .timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: section, start: "bottom 85%", end: "bottom top", scrub: true, invalidateOnRefresh: true },
    })
    .to(listInner, { y: () => innerHeight * 0.5, duration: 1 }, 0)
    .fromTo(veil, { opacity: 0 }, { opacity: 1, duration: 0.45 }, 0.15);

  return () => {
    ScrollTrigger.removeEventListener("refreshInit", measure);
    split.revert();
    row?.classList.add("reveal");
    card.style.opacity = "";
    sticky.style.visibility = "";
    setTone("dark");
    if (swap) swap.removeAttribute("style");
  };
}

// PDA's card parallax (force 5): travel is a fifth of the frame's height, scaled down
// below 1440px. PDA slides the image inside a mask; here the whole frame moves, so the
// picture is never cropped.
function parallax() {
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const travel = () => (el.offsetHeight / 5) * (Math.min(innerWidth, 1440) / 1440);
    gsap.fromTo(
      el,
      { y: () => -travel() / 2 },
      {
        y: () => travel() / 2,
        ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      },
    );
  });
}

// Inner-page heroes: the photo sinks a quarter of its height as the page covers it.
function bleed() {
  document.querySelectorAll<HTMLElement>("[data-bleed]").forEach((section) => {
    // A wrapper, not the img: GSAP would fold the img's CSS scale animation into its transform.
    const media = section.querySelector("[data-bleed-media]");
    if (!media) return;
    gsap.to(media, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
  });
}
