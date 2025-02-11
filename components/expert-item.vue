<template lang="pug">
	.expert__item(v-if="expert.edu")
		<img class="expert__img" :src="expert.src" :alt="expert.name"/>
		.expert__info
			span.expert__name  {{ expert.name }}
			.expert__info-item
				span.expert__info-title Должность
				span.expert__job {{ expert.job }}
			.expert__info-item
				span.expert__info-title Образование
				span.expert__edu {{ expert.edu }}
			.expert__info-item
				span.expert__info-title Последнее повышение
				span.expert__up {{ expert.up }}
			.expert__info-item(v-if="expert__cert")
				span.expert__info-title Сертификат
				span.expert__cert {{ expert.cert }}
			.expert__info-item
				span.expert__info-title Категория
				span.expert__category {{ expert.category }}
	.expert__item.expert__item--small(v-else="expert.edu")
		img.expert__img(:src="expert.src" :alt="expert.name")
		.expert__info
			span.expert__name  {{ expert.name }}
			.expert__info-item
				span.expert__info-title Должность
				span.expert__job {{ expert.job }}
</template>
<script setup>
defineProps({
	expert: {
		type: Object,
		default() {
			return {};
		},
	},
});
</script>
<style lang="scss">
.expert {
	margin-bottom: 40px;

	.article__title {
		position: relative;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: -8px;
			width: 100%;
			height: 4px;
			background-color: var(--color-bg-main);
		}
	}

	&__item {
		text-align: center;
		&:not(:last-child) { margin: 24px 0; }

		&--small {
			.expert__img {
				height: 280px;

				@media screen and (min-width: 1200px) { max-width: 20%; }
			}
		}

		@media screen and (min-width: 1200px) {
			display: flex;
			align-items: flex-start;
			text-align: left;
		}
	}

	&__info-item { margin-bottom: 16px; }

	&__img {
		height: 480px;
		object-fit: cover;
		object-position: top center;

		&--small { height: 280px; }

		@media screen and (min-width: 1200px) {
			margin-right: 40px;
			max-width: 40%;
		}
	}

	&__name {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		font-size: 2.5rem;
	}

	&__info-title {
		display: block;
		font-weight: 600;
		font-size: 1.375rem;
	}
}

</style>
