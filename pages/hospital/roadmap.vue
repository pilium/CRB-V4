<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Дорожная карта
				template(v-slot:text)
					.article__text
						.container
							.files__items
								fileMain(:fileData="fileData.first")
								fileMain(:fileData="fileData.second")
							h2.article__titleInner Изменения к постановлению:
							.files__items
								fileMain(:fileData="fileData.third")
								fileMain(:fileData="fileData.fourth")
								fileMain(:fileData="fileData.fifth")
								fileMain(:fileData="fileData.sixth")
								fileMain(:fileData="fileData.seventh")
								fileMain(:fileData="fileData.eighth")
								fileMain(:fileData="fileData.ninth")
</template>

<script setup>
const labels = {
	last: 'Дорожная карта',
}
const fileData = {
	first: {
		title: 'Постановление Администрации Волгодонского района от 10.04.2013 г № 342',
		size: '251 кб',
		icon: 'pdf',
		href: '/media/files/roadmap/postanovlenie_342.pdf',
		pages: '2',
		date: '10.04.2013г.',
		format: 'pdf',
	},
	second: {
		title: 'План мероприятий ("дорожная карта") «Изменения в отраслях социальной сферы,направленные на повышение эффективности здравоохранения в Волгодонском районе» ',
		size: '251 кб',
		icon: 'doc',
		href: '/media/files/roadmap/dorozhnaja_karta_10.04.13.doc',
		pages: '13',
		date: '10.04.2013г.',
		format: 'doc',
	},
	third: {
		title: 'Постановление Администрации Волгодонского района от 29.07.2014 г № 606 "О внесении изменений в Постановление Администрации Волгодонского района от 10.04.2013 г № 342"',
		size: '991 кб',
		icon: 'pdf',
		href: '/media/files/roadmap/postanovlenie_administracii_volgodonskogo_rajona_6.pdf',
		pages: '3',
		date: '29.07.2014г.',
		format: 'pdf',
	},
	fourth: {
		title: 'Постановление Администрации Волгодонского района от 29.12.2014 г № 1238 "О внесении изменений в Постановление Администрации Волгодонского района от 10.04.2013 г № 342"',
		size: '312 кб',
		icon: 'pdf',
		href: '/media/files/roadmap/postanovlenie_1238_administracii_volgodonskogo_raj.pdf',
		pages: '2',
		date: '29.12.2014г.',
		format: 'pdf',
	},
	fifth: {
		title: '«Изменения в отраслях социальной сферы, направленные на повышение эффективности здравоохранения в Волгодонском районе» " за 12 месяцев 2014 года.',
		size: '71 кб',
		icon: 'zip',
		href: '/media/files/roadmap/volgodonskoj_rajon_vypolnenie_dorozhnoj_karty_2014.doc',
		pages: '2',
		date: '10.02.2015г.',
		format: 'zip',
	},
	sixth: {
		title: '«Изменения в отраслях социальной сферы, направленные на повышение эффективности здравоохранения в Волгодонском районе» " за 12 месяцев 2015 года.',
		size: '74 кб',
		icon: 'doc',
		href: '/media/files/roadmap/vypolnenie_dorozhnoj_karty_2015_18.02.16.doc',
		pages: '3',
		date: '10.02.2016г.',
		format: 'doc',
	},
	seventh: {
		title: '«Изменения в отраслях социальной сферы, направленные на повышение эффективности здравоохранения в Волгодонском районе» " за 12 месяцев 2016 года.',
		size: '75 кб',
		icon: 'doc',
		href: '/media/files/roadmap/vypolnenie_dorozhnoj_karty_2016_10.03.17.doc',
		pages: '3',
		date: '10.02.2017г.',
		format: 'doc',
	},
	eighth: {
		title: '«Изменения в отраслях социальной сферы, направленные на повышение эффективности здравоохранения в Волгодонском районе» " за 12 месяцев 2017 года.',
		size: '66 кб',
		icon: 'doc',
		href: '/media/files/roadmap/dorozhnaja_karta_s_2017_16.01.18.doc',
		pages: '3',
		date: '10.02.2018г.',
		format: 'doc',
	},
	ninth: {
		title: '«Изменения в отраслях социальной сферы, направленные на повышение эффективности здравоохранения в Волгодонском районе» " за 12 месяцев 2018 года.',
		size: '71 кб',
		icon: 'doc',
		href: '/media/files/roadmap/dorozhnaja_karta_s_2018_13.03.19.doc',
		pages: '3',
		date: '10.02.2019г.',
		format: 'doc',
	},
}
useSeoMeta({
  title: 'Дорожная карта',
  ogTitle: 'Дорожная карта',
  description: 'Дорожная карта ЦРБ волгодонского района',
  ogDescription: 'Дорожная карта ЦРБ волгодонского района'
})

</script>
