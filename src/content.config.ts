import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
			image: image(),
			imageAlt: z.string(),
			isFeatured: z.boolean().optional().default(false),
		}),
});

const machineryCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/machinery" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			model: z.string(),
			weight: z.string(),
			impactPower: z.string(),
			heroImage: image(),
			galleryImages: z.array(image()),
		}),
});

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string(),
			date: z.date(),
			category: z.string(),
			image: image(),
			imageAlt: z.string(),
		}),
});

const teamsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/teams" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			role: z.string(),
			certifications: z.array(z.string()),
			yearsExperience: z.number(),
			avatar: image(),
			verified: z.boolean().default(false),
		}),
});

export const collections = {
	blog: blogsCollection,
	machinery: machineryCollection,
	projects: projectsCollection,
	teams: teamsCollection,
};
