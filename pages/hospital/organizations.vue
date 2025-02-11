<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Вышестоящие организации
				template(v-slot:text)
					.article__text
						.container
							.article__item-wrapper
								.article__item(v-for="item, index in items" :key="index")
									.article__item-info
										h2.article__titleInner {{ item.title }}
										.article__item-in.f
											img(:src="item.img")
											.info
												p
													span Адрес:
													|  {{ item.address }}
												p
													span {{ item.job.title }}
													strong  {{ item.job.minister }}
												p
													span Телефон приемной:
													a.link.link--underline(href="item.tel.href")  {{ item.tel.frm }}
												p
													span Ссылка на сайт:
													a.link.link--underline(:href="item.link" target="_blank" rel="noopener noreferrer")  {{ item.link }}
</template>

<script setup>
const items = [
	{
		title: 'Министерство здравоохранения Ростовской области',
		img: '/media/organizations/mzro.jpg',
		address: '344029 г. Ростов-на Дону Ул. 1-ой Конной Армии,33',
		job: {
			title: 'Министр здравоохранения:',
			minister: 'Кобзев Юрий Владимирович',
		},
		tel: {
			href: 88632424109,
			frm: '8(863) 242-41-09',
		},
		link: 'https://www.minzdrav.donland.ru',
	},
	{
		title: 'Территориальный фонд обязательного медицинского страхования Ростовской области',
		img: '/media/organizations/rofoms2.png',
		address: '344000 г. Ростов-на Дону Ул. Варфоломеева, 261/81',
		job: {
			title: 'Директор ТФОМС:',
			minister: 'Григорьев Максим Олегович',
		},
		tel: {
			href: 88632349022,
			frm: '8(863) 234-90-22',
		},
		link: 'https://rostov-tfoms.ru/',
	},
	{
		title: 'Администрация Волгодонского района',
		img: '/media/organizations/administracija.jpg',
		address: '347350 Ростовская область Волгодонской район ст.Романовская ул.Почтовая 13',
		job: {
			title: 'И.о.главы Администрации района:',
			minister: 'Леонова Светлана Владимировна',
		},
		tel: {
			href: 88639470130,
			frm: '8(86394) 7-01-30',
		},
		link: 'https://volgodonr.donland.ru/',
	},
	{
		title: 'Государственное бюджетное учреждение Ростовской области "Медицинский информационно-аналитический центр"',
		img: '/media/organizations/miac.jpg',
		address: '344029 г. Ростов-на Дону пр.Сельмаш, 14',
		job: {
			title: 'и.о начальника:',
			minister: 'Жиляков Сергей Александрович',
		},
		tel: {
			href: 88632522103,
			frm: '8(863) 252-21-03',
		},
		link: 'https://www.miacrost.ru',
	},
	{
		title: 'Федеральная служба по надзору в сфере здравоохранения',
		img: '/media/organizations/roszdravnadzor.jpg',
		address: '344037 г. Ростов-на-Дону, ул.Ченцова 71/63 "б"',
		job: {
			title: 'Руководитель:',
			minister: 'Полинская Татьяна Алексеевна',
		},
		tel: {
			href: 88632510592,
			frm: '8(863) 251-05-92',
		},
		link: 'https://61reg.roszdravnadzor.gov.ru/',
	},
	{
		title: 'Управление федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Ростовской области',
		img: '/media/organizations/rospotrebnadzor.png',
		address: '344019 г. Ростов-на Дону ул. 18 линия, 17',
		job: {
			title: 'Руководитель:',
			minister: 'Ковалев Евгений Владимирович',
		},
		tel: {
			href: 88632510592,
			frm: '8(863) 251-05-92',
		},
		link: 'https://www.rospotrebnadzor.ru',
	},
]
const labels = {
	last: 'Вышестоящие организации',
}
useSeoMeta({
  title: 'Вышестоящие организации',
  ogTitle: 'Вышестоящие организации',
  description: 'Информация о вышестоящих организациях ЦРБ волгодонского района',
  ogDescription: 'Информация о вышестоящих организациях ЦРБ волгодонского района'
})
</script>

<style lang="scss">
h2.article__titleInner {
	text-align: left;
}

.article__item-in {
	img { width: 200px; }
	.info { margin-left: 32px; }
}
</style>
