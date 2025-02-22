<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('articles').path(route.path).first()
})

console.log(page.value.toc);
const labels = {
	last: page.value.title,
}
</script>

<template lang="pug">
	.inner-wrapper
		template(v-if="page")
			<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title {{ page.title }}
				template(v-slot:toc v-if="page.toc")
					commonToc(:data="page.toc.links")
				template(v-slot:text)
					.container
						ContentRenderer(v-if="page" :value="page")
</template>
