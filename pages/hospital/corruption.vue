<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>
const labels = {
	last: 'Противодействие коррупции',
}
const TOCData = [
	{title: 'Классификация коррупционных проявлений', anchor: '#classify'},
	{title: 'Причины и условия, порождающие коррупционные проявления в здравоохранении', anchor: '#reason'},
	{title: 'Мероприятия по предупреждению коррупционных проявлений', anchor: '#events'},
	{title: 'Телефоны «горячей линии» по противодействию коррупции', anchor: '#tels'},
	{title: 'План антикоррупционных мероприятий в ГБУ РО "ЦРБ" в Волгодонском районе на 2015 год', anchor: '#plan'},
	{title: 'Дополнительные материалы', anchor: '#dop'},
	{title: 'Документы', anchor: '#docs'},
]
const fileData = {
	first1: {
		title: 'Федеральный закон  от 25.12.2008 N 273-ФЗ "О противодействии коррупции"',
		size: '279 kб',
		icon: 'rtf',
		href: '/media/files/yur/law_273.rtf',
		pages: '48',
		date: '08.08.2024г.',
		format: 'rtf',
	},
	first2: {
		title: 'План мероприятий по противодействия коррупции 2021-2024',
		size: '13 kб',
		icon: 'docx',
		href: '/media/files/yur/plan.docx',
		pages: '4',
		date: '14.12.2020г.',
		format: 'docx',
	},
	first3: {
		title: 'Уведомление работодателя о факте обращения в целях склонения работника к совершению коррупционных правонарушений',
		size: '16 kб',
		icon: 'docx',
		href: '/media/files/yur/note_1.docx',
		pages: '1',
		date: '14.12.2020г.',
		format: 'docx',
	},
	second1: {
		title: 'Федеральный закон от 21.11.2011 N 323-ФЗ Об основах охраны здоровья граждан в РФ',
		size: '261 kб',
		icon: 'docx',
		href: '/media/files/yur/law_323.docx',
		pages: '142',
		date: '09.11.2011г.',
		format: 'docx',
	},
	second2: {
		title: 'Отчет по плану мероприятий 2022',
		size: '55 kб',
		icon: 'doc',
		href: '/media/files/yur/report_2022.doc',
		pages: '7',
		date: '19.02.2023г.',
		format: 'doc',
	},
	second3: {
		title: 'Уведомление о возникновении личной заинтересованности при исполнении должностных обязанностей',
		size: '16 kб',
		icon: 'docx',
		href: '/media/files/yur/note_2.docx',
		pages: '1',
		date: '19.02.2023г.',
		format: 'doc',
	},
	third1: {
		title: 'Областной закон Ростовской области от 12.05.2009 N 218-ЗС "О противодействии коррупции в Ростовской области"',
		size: '219 kб',
		icon: 'doc',
		href: '/media/files/yur/law_.doc',
		pages: '30',
		date: '23.04.2009г.',
		format: 'doc',
	},
	third2: {
		title: 'Отчет по плану мероприятий 2023',
		size: '55 kб',
		icon: 'doc',
		href: '/media/files/yur/report_2023.doc',
		pages: '7',
		date: '19.02.2024г.',
		format: 'doc',
	},
	third3: {
		title: 'Уведомление о факте коррупции',
		size: '8 kб',
		icon: 'docx',
		href: '/media/files/yur/note_3.docx',
		pages: '1',
		date: '19.02.2023г.',
		format: 'doc',
	},
	fourth1: {
		title: 'Постановление Правительства РО от 26.02.2013 N 92 О представлении лицом, поступающим на должность руководителя',
		size: '88 kб',
		icon: 'docx',
		href: '/media/files/yur/post_92.docx',
		pages: '22',
		date: '09.11.2011г.',
		format: 'docx',
	},
	first: {
		title: 'Приказ "Об утверждении Кодекса этики и служебного поведения (деонтологии) работников ГБУ РО ЦРБ в Волгодонском районе"',
		size: '16.2 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_429.pdf',
		pages: '19',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	second: {
		title: 'Приказ 446 от 30.12.2022 Об утверждении положения о комиссии по соблюдению требований к служебному поведению',
		size: '4.95 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_446.pdf',
		pages: '7',
		date: '30.12.2022г.',
		format: 'pdf',
	},
	third: {
		title: 'Об утверждении Порядка уведомления Работодателя о фактах обращения в целях склонения работника ГБУ РО ЦРБ в Волгодонском районе к совершению коррупционных правонарушений>',
		size: '7.24 кб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_431.pdf',
		pages: '13',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	fourth: {
		title: 'Об утверждении положения о конфликте интересов работников в ГБУ РО ЦРБ в Волгодонском районе',
		size: '15.9 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_432.pdf',
		pages: '24',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	fifth: {
		title: 'О создании комиссии по противодействию коррупции и по предотвращению и уреryлированию конфликта интересов в ГБУ РО ЦРБ в Волгодонском районе',
		size: '5.05 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_433.pdf',
		pages: '7',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	sixth: {
		title: 'О назначении ответственных лиц за профилактику коррупционных и иных правонарушений в ГБУ РО ЦРБ в Волгодонском районе',
		size: '2.33 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_434.pdf',
		pages: '3',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	seventh: {
		title: 'Об утверждении положения об антикоррупционной политике в ГБУ РО ЦРБ в Волгодонском районе',
		size: '14.6 мб',
		icon: 'pdf',
		href: '/media/files/yur/prikaz_435.pdf',
		pages: '20',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	eighth: {
		title: 'Обзор судебной практики за 1 полугодие 2022',
		size: '249 кб',
		icon: 'pdf',
		href: '/media/files/yur/yur_1.pdf',
		pages: '49',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	ninth: {
		title: 'Обзор судебной практики за 2 полугодие 2022',
		size: '319 кб',
		icon: 'pdf',
		href: '/media/files/yur/yur_2.pdf',
		pages: '68',
		date: '11.01.2023г.',
		format: 'pdf',
	},
	twelve: {
		title: 'О необходимости соблюдения положений антикоррупционного законодательства, содержащих запрет на дарение подарков',
		size: '16 kб',
		icon: 'docx',
		href: '/media/files/gift.docx',
		pages: '1',
		date: '23.12.2024г.',
		format: 'docx',
	},
	thirteen: {
		title: 'Отчет о реализации плана мероприятий по противодействию коррупции на 2021-2024 годы',
		size: '56 kб',
		icon: 'doc',
		href: '/media/files/2024.doc',
		pages: '7',
		date: '15.01.2025г.',
		format: 'doc',
	},
	thirteen1: {
		title: 'Об утверждении плана мероприятий по противодействию коррупции в ГБУ РО ЦРБ в Волгодонском районе на 2025-2026 года>',
		size: '2.1 мб',
		icon: 'pdf',
		href: '/media/files/plan_cor.pdf',
		pages: '4',
		date: '15.01.2025г.',
		format: 'pdf',
	}
}

</script>
<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Противодействие коррупции
				template(v-slot:toc)
					commonToc(:data="TOCData")
				template(v-slot:text)
					.article__text
						.container
							.article__strong
							h2#classify.article__titleInner Классификация коррупционных проявлений, совершаемых в здравоохранении, делится на три группы:
							ul.article__list
								li
									p коррупционные проявления, непосредственно связанные с должностной деятельностью медицинских работников;
								li
									p коррупционные проявления, связанные с отношениями собственности в здравоохранении;
								li
									p коррупционные проявления медицинских работников, непосредственно связанные с медицинской деятельностью.
							h2#reason.article__titleInner Причины и условия, порождающие коррупционные проявления в здравоохранении можно разделить на следующие группы:
							ul.article__list
								li
									p
										| экономические (резкая дифференциация населения по имущественному признаку, экономическая нестабильность и др.);
										| политические (неразвитость института общественного контроля, недостаточно высокий уровень подготовки управленческих кадров, коррупция при обучении в медицинских ВУЗах и др.);
								li
									p социальные (несоответствие роста потребностей и возможностей их удовлетворения, неравенство трудовых и бытовых условий различных категорий медицинских работников, недовольство общества состоянием здравоохранения в стране и др.);
								li
									p организационные (недостатки контрольно-ревизионных мероприятий, недостаточная регламентация служебной деятельности медицинских работников, недостатки кадровой политики при назначении на руководящие должности в здравоохранении);
								li
									p правовые (наличие в законодательстве коррупционных норм и правовых пробелов); нравственно-духовные (преломление норм морали).
							h2#events.article__titleInner Необходимо провести следующие мероприятия по предупреждению коррупционных проявлений в здравоохранении:
							ol.article__list
								li
									p
										b В сфере социально-экономических отношений:
									ul.article__list
										li
											p проведение экономических преобразований, направленных на пресечение коррупции как средства решения деловых вопросов;
										li
											p совершенствование системы оплаты труда медицинских работников;
										li
											p информирование пациентов об их правах и обязанностях и многоуровневый механизм защиты их прав.
								li
									p
										b В организационной сфере:
									ul.article__list
										li
											p совершенствование контроля над эффективностью использования бюджетных средств, выделяемых на здравоохранение;
										li
											p открытость деятельности медицинских учреждений;
										li
											p организационный контроль за медицинской деятельностью.
								li
									p
										b В сфере политических отношений:
									ul.article__list
										li
											p укрепление государственности;
										li
											p усиление демократических начал;
										li
											p развитие общественного контроля;
										li
											p развитие интерактивных систем обратной связи населения с представителями государственной и муниципальной власти.
								li
									p
										b В духовной сфере общественной жизни:
									ul.article__list
										li
											p внедрение механизмов антикоррупционного воспитания населения;
										li
											p развитие идей социальной справедливости;
										li
											p повышения уровня правовой культуры молодых специалистов, выработка ответственного профессионального и высоконравственного поведения медицинских работников.
								li
									p
										b В сфере интеллектуальных технологий и научного развития:
									ul.article__list
										li
											p выявление и обобщение проявлений коррупции в здравоохранении;
										li
											p постоянное изучение причин и условий, способствующих развитию коррупции;
								li
									p
										b В правовой сфере:
									ul.article__list
										li
											p четкая законодательная регламентации мер по противодействию коррупции;
										li
											p искоренение правовых пробелов, дублирования и двусмысленности права;
										li
											p постоянное совершенствование методики проведения антикоррупционной экспертизы законодательных актов;
										li
											p внедрение системы обязательного учета экспертного мнения врачебного сообщества при разработке и принятии законодательных актов в сфере здравоохранения.
							h2#tels.article__titleInner Телефоны «горячей линии» по противодействию коррупции:
							ul.article__list
								li
									p
										b Правительство Ростовской области:
										a.link.link--underline(href="tel:88632407236")  8(863) 240-72-36
								li
									p
										b Прокуратура Ростовской области:
										a.link.link--underline(href="tel:88632624776")  8(863) 262-47-76
								li
									p
										b ГУ МВД России по Ростовской области:
										a.link.link--underline(href="tel:88632492477")  8(863) 249-24-77
										| (круглосуточно)
								li
									p
										b Администрация Волгодонского района:
										a.link.link--underline(href="tel:88639471116")  8(86394) 7-11-16
								li
									p
										b Волгодонской Межрайонный следственный отдел:
										a.link.link--underline(href="tel:88639471112")  8(86394) 7-11-12
							.article__links
								h2#dop.article__titleInner Дополнительные материалы
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=236&Itemid=404") Нормативно-правовые акты
									Icon(name="my-icon:external-link" class="article__link-img" title="Нормативно-правовые акты")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=238&Itemid=405") Методические материалы
									Icon(name="my-icon:external-link" class="article__link-img" title="Методические материалы")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=237&Itemid=406") Мониторинг
									Icon(name="my-icon:external-link" class="article__link-img" title="Мониторинг")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=239&Itemid=407") Формы
									Icon(name="my-icon:external-link" class="article__link-img" title="Формы")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=240&Itemid=408") Аттестационная комиссия
									Icon(name="my-icon:external-link" class="article__link-img" title="Аттестационная комиссия")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=241&Itemid=410") Комиссия по противодействию коррупции
									Icon(name="my-icon:external-link" class="article__link-img" title="Комиссия по противодействию)коррупции")
								.article__link-wrap
									a.link(href="http://volgodonskoiraion.ru/index.php?option=com_content&task=blogcategory&id=242&Itemid=409") Новости
									Icon(name="my-icon:external-link" class="article__link-img" title="Новости")
							commonFiles
								template(v-slot:file)
									fileMain(:fileData="fileData.first1")
									fileMain(:fileData="fileData.second1")
									fileMain(:fileData="fileData.third1")
									fileMain(:fileData="fileData.fourth1")
									fileMain(:fileData="fileData.first")
									fileMain(:fileData="fileData.second")
									fileMain(:fileData="fileData.third")
									fileMain(:fileData="fileData.fourth")
									fileMain(:fileData="fileData.fifth")
									fileMain(:fileData="fileData.sixth")
									fileMain(:fileData="fileData.seventh")
									fileMain(:fileData="fileData.eighth")
									fileMain(:fileData="fileData.ninth")
									fileMain(:fileData="fileData.twelve")
									fileMain(:fileData="fileData.thirteen")
									fileMain(:fileData="fileData.thirteen1")
</template>
