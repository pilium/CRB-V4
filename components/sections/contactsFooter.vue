<template lang="pug">
	.contacts-footer
		.contacts-footer__inner
			.contacts-footer__main
				h2.contacts-footer__title Главный корпус
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:location-pin" class="contacts-footer__svg-icon" title="иконка местоположения"/>
					address(tabindex="0") Ростовская область, Волгодонской район, ст. Романовская, пер. Союзный 97а
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:mail" class="contacts-footer__svg-icon" title="Иконка электронной почты"/>
					a.link(href="mailto:crbvr@yandex.ru") crbvr@yandex.ru
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:contact-tel" class="contacts-footer__svg-icon" title="Иконка телефона"/>
					ul.contacts-footer__tels
						li
							span Регистратура
							a.link(href="tel:88639470722") +7 (86394) 7-07-22
						li
							span Колл-центр:
							a.link(href="tel:89282125806") +7 (928) 212-58-06
							//- a.link(href="tel:8893947042") +7 (86394) 7-07-22
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:calendar-contacts" class="contacts-footer__svg-icon" title="Иконка календаря"/>
					<headerSchedule/>
			.contacts-footer__fil
				h2.contacts-footer__title Амбулатория
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:location-pin" class="contacts-footer__svg-icon" title="иконка местоположения"/>
					address(tabindex="0") Ростовская область, Волгодонской район, хутор Рябичев, Юбилейная улица, 52
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:mail" class="contacts-footer__svg-icon" title="Иконка электронной почты"/>
					a.link(href="mailto:rclinic212@yandex.ru") rclinic212@yandex.ru
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:contact-tel" class="contacts-footer__svg-icon" title="Иконка телефона"/>
					ul.contacts-footer__tels
						li
							span Регистратура:
							a.link(href="tel:88639474780") 8 (86394) 7-47-80
				.contacts-footer__item
					.contacts-footer__icon
						<Icon name="my-icon:calendar-contacts" class="contacts-footer__svg-icon" title="Иконка календаря"/>
					<headerSchedule/>
</template>

<style lang="scss" scoped>
	.contacts-footer {
		&__inner {
			display: block;
			font-size: 0.875rem;

			@media screen and (min-width: 425px) { font-size: 1rem; }

			@media screen and (min-width: 768px) { display: flex; }
		}

		&__item {
			display: flex;
			align-items: center;

			&:not(:last-child) {
				margin-bottom: 16px;
			}

			> * {
				&:not(:last-child) { margin-right: 8px; }
			}
		}

		&__title {
			margin-top: 8px;
			margin-bottom: 24px;
		}

		&__icon {
			display: flex;
			align-items: center;
			flex-shrink: 0;
			justify-content: center;
			border-radius: 50%;
			width: 48px;
			height: 48px;
			background: var(--color-main);
		}

		&__svg-icon {
			width: 20px;
			height: 20px;
			fill: var(--color-light);
		}

		address {
			margin-bottom: 0;
		}

		&__tels {
			margin: 0;

			li {
				display: flex;
				justify-content: space-between;

				> * {
					&:not(:last-child) {
						margin-right: 8px;
						margin-bottom: 8px;
					}
				}
			}
		}

		@media screen and (min-width: 768px) { padding: 0; }
	}
</style>
