<template lang="pug">
	.main-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			section.section--posts.posts
				.container
					h1.article__title Последние новости
					.articles__wrapper.fl.fw
						template(v-for="(item) in news")
							<sectionsPosts :posts="item" :full="true"/>
</template>

<script setup>

const { data: news } = await useAsyncData('articles', () => queryCollection('articles').all())

const labels = {
	last: 'Новости',
}

useSeoMeta({
  title: 'Новости',
  ogTitle: 'Новости',
  description: 'Новости ЦРБ волгодонского района',
  ogDescription: 'Новости ЦРБ волгодонского района'
})
</script>

<style lang="scss">
	.posts__wrapper {
		margin-top: 16px;
	}
</style>
