<template lang="pug">
	.inner-wrapper
		.container(style="text-align: center;")
			.not-found
				h1.not-found__title {{ error.statusCode }}
				h2(v-if="error.statusCode === 404") Страница не найдена
				h2(v-else) Произошла внутренняя ошибка
				p.not-found__text Страница по адресу
					span.not-found__mark.not-found__url
					|   не существует, перенесена или недоступна
				a.link.link--underline(href="/") Переход на главную
</template>

<script setup>
onMounted(() => {
	const currentLocation = window.location;
	const urlContainer = document.querySelector('.not-found__url');

	urlContainer.innerHTML = currentLocation;
})
defineProps({
	error: {
		type: Object,
		default() {
			return {};
		},
	},
});
</script>

<style lang="scss" scoped>
.not-found {
	position: relative;
	padding: 24px 0;
	font-size: 18px;
	line-height: 2rem;
	text-align: center;

	&__title {
		margin-top: 0;
		margin-bottom: 0;
		font-family: var(--font-family--bold);
		font-size: 124px;
		color: var(--color-main);

		@media screen and (min-width: 768px) { font-size: 72px; }
	}

	h2 {
		margin-top: 0;
		margin-bottom: 64px;
	}

	&__mark {
		padding: 0 8px;
		font-family: var(--font-family--bold);
		font-weight: bold;

		@media screen and (min-width: 768px) {
			padding: 8px;
			color: var(--color-main);
		}
	}

	@media screen and (min-width: 768px) { font-size: 24px; }
}

</style>
