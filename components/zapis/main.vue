<script setup>
import { CalendarDate, DateFormatter, now, getLocalTimeZone } from '@internationalized/date'

const { data: schedules } = await useAsyncData(() => queryCollection('schedule').first())
const uniqueArray = [...new Map(schedules.value.data.map(item => [item.name, item])).values()];
console.log(schedules.value.data[0].days);


const toast = useToast()

const df = new DateFormatter('ru-RU', {
  dateStyle: 'medium'
})
const today = now()
const yesterday = today.subtract({days: 1});
const weekTwo = today.add({weeks: 2})

const modelValue = shallowRef(new CalendarDate(today.year, today.month, today.day));
const minDate = new CalendarDate(yesterday.year, yesterday.month, yesterday.day)
const maxDate = new CalendarDate(weekTwo.year, weekTwo.month, weekTwo.day)

const telRE = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
const nameRE = /[А-Я][а-я]+\s+[А-Я][а-я]+\s+?[А-Я][а-я]?/;
const emailRE = /^((\w[^\W]+)[.-:]?){1,}@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let formSuccess = ref(false);
// const time = [
// 	'08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'
// ]
const timeOptions = ref([]);
let vaccine = ref({
	name: '',
	tel: '',
	oms: '',
	email: '',
	doctor: '',
	selectedTime: '',
	selectedDate: new Date(modelValue.value)
})
const isNameValid = computed(() => {
	return vaccine.value.name.length > 0 ? nameRE.test(vaccine.value.name) : false;
})
const isMailValid = computed(() => {
	return vaccine.value.email.length > 0 ? emailRE.test(vaccine.value.email) : false;
})
const isTelValid = computed(() => {
	return vaccine.value.tel.length > 10 ? telRE.test(vaccine.value.tel) : false;
})

const isOmsValid = computed(() => {
	if (vaccine.value.oms.length === 16 && (/^[0-9]+$/).test(+vaccine.value.oms)) {
		if (checkOMSNumber(vaccine.value.oms))  {
			return true;
		}
	}

	return false;
})

const isDopValid = computed(() => {
	return vaccine.value.doctor && vaccine.value.selectedTime && vaccine.value.selectedDate;
})

const isFormValid = computed(() => {
	const rules = [isNameValid.value, isMailValid.value, isTelValid.value, isOmsValid.value, isDopValid.value];
	return rules.every((item) => item);
})

function checkOMSNumber(omsNumber) {
	const sNum = `${omsNumber}`.trim();

	if (sNum.length !== 16) {
		return false;
	}

	const arrOdd = [];
	const arrEven = [];
	const controlNum = parseInt(sNum.slice(-1), 10);

	for (let i = sNum.length - 2; i >= 0; i -= 2) {
		arrOdd.push(sNum[i] * 2);
	}

	for (let j = sNum.length - 3; j >= 0; j -= 2) {
		arrEven.push(sNum[j] * 1);
	}

	const arr2 = arrEven.join('') + arrOdd.join('');
	const arrSum = parseInt(Array.from(`${arr2}`).reduce((acc, item) => acc + parseInt(item, 10), 0), 10);

	let lastNumber = `${arrSum}`.slice(-1);

	lastNumber = +lastNumber;
	const controlNumResult = lastNumber === 0 ? lastNumber : 10 - lastNumber;

	return controlNum === controlNumResult;
}


let toLocalStorage = null;

function showToast(title, description, type) {
toast.add({
	title: title,
	description: description,
	color: type
})
}

const updateTimeOptions = () => {
	const now = new Date();
	const selected = new Date(vaccine.value.selectedDate);


	timeOptions.value = [];

	if (selected.toDateString() === now.toDateString()) {

		let currentHour = now.getHours();
		let currentMinute = now.getMinutes();

		if (currentMinute > 30) {
			currentHour += 1;
			currentMinute = 0;
		} else {
			currentMinute = 30;
		}

		for (let hour = currentHour; hour < 18; hour++) {
			for (let minute = hour === currentHour ? currentMinute : 0; minute < 60; minute += 30) {
			const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
			timeOptions.value.push(timeString);
			}
		}

	} else {
	// Если дата не сегодня, начинаем с 00:00
	for (let hour = 0; hour < 18; hour++) {
		for (let minute = 0; minute < 60; minute += 30) {
			const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
			timeOptions.value.push(timeString);
		}
	}
}
}
watch(() => vaccine.value.selectedDate, updateTimeOptions);

function onSubmit() {
	if (isFormValid.value) {
		const OK = toLocalStorage()
		if(OK) {
			showToast('Запись успешна', 'Данные о записи успешно приняты', 'sucsess')
		}
	} else {
		showToast('Ошибка при отправке', 'Проверьте корректность внесенных данных', 'error')
	}
}

onMounted(() => {
	updateTimeOptions()
	toLocalStorage = () =>  {

		const formData = vaccine.value
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
									v-model="vaccine.name"
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
							v-model="vaccine.tel",
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
								v-model="vaccine.oms",
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
							v-model="vaccine.email",
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
						select#select-doctor.input-text__input(v-model="vaccine.doctor" required)
							option(v-for="doctor, index in uniqueArray" :value='doctor.name') {{ doctor.name }}
						.select__arrow
			.fieldset__wrapper
				.input-wrap.f
					.input-text
						label.input-text__label(for="select-date") Выберите дату
							strong.input-text__required *
						UPopover
							UButton#select-date(color="neutral" variant="subtle" icon="i-lucide-calendar") {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Выберите дату' }}
							template(#content)
								UCalendar(v-model="modelValue" :min-value="minDate" :max-value="maxDate"  class="p-2")
					.input-text
						label.input-text__label(for="select-doctor") Выберите время
							strong.input-text__required *
						.select
							select#select-doctor.input-text__input(v-model="vaccine.selectedTime" required)
								option(v-for="time in timeOptions" :key="time" :value="time") {{ time }}
							.select__arrow
					//- .input-text
					//- 	label.input-text__label(for="time") Выберите время:
					//- 	input.input-text__input(type="time" id="time" v-model="vaccine.selectedTime")
	.form__footer
		.form__footer-btn
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

.vaccine-files {
	margin-top: 16px;
	margin-bottom: 16px;

	.link {
		font-size: 14px;
		white-space: normal;

		&:first-child { margin-bottom: 8px; }
	}
}

.radio {
	display: flex;
	align-items: center;
	flex-direction: column;

	li {
		position: relative;
		display: block;
		margin-bottom: 8px;
		padding-left: 24px;
		width: 100%;
		height: 100%;
		color: var(--color-modal);

		input[type=radio] {
			position: absolute;
			visibility: hidden;
		}

		label {
			position: relative;
			z-index: 9;
			display: block;
			cursor: pointer;
			transition: all 0.25s linear;
		}

		.check {
			position: absolute;
			left: -24px;
			top: 4px;
			z-index: 5;
			display: block;
			border: 2px solid var(--color-border-light);
			border-radius: 100%;
			width: 16px;
			height: 16px;
			transition: border 0.25s linear;

			&::before {
				content: "";
				position: absolute;
				left: 50%;
				top: 50%;
				display: block;
				margin: auto;
				border-radius: 100%;
				width: 8px;
				height: 8px;
				transform: translate(-50%, -50%);
				transition: background 0.25s linear;
			}
		}

		input[type=radio]:checked ~ label .check { border-color: var(--color-main); }

		input[type=radio]:checked ~ label .check::before { background: var(--color-main); }

		input[type=radio]:checked ~ label { color: var(--color-main); }
	}

	@media screen and (min-width: 480px) { flex-direction: row; }
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
