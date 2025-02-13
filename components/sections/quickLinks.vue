<script setup lang="ts">
	const { data } = await useAsyncData(() => queryCollection('index').first())
	const links = data?.value?.links;
</script>
<template lang="pug">
	.section.section--quick-links
		.panel.panel--noM
			ul.quick-links__list.fl.fw
				li.quick-links__list-item.fc(v-for="link in links" :key="link?.title")
					nuxt-link.quick-links__item.fc(:to="link?.to")
						.quick-links__icon
							<Icon :name="`my-icon:${link.icon}`" class="quick-links__svg-icon" :title="link?.title"/>
						.quick-links__info
							h3.quick-links__title {{link?.title}}
							span.quick-links__descr {{link?.descr}}
</template>
<style lang="scss" scoped>
	.quick-links {
		&__list-item {
			margin-bottom: 16px;
			border-bottom: 1px solid var(--color-border-light);
			padding: 8px;
			width: 100%;
			word-break: break-word;
			cursor: pointer;
			transition: background-color linear 0.3s;

			&:hover,
			&:focus {
				background-color: var(--color-bg-body);
			}

			&:last-child {
				margin-bottom: 0;
				border-bottom: none;
			}

			@media (min-width: 768px) {
				flex-direction: column;
				margin-bottom: 0;
				padding: 24px 40px;
				width: 50%;
				min-height: 280px;
				text-align: center;

				&:nth-child(odd) {
					border-right: 1px solid var(--color-border-light);
				}

				&:nth-child(7) {
					border-bottom: none;
				}
			}

			@media (min-width: 1200px) {
				width: 25%;

				&:nth-child(5),
				&:nth-child(6),
				&:nth-child(7),
				&:nth-child(8) {
					border-bottom: none;
				}

				&:nth-child(2),
				&:nth-child(6) {
					border-right: 1px solid var(--color-border-light);
				}
			}
		}

		&__item {
			> * {
				&:not(:last-child) {
					margin-right: 16px;

					@media (min-width: 768px) { margin-right: 0; }
				}
			}

			@media (min-width: 768px) { display: block; }
		}

		&__title {
			margin: 0 auto;
			color: var(--color-title);

			@media (min-width: 768px) { margin-bottom: 24px; }
		}

		&__descr {
			font-size: 0.87rem;
			color: var(--color-text);

			@media (min-width: 768px) { font-size: 1rem; }
		}

		&__icon {
			@media (min-width: 768px) { margin-bottom: 24px; }
		}

		&__svg-icon {
			display: inline;
			width: 40px;
			height: 40px;
			fill: var(--color-icon);

			@media  (min-width: 768px) {
				width: 72px;
				height: 72px;
			}
		}
	}
</style>
