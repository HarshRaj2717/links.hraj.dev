// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Links | Harsh Raj";
export const SITE_DESCRIPTION =
  "Get all my socials here :D";
export const MY_NAME = "Harsh Raj";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
