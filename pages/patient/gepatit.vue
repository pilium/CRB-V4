<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Всемирный день борьбы с гепатитом
				template(v-slot:text)
					.article__text
						.container
							p За последние годы быстрый прогресс в разработке новых подходов к лечению вирусного гепатита С позволил за 2-3 месяца полностью излечивать хронический гепатит С у 98-100% пациентов.
							p В июне 2021 года Минздрав России создал рабочую группу в целях реализации поручения Президента РФ по разработке мер борьбы с гепатитом С в России;
							p На данный момент, в нашей стране зарегистрированы самые современные и эффективные схемы лечения гепатита С.
							.article__img
								img(src="/media/gepatit/1.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/2.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/3.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/4.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/5.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/6.jpg", alt="О гепатите")
							.article__img
								img(src="/media/gepatit/7.jpg", alt="О гепатите")
</template>

<script setup>

useSeoMeta({
  title: 'Всемирный день борьбы с гепатитом',
  ogTitle: 'Всемирный день борьбы с гепатитом',
  description: 'Главное о гепатитах, их профилактике и причинах заражения в наших карточках',
  ogDescription: 'Главное о гепатитах, их профилактике и причинах заражения в наших карточках'
})
const labels = {
	last: 'Всемирный день борьбы с гепатитом',
}
</script>
