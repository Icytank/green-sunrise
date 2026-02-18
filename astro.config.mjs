import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    output: "static",
    adapter: cloudflare({
        imageService: "compile",
    }),
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


        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: "bg",
        locales: ["bg", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
            fallbackType: "redirect",
        },
    },
    image: {
        layout: "constrained",
    },
    build: {
        inlineStylesheets: "always",
    },
});