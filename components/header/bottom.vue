<template lang="pug">
	.header-bottom
		.container.container--header.fl
			.header-bottom__icons.fl
				.header-bottom__home
					nuxt-link.link.menu__link(to="/")
						.menu__icon
							<Icon name="my-icon:home" title="На главную"/>
				.header-bottom__writeUs
					<headerWriteus/>
				.header-bottom__blind-toggle
					<headerBlindToggle/>
				<headerSandwich/>
			.header-bottom__menu
				<headerMenu/>
</template>
<style lang="scss" scoped>
	.header-bottom {
		color: var(--color-light);
		background-color: var(--color-bg-icon);

		&__logo-mobile {
			display: none;
			line-height: 0;

			img {
				width: 140px;
				height: 32px;
			}
		}

		&__icons {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 11;
			padding: 8px 16px;
			width: 100%;
			background-color: var(--color-bg-icon);

			> * {
				&:not(:first-child) {
					@media screen and (min-width: 992px) {
						margin-top: 8px;
						margin-left: 0;
					}
				}
			}

			&.hide {
				@media screen and (min-width: 992px) {
					animation: fade-out-bottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

					@keyframes fade-out-bottom {
						0% {
							opacity: 1;
							transform: translateY(0);
						}

						100% {
							opacity: 0;
							transform: translateY(50px);
						}
					}
				}
			}

			&.show {
				@media screen and (min-width: 992px) {
					animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

					@keyframes fade-in-bottom {
						0% {
							opacity: 0;
							transform: translateY(50px);
						}

						100% {
							opacity: 1;
							transform: translateY(0);
						}
					}
				}
			}

			@media screen and (min-width: 992px) {
				position: fixed;
				left: auto;
				right: 0;
				top: 30%;
				bottom: auto;
				flex-direction: column;
				justify-content: flex-start;
				padding: 0;
				width: auto;
				background-color: transparent;
			}
		}

		&__home {
			svg {
				width: 24px;
				height: 24px;
				fill: var(--color-light);
			}

			@media screen and (min-width: 992px) { display: none; }
		}

		&__menu {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: -1;
			overflow-y: scroll;
			width: 100%;
			height: calc(100vh - 48px);
			background-color: var(--color-bg-light);
			opacity: 0;
			transform: translateY(100%);
			transition: transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

			&.active {
				z-index: 10;
				opacity: 1;
				transform: translateY(0);
			}

			@media screen and (min-width: 992px) {
				position: static;
				z-index: 1;
				display: block;
				overflow-y: visible;
				padding: 0;
				height: auto;
				opacity: 1;
				transform: translateY(0);
			}
		}

		@media screen and (min-width: 992px) {
			padding: 0;
			box-shadow: 0 -1px 0 0 var(--color-border-light);
			background-color: var(--color-bg-secondary);
		}
	}

</style>
