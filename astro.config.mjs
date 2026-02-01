import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	site: "https://green-sunrise.net", // update me!
	integrations: [
		icon(),
		sitemap({
			filter: (page) => !page.includes("/admin"),
			changefreq: "weekly",
			priority: 0.7,
		}),
	],
	vite: {
		define: {
			'import.meta.env.PUBLIC_TURNSTILE_SITE_KEY': JSON.stringify(process.env.PUBLIC_TURNSTILE_SITE_KEY),
		},
	},
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
