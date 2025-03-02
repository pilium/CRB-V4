<template lang="pug">
	nuxt-link.logo(to="/" aria-label="Логотип и ссылка на главную страницу сайта")
		figure.logo__figure
			img.logo__img(src="/media/e.svg" alt="Логотип больницы" width="90" height="90")
			figcaption.logo__text= 'Основана в 1983 году'
</template>

<style lang="scss" scoped>
	.logo {
		&__text {
			font-size: 1.25rem;
			letter-spacing: 2px;
			white-space: nowrap;
			color: var(--color-main);
		}

		&__img {
			display: var(--isImgShow, block);
			flex-shrink: 0;
			width: 200px;
			height: 90px;

			@media screen and (min-width: 1200px) { width: 240px; }
		}
	}
</style>
