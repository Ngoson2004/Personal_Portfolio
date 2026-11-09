// Publishes the built site in ./dist to the GitHub Pages user-site repo.
// The source lives in Personal_Portfolio; the live site is served from Ngoson2004.github.io.
import ghpages from "gh-pages";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));

ghpages.publish(
  dist,
  {
    repo: "https://github.com/Ngoson2004/Ngoson2004.github.io.git",
    branch: "master",
    dotfiles: true, // ships .nojekyll so GitHub Pages serves the _astro/ folder
    message: "Deploy site",
  },
  (err) => {
    if (err) {
      console.error("Deploy failed:", err);
      process.exit(1);
    }
    console.log("Published to https://ngoson2004.github.io");
  },
);
