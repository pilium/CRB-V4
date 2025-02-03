<script setup lang="ts">
	const { data } = await useAsyncData(() => queryCollection('index').first())
	console.log(data.value);

</script>
<template lang="pug">
	section.section.section--hero.flc
		.hero
			.container
				.hero__inner
					.hero__info
						h1.hero__title {{ data?.title }}
						.hero__btns
							a.btn.btn--border(href="https://zapisnapriemrostov.ru/?_lpu=75850063@mis_bars" rel="noopener noreferrer" target="blanc") Записаться на прием
							a.btn.btn--border(href="https://www.gosuslugi.ru/category/health" rel="noopener noreferrer" target="blanc") Запись через гос услуги
</template>
<style lang="scss" scoped>
	.hero {
		color: var(--color-light);

		&__info {
			position: relative;
			text-align: center;
		}

		&__title {
			margin-top: 0;
			font-size: 2rem;
			line-height: 30px;

			@media screen and (min-width: 768px) {
				font-size: 4.5rem;
				line-height: 1.2;
			}
		}

		&__subtitle {
			font-size: 1rem;

			@media screen and (min-width: 768px) {
				margin: 0 auto;
				max-width: 656px;
				font-size: 2rem;
			}
		}

		&__img {
			display: none;

			img { width: 875px; }

			@media screen and (min-width: 1200px) {
				position: absolute;
				right: 0;
				bottom: 0;
				display: var(--isImgShow, block);
				line-height: 0;
			}

			@media screen and (min-width: 1366px) { right: 7%; }
		}

		&__btns {
			.btn {
				padding: 24px;
				width: 100%;

				@media screen and (min-width: 992px) {
					padding: 24px 56px;
					width: auto;
				}
			}

			> * {
				&:not(:last-child) {
					margin-bottom: 8px;

					@media screen and (min-width: 992px) {
						margin-right: 16px;
						margin-bottom: 0;
					}
				}
			}
		}

		@media screen and (min-width: 1200px) { padding-bottom: 0; }
	}
</style>
