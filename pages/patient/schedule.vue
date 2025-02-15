<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title График приема врачей
				template(v-slot:text)
					.article__text
						b-tabs(fill nav-class="tabs__list" content-class="tabs__item")
							b-tab(title="ст.Романовская" active title-link-class="link tabs__link" title-item-class="tabs__item")
								commonTable(:tableData="tableData")
									template(v-slot:tableData)
										thead
											tr
												th Ф.И.О.
												th Специальность
												th.cabinet.table__cell-response(data-title="Кабинет") Кабинет
												th
													span Пн
												th
													span Вт
												th
													span Ср
												th
													span Чт
												th
													span Пт
												th
													span Cб
										tbody
											template(v-for="(item, key) in schedules")
												tr(v-if="Boolean(!item.sub)")
													td {{ item.name }}
													td {{ item.job }}
													td.cabinet.table__cell-response(data-title="Кабинет") {{ item.cabinet }}
													template(v-if="item.mono")
														td.attention(colspan="6") {{ item.days.mn }}
													template(v-else-if="item.noService")
														td.attention(colspan="6") Прием пациентов временно не ведется
													template(v-else-if="item.vacation")
														td.attention(colspan="6") Отпуск c {{ item.status.from }} по {{ item.status.to }}
													template(v-else)
														template(v-for="(item) in item.days")
															template(v-if="item === 'нет приема' || item === 'Выходной' || item === 'По графику'")
																td.attention {{ item }}
															template(v-else)
																td {{ item }}
							b-tab(title="х.Рябичи" title-link-class="link tabs__link" title-item-class="tabs__item")
								commonTable(:tableData="tableData1")
									template(v-slot:tableData)
										thead
											tr
												th Ф.И.О.
												th Специальность
												th.cabinet.table__cell-response(data-title="Кабинет") Кабинет
												th
													span Пн
												th
													span Вт
												th
													span Ср
												th
													span Чт
												th
													span Пт
												th
													span Cб
										tbody
											template(v-for="(item, key) in schedules")
												tr(v-if="Boolean(item.sub)")
													td {{ item.name }}
													td {{ item.job }}
													td.cabinet.table__cell-response(data-title="Кабинет") {{ item.cabinet }}
													template(v-if="item.mono")
														td.attention(colspan="6") {{ item.days.mn }}
													template(v-else-if="item.noService")
														td.attention(colspan="6") Прием пациентов временно не ведется
													template(v-else-if="item.vacation")
														td.attention(colspan="6") Отпуск c {{ item.status.from }} по {{ item.status.to }}
													template(v-else)
														template(v-for="(item) in item.days")
															template(v-if="item === 'нет приема' || item === 'Выходной' || item === 'По графику'")
																td.attention {{ item }}
															template(v-else)
																td {{ item }}
</template>

<script setup>
const tableData = {
	caption: 'Расписание работы врачей в ст.Романовская',
	tableClass: 'table--schedule',
}
const tableData1 = {
	caption: 'Расписание работы врачей в х.Рябичи',
	tableClass: 'table--schedule',
}
const days = []

let schedules = await useFetch('https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/data/schedules.json');


// const getDays = () => {
// 	schedules.forEach((element) => {
// 		days.push(element.days[0]);
// 	});
// }

// getDays();

useSeoMeta({
  title: 'График приема врачей',
  ogTitle: 'График приема врачей',
  description: 'График приема врачей в ЦРБ волгодонского района и филиала в х.Рябичев',
  ogDescription: 'График приема врачей в ЦРБ волгодонского района и филиала в х.Рябичев'
})
const labels = {
	last: 'График приема врачей',
}
</script>
