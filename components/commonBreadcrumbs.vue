<template lang="pug">
	.breadcrumbs
		.container
			ol.breadcrumbs__list.flc(itemscope itemtype="http://schema.org/BreadcrumbList")
				li.breadcrumbs__list-item(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")
					nuxt-link.breadcrumbs__home(to="/" itemprop="item" href="https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/")
						span(itemprop="name") Главная
						<meta itemprop="position" content="1" />
					span.breadcrumbs__separator &gt;
				li.breadcrumbs__list-item(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")
					span.breadcrumbs__item(itemprop="name") {{ labels.last }}
					<meta itemprop="position" content="2" />
</template>
<script setup>
defineProps({
	labels: {
		type: Object,
		required: true,
		default() {
			return {};
		},
	},
});
</script>
<style lang="scss">
	.breadcrumbs {
		display: none;

		&__list { margin-bottom: 0; }

		&__home {
			font-weight: 400;
			color: var(--color-link);
		}

		&__separator { margin: 0 8px; }

		@media screen and (min-width: 992px) {
			display: block;
			border-top: 1px solid rgba(0, 0, 0, 0.1);
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			padding: 16px 0;
			font-size: 0.875rem;
			text-align: center;

			// background: linear-gradient(135deg, rgba(94,192,198,1) 49%, rgba(25,177,183,1) 100%);
			// background-image: url("//demo2.themelexus.com/fw/wp-content/themes/wpopalbootstrap/assets/images/bg-breadcrumb.jpg");
			// background-position: center center;
			// background-repeat: no-repeat;
		}
	}
</style>
