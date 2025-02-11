<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
		commonArticle
				template(v-slot:title)
					h1.article__title Платные услуги
				template(v-slot:toc)
					commonToc(:data="TOCData")
				template(v-slot:text)
					.article__text
						.container
							h2#schedule.article__titleInner График работы медицинского персонала по оказанию платных медицинских услуг ГБУ РО "ЦРБ" в Волгодонском районе на 2024 год
							commonTable(:tableData="tableData")
								template(v-slot:tableData)
									thead
										tr
											th Ф.И.О.
											th Должность
											th Часы приема
									tbody
										tr
											td Ильин А.В.
											td Врач-хирург
											td 16:20 – 19:00
										tr
											td Казимов А.К.
											td Врач-терапевт участковый
											td 16:20 – 19:00
										tr
											td Раджапов Б.Б.
											td Заведующий поликлиникой врач-терапевт
											td
												p Пн, Ср, Пт – 08:00-09:00
												p Вт, Чт - 17:00–19:00
										tr
											td Андара М. Ч.
											td Врач акушер-гинеколог
											td 16:20 – 19:00

										tr
											td Дарянов С.М.
											td Врач-терапевт участковый
											td 16:20 – 19:00
										tr
											td Рамизов Б.Ф.
											td Врач-невролог
											td 16:20 – 19:00
										tr
											td Поднебесная М.В.
											td Заместитель главного врача по медицинской части
											td 08:00 – 12:00
										tr
											td Глогусь Л.Н.
											td Врач- стоматолог
											td 15:45 – 18:00
										tr
											td Емельянченко Л.Н.
											td Врач-стоматолог
											td 15:45 – 18:00
										tr
											td Гутовская Т.Г.
											td Зубной врач
											td 15:45 – 18:00
										tr
											td Тупалов М.А.
											td Зубной врач
											td 16:20 – 19:00
										tr
											td Суворова С.А.
											td Зубной врач
											td 15:45 – 18:00
										tr
											td Власова Ю.С.
											td Врач УЗИ
											td 15:45 – 18:00
										tr
											td Жуков И. Е.
											td Врач-хирург
											td 16:20 – 19:00
							commonTable(:tableData="tableData2")
								template(v-slot:tableData)
									thead
										tr
											th Отделение
											th Часы приема
									tbody
										tr
											td Хирургическое отделение
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Неврологическое отделение
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Терапевтическое отделение
											td 15ч.45мин. – 18ч.00мин.
							commonTable(:tableData="tableData3")
								template(v-slot:tableData)
									thead
										tr
											th Подразделения
											th Часы приема
									tbody
										tr
											td Клинико-диагностическая лаборатория
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Рентгенкабинет
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Физиотерапевтический кабинет
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Кабинет массажа
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Кабинет функциональной диагностики
											td 15ч.45мин. – 18ч.00мин.
										tr
											td Кабинет ультразвуковой диагностики
											td 15ч.45мин. – 18ч.00мин.
							h2#prof.article__titleInner Перечень документов, представляемых Предприятием-Заказчиком для организации проведения периодического медицинского осмотра в ГБУ РО "ЦРБ" в Волгодонском районе
							ol.article__list
								li
									p Перечень документов, представляемых Предприятием-Заказчиком для организации проведения периодического медицинского осмотра в ГБУ РО "ЦРБ" в Волгодонском районе
									ul.article__list
										li
											p Реквизиты предприятия банковские и юридические с именами руководителей и лиц, ответственных за проведение медосмотра.
										li
											p
												| Перечень контингентов, подлежащих предварительным периодическим медицинским осмотрам,
												| поименный список лиц, подлежащих периодическим медицинским осмотрам в ЛПУ, (в 3-х
												| экземплярах).В списках обязательно должны быть следующие сведения:
											ul
												li
													p Указаны полностью фамилию, имя, отчество работника, а также дату, месяц и год рождения
												li
													p
														| Вредные и/или опасные факторы работы в обязательном порядке должны быть указаны в
														| соответствии с их наименованием, а также указанных их номера, соответствующие пунктам
														| Приказа Минздравсоцразвития России №302н от 12 апреля 2011 г.
												li
													p Номера полисов ОМС (следует информировать всех обследуемых о предоставлении в обязательном порядке полиса и паспорта при прибытии на мед.осмотр);
								li
									p
										| Для проведения периодического медицинского осмотра после заключения договора и для
										| оформления заключительного акта необходимо представить дополнительную информацию
								li
									p
										| Лицам, проходящим мед. осмотр самостоятельно, требуется направление из отдела кадров
										| организации, в которую он оформляется, с указанием вредных факторов, вида выполняемых
										| работ, заверенное печатью и подписью организации.
								p
									| Порядок проведения предварительных и периодических медицинских осмотров работающих с
									| 01.01.2012 г. определен приказом МЗ и СР РФ от 12.04.2011 г. № 302Н и не предполагает
									| согласования контингентов и пофамильных списков работающих, подлежащих периодическим
									| медицинским осмотрам, с органами Роспотребнадзора.
								p
									| При этом на работодателей возлагается обязанность по уведомлению территориальных органов
									| Роспотребнадзора об утвержденных контингентах.
								p
									| В этой связи вышеуказанное уведомление об утвержденных контингентах работающих,
									| подлежащих периодическим медицинским осмотрам, в соответствии с требованиями приложения №
									| 1 к настоящему приказу, работодатели Волгодонского района могут направить в электронном
									| виде или по почте.
							commonFiles
								template(v-slot:file)
									fileMain(:fileData="fileData.first")
									fileMain(:fileData="fileData.second")
									fileMain(:fileData="fileData.third")
									fileMain(:fileData="fileData.fourth")
									fileMain(:fileData="fileData.fifth")
									fileMain(:fileData="fileData.fourteen")
									fileMain(:fileData="fileData.fourteen_1")
									fileMain(:fileData="fileData.fourteen_2")
