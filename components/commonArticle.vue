<template lang="pug">
	article.article
		.article__wrapper
			.container.container--title
				slot(name="title")
			<commonToTop/>
			.article__inner
				slot(name="toc")
				slot(name="text")
				slot(name="files")
				slot(name="doctors")
</template>
<style lang="scss">
.article {
	padding-top: 16px;
	font-size: var(--font-size);

	&__title {
		margin: 0 auto;
		margin-bottom: 16px;
		font-size: 1.6rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 56px;
			font-size: 3.5rem;
		}
	}

	&__titleInner {
		margin: 8px auto;
		font-size: 1.1rem;
		text-align: center;

		@media screen and (min-width: 768px) { font-size: 2rem; }
	}

	&__subtitle {
		font-size: 1.625rem;

		@media screen and (min-width: 425px) { font-size: var(--font-size-h2); }
	}

	&__list {
		list-style-type: disc;
		padding-left: 2rem;

		li {
			ul { margin-top: 1em; }
		}
	}

	ol.article__list { list-style-type: decimal; }

	&__figure { margin: 16px 40px; }

	&__strong {
		position: relative;
		margin-top: 24px;
		margin-bottom: 32px;
		padding-left: 16px;
		font-weight: bold;
		color: var(--color-main);

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			display: block;
			width: 4px;
			height: 100%;
			background-color: var(--color-main);
		}

		p { margin-bottom: 0; }

		@media screen and (min-width: 768px) { padding-left: 32px; }
	}

	&__links {
		margin-bottom: 16px;

		> * {
			margin: 8px 0;
			&:first-child { margin-top: 0; }
			&:last-child { margin-bottom: 0; }
		}
	}

	&__link-wrap {
		display: flex;
		align-items: center;

		> * {
			&:not(:last-child) { margin-right: 8px; }
		}
	}

	&__link-img {
		width: 24px;
		height: 24px;
		fill: var(--color-link);
	}

	&__item-wrapper { margin-bottom: 32px; }

	&__video { margin-top: 32px; }

	&__img {
		display: block;
		margin: 16px auto;
		width: 90%;

		@media screen and (min-width: 992px) { width: 70%; }
	}

	&__item {
		&:not(:last-child) { margin-bottom: 64px; }
	}

	&__item-img {
		margin: 0 auto;
		max-width: 424px;
	}

	&__text { line-height: 1.65; }

	h2,
	h3,
	h4 {
		margin: 24px 0;

		@media screen and (min-width: 768px) { margin: 3rem 0; }
	}

	.link { line-height: 1.5; }

	.container--title { position: relative; }

	blockquote { margin-left: 0; }

	&--big {
		.article__title {
			margin: 80px 0;
			text-align: center;
		}
	}

	@media screen and (min-width: 768px) { padding-top: 32px; }
}
</style>
