// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/image'],
	image: {
		format: ['webp', 'avif'],
		densities: [1, 2],
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true }
})
