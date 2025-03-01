<script setup>
const labels = [
	{
		label: 'О больнице',
		list: [
			{ href: '/hospital/history', text: 'История больницы' },
			{ href: '/hospital/news', text: 'Новости' },
			{ href: '/hospital/roadmap', text: 'Дорожная карта' },
			// { href: '/hospital/nacProject', text: 'Национальный проект здравоохранения' },
			// { href: '/hospital/corruption', text: 'Противодействие коррупции' },
			{ href: '/hospital/vacancy', text: 'Вакансии' },
			{ href: '/hospital/payment', text: 'Платные услуги' },
			{ href: '/hospital/testimonials', text: 'Отзывы' },
			// { href: '/hospital/organizations', text: 'Вышестоящие организации' },
			// { href: '/hospital/gallery', text: 'Галерея' },
			// { href: '/hospital/normative', text: 'Нормативные документы' },
			{ href: '/hospital/contacts', text: 'Контакты' },
		],
	},
	{
		label: 'Пациентам',
		list: [
			{ href: '/patient/priem_GV', text: 'График приема граждан' },
			{ href: '/patient/schedule', text: 'График приема врачей' },
			{ href: '/patient/dispans', text: 'Диспансеризация' },
			{ href: '/patient/patientDuties', text: 'Права и обязанности пациента' },
			{ href: '/patient/writeRules', text: 'Правила записи на прием' },
			// { href: '/patient/prepareRules', text: 'Правила подготовки к исследованиям' },
			// { href: '/patient/helpOrder', text: 'Порядок оказания медицинской помощи' },
			// { href: '/patient/service', text: 'Условия и объемы медицинской помощи' },
			// { href: '/patient/narko', text: 'Антинаркотическая деятельность' },
			// { href: '/patient/sout', text: 'Результаты СОУТ' },
			// { href: '/patient/gepatit', text: 'Всемирный день борьбы с гепатитом' },
			// { href: '/patient/protectOf', text: 'Как защитить себя от' },
			// { href: '/patient/milk', text: 'Грудное молоко защищает здоровье' },
			// { href: '/patient/hospitalizationTime', text: 'О правилах и сроках госпитализации' },
			// { href: '/patient/helpOpportunity', text: 'Возможность получения мед. помощи' },
			// { href: '/patient/demographic', text: 'Демографические показатели' },
			// { href: '/patient/settlerPtotect', text: 'Защита прав граждан' },
			// { href: '/patient/smo', text: 'Перечень страховых компаний' },
			// { href: '/patient/jnvls', text: 'Лекарственное обеспечение' },
			// { href: '/patient/nok', text: 'Независимая оценка качества' },
			{ href: '/patient/zoj', text: 'Здоровый образ жизни' },
		],
	},
	{
		label: 'Структура больницы',
		list: [
			{ href: '/structure/administration', text: 'Администрация' },
			{ href: '/structure/clinic', text: 'Поликлиника' },
			{ href: '/structure/surgeon', text: 'Хирургическое отделение' },
			{ href: '/structure/terapevt', text: 'Терапевтическое отделение' },
			{ href: '/structure/ambulance', text: 'Отделение скорой помощи' },
			{ href: '/structure/diagnostic', text: 'Кабинеты диагностики' },
			{ href: '/structure/fap', text: 'Фельдшерско-акушерские пункты' },
		],
	},
]
</script>
<template lang="pug">
	nav.menu
		.menu__wrapper
			ul.menu__list#main-nav-menu(role="menu")
				li.menu__item(role="menuitem")
					a.link.menu__link.menu__link--has-submenu.fl(
							href="javascript:void(0);"
							aria-haspopup="true"
							aria-expanded="false"
							role="menuitem"
						) Пациентам
						.menu__icon
							<Icon name="my-icon:patient" title="иконка пациента больницы"/>
					<headerSubmenu :labels="labels[1]"/>
				li.menu__item(role="menuitem")
					a.link.menu__link.menu__link--has-submenu.fl(
							href="javascript:void(0);"
							aria-haspopup="true"
							aria-expanded="false"
							role="menuitem"
						) О больнице
						.menu__icon
							<Icon name="my-icon:hospital" title="иконка больницы"/>
					<headerSubmenu :labels="labels[0]" />
				li.menu__item(role="menuitem")
					a.link.menu__link.menu__link--has-submenu.fl(
							href="javascript:void(0);"
							aria-haspopup="true"
							aria-expanded="false"
							role="menuitem"
						)
						span Структура
						.menu__icon
							<Icon name="my-icon:structure" title="иконка структуры больницы"/>
					<headerSubmenu :labels="labels[2]"/>
				li.menu__item(role="menuitem")
					nuxt-link.link.menu__link.fl(to="/licence" role="menuitem") Документы
						.menu__icon
							<Icon name="my-icon:licence" title="иконка лицензий больницы"/>
</template>

<style lang="scss" scoped>
.menu {
	&__wrapper {
		margin: 0 auto;
		padding: 0 8px;
		max-width: 320px;

		@media screen and (min-width: 425px) {
			padding: 0 8px;
			max-width: 368px;
		}

		@media screen and (min-width: 768px) {
			max-width: 640px;
		}

		@media screen and (min-width: 992px) {
			padding: 0;
			max-width: 100%;
		}
	}

	&__list {
		margin-top: 0;
		margin-bottom: 8px;

		@media screen and (min-width: 992px) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0;
		}
	}

	&__item {
		position: relative;

		@media screen and (min-width: 992px) {
			padding: 24px 0 24px 64px;

			&:not(:last-child) {
				width: 28%;
			}

			&:hover,
			&:focus {
				.submenu {
					z-index: 10;
					display: block;
				}

				.menu__link {
					color: var(--color-hover);
				}
			}
		}
	}

	&__link {
		padding: 24px 0 16px 0;
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		color: var(--color-main);

		@media screen and (min-width: 992px) {
			position: relative;
			padding: 0;
			width: auto;
			height: auto;
			font-size: 1.25em;
			text-align: center;

			&:hover,
			&:focus {
				+.submenu {
					display: block;
				}
			}
		}
	}

	&__icon {
		display: none;

		@media screen and (min-width: 992px) {
			position: absolute;
			left: -48px;
			top: -8px;
			display: block;
		}
	}

	svg {
		width: 40px;
		height: 40px;
		fill: var(--color-icon);
	}
}
</style>
