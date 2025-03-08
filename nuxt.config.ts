// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
	head: {
		"title": 'ЦРБ Волгодонского района',
		"meta": [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
			{name: 'referrer', content: 'same-origin'},
			{name: 'theme-color', content: '#55c8c0'},
			{name: 'msapplication-TileColor', content: '#603cba'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{name: 'yandex-verification', content: '7c89cd9671c20987'},
			{name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
			{name: 'apple-mobile-web-app-title', content: 'ЦРБ Волгодонского района'},
		],
		"link": [
			{rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
			{rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
			{rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
			{rel: 'manifest', href: '/site.webmanifest'},
			{rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
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
