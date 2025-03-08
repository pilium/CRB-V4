// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			API_BASE_ID: process.env.APP_WRITE_ID,
			DB_ID: process.env.APP_DB_ID,
			DB_TESTIMONIALS: process.env.APP_TESTIMONIALS_COLLECTION,
			DB_feedback: process.env.APP_FEEDBACK_COLLECTION,
			DB_STORAGE: process.env.ARR_STORAGE
		},
	},
	css: ['@/theme/ui.css', '@/theme/variables.scss', '@/theme/index.scss'],
	modules: ['@nuxt/content', '@nuxt/fonts', "@nuxt/eslint", '@nuxt/ui', '@pinia/nuxt'],
	fonts: {
		experimental: {
			processCSSVariables: true,
		},
	},
	icon: {
		mode: 'svg',
		customCollections: [
			{
					prefix: 'my-icon',
					dir: './assets/icons'
			},
		],
	},
	nitro: {
		prerender: {
			routes: [
				'/'
			],
			crawlLinks: true
		}
	},
	content: {
		preview: {
			api: 'https://api.nuxt.studio'
		}
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false }
})
