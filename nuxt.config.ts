// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/image', '@nuxt/fonts'],
	image: {
		format: ['webp', 'avif'],
		densities: [1, 2],
	},
	fonts: {
		families: [
			{ name: 'Exo 2 Thin', provider: 'google' },
			{ name: 'Literata', provider: 'google' },
		]
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true }
})
