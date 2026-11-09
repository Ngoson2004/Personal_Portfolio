// Site motion, modelled on pda.archi: Lenis smooth scroll driven by the GSAP ticker,
// SplitText line-mask reveals, a first-visit loader that the page slides down over,
// and the scrubbed scroll choreography in scroll.ts.
// Everything here is skipped under prefers-reduced-motion; the page works without it.
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { DESKTOP, initScroll } from "./scroll";

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);
  // PDA's "gl.fastInOut": slow start, fast middle, long tail.
  CustomEase.create(
    "fio",
    "M0,0 C0.094,0.026 0.125,0.096 0.158,0.259 0.186,0.396 0.239,0.777 0.303,0.866 0.387,0.984 0.476,1 1,1",
  );

  const root = document.documentElement;
  const intro = root.classList.contains("intro");

  // Smooth scroll. Wheel input eases out over about a second, touch keeps its inertia.
  const lenis = new Lenis({
    easing: (t: number) => 1 - (1 - t) ** 5,
    syncTouch: true,
    syncTouchLerp: 0.07,
    touchInertiaExponent: 1.7,
    touchMultiplier: 1.2,
    anchors: true,
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.on("scroll", ScrollTrigger.update);

  // The full-screen menu scrolls on its own.
  const menu = document.querySelector<HTMLDialogElement>("#menu");
  if (menu) {
    new MutationObserver(() => (menu.open ? lenis.stop() : lenis.start())).observe(menu, {
      attributes: true,
      attributeFilter: ["open"],
    });
  }

  // First visit: the page drops over the loader, which sinks a little as it is covered.
  const loadedAt = performance.now();
  let introDone = () => {};
  const afterIntro = new Promise<void>((resolve) => (introDone = resolve));
  if (intro) {
    const page = document.querySelector<HTMLElement>("#page");
    const loader = document.querySelector<HTMLElement>("#loader");
    const header = document.querySelector<HTMLElement>("[data-header]");
    lenis.stop();
    gsap
      .timeline({
        delay: 0.4,
        defaults: { duration: 2, ease: "fio" },
        onComplete: () => {
          root.classList.remove("intro");
          gsap.set(page, { clearProps: "all" });
          gsap.set(header, { clearProps: "opacity" });
          lenis.start();
          introDone();
        },
      })
      .fromTo(page, { y: -innerHeight }, { y: 0 })
      .fromTo(loader, { yPercent: 0 }, { yPercent: 15 }, 0)
      .fromTo(header, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" }, 0.1)
      .call(() => root.classList.add("appeared"), undefined, 0.1);
  } else {
    introDone();
  }

  // Headings rise line by line out of a mask once they are 10% inside the viewport.
  // On desktop the projects band title is split and played by scroll.ts instead.
  const targets = [
    ...document.querySelectorAll<HTMLElement>("main h2, main h3.title, main .statement, main .split-me"),
  ].filter((el) => !(el.hasAttribute("data-feature-title") && matchMedia(DESKTOP).matches));
  const state = new Map<Element, { shown: boolean; tween?: gsap.core.Animation; early: boolean }>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const s = state.get(e.target)!;
        s.shown = true;
        io.unobserve(e.target);
        // Headings already on screen at load wait for the page transition, as on PDA.
        const atLoad = performance.now() - loadedAt < 700;
        s.tween?.delay(atLoad ? 0.35 + (intro ? 2.1 : 0) : 0).play();
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  const start = () => {
    targets.forEach((el) => {
      const s = { shown: false, tween: undefined as gsap.core.Animation | undefined, early: false };
      state.set(el, s);
      el.classList.add("split");
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.1,
            paused: !s.shown,
          });
          if (s.shown) tween.progress(1);
          s.tween = tween;
          return tween;
        },
      });
      io.observe(el);
    });
  };
  // Split after the webfonts load, or the line breaks are measured against fallback metrics.
  document.fonts.ready.then(start);

  // Scrubbed scroll scenes. They measure the page, so they wait for the fonts and for
  // the intro to stop moving #page.
  Promise.all([afterIntro, document.fonts.ready]).then(() => {
    initScroll();
    ScrollTrigger.refresh();
  });

  // Rules draw in from the left as they come into view.
  const rules = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-in");
        rules.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  document.querySelectorAll(".rule").forEach((el) => rules.observe(el));
}
