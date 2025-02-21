<template lang="pug">
	article.posts.posts--full.f.fdc
		header.posts__header
			<NuxtImg loading="lazy" class="posts__img" :src="posts.meta.img" :alt="posts.meta.alt"/>
		.posts__content
			.posts__category.f.fdc
				.posts__category-info
					h3.posts__title {{ posts.title }}
					ul.posts__list
						li.posts__fullDate
							<Icon name="my-icon:date" class="posts__icon" title="иконка времени чтения"/>
							time {{  localeDate(posts.meta.dateOrigin) }}
						li.posts__readtime
							<Icon name="my-icon:read-time" class="posts__icon" title="иконка времени чтения"/>
							span {{ posts.meta.ttr }} мин
					p.posts__excert {{ posts.meta.descr }}
		button.btn.btn--pill(title="Перейти к посту" rel="noopener noreferrer" target="blanc") Перейти к статье
</template>

<script setup>
const props = defineProps({
	posts: {
    	type: Object,
    	required: true,
		default() {
			return {};
		},
  },
})

function localeDate(value) {
	const options = {month: 'long', day: 'numeric', year: 'numeric'};

	return new Date(value).toLocaleDateString('ru-RU', options);
}

	// methods: {
	// 	openPost() {
	// 		const id = this.posts.id.$oid;

	// 		this.$router.push({
	// 			name: 'hospital-post-id',
	// 			params: {
	// 				id,
	// 			},
	// 		});
	// 	},
	// },
</script>

<style lang="scss" scoped>
.posts {
	position: relative;
	margin-bottom: 32px;

	.btn--pill { margin-top: auto; }

	&__header {
		position: relative;
		overflow: hidden;
		width: 100%;
		max-width: 100%;
	}

	&__content {
		position: relative;
		flex: 1 0 100%;
		margin-left: 0;
		padding: 0;
		width: 100%;
		max-width: 100%;
		line-height: 2;
		text-align: left;
	}

	&__img {
		display: var(--isImgShow, block);
		height: 290px;
		object-fit: cover;
	}

	&__category {
		overflow: hidden;
		min-height: 304px;
	}

	&__category-inner {
		display: inline-block;
		vertical-align: top;
		padding: 8px 16px;
		font-weight: 400;
		font-size: 0.75rem;
		letter-spacing: 0.3px;
		text-transform: uppercase;
		color: var(--color-light);
		background-color: var(--color-bg-main);
	}

	&__title {
		min-height: 56px;
		font-size: 1.25em;
		line-height: 1.4;
		color: var(--color-link);
		cursor: pointer;

		&--big { font-size: 1.1rem; }
	}

	&__list {
		li {
			position: relative;
			display: inline-flex;
			align-items: center;
			padding-right: 8px;
			padding-left: 8px;
			font-size: 0.875rem;
			color: var(--color-text-helper);

			&:not(:first-child) {
				&::before {
					content: "|";
					position: absolute;
					left: -3px;
					top: -2px;
				}
			}

			> * {
				&:not(:last-child) { margin-right: 8px; }
			}

			&:first-child { padding-left: 0; }
		}
	}

	&__icon {
		width: 16px;
		height: 16px;
		fill: var(--color-text-helper);
	}

	&__excert {
		min-height: 104px;
		font-size: 0.875em;
	}

	&--full {
		.btn--pill { display: none; }

		.posts__header {
			@media screen and (min-width: 992px) {
				flex: 1 0 50%;
				margin-bottom: 0;
				max-width: 50%;
			}
		}

		.posts__content {
			@media screen and (min-width: 992px) {
				flex: 1 0 50%;
				margin-left: -16px;
				padding: 32px;
				max-width: 50%;
				box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
				text-align: center;
				background-color: var(--color-bg-light);
				transition: box-shadow 0.6s ease;
			}
		}

		.posts__category { min-height: auto; }

		@media screen and (min-width: 768px) {
			flex: 0 0 49%;
			min-height: auto;
		}

		@media screen and (min-width: 992px) {
			display: flex;
			align-items: center;
			flex: 0 0 100%;
			flex-direction: row;
			justify-content: center;
			max-width: 100%;
		}
	}
}
</style>
