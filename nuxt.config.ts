// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/theme/variables.scss', '@/theme/index.scss'],
	modules: ['@nuxt/content', '@nuxt/image', '@nuxt/fonts', '@nuxt/icon'],
	image: {
		format: ['webp', 'avif'],
		densities: [1, 2],
	},
	fonts: {
		families: [
			{ name: 'Exo 2', provider: 'google' },
			{ name: 'Literata', provider: 'google' },
		]
	},
	icon: {
		customCollections: [
		  {
			prefix: 'my-icon',
			dir: './assets/icons'
		  },
		],
	},
	content: {
		preview: {
		  api: 'https://api.nuxt.studio'
		}
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true }
})
