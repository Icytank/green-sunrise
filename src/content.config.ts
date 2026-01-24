import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections



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
			isOwned: z.boolean().default(true),
		}),
});

// TerrainType enum for project classification
const TerrainType = z.enum(['Mountainous', 'Flat', 'Industrial', 'Roof-top']);

const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			capacityMW: z.number(), // MW capacity for numerical sorting/filtering
			location: z.string(),
			terrainType: TerrainType,
			date: z.date(),
			heroImage: image(),
			isVerified: z.boolean().default(false), // Toggles GS Stamp visibility
			scope: z.string().optional(), // New field for detailed scope of work
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
	machinery: machineryCollection,
	projects: projectsCollection,
	teams: teamsCollection,
};
