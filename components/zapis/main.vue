<script setup>
import { CalendarDate, DateFormatter, now, isWeekend, getLocalTimeZone } from '@internationalized/date'
import { telRE, nameRE, emailRE, checkOMSNumber } from '@/utils/validation';
import { isTimeBooked } from '~/utils/storage';
const toast = useToast()

function showToast(title, description, type) {
	toast.add({
		title: title,
		description: description,
		color: type
	})
}

const { data: schedules } = await useAsyncData(() => queryCollection('schedule').first())
const uniqueArray = [...new Map(schedules.value.data.map(item => [item.name, item])).values()];

let toLocalStorage = null;
let isResetting = false;

const df = new DateFormatter('ru-RU', {
  dateStyle: 'medium'
})

const today = now()
const yesterday = today.subtract({days: 1});
const weekTwo = today.add({weeks: 2})

const isDateDisabled = (today) => {
	return isWeekend(today, 'ru-RU');
};

const modelValue = shallowRef(new CalendarDate(today.year, today.month, today.day));
const minDate = new CalendarDate(yesterday.year, yesterday.month, yesterday.day)
const maxDate = new CalendarDate(weekTwo.year, weekTwo.month, weekTwo.day)

const timeOptions = ref([]);
const zapis = ref({
	name: '',
	tel: '',
	oms: '',
	email: '',
	doctor: 'Турбеева Елизавета Андреевна',
	selectedTime: '',
	selectedDate: new Date(modelValue.value)
})

const isNameValid = computed(() => {
	return zapis.value.name.length > 0 ? nameRE.test(zapis.value.name) : false;
})
const isMailValid = computed(() => {
	return zapis.value.email.length > 0 ? emailRE.test(zapis.value.email) : false;
})
const isTelValid = computed(() => {
	return zapis.value.tel.length > 10 ? telRE.test(zapis.value.tel) : false;
})

const isOmsValid = computed(() => {
	if (zapis.value.oms.length === 16 && (/^[0-9]+$/).test(+zapis.value.oms)) {
		if (checkOMSNumber(zapis.value.oms))  {
			return true;
		}
	}

	return false;
})

const isDopValid = computed(() => {
	return zapis.value.doctor && zapis.value.selectedTime && zapis.value.selectedDate;
})

const isFormValid = computed(() => {
	const rules = [isNameValid.value, isMailValid.value, isTelValid.value, isOmsValid.value, isDopValid.value];
	return rules.every((item) => item);
})

const updateTimeOptions = () => {
	if (isResetting) return;
	const getDayOfWeek = (date) => {
		const days = ["su", "mn", "tu", "wd", "th", "fr", "st"];
		return days[date.getDay()];
    };

	const selected = new Date(zapis.value.selectedDate);

	const selectedDoctor = uniqueArray.find(
		(item) => {
			return item.name === zapis.value.doctor
		}
	);

	if (!selectedDoctor) {
		timeOptions.value = [];
		zapis.value.selectedTime = '';
		showToast('Врач не найден','Пожалуйстав выберите другого врача', 'error' )
		return;
	}

	let dayOfWeek = getDayOfWeek(selected);
	if (dayOfWeek === 'su') {
		dayOfWeek = 'mn'
	}

	const dayS = selectedDoctor.days[dayOfWeek];
	if (dayS === "нет приема" || dayS === "Выходной" || dayS === "Выезд на ФАП") {
		timeOptions.value = [];
		zapis.value.selectedTime = '';
		showToast('Нет приема','У этого врача нет приема в выбранный день', 'error' )
		return;
	}

	if (dayS === "нет приема") {
		timeOptions.value = [];
		zapis.value.selectedTime = '';
		showToast('Нет приема','У этого врача нет приема в выбранный день', 'error' )
		return;
	}

	if (dayS === "Выходной") {
		timeOptions.value = [];
		zapis.value.selectedTime = '';
		showToast('Выходной','Наши врачи не работают в выходные дни', 'error' )
		return;
	}

	const [startTime, endTime] = dayS.split(" - ");
	const [startHour, startMinute] = startTime.split(":").map(Number);
	const [endHour, endMinute] = endTime.split(":").map(Number);

	timeOptions.value = [];
	const now = new Date();
	if (selected.toDateString() === now.toDateString()) {
		let currentHour = now.getHours();
		let currentMinute = now.getMinutes();

		if (currentMinute > 30) {
			currentHour += 1;
			currentMinute = 0;
		} else {
			currentMinute = 30;
		}

		if (currentHour > endHour || (currentHour === endHour && currentMinute >= endMinute)) {
			timeOptions.value = [];
			zapis.value.selectedTime = '';
			return;
		}


		for (let hour = currentHour; hour <= endHour; hour++) {
			if (hour < startHour) continue;

			for (let minute = hour === currentHour ? currentMinute : 0; minute < 60; minute += 30) {
				if (hour === endHour && minute >= endMinute) break;
				const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
				const isBooked = isTimeBooked(zapis.value.doctor, selected, timeString);
				timeOptions.value.push({ time: timeString, disabled: isBooked });
			}
		}

		} else {

		for (let hour = startHour; hour <= endHour; hour++) {
			for (let minute = 0; minute < 60; minute += 30) {
				if (hour === endHour && minute >= 30) break;
				const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
				const isBooked = isTimeBooked(zapis.value.doctor, selected, timeString);
				timeOptions.value.push({ time: timeString, disabled: isBooked });
			}
		}
	}
}
watch(() => modelValue.value, () => {
  updateTimeOptions();
});

