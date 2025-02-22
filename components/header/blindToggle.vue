<script setup>
import { blindStore } from '~/store/blind.store';

const store = blindStore()
</script>
<template lang="pug">
	.blind-toggle
		button.btn.btn--blind.btn--bg-tr.btn--with-icon(type="button" aria-label="Переключить в режим для слабовидящих" @click="store.toggle()")
			<Icon name="my-icon:blind" class="blind-toggle__icon" title="Иконка ссылка на форму обратной связи"/>
</template>
<style lang="scss">
	.blind-toggle {
		line-height: 0;

		.btn {
			@media screen and (min-width: 992px) {
				border-radius: 0;
				padding: 8px;
				width: 64px;
				height: auto;
				background: var(--gradient-main);
			}
		}

		&__icon {
			width: 24px;
			height: 32px;
			fill: var(--color-light);

			@media screen and (min-width: 992px) {
				width: 40px;
				height: 48px;
			}
		}

		&__text {
			display: none;

			@media screen and (min-width: 1200px) { display: inline; }
		}
	}
</style>
