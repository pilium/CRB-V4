<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
	const { data } = await useAsyncData(() => queryCollection('index').first())
</script>
<template lang="pug">
	section.section.section--hero.flc
		.hero
			.container
				.hero__inner
					.hero__info
						h1.hero__title
							p.hero__subtitle {{ data?.meta?.hero?.subtitle }}
							span.hero__title {{ data?.meta?.hero?.title }}
							p.hero__subtitle {{ data?.meta?.hero?.subtitle1 }}
						.hero__btns
							a.btn.btn--border(:href="data?.zapis?.to" target="blanc") {{  data?.zapis?.label }}
							a.btn.btn--border(:href="data?.Gosuslugi?.to" rel="noopener noreferrer" target="blanc") {{ data?.Gosuslugi?.label }}
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
			font-size: 3rem;
			line-height: 1.2;

			@media screen and (min-width: 992px) { font-size: 5rem; }
		}

		&__subtitle {
			font-size: 1rem;

			@media screen and (min-width: 768px) {
				margin: 0 auto;
				max-width: 656px;
				font-size: 2rem;
			}
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
