---
title: Rebuilding this site
description: Why I replaced a template portfolio with a small Astro site, and what changed.
date: 2026-11-08
tags: [meta, web]
---

My old site was a fork of a popular React portfolio template. It did its job while I was a student, but it had drifted: it described me as a web developer, missed my current role, and pulled project cards live from the GitHub API on every visit.

The new version is built differently.

## Content first

Everything on the home page now comes from a handful of typed data files and Markdown case studies. Updating the site means editing a list, not a component. Every number on the page is backed by my resume or a public repository.

## Static by default

The site is built with [Astro](https://astro.build) and ships almost no JavaScript. The only scripts on the page toggle dark mode and close the mobile menu. Page transitions use the browser's built-in view transitions.

## Case studies over repo cards

Instead of a grid of repositories, each project now has a short case study: the problem, what I built and how it was measured. That format suits applied AI work, where the evaluation is often more interesting than the model.

## What's next

I'll use this blog for short posts on AI agents, evaluation and doing a PhD alongside industry work. You can follow along through the [RSS feed](/rss.xml).
