<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Администрация больницы
				template(v-slot:text)
					.article__text
						.container
							.expert(v-for="item, index in expert" :key="index")
								<ExpertItem :expert="expert[index]"/>
</template>
<script setup>
const labels = {
	last: 'Администрация',
}
const expert = [
	{
		src: '/media/administration/gldoc.jpg',
		name: 'Найденов Сергей Юрьевич',
		job: 'Главный врач',
		edu: 'Ростовский государственный медицинский университет, 2001 г.',
		up: 'Периодическая аккредитация по специальности "Терапия" в 2022г, Периодическая аккредитация по специальности "Организация здравоохранения и общественное здоровье" в 2023 году',
		category: 'Отсутствует',
	},
	{
		src: '/media/administration/kim.jpg',
		name: 'Ким Любовь Михайловна',
		job: 'Заместитель по медицинскому обслуживанию',
		edu: 'Ростовский ордена Дружбы народов медицинский институт, в 1985году.',
		up: 'Организация здравоохранения и общественное здоровье, в 2019 году.',
		cert: '2019 г. "Организация здравоохранения и общественное здоровье"',
		category: 'Первая, 2014 г.',
	},
	{
		src: '/media/administration/shumilov.jpg',
		name: 'Шумилов Анатолий Владимирович',
		job: 'Заместитель по АХЧ',
	},
	{
		src: '/media/default-img.png',
		name: 'Вишневская Ирина Ивановна',
		job: 'И.О. заместителя по экономическим вопросам',
	},
	{
		src: '/media/administration/tulubickaya.jpg',
		name: 'Тулубицкая Римма Водотовна',
		job: 'Главный бухгалтер',
	},
	{
		src: '/media/administration/bulgakova.jpg',
		name: 'Булгакова Татьяна Константиновна',
		job: 'Начальник отдела кадров',
	},
	{
		src: '/media/administration/goncharova.jpg',
		name: 'Гончарова Виктория Викторовна',
		job: 'Главная медицинская сестра',
	},
	{
		src: '/media/administration/avramenko.jpg',
		name: 'Авраменко Наталья Николаевна',
		job: 'Секретарь главного врача',
	},
]
useSeoMeta({
  title: 'Администрация',
  ogTitle: 'Администрация',
  description: 'Администрация ЦРБ волгодонского района',
  ogDescription: 'Администрация ЦРБ волгодонского района'
})
</script>
<style lang="scss" scoped>
.container--title { margin-bottom: 16px; }
</style>
