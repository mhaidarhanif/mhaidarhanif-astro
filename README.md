# M Haidar Hanif Website based on 🚀 Astro + Tailwind CSS = AstroWind

This is the personal website of **M Haidar Hanif** made using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Based on the **AstroWind** template, a free and open-source template to make your website using **Astro + Tailwind CSS**. Ready to start a new project and design taking into account best practices. Originally from [onwidget/astrowind](https://github.com/onwidget/astrowind)

<img src="lighthouse-score.png" align="right"
  alt="AstroWind Lighthouse Score" width="100" height="358" />

[![License](https://img.shields.io/github/license/mhaidarhanif/mhaidarhanif-web?style=flat-square&color=eeeeee&labelColor=000000)](https://github.com/mhaidarhanif/mhaidarhanif-web/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/mhaidarhanif)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/mhaidarhanif/mhaidarhanif-web#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/mhaidarhanif/mhaidarhanif-web/badge.svg?style=flat-square)](https://snyk.io/test/github/mhaidarhanif/mhaidarhanif-web)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=flat-square&logo=eslint&logoColor=white)

## Features

- ✅ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)) supporting **Dark mode**.
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)), [**MDX** support](https://docs.astro.build/en/guides/integrations-guide/mdx/), **Categories & Tags**, **Social Share** buttons, ...
- ✅ **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)) and **Font optimization**.
- ✅ Generation of **project sitemap** based on your routes ([@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<details open>
<summary>Table of Contents</summary>

- [M Haidar Hanif Website based on 🚀 Astro + Tailwind CSS = AstroWind](#m-haidar-hanif-website-based-on--astro--tailwind-css--astrowind)
  - [Features](#features)
  - [Live](#live)
  - [Getting started](#getting-started)
    - [Project structure](#project-structure)
    - [Commands](#commands)
    - [Configuration](#configuration)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy to Netlify](#deploy-to-netlify)
      - [Deploy to Vercel](#deploy-to-vercel)
  - [Contributing](#contributing)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)

</details>

## Live

📌 [mhaidarhanif.com](https://mhaidarhanif.com)

<br>

## Getting started

### Project structure

Inside the template, you'll see the following folders and files:

```
/
├── data/
|   └── blog/
|       ├── post-slug-1.md
|       ├── post-slug-2.mdx
|       └── ...
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...categories]/
|   |   |   └── [category]/
|   |   |       └── [...page].astro
│   |   ├── [...tags]/
|   |   |   └── [tag]/
|   |   |       └── [...page].astro
│   |   ├── index.astro
|   |   ├── 404.astro
|   |   └-- rss.xml.js
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/mhaidarhanif/mhaidarhanif-web/tree/main)

> 🧑‍🚀 **Seasoned astronaut?** configure `config.mjs` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run ESLint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: 'Example',

  origin: 'https://example.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages, for example
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  title: 'Example - This is the homepage title of Example',
  description: 'This is the homepage description of Example',

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // or some value,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};
```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located in `dist` folder, which you can deploy the folder to any hosting service you prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mhaidarhanif/mhaidarhanif-web)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhaidarhanif%2Fastrowind)

<br>

## Contributing

If you have any idea, suggestions, or find any bugs, feel free to open a discussion, or an issue, or create a pull request. That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgments

Initially, the template was made by [onWidget](https://onwidget.com)](https://onwidget.com) and maintained by a community of [contributors](https://github.com/mhaidarhanif/mhaidarhanif-web/graphs/contributors).

## Notes

Keep `limax` at `^v2.1.0` because `v3.0.0` has breaking changes.

## License

Licensed under the Unlicense license — see the [LICENSE](LICENSE.md) file for details.
