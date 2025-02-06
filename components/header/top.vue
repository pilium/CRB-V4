<template lang="pug">
	.header-top
		.container.container--header
			.header-top__info
				.header-top__address
					<headerAddress/>
				.header-top__schedule
					<headerSchedule/>
			.header-top__tel-desktop
					<headerTelDesktop/>
</template>
<style lang="scss" scoped>
.header-top {
	padding: 8px 0;
	color: var(--color-light);
	background-color: var(--color-bg-icon);

	.container {
		text-align: center;

		@media screen and (min-width: 768px) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: left;
		}

		@media screen and (min-width: 992px) { padding-bottom: 16px; }
	}

	&__info {
		display: none;
		font-size: 0.875rem;
		line-height: 1.45;

		@media screen and (min-width: 768px) { display: inline-flex; }

		@media screen and (min-width: 992px) { padding-left: 24px; }
	}

	&__address {
		border-right: 1px solid var(--color-border-light);
		padding-right: 8px;
		padding-left: 32px;

		@media screen and (min-width: 425px) { padding-right: 16px; }
	}

	&__schedule {
		padding-left: 8px;

		@media screen and (min-width: 425px) { padding-left: 16px; }
	}

	&__tel-desktop { margin-left: 8px; }

	@media screen and (min-width: 992px) {
		margin-top: 8px;
		margin-bottom: 0;
		padding: 0;
		color: var(--color-main);
		background-color: var(--color-bg-light);
	}
}
</style>
