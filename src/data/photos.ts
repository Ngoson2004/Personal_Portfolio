// Photography used across the site. Source files live in src/assets/photos and are
// web-sized copies of the originals in ~/Pictures/Portfolios (see scripts in the repo notes).
import type { ImageMetadata } from "astro";
import heroPortrait from "@/assets/photos/hero-portrait.jpg";
import clouds from "@/assets/photos/clouds.jpg";
import csiroPresenting from "@/assets/photos/csiro-presenting.jpg";
import csiroTeam from "@/assets/photos/csiro-team.jpg";
import csiroPoster from "@/assets/photos/csiro-poster.jpg";
import csiroLab from "@/assets/photos/csiro-lab.jpg";
import csiroStage from "@/assets/photos/csiro-stage.jpg";
import coast from "@/assets/photos/coast.jpg";
import rowing from "@/assets/photos/rowing.jpg";
import aquarium from "@/assets/photos/aquarium.jpg";
import hiking from "@/assets/photos/hiking.jpg";
import cafeReading from "@/assets/photos/cafe-reading.jpg";
import piano from "@/assets/photos/piano.jpg";
import basketball from "@/assets/photos/basketball.jpg";
import techtok from "@/assets/photos/techtok.jpg";
import boxing from "@/assets/photos/boxing.jpg";
import graduation from "@/assets/photos/graduation.jpg";
import aabwCrowd from "@/assets/photos/aabw-crowd.jpg";
import aabwTeam from "@/assets/photos/aabw-team.jpg";
import aabwCelebration from "@/assets/photos/aabw-celebration.jpg";
import aabwCall from "@/assets/photos/aabw-call.jpg";
import phdLetter from "@/assets/photos/phd-scholarship-letter.png";
import phdCard from "@/assets/photos/phd-student-card.jpg";
import phdNews from "@/assets/photos/phd-news.png";

// position: where the face sits in the source (x% y%). Only full-bleed photos are
// cropped; object-position keeps that point, and so the face, in frame at any ratio.
export type Photo = { src: ImageMetadata; alt: string; position?: string };

export const photos = {
  heroPortrait: { src: heroPortrait, alt: "Son Ngo smiling, holding a bouquet of flowers", position: "50% 7%" },
  clouds: { src: clouds, alt: "Son standing above a sea of clouds, looking out at the mountains", position: "37% 45%" },
  csiroPresenting: { src: csiroPresenting, alt: "Son presenting a workflow diagram at CSIRO alongside two supervisors", position: "46% 43%" },
  csiroTeam: { src: csiroTeam, alt: "Son with two CSIRO supervisors outside the CSIRO laboratory", position: "50% 55%" },
  csiroPoster: { src: csiroPoster, alt: "Son beside a research poster on AI for early drug discovery", position: "50% 40%" },
  csiroLab: { src: csiroLab, alt: "Son giving a thumbs up in a CSIRO laboratory", position: "18% 0%" },
  csiroStage: { src: csiroStage, alt: "Son presenting on stage at a CSIRO conference", position: "50% 40%" },
  coast: { src: coast, alt: "Son at a coastal lookout above the ocean", position: "51% 55%" },
  rowing: { src: rowing, alt: "Son rowing a small boat on a river", position: "50% 40%" },
  aquarium: { src: aquarium, alt: "Son in a blue-lit aquarium tunnel watching a ray swim past", position: "50% 50%" },
  cafeReading: { src: cafeReading, alt: "Son smiling at a cafe table with an open book and an iced coffee", position: "48% 26%" },
  hiking: { src: hiking, alt: "Son walking along a forest trail", position: "50% 60%" },
  piano: { src: piano, alt: "Son playing an upright piano", position: "60% 50%" },
  basketball: { src: basketball, alt: "Son dribbling a basketball past defenders in an indoor court", position: "50% 40%" },
  techtok: { src: techtok, alt: "A group of friends posing around a cafe table at a Techtok Melbourne meetup", position: "50% 50%" },
  boxing: { src: boxing, alt: "Son training on a heavy bag at the gym", position: "50% 40%" },
  graduation: { src: graduation, alt: "Son on the big screen receiving a degree at the Swinburne graduation ceremony", position: "50% 50%" },
  aabwCrowd: { src: aabwCrowd, alt: "Builders gathered for the group photo at Agentic AI Build Week", position: "50% 50%" },
  aabwTeam: { src: aabwTeam, alt: "The Syncnapse team working at their laptops during Agentic AI Build Week", position: "50% 40%" },
  aabwCelebration: { src: aabwCelebration, alt: "The Syncnapse team celebrating on a video call after the win", position: "50% 40%" },
  aabwCall: { src: aabwCall, alt: "The Syncnapse team on a video call, each with the Syncnapse logo as their background", position: "50% 50%" },
  phdLetter: { src: phdLetter, alt: "Monash University scholarship offer for a PhD in the Faculty of Information Technology, with personal details redacted", position: "50% 0%" },
  phdCard: { src: phdCard, alt: "Son's Monash University student card, with the student number and barcode removed", position: "50% 50%" },
  phdNews: { src: phdNews, alt: "National Tribune article: Monash-led projects awarded over $560K through the National Industry PhD Program, highlighting the Starbound Space Solutions project", position: "50% 0%" },
} satisfies Record<string, Photo>;

// Home hero slideshow, every photo full bleed. The LinkedIn portrait is only 800px
// square, so it is softer than the rest on large screens.
export const heroSlides: Photo[] = [
  photos.heroPortrait,
  photos.csiroPresenting,
  photos.clouds,
  photos.coast,
];

// About page collage: life outside work.
export const lifeCollage: Photo[] = [
  photos.csiroStage,
  photos.piano,
  photos.rowing,
  photos.techtok,
  photos.aquarium,
  photos.hiking,
  photos.basketball,
  photos.boxing,
];
