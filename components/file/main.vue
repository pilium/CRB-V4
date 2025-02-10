<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>

defineProps({
	fileData: {
		type: Object,
		required: true,
		default() {
			return {};
		},
	},
});

const isFileHintOpen = ref(false)

function toggle() {
	isFileHintOpen.value = !isFileHintOpen.value;
}
</script>
<template lang="pug">
	.file
		.file__inner
			a.link.file__title(:href="fileData.href" target="blanc") {{ fileData.title }}
			.file__tags.fl
				span.file__tag.fl(title="Формат файла")
					Icon(:name="`my-icon:${fileData.icon}`" class="file__icon" title="Формат файла")
					span {{ fileData.size }}
				.file__icons.flc
					template(v-if="fileData.addition")
						a.file__tag.file__tag--dl.fl(:href="fileData.additionLink")
							span.hide-text Приложения к файлу
							Icon(name="my-icon:downloadAdd" class="file__icon file__icon--dl" title="Приложения к файлу")
				span.file__tag.fl(title="Дата последнего изменения") {{ fileData.date }}
		.file__hint(:class="{ show: isFileHintOpen }")
			span.file__open-hint(tabindex="0" @click="toggle")
			fileInfo(:fileData="fileData" :show="isFileHintOpen")
</template>
<style lang="scss">
.file {
	position: relative;
	margin-bottom: 16px;
	border-radius: var(--border-radius);
	width: 100%;
	height: 216px;
	box-shadow: 0 6px 20px 6px rgba(0, 0, 0, 0.1);

	&__inner {
		overflow-y: scroll;
		padding: 16px;
		height: 158px;
		max-height: 168px;
	}

	&__tags {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 1px solid var(--color-border);
		padding: 8px;
		width: 100%;
		height: 56px;

		> * {
			&:not(:last-child) { margin-right: 8px; }
		}
	}

	&__tag {
		font-style: italic;
		color: var(--color-main);
		cursor: default;
		transition: color linear 0.3s;

		> * {
			&:not(:last-child) { margin-right: 2px; }
		}

		&:focus,
		&:hover {
			color: var(--color-icon);

			.file__icon { fill: var(--color-icon); }
		}

		&--dl { cursor: pointer; }
	}

	&__icons {
		margin-left: auto;

		> * {
			&:not(:last-child) { margin-right: 16px; }
		}
	}

	&__icon {
		width: 56px;
		height: 56px;
		fill: var(--color-main);

		&--dl {
			width: 32px;
			height: 32px;
		}
	}

	&__hint {
		display: none;

		@media screen and (min-width: 576px) {
			position: absolute;
			right: -12px;
			top: -12px;
			display: block;
			border-radius: var(--border-radius);
			width: 32px;
			height: 32px;
			background-color: var(--color-bg-main);
			transition: background-color 0.4s ease;

			&.show {
				padding: 16px;
				width: 100%;
				height: 100%;
				box-shadow: 0 6px 20px 6px rgba(0, 0, 0, 0.1);
				background-color: var(--color-bg-light);
				transform: translate(-12px, 12px);
				transition: transform 0.4s linear;

				.file__open-hint {
					&::before,
					&::after {
						background-color: var(--color-bg-main);
					}
					&::before { transform: translate(15px, 10px) rotate(-45deg); }
					&::after { transform: translate(15px, 10px) rotate(45deg); }
				}
			}
		}
	}

	&__open-hint {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
		display: block;
		border-radius: var(--border-radius);
		width: 32px;
		height: 32px;
		cursor: pointer;
		pointer-events: auto;

		&::before,
		&::after {
			content: "";
			position: absolute;
			border-radius: 2px;
			width: 2px;
			height: 12px;
			background-color: var(--color-bg-light);
			transform-origin: center center;
			transition: all 0.25s ease;
		}

		&::before { transform: translate(15px, 6px) rotate(0) scale(1, 0.2); }
		&::after { transform: translate(15px, 12px) rotate(0) scale(1, 0.5); }
	}

	@media screen and (min-width: 992px) { width: 47%; }

	@media screen and (min-width: 1366px) { width: 31%; }
}

</style>

