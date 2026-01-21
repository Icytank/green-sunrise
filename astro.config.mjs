import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
	site: "https://www.yourwebsite.com", // update me!
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	i18n: {
		defaultLocale: "bg",
		locales: ["bg", "en"],
		routing: {
			prefixDefaultLocale: true,
			fallbackType: "redirect",
		},
	},
	image: {
		layout: "constrained",
	},
});
