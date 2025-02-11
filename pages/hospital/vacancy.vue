<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
		commonArticle
				template(v-slot:title)
					h1.article__title Вакансии
				template(v-slot:text)
					.article__text
						.container
							h2.article__titleInner Вакансии по специальностям врачей на 1 {{Mo}} {{Ye}} года
							ul.article__list
								li
									p Врач-терапевт участковый – 1
								li
									p Врач-оториноларинголог – 1
								li
									p Врач ультразвуковой диагностики –1
								li
									p Врач функциональной диагностики – 1
								li
									p Врач-терапевт – 1
								li
									p Врач-анестезиолог-реаниматолог – 1
							h2.article__titleInner Вакансии по специальностям средних медицинских работников на 1 {{Mo}} {{Ye}} года:
							ul.article__list
								li
									p Заведующий фельдшерско-акушерским пунктом – 4
								li
									p Фельдшер фельдшерского здравпункта – 1
								li
									p Фельдшер скорой медицинской помощи – 2
								li
									p Фельдшер-лаборант –3
								li
									p Медицинская сестра – 1
								li
									p Медицинский статистик – 1
							//- h2.article__titleInner Вакансии по младшему медицинскому персоналу на 1 {{Mo}} {{Ye}} года:
							//- ul.article__list
							//- 	li
							//- 		p Нет вакансий
							//- h2.article__titleInner Вакансии по прочим специальностям на 1 {{Mo}} {{Ye}} года:
							ul.article__list
								li
									p Механик – 1
								li
									p Водитель автомобиля – 1
							.article__strong
								p
									| По всем вопросам трудоустройства обращаться в приемную главного врача по телефону
									a.link.link--underline(href="tel:88639470614")  8(86394) 7-06-14
									|  либо в отдел кадров по телефону
									a.link.link--underline(href="tel:88639470741")  8(86394)7-07-41
</template>

<script setup>
const labels = {
	last: 'Вакансии',
}

const monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const Data = new Date();
const Month = Data.getMonth();
const Year = Data.getFullYear();

const Mo = monthes[Month];
const Ye = Year;

useSeoMeta({
  title: 'Вакансии',
  ogTitle: 'Вакансии',
  description: 'Актуальные вакансии в ЦРБ волгодонского района',
  ogDescription: 'Актуальные вакансии в ЦРБ волгодонского района'
})

</script>
