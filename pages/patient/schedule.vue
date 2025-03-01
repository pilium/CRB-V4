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
										th(v-for="day in weekData" :key="day.date") {{ day.name }}
											span.text-sm  ({{ day.date }})
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

const days = []
const weekData = ref([]);
const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const tableData = {
	caption: schedules.value.subtitle1,
	tableClass: 'table--schedule',
}
const tableData1 = {
	caption: schedules.value.subtitle2,
	tableClass: 'table--schedule',
}

const getCurrentWeekData = () => {
	const today = new Date();
	const dayOfWeek = today.getDay();
	const startOfWeek = new Date(today);

	startOfWeek.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

	const data = [];
	for (let i = 0; i < 6; i++) {
		const currentDate = new Date(startOfWeek);
		currentDate.setDate(startOfWeek.getDate() + i);

		data.push({
			name: daysOfWeek[i],
			date: formatDate(currentDate),
		});
	}
	return data;
};
const formatDate = (date) => {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
};

const toast = useToast()

onMounted(() => {
	weekData.value = getCurrentWeekData();

	function showToast(data) {
		if(data) {
			const formatDate = new Date(data.selectedDate).toLocaleString('ru-RU', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})
			toast.add({
				title: `Запись к ${data.doctor}`,
				description: `${data.name}, ждем вас ${formatDate} в ${data.selectedTime}`,
				color: 'primary'
			})
		}
	}

	const storedData = localStorage.getItem('formData');

	removePastEvents(storedData)

	if (storedData) {
		const parsedData = JSON.parse(storedData);
		parsedData.forEach((item) => {
			showToast(item)
		})
	} else {
		console.log('Данные в localStorage отсутствуют.');
	}
	});

	function removePastEvents(data) {
		if (!data) return;

		const events = JSON.parse(data);

		const now = new Date();

		const upcomingEvents = events.filter(event => {
			const eventDate = new Date(`${event.selectedDate.split('T')[0]}T${event.selectedTime}`);
			return eventDate > now;
		});

		localStorage.setItem('formData', JSON.stringify(upcomingEvents));
	}

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
