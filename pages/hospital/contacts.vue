<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>
const labels = { last: 'Контакты' }
const tableData = {
	caption: 'Контактные телефоны',
	tableClass: 'table--schedule',
}
const tableData2 = {
	caption: 'Телефоны фельдшерско-акушерских пунктов',
	tableClass: 'table--schedule',
}
</script>
<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Контакты
				template(v-slot:text)
					.article__text
						.container
							commonTable(:tableData="tableData")
								template(v-slot:tableData)
									thead
										tr
											th Направление
											th Телефон
									tbody
										tr
											td Приемная главного врача
											td
												a.link.link--underline(href="tel:88639470614") 8(86394) 7-06-14
										tr
											td Заместители главного врача
											td
												a.link.link--underline(href="tel:88639470614") 8(86394) 7-06-14
										tr
											td Заведующая поликлиникой
											td
												a.link.link--underline(href="tel:88639470141") 8(86394) 7-01-41
										tr
											td Регистратура (ст.Романовская)
											td
												a.link.link--underline(href="tel:89282125806") 8 (928) 212-58-06,
												a.link.link--underline(href="tel:88639470722") 8(86394) 7-07-22
										tr
											td Регистратура (х.Рябичев)
											td
												a.link.link--underline(href="tel:88639474780") 8(86394) 7-47-80
										tr
											td Рентген кабинет
											td
												a.link.link--underline(href="tel:88639470242") 8(86394) 7-02-42
										tr
											td Терапевтическое отделение № 1
											td
												a.link.link--underline(href="tel:88639470477") 8(86394) 7-04-77
										tr
											td Терапевтическое отделение № 2 (х.Рябичев)
											td
												a.link.link--underline(href="tel:88639474709") 8(86394) 7-47-09
										tr
											td Неврологическое отделение
											td
												a.link.link--underline(href="tel:88639470585") 8(86394) 7-05-85
										tr
											td Хирургическое отделение
											td
												a.link.link--underline(href="tel:88639470596") 8(86394) 7-05-96
										tr
											td Пищеблок
											td
												a.link.link--underline(href="tel:88639471053") 8(86394) 7-10-53
										tr
											td Экономический отдел
											td
												a.link.link--underline(href="tel:88639470544") 8(86394) 7-05-44
										tr
											td Отдел кадров
											td
												a.link.link--underline(href="tel:88639470741") 8(86394) 7-07-41
										tr
											td Отдел закупок и договоров
											td
												a.link.link--underline(href="tel:88639470741") 8(86394) 7-07-41
										tr
											td Бухгалтерия
											td
												a.link.link--underline(href="tel:88639470336") 8(86394) 7-03-36
										tr
											td Юридический отдел
											td
												a.link.link--underline(href="tel:88639470741") 8(86394) 7-07-41
										tr
											td Организационно-методический отдел
											td
												a.link.link--underline(href="tel:88639470384") 8(86394) 7-03-84
							commonTable(:tableData="tableData2")
								template(v-slot:tableData)
									thead
										tr
											th ФАП
											th Телефон
									tbody
										tr
											td ФАП п. Виноградный
											td
												a.link.link--underline(href="tel:88639472403") 8(86394) 7-24-03
										tr
											td ФАП п. Мичуринский
											td
												a.link.link--underline(href="tel:88639472983") 8(86394) 7-29-83
										tr
											td ФАП ст.Дубенцовская
											td
												a.link.link--underline(href="tel:88639474488") 8(86394) 7-44-88
										tr
											td ФАП х. Лагутники
											td
												a.link.link--underline(href="tel:88639472159") 8(86394) 7-21-59
										tr
											td ФАП п. Победа
											td
												a.link.link--underline(href="tel:88639473224") 8(86394) 7-32-24
										tr
											td ФАП х. Мокро-Соленый
											td
												a.link.link--underline(href="tel:88639477703") 8(86394) 7-77-03
										tr
											td ФАП х. Калинин
											td
												a.link.link--underline(href="tel:88639475705") 8(86394) 7-57-05
										tr
											td ФАП п. Прогресс
											td
												a.link.link--underline(href="tel:88639473134") 8(86394) 7-31-34
										tr
											td ФАП п. Донской
											td
												a.link.link--underline(href="tel:88639475504") 8(86394) 7-55-04
										tr
											td ФАП х. Сухая Балка
											td
												a.link.link--underline(href="tel:88639475827") 8(86394) 7-58-27
										tr
											td ФАП х. Морозов
											td
												a.link.link--underline(href="tel:88639474218") 8(86394) 7-42-18
										tr
											td ФАП х. Потапов
											td
												a.link.link--underline(href="tel:88639472733") 8(86394) 7-27-33
										tr
											td ФАП ст.Большовская
											td
												a.link.link--underline(href="tel:88639474344") 8(86394) 7-43-44
										tr
											td ФАП х. Ясырев
											td
												a.link.link--underline(href="tel:88639474116") 8(86394) 7-41-16
										tr
											td ФАП х. Холодный
											td
												a.link.link--underline(href="tel:88639474921") 8(86394) 7-49-21
										tr
											td ФАП п. Краснодонский
											td
												a.link.link--underline(href="tel:88639473403") 8(86394) 7-34-03
										tr
											td ФАП х. Солнечный
											td
												a.link.link--underline(href="tel:88639477020") 8(86394) 7-70-20
										tr
											td ФАП х. Паромонов
											td
												a.link.link--underline(href="tel:88639470200") 8(86394) 7-02-00
										tr
											td ФАП п. Савельевский
											td
												a.link.link--underline(href="tel:88639473770") 8(86394) 7-37-70
										tr
											td ФАП п. Сибирьковый
											td
												a.link.link--underline(href="tel:88639473602") 8(86394) 7-36-02
										tr
											td ФАП х. Семенкин
											td
												a.link.link--underline(href="tel:88639473828") 8(86394) 7-38-28
										tr
											td ФАП х. Пирожок
											td
												a.link.link--underline(href="tel:88639474826") 8(86394) 7-48-26
										tr
											td ФАП х. Степной
											td
												a.link.link--underline(href="tel:88639472696") 8(86394) 7-26-96
										tr
											td ФАП п. Саловский
											td
												a.link.link--underline(href="tel:88639475919") 8(86394) 7-59-19
</template>
