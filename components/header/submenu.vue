<script setup>
defineProps({
	labels: {
    	type: Object,
    	required: true,
		default() {
			return {};
		},
  },
})
</script>
<template lang="pug">
	ul.submenu(role="menu" :aria-label="labels.label")
		li.submenu__item(v-for="item in labels.list" role="menuitem")
			nuxt-link.link.submenu__link.f(:to="item.href") {{item.text}}
</template>

<style lang="scss" scoped>
	.submenu {
		z-index: -1;

		&__link {
			padding-bottom: 8px;

			&:hover,
			&:focus,
			&.nuxt-link-active {
				border-color: var(--color-border);
				transition: border-color linear 0.3s, padding-left linear 0.3s;

				@media screen and (min-width: 992px) {
					border-color: var(--color-main);
					padding-left: 24px;
				}
			}

			&.active {
				@media screen and (min-width: 992px) {
					border-color: var(--color-main);
					padding-left: 24px;
					color: var(--color-hover);
				}
			}

			@media screen and (min-width: 992px) {
				border-left: 8px solid var(--color-border-light);
				padding: 8px 0 8px 8px;
			}
		}

		@media screen and (min-width: 992px) {
			position: absolute;
			left: 0;
			top: 100%;
			z-index: 10;
			display: none;
			width: 160%;
			background-color: var(--color-bg-light);
		}
	}

</style>
