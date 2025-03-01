<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title {{ schedules.title }}
				template(v-slot:text)
					.article__text
						//- UTabs(:items="items" variant="link" class="gap-4 w-full" :ui="{ trigger: 'flex-1' }")
						//- 	template(#account="{ item }")
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
									template(v-for="(item, key) in schedules.data")
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
							//- template(#password="{ item }")
							//- 	commonTable(:tableData="tableData1")
							//- 		template(v-slot:tableData)
							//- 			thead
							//- 				tr
							//- 					th Ф.И.О.
							//- 					th Специальность
							//- 					th.cabinet.table__cell-response(data-title="Кабинет") Кабинет
							//- 					th
							//- 						span Пн
							//- 					th
							//- 						span Вт
							//- 					th
							//- 						span Ср
							//- 					th
							//- 						span Чт
							//- 					th
							//- 						span Пт
							//- 					th
							//- 						span Cб
							//- 			tbody
							//- 				template(v-for="(item, key) in schedules.data")
							//- 					tr(v-if="Boolean(item.sub)")
							//- 						td {{ item.name }}
							//- 						td {{ item.job }}
							//- 						td.cabinet.table__cell-response(data-title="Кабинет") {{ item.cabinet }}
							//- 						template(v-if="item.mono")
							//- 							td.attention(colspan="6") {{ item.days.mn }}
							//- 						template(v-else-if="item.noService")
							//- 							td.attention(colspan="6") Прием пациентов временно не ведется
							//- 						template(v-else-if="item.vacation")
							//- 							td.attention(colspan="6") Отпуск c {{ item.status.from }} по {{ item.status.to }}
							//- 						template(v-else)
							//- 							template(v-for="(item) in item.days")
							//- 								template(v-if="item === 'нет приема' || item === 'Выходной' || item === 'По графику'")
							//- 									td.attention {{ item }}
							//- 								template(v-else)
							//- 									td {{ item }}
</template>

<script setup>
const { data: schedules } = await useAsyncData(() => queryCollection('schedule').first())

const items = [
  {
    label: 'ст.Романовская',
    slot: 'account'
  },
  {
    label: 'х. Рябичев',
    slot: 'password'
  }
]
const tableData = {
	caption: schedules.value.subtitle1,
	tableClass: 'table--schedule',
}
const tableData1 = {
	caption: schedules.value.subtitle2,
	tableClass: 'table--schedule',
}
const days = []


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
