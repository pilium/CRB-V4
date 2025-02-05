<template lang="pug">
	section.section.section--contacts
		.contacts
			.contacts__info.fl
				.contacts__item
					a.contacts__banner(href="https://www.bus.gov.ru/pub/info-card/17074" target="blanc" rel="noopener")
						figure
							<NuxtImg loading="lazy" class="contacts__img" src="media/busgov-jpg.jpg" alt="Официальный сайт для размещения информации о государственных учреждениях"/>
							figcaption.hide-text Официальный сайт для размещения информации о государственных (муниципальных) учреждениях
				.contacts__item
					a.contacts__banner(href="https://www.gosuslugi.ru/category/health" target="blanc" rel="noopener")
						figure
							<NuxtImg loading="lazy" class="contacts__img" src="media/moezdorovie-jpg.jpg" alt="Госуслуги - мое здоровье"/>
							figcaption.hide-text Официальный сайт для размещения информации о государственных (муниципальных) учреждениях
				.contacts__item
					nuxt-link(to="/hospital/nacProject")
						figure
							<NuxtImg loading="lazy" class="contacts__img" src="media/banner-nac.jpg" alt="Баннер национального проекта здравоохранения"/>
							figcaption.hide-text Баннер национального проекта здравоохранения
				.contacts__item
					a(href="https://rostovmarket.rts-tender.ru/?fl=True" targer="_blank")
						figure
							<NuxtImg loading="lazy" class="contacts__img" src="media/banner.png" alt="Баннер закупок Ростовской области"/>
							figcaption.hide-text Баннер закупок Ростовской области
				.contacts__item
					a(href="http://anketa.rosminzdrav.ru/staticogvjustank/61/1" target="_blank")
						figure
							<NuxtImg loading="lazy" class="contacts__img" src="media/nok.jpg" alt="Независимая оценка качества"/>
							figcaption.hide-text Независимая оценка качества
					//- <NocBanner/>
</template>
<style lang="scss" scoped>
	.contacts {
		padding: 0 16px;

		&__img {
			width: 100%;
			height: 100%;
			max-width: 304px;
			cursor: pointer;
		}

		&__item {
			display: block;
			margin: 0 auto;

			> * {
				&:not(:last-child) {
					margin-bottom: 24px;

					@media screen and (min-width: 992px) {
						margin-right: 32px;
						margin-bottom: 0;
					}
				}
			}

			@media screen and (min-width: 992px) {
				display: flex;
				align-items: center;
			}
		}

		&__info {
			flex: 1;

			> *:not(:last-child) { margin-right: 8px; }

			@media screen and (min-width: 1200px) { justify-content: space-between; }
		}

		&__banner {
			&:focus,
			&:hover { cursor: pointer; }
		}
	}
</style>
