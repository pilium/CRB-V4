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
							ul.testimonials(v-for="(item, key) in reviews" :key="key")
								li
									blockquote.testimonials__block
										p(v-html="item.text")
										footer
											cite.testimonials__cite
												span.testimonials__name {{ item.name }}
												span.testimonials__date {{ new Date(item.date)  | timeNormalize() }}
</template>

<script setup>
const labels = {
	last: 'Отзывы пациентов',
}

let reviews = await useFetch('https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/data/reviews.json');

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
