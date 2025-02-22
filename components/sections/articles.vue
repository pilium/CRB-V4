<template lang="pug">
	section.section.section--article
		.section__header
			h2.section__title Последние новости
			nuxt-link.link.link--section(to="/hospital/news" rel="noopener" target="blanc") Все новости
		.articles
			.articles__wrapper.fl.fw
				template(v-for="(item) in articles")
					<sectionsPosts :posts="item"/>
</template>

<script setup>
const { data: articles } = await useAsyncData('articles', () => queryCollection('articles').limit(4).all())


</script>

<style lang="scss">
.articles {
	&__wrapper {
		padding: 0 8px;

		> * {
			width: 100%;

			@media screen and (min-width: 768px) { width: 46%; }

			@media screen and (min-width: 1528px) { width: 23%; }
		}
	}
}
</style>
