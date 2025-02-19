<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Независимая оценка качества
				template(v-slot:text)
					.article__text
						.container
							h2.article__titleInner Уважаемые пациенты!
							.article__strong
								p Вы можете оценить качество медицинских услуг, представляемых в амбулаторных и стационарных условиях ГБУ РО "ЦРБ" в Волгодонском районе заполнив интерактивную анкету «независимая оценка качества оказания услуг медицинской организации».
								a(href="http://anketa.rosminzdrav.ru/staticogvjustank/61/1" target="_blank")
									figure
										<img class="contacts__img" src="/media/nok.jpg" alt="Независимая оценка качества">
										figcaption.hide-text Независимая оценка качества
							figure
								<img class="contacts__img" src="/media/plakat.png" alt="Независимая оценка качества">
								figcaption.hide-text Независимая оценка качества
							p Независимая оценка качества оказания услуг медицинскими организациями является формой общественного контроля деятельности медицинских организаций и предусматривает оценку условий оказания услуг медицинскими организациями по следующим общим критериям:
							ul.article__list
								li
									p открытость и доступность информации об организации
								li
									p комфортность условий предоставления медицинских услуг и доступность их получения
								li
									p время ожидания предоставления медицинской услуги
								li
									p доброжелательность, вежливость, компетентность работников медицинской организации
								li
									p удовлетворенность оказанными медицинскими услугами
							p
								b Целями проведения
								|  независимой оценки качества оказания услуг медицинскими организациями являются:
							ul.article__list
								li
									p обеспечение граждан информацией о деятельности медицинских организаций
								li
									p улучшение информированности потребителей медицинских услуг о деятельности медицинских организаций
								li
									p оценка отдельных показателей деятельности медицинских организаций и своевременное принятие мер, направленных на повышение эффективности или оптимизацию их деятельности
								li
									p своевременное выявление негативных факторов, влияющих на качество организации оказания медицинской помощи, и их устранение
								li
									p повышение качества организации оказания медицинской помощи
								li
									p развитие диалога и сотрудничества между медицинскими организациями и различными структурами гражданского общества
							p Независимая оценка качества оказания услуг медицинскими организациями
								b  призвана решить следующие задачи:
							ul.article__list
								li
									p повышение информированности населения по вопросам организации оказания медицинской помощи
								li
									p получение сведений от граждан — получателей медицинских услуг о практике предоставления данных услуг медицинскими организациями
								li
									p установление соответствия представления информации о работе медицинской организации на ее официальном сайте в сети "Интернет" показателям полноты, актуальности, удобства для посетителей (пациентов) медицинских организаций и иных заинтересованных граждан
								li
									p разработка предложений по повышению качества работы медицинских организаций
								li
									p повышение качества работы медицинских организаций
							p В ходе проведения независимой оценки качества оказания услуг медицинскими организациями
								b оцениваются:
							ul.article__list
								li
									p соответствие информационного наполнения и технологических свойств официальных сайтов медицинских организаций в сети «Интернет», оценка информационного наполнения и доступности для восприятия информационных и справочных материалов, размещенных в медицинской организации, требованиям законодательства Российской Федерации
								li
									p наличие необходимой инфраструктуры и условий, характеризующих внешнее и внутреннее благоустройство и комфортность пребывания посетителей, в объеме, удовлетворяющем общественные ожидания, интересы и потребности пациентов (посетителей) медицинских организаций, в том числе лиц с ограничениями жизнедеятельности
								li
									p оответствие качества организации процесса приема пациентов (посетителей), включая процедуру записи на прием к врачу
								li
									p оценка общей удовлетворенности пациентов (посетителей) результатом предоставления медицинских услуг медицинской организацией
							p Участвовать в проведении независимой оценки качества оказания услуг медицинскими организациями могут:
							ul.article__list
								li
									p медицинские организации. Общественные (попечительские, наблюдательные) советы медицинских организаций
								li
									p граждане — потребители медицинских услуг
							figure.article__figure
								img.article__img(src="/media/files/nok/nok_crb.jpg", alt="Приглашение на сайт независимой оценки качества медицинских услуг")
								figcaption.hide-text Приглашение на сайт независимой оценки качества медицинских услуг
							commonFiles
								template(v-slot:file)
									fileMain(:fileData="fileData.first")
									fileMain(:fileData="fileData.second")
</template>

<script setup>
const fileData = {
	first: {
		title: 'Показатели оценки качества оказания услуг в амбулаторных условиях',
		size: '46 кб',
		icon: 'doc',
		href: '/media/files/nok/quality_marks.docx',
		pages: '6',
		date: '21.01.2022г.',
		format: 'docx',
	},
	second: {
		title: 'Показатели оценки качества оказания услуг в стационарных условиях',
		size: '49 кб',
		icon: 'doc',
		href: '/media/files/nok/quality_marks2.docx',
		pages: '6',
		date: '21.01.2022г.',
		format: 'docx',
	},
}

useSeoMeta({
  title: 'Независимая оценка качества',
  ogTitle: 'Независимая оценка качества',
  description: 'Независимая оценка качества предоставляемых услуг в ЦРБ волгодонского района',
  ogDescription: 'Независимая оценка качества предоставляемых услуг в ЦРБ волгодонского района'
})
const labels = {
	last: 'Независимая оценка качества',
}
</script>
