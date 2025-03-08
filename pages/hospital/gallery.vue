<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Галерея
				template(v-slot:text)
					.article__text
						.container
							.tabs__gallery
								figure.tabs__gallery-item(v-for="image in images")
									img(:src='image' alt="Развитие системы оказания первичной медико-санитарной помощи")
</template>
<script setup>
const images = [
	'/media/gallery/756393560.jpg',
	'/media/gallery/769088457.jpg',
	'/media/gallery/739379080.jpg',
	'/media/gallery/787161243.jpg',
	'/media/gallery/733884061.jpg',
	'/media/gallery/605783613.jpg',
	'/media/gallery/689417807.jpg',
	'/media/gallery/718966061.jpg',
	'/media/gallery/732920343.jpg',
	'/media/gallery/711062681.jpg',
	'/media/gallery/605807621.jpg',
	'/media/gallery/665053308.jpg',
	'/media/gallery/662101805.jpg',
	'/media/gallery/529073431.jpg',
	'/media/gallery/492572588.jpg',
	'/media/gallery/507281922.jpg',
	'/media/gallery/495786529.jpg',
	'/media/gallery/477104107.jpg',
	'/media/gallery/492559495.jpg',
	'/media/gallery/439761294.jpg',
	'/media/gallery/456319313.jpg',
	'/media/gallery/40746878.jpg',
	'/media/gallery/237922410.jpg',
	'/media/gallery/995327686.jpg',
	'/media/gallery/422967397.jpg',
	'/media/gallery/979246918.jpg',
	'/media/gallery/401453987.jpg',
	'/media/gallery/847642311.jpg',
	'/media/gallery/168340098.jpg',
	'/media/gallery/886821255.jpg',
	'/media/gallery/866972617.jpg',
	'/media/gallery/233496063.jpg',
	'/media/gallery/788660044.jpg',
	'/media/gallery/112412883.jpg',
	'/media/gallery/809107557.jpg',
	'/media/gallery/866950540.jpg',
]
useSeoMeta({
  title: 'Галерея',
  ogTitle: 'Галерея',
  description: 'Галерея фото ЦРБ волгодонского района',
  ogDescription: 'Галерея фото ЦРБ волгодонского района'
})

const labels = {
	last: 'Галерея',
}
</script>
<style lang="scss" scoped>
.tabs__gallery {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	&-item {
		margin-bottom: 32px;
		width: 100%;

		img { height: 100%; }

		@media screen and (min-width: 992px) { width: 49%; }

		@media screen and (min-width: 1366px) { width: 24%; }
	}
}
</style>
