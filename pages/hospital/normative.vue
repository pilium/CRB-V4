<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
		commonArticle
				template(v-slot:title)
					h1.article__title Нормативные документы
				template(v-slot:text)
					.article__text
						.container
							h2.article__titleInner Федеральные законы:
							.files__items
								fileMain(:fileData="fileData.first")
								fileMain(:fileData="fileData.second")
								fileMain(:fileData="fileData.third")
							h2.article__titleInner Постановления Правительства РФ:
							.files__items
								fileMain(:fileData="fileData.fourth")
								fileMain(:fileData="fileData.fifth")
								fileMain(:fileData="fileData.sixth")
								fileMain(:fileData="fileData.seventh")
								fileMain(:fileData="fileData.eighth")
							h2.article__titleInner Приказы Минздрава России:
							.files__items
								fileMain(:fileData="fileData.ninth")
								fileMain(:fileData="fileData.tenth")
								fileMain(:fileData="fileData.eleventh")
								fileMain(:fileData="fileData.twelve")
								fileMain(:fileData="fileData.thirteen")
								fileMain(:fileData="fileData.fourteen")
							h2.article__titleInner Постановления Правительства Ростовской области:
							.files__items
								fileMain(:fileData="fileData.fifteen")
								fileMain(:fileData="fileData.sixteen")
								fileMain(:fileData="fileData.seventeen")
								fileMain(:fileData="fileData.eighteen")
							h2.article__titleInner Постановления Администрации Волгодонского района:
							.files__items
								fileMain(:fileData="fileData.nineteen")
								fileMain(:fileData="fileData.twenty")
								fileMain(:fileData="fileData.twentyOne")
								fileMain(:fileData="fileData.twentyTwo")
								fileMain(:fileData="fileData.twentyThree")
								fileMain(:fileData="fileData.twentyFour")
</template>

