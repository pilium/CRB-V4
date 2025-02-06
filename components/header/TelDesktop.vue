<template lang="pug">
	.tel-desktop
		.tel-desktop__line-wrapper.f
			.tel-desktop__line.tel-desktop__line--second
				.tel-desktop__desktop-icon
					<Icon name="my-icon:phone" title="иконка набора номера телефона"/>
				a.tel-desktop__wrapper-link.link(href="tel:89282125806") 8 (928) 212-58-06
</template>
<style lang="scss" scoped>
	.tel-desktop {
		&__line-wrapper {
			align-items: center;
			justify-content: center;

			> * {
				&:not(:last-child) { margin-right: 24px; }
			}

			@media screen and (min-width: 768px) { justify-content: normal; }
		}

		&__line {
			position: relative;
			display: none;
			padding-left: 40px;

			&--second {
				@media screen and (min-width: 768px) { display: block; }
			}

			@media screen and (min-width: 320px) { display: block; }
		}

		&__desktop-icon {
			position: absolute;
			left: 0;
			top: 0;

			@media screen and (min-width: 992px) { top: -3px; }
		}

		svg {
			width: 24px;
			height: 24px;
			fill: var(--color-light);

			@media screen and (min-width: 992px) {
				width: 32px;
				height: 32px;
				fill: var(--color-icon);
			}
		}

		&__wrapper-link {
			line-height: 1.5;
			color: var(--color-light);

			@media screen and (min-width: 992px) { color: var(--color-link); }
		}
	}
</style>
