import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md'
    }),
	reviews: defineCollection({
		source: 'reviews/*.md',
		type: 'page',
	}),
    index: defineCollection({
      type: 'data',
      source: 'pages/**/*.yml',
      schema: z.object({
        links: z.array(z.string()),
        title: z.string(),
        address: z.string(),
        description: z.string(),
        zapis: z.array(z.string()),
        Gosuslugi: z.array(z.string())
      })
    })
  }
})
