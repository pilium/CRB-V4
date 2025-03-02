<template lang="pug">
section.section.section--banner
	.banner
		.panel.banner__inner.f.fdc
			h2.banner__title Углубленная диспансеризация Covid-19
			.vaccineMain
				p
					b Поликлиника
					i cт. Романовская, пер. Союзный 97а
				p ПН-ПТ - с 08:00 до 18:00
				p По телефону 8 (86394) 7-07-22
				p
					b Врачебная амбулатория
					i х.Рябичев, ул. Юбилейная д.52
				p ПН-ПТ - с 08:00 до 18:00
				p По телефону 8 (86394) 7-47-80
			.banner__links.fc
				a.link.link--underline(
					href="https://www.gosuslugi.ru/category/health",
					rel="noopener noreferrer",
					target="blanc"
				) Запись через гос услуги
		.panel.banner__inner.f.fdc
			h2.banner__title Диспансеризация и профилактический медицинский осмотр взрослого населения проводится с понедельника по субботу в ГБУ РО "ЦРБ" в Волгодонском районе
			.banner__address
				address
					a.link.link--underline(
						href="https://yandex.ru/maps/?ll=42.015320%2C47.539762&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D42.015327%252C47.539768%26spn%3D0.001000%252C0.001000%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A0%25D0%25BE%25D1%2581%25D1%2582%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BE%25D0%25B1%25D0%25BB%25D0%25B0%25D1%2581%25D1%2582%25D1%258C%252C%2520%25D0%2592%25D0%25BE%25D0%25BB%25D0%25B3%25D0%25BE%25D0%25B4%25D0%25BE%25D0%25BD%25D1%2581%25D0%25BA%25D0%25BE%25D0%25B9%2520%25D1%2580%25D0%25B0%25D0%25B9%25D0%25BE%25D0%25BD%252C%2520%25D1%2581%25D1%2582%25D0%25B0%25D0%25BD%25D0%25B8%25D1%2586%25D0%25B0%2520%25D0%25A0%25D0%25BE%25D0%25BC%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%252C%2520%25D0%25A1%25D0%25BE%25D1%258E%25D0%25B7%25D0%25BD%25D1%258B%25D0%25B9%2520%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B5%25D1%2583%25D0%25BB%25D0%25BE%25D0%25BA%252C%252097%25D0%2590%2520&z=17",
						target="blanc",
						rel="noopener"
					) Волгодонской район, ст. Романовская, пер. Союзный, 97а
				p.banner__contact
					b Телефон регистратуры:
					a.link(href="tel:88639470722") +7 (86394) 7-07-22
			.banner__links.fc
				nuxt-link.link.link--underline(to="/patient/dispans") Перейти
		.panel.banner__inner.f.fdc
			h2.banner__title Про коронавирусную инфекцию и другие острые респираторные вирусные инфекции (ОРВИ)
			p.banner__attention При первых симптомах обращаться в ГБУ РО "ЦРБ" в Волгодонском районе!
			.banner__address
				address
					a.link.link--underline(
						href="https://yandex.ru/maps/?ll=42.015320%2C47.539762&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D42.015327%252C47.539768%26spn%3D0.001000%252C0.001000%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%25A0%25D0%25BE%25D1%2581%25D1%2582%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BE%25D0%25B1%25D0%25BB%25D0%25B0%25D1%2581%25D1%2582%25D1%258C%252C%2520%25D0%2592%25D0%25BE%25D0%25BB%25D0%25B3%25D0%25BE%25D0%25B4%25D0%25BE%25D0%25BD%25D1%2581%25D0%25BA%25D0%25BE%25D0%25B9%2520%25D1%2580%25D0%25B0%25D0%25B9%25D0%25BE%25D0%25BD%252C%2520%25D1%2581%25D1%2582%25D0%25B0%25D0%25BD%25D0%25B8%25D1%2586%25D0%25B0%2520%25D0%25A0%25D0%25BE%25D0%25BC%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25B2%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%252C%2520%25D0%25A1%25D0%25BE%25D1%258E%25D0%25B7%25D0%25BD%25D1%258B%25D0%25B9%2520%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B5%25D1%2583%25D0%25BB%25D0%25BE%25D0%25BA%252C%252097%25D0%2590%2520&z=17",
						target="blanc",
						rel="noopener"
					) Волгодонской район, ст. Романовская, пер. Союзный, 97а
				p.banner__contact
					b Телефон регистратуры:
					a.link(href="tel:88639470722") +7 (86394) 7-07-22
			.banner__links.fc
				nuxt-link.link.link--underline(to="/patient/orvi") Перейти
</template>

<style lang="scss">
.banner {
	position: relative;

	&__inner {
		padding: 16px;
		color: var(--color-title);

		p {
			font-size: 1rem;
		}

		@media screen and (min-width: 992px) {
			align-items: center;
			box-shadow:
				0 10px 20px rgba(0, 0, 0, 0.19),
				0 6px 6px rgba(0, 0, 0, 0.23);
			text-align: center;
		}
	}

	&__title {
		margin-top: 0;
		font-size: 1.2rem;
		line-height: 1.3;

		span {
			color: var(--color-link-hover);
		}

		@media screen and (min-width: 992px) {
			font-size: 1.4rem;
		}
	}

	&__links {
		align-self: flex-end;

		@media screen and (min-width: 992px) {
			margin-right: 0;
		}
	}

	&__attention {
		color: var(--color-main);
	}
	&__address {
		margin-top: auto;
	}

	&__contact {
		.link {
			display: block;
			text-decoration: none;

			@media screen and (min-width: 576px) {
				display: inline;
				margin-left: 8px;
				text-decoration: underline;
			}
		}
	}

	&__svg-icon {
		margin-left: 8px;
		width: 16px;
		height: 16px;
		fill: var(--color-bg-icon);
	}

	.link {
		&:hover,
		&:focus {
			.banner__svg-icon {
				fill: var(--color-link-hover);
				transition: fill linear 0.15s;
			}
		}
	}

	figure {
		min-width: 300px;
		max-width: 100%;
	}

	.panel__content,
	.panel__bg {
		width: 50%;
	}

	@media screen and (min-width: 992px) {
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
