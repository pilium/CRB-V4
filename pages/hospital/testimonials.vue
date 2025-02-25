<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
		commonArticle
				template(v-slot:title)
					h1.article__title Отзывы пациентов
				template(v-slot:text)
					.article__text
						.container
							ul.testimonials(v-for="item in data" :key="item.id")
								li
									blockquote.testimonials__block
										p {{ item.description }}
										footer
											cite.testimonials__cite
												span.testimonials__name {{ item.name }}
												span.testimonials__date {{ timeNormalize(item.date) }}
</template>

<script setup>
// const config = useRuntimeConfig()
const { data } = await useAsyncData('reviews', () => queryCollection('reviews').select('description','meta').all(), {
  transform: data => data.map(item => ({
	description: item.description,
	name: item.meta.name,
	date: item.meta.date
}))
})
// const { data } = await useAsyncData('reviews', () => DB.listDocuments(config.public.API_BASE_ID, config.public.DB_TESTIMONIALS) )

console.log(data);


function timeNormalize(value) {
	if (!value) {
		return '';
	}

	return value.toLocaleString('ru', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
}
const labels = {
	last: 'Отзывы пациентов',
}

useSeoMeta({
  title: 'Отзывы пациентов',
  ogTitle: 'Отзывы пациентов',
  description: 'Отзывы пациентов о ЦРБ волгодонского района',
  ogDescription: 'Отзывы пациентов о ЦРБ волгодонского района'
})

</script>

<style lang="scss" scoped>
.testimonials {
	&__block {
		position: relative;
		margin: 0 auto 3rem;
		border-left: 4px solid var(--color-border);
		padding: 0 8px;
		color: var(--color-text);

		@media screen and (min-width: 768px) {
			border-left: 8px solid var(--color-border);
			padding: 16px 32px 16px 72px;

			&::before {
				content: "\201C";
				position: absolute;
				left: 8px;
				top: -8px;
				font-family: Arial, sans-serif;
				font-size: 4em;
				color: var(--color-main);
			}
		}
	}

	&__cite {
		display: block;
		margin-top: 16px;
		font-size: 16px;
		line-height: 1.8em;
	}

	&__name {
		display: inline-block;
		font-weight: 700;
		color: #000;
	}

	&__date {
		margin-left: 8px;
		font-weight: 400;
		font-style: italic;
	}
}

</style>
