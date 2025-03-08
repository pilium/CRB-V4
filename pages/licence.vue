<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Документы
				template(v-slot:text)
					.article__text
						.container
							h2 Лицензии:
							.files__items
								fileMain(:fileData="fileData.first")
								fileMain(:fileData="fileData.first2")
								fileMain(:fileData="fileData.second")
							h2 Документы:
							.files__items
								fileMain(:fileData="fileData.third")
								fileMain(:fileData="fileData.fourth")
								fileMain(:fileData="fileData.fifth")
								fileMain(:fileData="fileData.sixth")
								fileMain(:fileData="fileData.pp")
								fileMain(:fileData="fileData.seventh")
								fileMain(:fileData="fileData.eighth")
								fileMain(:fileData="fileData.fourth2")
								fileMain(:fileData="fileData.ninth")
								fileMain(:fileData="fileData.tenth")
								fileMain(:fileData="fileData.eleventh")
								fileMain(:fileData="fileData.twelve")
								fileMain(:fileData="fileData.thirteen")
								fileMain(:fileData="fileData.fourteen")
								fileMain(:fileData="fileData.fifteen")
								fileMain(:fileData="fileData.sixteen")
								fileMain(:fileData="fileData.seventeen")
								fileMain(:fileData="fileData.eighthteen")
								fileMain(:fileData="fileData.eighthteen1")
</template>
<script setup>
const labels ={
	last: 'Документы',
}
const fileData = {
	first: {
		title: 'Лицензия на медицинскую деятельность',
		size: '467 кб',
		icon: 'pdf',
		href: 'media/files/licence/licenceMed.pdf',
		pages: '14',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	first2: {
		title: 'Лицензия на деятельность по обороту наркотических средств',
		size: '423 кб',
		icon: 'pdf',
		href: 'media/files/licence/licenceNark.pdf',
		pages: '3',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	second: {
		title: 'Лицензия на фармацевтическую деятельность',
		size: '434 кб',
		icon: 'pdf',
		href: 'media/files/licence/licenceFarm.pdf',
		pages: '5',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	third: {
		title: 'Свидетельство о постановке на учет российской организации в налоговом органе по месту нахождения на территории Российской Федерации',
		size: '263 кб',
		icon: 'pdf',
		href: 'media/files/licence/inn.pdf',
		pages: '1',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	fourth: {
		title: 'Свидетельство o внесении в Единый государственный реестр юридических лиц',
		size: '2,5 мб',
		icon: 'pdf',
		href: 'media/files/licence/egrul.pdf',
		pages: '3',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	fourth2: {
		title: 'Об утверждении перечня товаров, работ, услуг, закупка которых осуществляется у субъектов мапого и среднего предпринимательства',
		size: '1,1 мб',
		icon: 'pdf',
		href: 'media/files/licence/perechen.pdf',
		pages: '2',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	fourth3: {
		title: 'Об утверждении перечня товаров, работ, услуг, закупка которых осуществляется у субъектов малого и среднего предпринимательства',
		size: '1,1 мб',
		icon: 'pdf',
		href: 'media/files/licence/perechen.pdf',
		pages: '2',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	fifth: {
		title: 'Устав ГБУ РО "ЦРБ" в Волгодонском районе',
		size: '16.54 мб',
		icon: 'pdf',
		href: 'media/files/licence/%D0%A3%D1%81%D1%82%D0%B0%D0%B2_%D0%9C%D0%91%D0%A3%D0%97_%D0%A6%D0%A0%D0%91_%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0.pdf',
		pages: '18',
		date: '16.06.2021г.',
		format: 'pdf',
	},
	sixth: {
		title: 'Структура ГБУ РО "ЦРБ" в Волгодонском районе',
		size: '2.6 мб',
		icon: 'pdf',
		href: 'media/files/licence/structure.pdf',
		pages: '5',
		date: '29.12.2022г.',
		format: 'pdf',
	},
	pp: {
		title: 'Постановление Правительства РФ от 28.12.2023 № 2353',
		size: '5 мб',
		icon: 'pdf',
		href: 'media/files/licence/2497.pdf',
		pages: '651',
		date: '28.12.2023г.',
		format: 'pdf',
	},
	seventh: {
		title: 'Оказание стационарной медицинской помощи',
		size: '523 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_stacionarnaja_pomoshh.doc',
		pages: '12',
		date: '16.12.2011г.',
		format: 'doc',
	},
	eighth: {
		title: 'Оказание медицинской помощи в дневных стационарах',
		size: '513 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_dnevnoj_stacionar.doc',
		pages: '10',
		date: '20.12.2011г.',
		format: 'doc',
	},
	ninth: {
		title: 'Оказание амбулаторно-поликлинической помощи',
		size: '573 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_poliklinaka.doc',
		pages: '17',
		date: '22.12.2011г.',
		format: 'doc',
	},
	tenth: {
		title: 'Оказание скорой медицинской помощи',
		size: '506 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_skoraja_pomoshh.doc',
		pages: '10',
		date: '28.12.2011г.',
		format: 'doc',
	},
	eleventh: {
		title: 'Оказание платных медицинских услуг',
		size: '497 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_platnye_uslugi.doc',
		pages: '9',
		date: '28.12.2011г.',
		format: 'doc',
	},
	twelve: {
		title: 'Рассмотрение обращений граждан',
		size: '527 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_obrashhenija_grazhdan.doc',
		pages: '14',
		date: '28.12.2011г.',
		format: 'doc',
	},
	thirteen: {
		title: 'Прием заявок (запись) на прием к врачу',
		size: '508 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_priem_zajavok-zapis-na_priem_k_vrachu.doc',
		pages: '10',
		date: '28.12.2011г.',
		format: 'doc',
	},
	fourteen: {
		title: 'Заполнение и направление в аптеки электронных рецептов',
		size: '497 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_ehlektronnye_recepty.doc',
		pages: '10',
		date: '28.12.2011г.',
		format: 'doc',
	},
	fifteen: {
		title: 'Выдача направлений гражданам на прохождение медико-социальной экспертизы',
		size: '545 кб',
		icon: 'doc',
		href: 'media/files/licence/reglament_vydacha_napravlenij_na_msehk.doc',
		pages: '11',
		date: '18.02.2011г.',
		format: 'doc',
	},
	sixteen: {
		title: 'Оказание доврачебной медицинской помощи на ФАПах',
		size: '170 кб',
		icon: 'doc',
		href: 'media/files/licence/reglamentokazanie_dovrachebnoj_medicinskoj_pomoshh.doc',
		pages: '14',
		date: '18.02.2011г.',
		format: 'doc',
	},
	seventeen: {
		title: 'Политика конфиденциальности',
		size: '8.63 мб',
		icon: 'pdf',
		href: 'media/files/licence/politika.pdf',
		pages: '9',
		date: '31.03.2023г.',
		format: 'pdf',
	},
	eighthteen: {
		title: 'Учетная политика',
		size: '21.2 мб',
		icon: 'pdf',
		href: 'media/files/licence/uch.pdf',
		pages: '112',
		date: '09.01.2023г.',
		format: 'pdf',
	},
	eighthteen1: {
		title: 'Учетная политика(Изменение)',
		size: '47.7 мб',
		icon: 'pdf',
		href: 'media/files/licence/polite(izm).pdf',
		pages: '67',
		date: '09.01.2024г.',
		format: 'pdf',
	},
}
</script>