watch(() => modelValue.value, (newValue) => {
  zapis.value.selectedDate = new Date(newValue);
  updateTimeOptions();
});

function onSubmit() {
	if (isFormValid.value) {
		const OK = toLocalStorage()
		if(OK) {
			resetForm()
			showToast('Запись успешна', 'Данные о записи успешно приняты', 'sucsess')
		}
	} else {
		showToast('Ошибка при отправке', 'Проверьте корректность внесенных данных', 'error')
	}
}
const resetForm = () => {
	isResetting = true;
	zapis.value = {
		name: '',
		tel: '',
		oms: '',
		email: '',
		doctor: 'Турбеева Елизавета Андреевна',
		selectedTime: '',
		selectedDate: new Date(modelValue.value), // Сбрасываем на текущую дату
	};
	modelValue.value = new CalendarDate(today.year, today.month, today.day);
	timeOptions.value = [];
	zapis.value.selectedTime = '';
	showToast('Форма очищена', 'Все поля формы были сброшены.', 'success');
	isResetting = false;
};

onMounted(() => {
	toLocalStorage = () =>  {

		const formData = zapis.value
		const formDataString = JSON.stringify(formData);
		const existingData = localStorage.getItem('formData');

		if (existingData) {
			const existingDataArray = JSON.parse(existingData);
       		const isDuplicate = existingDataArray.some(item => JSON.stringify(item) === formDataString);
			if (isDuplicate) {
				showToast('Ошибка при сохранении', 'Вы уже записаны к этому врачу на указанную дату', 'error')
				return false
			} else {
				existingDataArray.push(formData);
				localStorage.setItem('formData', JSON.stringify(existingDataArray));
				return true
			}
		} else {
			localStorage.setItem('formData', JSON.stringify([formData]));
			return true
		}
	}
	updateTimeOptions();
});
</script>
<template lang="pug">
	form.form__inner
		fieldset.fieldset
			legend.fieldset__legend Введите контактные данные
			.fieldset__wrapper
				.input-wrap.f
					.input-text(:class="{'invalid': !isNameValid, 'valid': isNameValid}")
							label.input-text__label(for="fio") Фамилия и имя
								strong.input-text__required *
							.input-text__wrap
								input#fio.input-text__input(
									type="text"
									name="fio"
									v-model="zapis.name"
									aria-describedby="fiohelp"
									placeholder="Иванов Иван"
									required="required"
								)
							small.input-text__helper(id="fiohelp" aria-live="polite" v-show="!isNameValid") Введите ваши Фамилию Имя

					.input-text(:class="{ invalid: !isTelValid, valid: isTelValid }")
						label.input-text__label(for="tel") Номер телефона
							strong.input-text__required *
						.input-text__wrap
							input#tel.input-text__input(
							type="text",
							name="tel",
							v-model="zapis.tel",
							aria-describedby="telhelp",
							placeholder="+7(999) 999-99-99",
							required="required"
							)

						small#telhelp.input-text__helper(,
							aria-live="polite",
							v-show="!isTelValid"
						) Введите ваш номер телефона
				.input-wrap.f
					.input-text(:class="{ invalid: !isOmsValid, valid: isOmsValid }")
						label.input-text__label(for="oms") Номер полиса ОМС
							strong.input-text__required *
						.input-text__wrap
							input#oms.input-text__input(
								type="text",
								name="oms",
								v-model="zapis.oms",
								aria-describedby="omshelp",
								placeholder="XXXXXXXXXXXXXXXX",
								required="required"
							)

							small#omshelp.input-text__helper(,
								aria-live="polite",
								v-show="!isOmsValid"
							) Введите ваш номер полиса ОМС
					.input-text(:class="{ invalid: !isMailValid, valid: isMailValid }")
						label.input-text__label(for="mail") Электронная почта
						.input-text__wrap
							input#mail.input-text__input(,
							type="text",
							name="mail",
							v-model="zapis.email",
							aria-describedby="mailhelp",
							placeholder="sample@mail.ru",
							required="required",
							autocapitalize="off",
							autocomplete="email"
							)
						small#mailhelp.input-text__helper(,
							aria-live="polite",
							v-show="!isMailValid"
						) Введите корректный email
		fieldset.fieldset
			legend.fieldset__legend Дополнительная информация
			.fieldset__wrapper
				.input-text
					label.input-text__label(for="select-doctor") Выберите врача
						strong.input-text__required *
					.select
						select#select-doctor.input-text__input(v-model="zapis.doctor" required @change="updateTimeOptions()")
							option(v-for="doctor, index in uniqueArray" :key="index" :value='doctor.name') {{ doctor.name }}
						.select__arrow
			.fieldset__wrapper
				.input-wrap.f
					.input-text
						label.input-text__label(for="select-date") Выберите дату
							strong.input-text__required *
						UPopover
							UButton#select-date(color="neutral" variant="subtle" icon="i-lucide-calendar") {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Выберите дату' }}
							template(#content)
								UCalendar(v-model="modelValue" :year-controls="false" :is-date-disabled="isDateDisabled" :min-value="minDate" :max-value="maxDate" class="p-2")
					.input-text
						label.input-text__label(for="select-time") Выберите время
							strong.input-text__required *
						.select
							select#select-time.input-text__input(v-model="zapis.selectedTime" required :disabled="timeOptions.length === 0")
								option(v-if="timeOptions.length === 0", disabled, value="") Нет доступного времени
								// option(v-for="time in timeOptions" :key="time" :value="time") {{ time }}
								option(
									v-for="slot in timeOptions",
									:key="slot.time",
									:value="slot.time",
									:disabled="slot.disabled"
								) {{ slot.time }} {{ slot.disabled ? '(занято)' : '' }}
							.select__arrow
	.form__footer
		.form__footer-btn
			input.btn.btn--cancel(
				@click="resetForm()"
				value="Очистить",
				type="button"
			)
			input.btn.btn--bg-main(
				@click="onSubmit()"
				value="Отправить",
				:disabled="!isFormValid"
			)
</template>
<style lang="scss" scoped>

.input-wrap {
	display: block;

	.input-text {
		width: 100%;

		@media screen and (min-width: 768px) { width: 45%; }
	}

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
}
.form__footer .btn--bg-main {
	height: 50px;
}
.select {
	position: relative;
	display: inline-block;
	margin-bottom: 16px;
	width: 100%;

	select {
		outline: 0;
		border: 2px solid var(--color-border-light);
		cursor: pointer;
		appearance: none;

		option {
			font-size: 1.2rem;
			color: var(--color-modal);

			&:disabled {
				color: #999;
				background-color: #f5f5f5;
			}
		}

		&::-ms-expand { display: none; }

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}

		&:focus { border-color: var(--color--modal); }
	}

	&__arrow {
		position: absolute;
		right: 16px;
		top: 50%;
		border-style: solid;
		border-width: 8px 5px 0 5px;
		border-color: #7b7b7b transparent transparent transparent;
		width: 0;
		height: 0;
		pointer-events: none;
		transform: translateY(-50%);

		.select select:disabled ~ & { border-top-color: #ccc; }
	}
}

</style>