<script setup>
const fileData = {
	first: {
		title: 'Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в российской федерации»',
		size: '538 кб',
		icon: 'pdf',
		href: 'media/files/normative/fz_21_11_2011_323-red_ot_03_07_16.pdf',
		pages: '72',
		date: '21.11.2011г.',
		format: 'pdf',
	},
	second: {
		title: 'Федеральный закон от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании граждан в Российской Федерации»',
		size: '726 кб',
		icon: 'pdf',
		href: 'media/files/normative/low_326-fz.pdf',
		pages: '55',
		date: '29.11.2010г.',
		format: 'pdf',
	},
	third: {
		title: 'Федеральный закон от 24.07.2009 №212-ФЗ «О страховых взносах в Пенсионный фонд Российской Федерации, Фонд социального страхования Российской Федерации, Федеральный фонд обязательного медицинского страхования и территориальные фонды обязательного медицинского страхования»',
		size: '418 кб',
		icon: 'doc',
		href: 'media/files/normative/fz_212_o_strah.doc',
		pages: '52',
		date: '24.07.2009г.',
		format: 'doc',
	},
	fourth: {
		title: 'Постановление Правительства РФ от 18.10.2013 №932 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2014 год и на плановый период 2015 и 2016 годов»',
		size: '139 кб',
		icon: 'doc',
		href: 'media/files/normative/postanovlenie_rf_932_o_med_pomoshhi.doc',
		pages: '16',
		date: '18.10.2013.',
		format: 'doc',
	},
	fifth: {
		title: 'Постановление Правительства РФ от 28.11.2014 №1273 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2015 год и на плановый период 2016 и 2017 годов»',
		size: '2.79мб',
		icon: 'doc',
		href: 'media/files/normative/20141128-Pp-1273.doc',
		pages: '15',
		date: '28.11.2014г.',
		format: 'doc',
	},
	sixth: {
		title: 'Постановление Правительства РФ от 19.12.2016 №1403 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2017 год и на плановый период 2018 и 2019 годов»',
		size: '1.18 мб',
		icon: 'pdf',
		href: 'media/files/normative/gos_garantii_na_2017.pdf',
		pages: '281',
		date: '19.12.2016г.',
		format: 'pdf',
	},
	seventh: {
		title: 'Постановление Правительства РФ от 08.12.2017 №1492 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2018 год и на плановый период 2019 и 2020 годов»',
		size: '2.63 мб',
		icon: 'rtf',
		href: 'media/files/normative/08_12_2017-1492.rtf',
		pages: '255',
		date: '19.12.2016г.',
		format: 'rtf',
	},
	eighth: {
		title: 'Постановление Правительства РФ от 10.12.2018г №1506 «О Программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2017 год и на плановый период 2020 и 2021 годов»',
		size: '901 кб',
		icon: 'pdf',
		href: 'media/files/normative/postanovlenie-pravitelstvo-rf-1506-10122018.pdf',
		pages: '222',
		date: '10.12.2018г.',
		format: 'pdf',
	},
	ninth: {
		title: 'Приказ Министерства здравоохранения и социального развития Российской Федерации (Минздравсоцразвития России) от 26 апреля 2012 г. N 406н г. Москва "Об утверждении Порядка выбора гражданином медицинской организации при оказании ему медицинской помощи в рамках программы государственных гарантий бесплатного оказания гражданам медицинской помощи"',
		size: '59 кб',
		icon: 'rtf',
		href: 'media/files/normative/prikaz_mz_i_sr_rf_ot_26.04.2012-406n_o_porjadke_vy.rtf',
		pages: '4',
		date: '26.04.2012г.',
		format: 'rtf',
	},
	tenth: {
		title: 'Приказ Министерства здравоохранения и социального развития Российской Федерации (Минздравсоцразвития России) от 26 апреля 2012 г. N 407н г. Москва "Об утверждении Порядка содействия руководителем медицинской организации (ее подразделения) выбору пациентом врача в случае требования пациента о замене лечащего врача"',
		size: '30 кб',
		icon: 'doc',
		href: 'media/files/normative/prikaz_407_ovybore_vracha_2012.doc',
		pages: '2',
		date: '26.04.2012г.',
		format: 'doc',
	},
	eleventh: {
		title: 'Приказ от 28 февраля 2019 г. № 108н "Об утверждении правил обязательного медицинского страхования”',
		size: '717 кб',
		icon: 'pdf',
		href: 'media/files/normative/minzdrav_108.pdf',
		pages: '102',
		date: '28.02.2019г.',
		format: 'pdf',
	},
	twelve: {
		title: 'Приказ Минздравсоцразвития РФ от 20.12.2012 N 1175-н "Об утверждении порядка назначения и выписывания лекарственных препаратов, а также форм рецептурных бланков на лекарственные препараты, порядка оформления указанных бланков, их учета и хранения"',
		size: '192 кб',
		icon: 'doc',
		href: 'media/files/normative/Pr_minzdrav_N_1175H_20_12_12.doc',
		pages: '17',
		date: '20.12.2012г.',
		format: 'doc',
	},
	thirteen: {
		title: 'Приказ Минздравсоцразвития РФ от 12.02.2007 N 110 «О порядке назначения и выписывания лекарственных сркедств, изделий медицинского назначения и специализированных продуктов лечебного питания» (в ред. Приказов Минздравсоцразвития РФ от 27.08.2007 N 560,от 25.09.2009 N 794н, от 20.01.2011 №13н, Приказов МЗ России от 01.08.2012 № 54н, от 26.02.2013 № 94н)',
		size: '528 кб',
		icon: 'rtf',
		href: 'media/files/normative/prikaz_minzdravsocrazvitija_rf_ot_12_02_2007_n_110.rtf',
		pages: '33',
		date: '26.02.2013г.',
		format: 'rtf',
	},
	fourteen: {
		title: 'Приказ Минздравсоцразвития РФ от 22.11.2004 N 255 «О порядке оказания первичной медико-санитарной помощи гражданам, имеющим право на получение набора социальных услуг»',
		size: '407 кб',
		icon: 'rtf',
		href: 'media/files/normative/prikaz_minzdravsocrazvitija_rf_ot_22_11_2004_n_255.rtf',
		pages: '21',
		date: '22.11.2004г.',
		format: 'rtf',
	},
	fifteen: {
		title: 'Постановление Правительства РО от 26.12.2013 №869 «О территориальной Программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Ростовской области на 2014 год и на плановый период 2015 и 2016 годов»',
		size: '1.05 мб',
		icon: 'doc',
		href: 'media/files/normative/postanovlenie_ro_869_o_med_pomoshhi_2014.doc',
		pages: '79',
		date: '26.12.2013г.',
		format: 'doc',
	},
	sixteen: {
		title: 'Постановление Правительства РО от 22.12.2014 №856 «О территориальной Программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Ростовской области на 2015 год и на плановый период 2016 и 2017 годов»',
		size: '976 кб',
		icon: 'doc',
		href: 'media/files/normative/post856_141222.doc',
		pages: '99',
		date: '22.12.2014г.',
		format: 'doc',
	},
	seventeen: {
		title: 'Постановление Правительства РО от 01.06.2012 №481 (в ред. Постановления Правительства РО от 13.09.2012 г № 880) «Об утверждении перечня лекарственных препаратов, изделий медицинского назначения и специализированных продуктов лечебного питания»',
		size: '379 кб',
		icon: 'doc',
		href: 'media/files/normative/postanovlenie_ro_po_dlo_481_2012.doc',
		pages: '16',
		date: '01.06.2012г.',
		format: 'doc',
	},
	eighteen: {
		title: 'Постановление Правительства РО от 29.12.2018 №884 "О территориальной программе государственных гарантий бесплатного оказания гражданам медицинской помощи в Ростовской области на 2019 год и на плановый период 2020 и 2021 годов"',
		size: '927 кб',
		icon: 'pdf',
		href: 'media/files/normative/29_12_2018-884.pdf',
		pages: '163',
		date: '29.12.2018г.',
		format: 'pdf',
	},
	nineteen: {
		title: 'Постановление Администрации Волгодонского района от 24.12.2013 № 1333 "Об утверждении целевых показателей эффективности деятельности руководителя и положения о выплатах стимулирующего характера"',
		size: '799 кб',
		icon: 'pdf',
		href: 'media/files/normative/postanovlenie_1333_ot_14.12.2013.pdf',
		pages: '2',
		date: '24.12.2013г.',
		format: 'pdf',
		addition: true,
		additionLink: 'media/files/normative/addonstopostanovlenieadministraciivolgodonsk.rar',
	},
	twenty: {
		title: 'Постановление Администрации Волгодонского района от 17.02.2014 № 114 "О внесении изменений в Постановление Администрации Волгодонского района № 1333 от 24.12.2013"',
		size: '1.46 мб',
		icon: 'pdf',
		href: 'media/files/normative/postanovlenie_114_ot_17.02.2014.pdf',
		pages: '4',
		date: '17.02.20140г.',
		format: 'pdf',
	},
	twentyOne: {
		title: 'Постановление Администрации Волгодонского района от 22.09.2014 № 849 "О внесении изменений в Постановление Администрации Волгодонского района № 1333 от 24.12.2013"',
		size: '766 кб',
		icon: 'pdf',
		href: 'media/files/normative/postanovlenie_administracii_volgodonskogo_rajona_8.pdf',
		pages: '4',
		date: '22.09.2014г.',
		format: 'pdf',
	},
	twentyTwo: {
		title: 'Постановление Администрации Волгодонского района от 29.12.2014 № 1239 "О внесении изменений в Постановление Администрации Волгодонского района № 1333 от 24.12.2013"',
		size: '784 кб',
		icon: 'pdf',
		href: 'media/files/normative/postanovlenie_administracii_volgodonskogo_rajona_1.pdf',
		pages: '4',
		date: '29.12.2014г.',
		format: 'pdf',
	},
	twentyThree: {
		title: 'Постановление Администрации Волгодонского района от 16.08.2013 № 774 "О создании Общественного совета для оценки качества работы муниципальных учреждений Волгодонского района, оказывающих социальные услуги в сферах образования, культуры, физической культуры и спорта, здравоохранения и социального обслуживания"',
		size: '121 кб',
		icon: 'doc',
		href: 'media/files/normative/postanovlenie_avr_ot_16.08.2013_774.doc',
		pages: '9',
		date: '16.08.2013г.',
		format: 'doc',
	},
	twentyFour: {
		title: 'Постановление Администрации Волгодонского района от 11.06.2014 № 524 " О внесении изменений в Постановление Администрации Волгодонского района от 16.08.2013 № 774 "О создании Общественного совета для оценки качества работы муниципальных учреждений Волгодонского района, оказывающих социальные услуги в сферах образования, культуры, физической культуры и спорта, здравоохранения и социального обслуживания"',
		size: '79 кб',
		icon: 'doc',
		href: 'media/files/normative/postanovlenie_avr_ot_11.06.2014_524.doc',
		pages: '4',
		date: '11.06.2014г.',
		format: 'doc',
	},
}
const labels = {
	last: 'Нормативные документы',
}
useSeoMeta({
  title: 'Нормативные документы',
  ogTitle: 'Нормативные документы',
  description: 'Нормативные документы ЦРБ волгодонского района',
  ogDescription: 'Нормативные документы ЦРБ волгодонского района'
})
</script>