</template>

<script setup>
const labels = {
	last: 'Платные услуги',
}
const TOCData = [
	{title: 'График работы медицинского персонала по оказанию платных медицинских услуг', anchor: '#schedule'},
	{title: 'Проведения периодического медицинского осмотра в ГБУ РО "ЦРБ" в Волгодонском районе', anchor: '#prof'},
	{title: 'Документы по платным услугам', anchor: '#docs'},
]
const tableData = {
	caption: 'В поликлинике',
	tableClass: 'table--schedule',
}
const tableData2 = {
	caption: 'Прием пациентов в отделениях',
	tableClass: 'table--schedule',
}
const tableData3 = {
	caption: 'Вспомогательные подразделения',
	tableClass: 'table--schedule',
}
const fileData = {
first: {
	title: 'Приказ "Об утверждении цен на платные медицинские услуги"',
	size: '467 кб',
	icon: 'pdf',
	href: '/media/files/payment/prikaz3.pdf',
	pages: '1',
	date: '09.01.2023г.',
	format: 'pdf',
},
second: {
	title: 'Приложение к Приказу "Об утверждении цен на платные медицинские услуги"',
	size: '65 кб',
	icon: 'pdf',
	href: '/media/files/payment/pril_2.pdf',
	pages: '1',
	date: '09.01.2023г.',
	format: 'pdf',
},
third: {
	title: 'Договор об оказании платных медицинских услуг',
	size: '4,73 мб',
	icon: 'pdf',
	href: '/media/files/payment/dogovor.pdf',
	pages: '5',
	date: '19.01.2024г.',
	format: 'pdf',
},
fourth: {
	title: 'Приказ "О создании комиссии, осуществляющей предварительные и периодические медицинские осмотры, для освидетельствования на приобретение оружия и допуск у кправлению транспортными средствами на 2017 год"',
	size: '6.08 мб',
	icon: 'pdf',
	href: '/media/files/payment/o_sozdanii_komiscii_po_mo.pdf',
	pages: '8',
	date: '09.01.2024г.',
	format: 'pdf',
},
fifth: {
	title: 'Закон РФ N 2300-I "О защите прав потребителей"',
	size: '575 кб',
	icon: 'doc',
	href: '/media/files/payment/order.doc',
	pages: '46',
	date: '04.08.2023г.',
	format: 'doc',
},
sixth: {
	title: 'Постановление Об утверждении правил предоставления медицинскими организациями платных медицинских услуг',
	size: '203 кб',
	icon: 'rtf',
	href: '/media/files/payment/postanovlenie.rtf',
	pages: '13',
	date: '11.05.2023г.',
	format: 'rtf',
},
sixth_1: {
	title: 'Положение о предоставлении платных медицинских услуг',
	size: '12,1 мб',
	icon: 'pdf',
	href: '/media/files/payment/polojenie-1.pdf',
	pages: '13',
	date: '27.11.2023г.',
	format: 'pdf',
},
seventh: {
	title: 'Образец формы документа № 3',
	size: '30 кб',
	icon: 'doc',
	href: '/media/files/payment/obrazec_formy_3_profosmotr.doc',
	pages: '1',
	date: '12.04.2019г.',
	format: 'doc',
},
eighth: {
	title: 'Образец формы документа № 4',
	size: '37 кб',
	icon: 'doc',
	href: '/media/files/payment/obrazec_4_profosmotr.doc',
	pages: '1',
	date: '12.04.2019г.',
	format: 'doc',
},
ninth: {
	title: 'Адрес и форма уведомления',
	size: '38 кб',
	icon: 'doc',
	href: '/media/files/payment/rospotrebnadzor_5.doc',
	pages: '1',
	date: '12.04.2011г.',
	format: 'doc',
},
tenth: {
	title: 'Разрешения Администрации Волгодонского района № 1 от 15 августа 2012 г.',
	size: '139 кб',
	icon: 'jpg',
	href: '/media/files/payment/razreshenie.jpg',
	pages: '1',
	date: '15.08.2012г.',
	format: 'jpg',
},
eleventh: {
	title: 'Состав медицинского персонала оказывающего платные медицинские услуги населению',
	size: '276 кб',
	icon: 'pdf',
	href: '/media/files/payment/pay_sostav.pdf',
	pages: '2',
	date: '29.12.2020г.',
	format: 'pdf',
},
twelve: {
	title: 'Постановление Администрации Волгодонского района № 539 от 26.10.2016 г. "О внесении изменений в Постановление Администрации Волгодонского района № 682 от 03.11.2015 г."',
	size: '148 кб',
	icon: 'pdf',
	href: '/media/files/payment/postanovlenie_539.pdf',
	pages: '2',
	date: '26.10.2016г.',
	format: 'pdf',
},
thirteen: {
	title: 'Постановление Правительства РО от 23.11.2017 № 783 "О территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Ростовской области на 2019 год и на плановый период 2020 и 2021 годов"',
	size: '3.74 мб',
	icon: 'pdf',
	href: '/media/files/payment/files_6114201711270004.pdf',
	pages: '151',
	date: '23.11.2017г.',
	format: 'pdf',
},
fourteen: {
	title: 'Прейскурант цен на платные услуги',
	size: '6.7 мб',
	icon: 'pdf',
	href: '/media/files/payment/files_prejskurant_cen.pdf',
	pages: '9',
	date: '17.01.2024г.',
	format: 'pdf',
},
fourteen_1: {
	title: 'Прейскурант цен на платные услуги (КДЛ)',
	size: '819 кб',
	icon: 'pdf',
	href: '/media/files/payment/KDL.pdf',
	pages: '2',
	date: '09.01.2023г.',
	format: 'pdf',
},
fourteen_2: {
	title: 'Прейскурант цен на платные услуги (предрейсовый)',
	size: '741 кб',
	icon: 'pdf',
	href: '/media/files/payment/reys.pdf',
	pages: '2',
	date: '09.01.2024г.',
	format: 'pdf',
},
fifteen: {
	title: 'Приказ 384 "О платных медуслугах" на 2021 год.',
	size: '1 мб',
	icon: 'pdf',
	href: '/media/files/payment/prikaz_o_pmu.pdf',
	pages: '2',
	date: '29.12.2020г.',
	format: 'pdf',
},
sixteen: {
	title: 'Приказ 385 "Об утверждении порядка и расчета предоставления платных медицинских услуг на 2021 год.',
	size: '530 кб',
	icon: 'pdf',
	href: '/media/files/payment/prikaz_385.pdf',
	pages: '1',
	date: '29.12.2020г.',
	format: 'pdf',
},
seventeen: {
	title: 'Приказ от 18.02.2016 № 47 "Об утверждении Положения о порядке предоставления платных медицинских услуг"',
	size: '1.79 мб',
	icon: 'pdf',
	href: '/media/files/payment/pay__order.pdf',
	pages: '15',
	date: '15.08.2018г.',
	format: 'pdf',
	addition: true,
	additionlink: '/media/files/payment/prilojenie_pay_order.rar',
},
eighteen: {
	title: 'Приказ 387 "О создании комиссии по организации платных медицинских услуг" на 2021 год',
	size: '488 кб',
	icon: 'pdf',
	href: '/media/files/payment/prikaz_387.pdf',
	pages: '1',
	date: '29.12.2020г.',
	format: 'pdf',
},
nineteen: {
	title: 'Приказ о медицинском освидетельствовании (осмотре) водителей на 2021 год',
	size: '507 кб',
	icon: 'pdf',
	href: '/media/files/payment/prikaz_388.pdf',
	pages: '1',
	date: '29.12.2020г.',
	format: 'pdf',
},
}

useSeoMeta({
  title: 'Платные услуги',
  ogTitle: 'Платные услуги',
  description: 'Информация о платных услугах ЦРБ волгодонского района',
  ogDescription: 'Информация о платных услугах ЦРБ волгодонского района'
})
</script>
