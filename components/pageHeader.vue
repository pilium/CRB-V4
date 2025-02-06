<template lang="pug">
	header.header
		.header__wrapper.fl
			.header__logo
				<headerLogo/>
			.header__lines
				<headerTop/>
				<headerBottom/>
</template>
<style lang="scss" scoped>
	.header {
		&__wrapper {
			margin: 0 auto;
			padding: 0;
			max-width: 1200px;

			@media screen and (min-width: 992px) { padding: 0 8px; }
		}

		&__logo {
			display: none;
			width: 216px;

			@media screen and (min-width: 992px) { display: block; }
		}

		&__lines {
			flex: 0 0 100%;

			@media screen and (min-width: 992px) { flex: 0 0 76%; }
		}
	}
</style>
