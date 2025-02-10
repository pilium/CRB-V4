<template lang="pug">
	.toc
		.container
			h2.toc__title Содержание
			ul.toc__list
				li.toc__list-item(v-for="(item, index) in data" :key="index")
					nuxt-link.link.link--underline(:to="item.anchor") {{ item.title }}
					template(v-if="item.childs")
						ul.toc__list-inner
							li(v-for="(child, index) in item.childs" :key="index")
								a.link.link--underline(:href="child.anchor") {{ child.title }}
</template>
<script setup>
defineProps({
	data: {
		type: Array,
		default() {
			return [];
		},
	},
});
</script>
<style lang="scss" scoped>
.toc {
	margin-bottom: 8px;
	padding-bottom: 8px;

	&__title {
		margin-bottom: 24px;
		font-size: 1rem;
		text-align: center;

		@media screen and (min-width: 768px) {
			font-size: 1.5rem;
			text-align: left;
		}
	}

	&__list {
		list-style-type: initial;
		padding-left: 1rem;
		font-weight: bold;

		li { margin-bottom: 1em; }
	}

	&__list-inner {
		list-style-type: circle;
		margin-top: 1rem;
		padding-left: 2em;
	}

	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
		padding-right: 16px;
		padding-bottom: 24px;
		padding-left: 16px;
	}
}
</style>
