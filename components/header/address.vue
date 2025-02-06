<template lang="pug">
	a.address.link.fl(href="https://yandex.ru/maps/?ll=42.015320%2C47.539762&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D42.015327%252C47.539768%26spn%3D0.001000%252C0.001000%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A0%25D0%25BE%25D1%2581%25D1%2582%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BE%25D0%25B1%25D0%25BB%25D0%25B0%25D1%2581%25D1%2582%25D1%258C%252C%2520%25D0%2592%25D0%25BE%25D0%25BB%25D0%25B3%25D0%25BE%25D0%25B4%25D0%25BE%25D0%25BD%25D1%2581%25D0%25BA%25D0%25BE%25D0%25B9%2520%25D1%2580%25D0%25B0%25D0%25B9%25D0%25BE%25D0%25BD%252C%2520%25D1%2581%25D1%2582%25D0%25B0%25D0%25BD%25D0%25B8%25D1%2586%25D0%25B0%2520%25D0%25A0%25D0%25BE%25D0%25BC%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%252C%2520%25D0%25A1%25D0%25BE%25D1%258E%25D0%25B7%25D0%25BD%25D1%258B%25D0%25B9%2520%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B5%25D1%2583%25D0%25BB%25D0%25BE%25D0%25BA%252C%252097%25D0%2590%2520&z=17" target="blanc" rel="noopener")
		.address__icon
			<Icon name="my-icon:location" title="иконка местоположения"/>
		address.address__main.f.fdc
			span.address__city Ст.Романовская,
			span.address__street пер.Союзный 97а
</template>

<style lang="scss">
.address {
	position: relative;
	font-weight: normal;
	color: var(--color-light);

	svg {
		position: absolute;
		left: -36px;
		top: 3px;
		display: block;
		width: 32px;
		height: 32px;
		fill: var(--color-light);

		@media screen and (min-width: 992px) {
			fill: var(--color-icon);
		}
	}

	&__main { margin: 0; }

	@media screen and (min-width: 992px) { color: var(--color-main); }
}

</style>
