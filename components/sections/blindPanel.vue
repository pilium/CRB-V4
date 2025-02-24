<template lang="pug">
	.blind(:class="{ active: store.isOpen }")
		.container
			.blind__inner
				.blind__row
					.blind__list
						span.blind__termin Цвета сайта
						ul.blind__determines.blind__determines--color
							li
								button.blind__btn.blind__color--normal.active(type="button")
									span Обычный
							li
								button.blind__btn.blind__color--inverse(type="button")
									span Инверсия
							li
								button.blind__btn.blind__color--contrast(type="button")
									span Контраст
							li
								button.blind__btn.blind__color--comfort(type="button")
									span Комфорт
							li
								button.blind__btn.blind__color--blue(type="button")
									span Синий
							li
								button.blind__btn.blind__color--brown(type="button")
									span Коричневый
				.blind__row
					.blind__list
						span.blind__termin Шрифт
						ul.blind__determines.blind__determines--font
							li
								button.blind__btn.blind__font-normal.active(type="button")
									span Без засечек
							li
								button.blind__btn.blind__font-serif(type="button")
									span С засечками
					.blind__list
						span.blind__termin Размер шрифта
						ul.blind__determines.blind__determines--fz
							li
								button.blind__btn.blind__font-size.blind__font-size--small(type="button")
									span A
							li
								button.blind__btn.blind__font-size.blind__font-size--normal.active(type="button")
									span A
							li
								button.blind__btn.blind__font-size.blind__font-size--big(type="button")
									span A
				.blind__row
					.blind__list
						span.blind__termin Расстояние между буквами
						ul.blind__determines.blind__determines--ls
							li
								button.blind__btn.blind__int-normal.active(data-class="ls1" type="button")
									span Стандартное
							li
								button.blind__btn.blind__int-middle(data-class="ls2" type="button")
									span Среднее
							li
								button.blind__btn.blind__int-big(data-class="ls3" type="button")
									span Большое
					.blind__list
						span.blind__termin Изображения
						ul.blind__determines.blind__determines--img
							li
								button.blind__btn.blind__img-normal.active(type="button")
									span Включить
							li
								button.blind__btn.blind__img-off(type="button")
									span Выключить
							li
								button.blind__btn.blind__img-gray(type="button")
									span Черно-белые
				button.blind__control.blind__control--reset.flc(aria-label="Вернуть исходные значения"  @click="allreset" type="reset")
					<Icon name="my-icon:refresh" class="blind__icon" title="Вернуть исходные значения"/>
				button.blind__control.blind__control--close.flc(aria-label="Закрыть панель настройки" type="button" @click="store.toggle()") &#10004;
</template>
<script setup>
import { blindStore } from '~/store/blind.store';

const store = blindStore()

let savedParametrs = {}

onMounted(() => {
	const root = document.querySelector('html');
	const colorsList = document.querySelector('.blind__determines--color');
	const lsList = document.querySelector('.blind__determines--ls');
	const fontsList = document.querySelector('.blind__determines--font');
	const fzList = document.querySelector('.blind__determines--fz');
	const imgsList = document.querySelector('.blind__determines--img');
	const colorsBtn = Array.from(document.querySelectorAll('.blind__determines--color button'));
	const lsBtn = Array.from(document.querySelectorAll('.blind__determines--ls button'));
	const fontsBtn = Array.from(document.querySelectorAll('.blind__determines--font button'));
	const fzBtn = Array.from(document.querySelectorAll('.blind__determines--fz button'));
	const imgsBtn = Array.from(document.querySelectorAll('.blind__determines--img button'));
	const reset = document.querySelector('.blind__control--reset');

	let blindParametrs = {};

	savedParametrs = JSON.parse(localStorage.getItem('blind'));

	if (savedParametrs) {
		for (const [data, value] of Object.entries(savedParametrs)) {
			root.setAttribute(data, value);
		}
	}

	function setParametrsToLocalStorage(name, value, dl) {
		blindParametrs[name] = value;
		if (dl) {
			delete blindParametrs[name];
		}
		localStorage.blind = JSON.stringify(blindParametrs);
	}

	function changeParametrs({list, btns, classes}) {
		list.addEventListener('click', (e) => {
			const target = e.target.closest('.blind__btn');

			btns.forEach((btn) => {
				btn.classList.remove('active');
			});

			classes.forEach((cl) => {
				if (target.className.split(' ').some((c) => /normal/.test(c))) {
					target.classList.add('active');
					root.removeAttribute(cl.data);
					setParametrsToLocalStorage(cl.data, cl.value, true);
				}

				if (target.classList.contains(cl.target)) {
					target.classList.add('active');
					root.setAttribute(cl.data, cl.value);
					setParametrsToLocalStorage(cl.data, cl.value);
				}
			});
		});
	}

	function resetParametrs() {
		root.removeAttribute('data-color');
		root.removeAttribute('data-ls');
		root.removeAttribute('data-font');
		root.removeAttribute('data-img');
		root.removeAttribute('data-fz');
		colorsBtn.forEach((btn, index) => {
			btn.classList.remove('active');
			if (index === 0) {
				btn.classList.add('active');
			}
		});
		lsBtn.forEach((btn, index) => {
			btn.classList.remove('active');
			if (index === 0) {
				btn.classList.add('active');
			}
		});
		fontsBtn.forEach((btn, index) => {
			btn.classList.remove('active');
			if (index === 0) {
				btn.classList.add('active');
			}
		});
		fzBtn.forEach((btn, index) => {
			btn.classList.remove('active');
			if (index === 1) {
				btn.classList.add('active');
			}
		});
		imgsBtn.forEach((btn, index) => {
			btn.classList.remove('active');
			if (index === 0) {
				btn.classList.add('active');
			}
		});
		localStorage.removeItem('blind');
	}
	changeParametrs({
		list: imgsList,
		btns: imgsBtn,
		classes: [
			{target: 'blind__img-off', data: 'data-img', value: 'off'},
			{target: 'blind__img-gray', data: 'data-img', value: 'gray'},
		],
	});// Изображения

	changeParametrs({
		list: lsList,
		btns: lsBtn,
		classes: [
			{target: 'blind__int-middle', data: 'data-ls', value: 'middle'},
			{target: 'blind__int-big', data: 'data-ls', value: 'big'},
		],
	});// Межбуквенный интервал

	changeParametrs({
		list: colorsList,
		btns: colorsBtn,
		classes: [
			{target: 'blind__color--inverse', data: 'data-color', value: 'inverse'},
			{target: 'blind__color--contrast', data: 'data-color', value: 'contrast'},
			{target: 'blind__color--comfort', data: 'data-color', value: 'comfort'},
			{target: 'blind__color--blue', data: 'data-color', value: 'blue'},
			{target: 'blind__color--brown', data: 'data-color', value: 'brown'},
		],
	});// Цвета

	changeParametrs({
		list: fontsList,
		btns: fontsBtn,
		classes: [
			{target: 'blind__font-serif', data: 'data-font', value: 'serif'},
		],
	});// Шрифт

	changeParametrs({
		list: fzList,
		btns: fzBtn,
		classes: [
			{target: 'blind__font-size--small', data: 'data-fz', value: 'small'},
			{target: 'blind__font-size--big', data: 'data-fz', value: 'big'},

		],
	});// Размер шрифта

	reset.addEventListener('click', () => {
		resetParametrs();
		showToast();
	});

	const toast = useToast()

	function showToast() {
		toast.add({
			title: 'Настройки сброшены',
			description: 'Настройки режима для слабовидящих не применяются',
			color: 'primary'
		})
	}
})

</script>
<!-- <script>

	methods: {
		toggle() {
			this.$store.commit('blind/toggle');
		},

	},
}; -->
<!-- </script> -->

<style lang="scss" scoped>
.blind {
	position: fixed;
	left: 0;
	right: 0;
	z-index: 11;
	display: none;
	font-size: 14px;
	color: #000;
	background-color: #fff;

	&__inner {
		position: relative;
		padding-top: 8px;
	}

	&__row {
		padding: 0 8px;

		> * {
			&:not(:last-child) { margin-right: 16px; }
		}

		@media screen and (min-width: 425px) {
			display: flex;
			align-items: center;
		}
	}

	&__termin {
		margin-bottom: 24px;
		font-size: 1rem;
		text-transform: uppercase;

		@media screen and (min-width: 425px) { margin-bottom: 16px; }
	}

	&__determines {
		display: flex;
		flex-wrap: wrap;
		margin: 8px 0;

		> * {
			margin-right: 8px;
			margin-bottom: 8px;
		}
	}

	&__btn {
		border: none;
		padding: 0 8px;
		height: 32px;
		color: #fff;
		background-color: #000;
		cursor: pointer;

		&.active {
			outline: 2px solid #f00;
			outline-style: dashed;

			@media screen and (min-width: 425px) { outline-offset: 2px; }
		}

		@media screen and (min-width: 425px) {
			padding: 0 16px;
			height: 40px;
		}

		@media screen and (min-width: 768px) { width: 120px; }
	}

	&__control {
		position: absolute;
		right: 8px;
		top: 0;
		border: none;
		width: 40px;
		height: 40px;
		font-size: 2rem;
		line-height: 0;
		background-color: #fff;
		cursor: pointer;

		.blind__icon {
			width: 24px;
			height: 24px;
		}

		&--reset { right: 56px; }
	}

	&__font-size--small { font-size: 0.75rem; }
	&__font-size--big { font-size: 1.375rem; }
	&__font-serif { font-family: serif; }

	&__color--normal,
	&__img-off {
		color: #000;
		background-color: #fff;
	}

	&__color--contrast {
		color: #000;
		background-color: #f3f3f3;
	}

	&__color--comfort {
		color: #2f3441;
		background-color: #e5ded6;
	}

	&__color--blue {
		color: #063462;
		background-color: #9dd1ff;
	}

	&__color--brown {
		color: #a9e44d;
		background-color: #3b2716;
	}

	&__int-middle { letter-spacing: 2px; }

	&__int-big { letter-spacing: 4px; }

	&.active {
		display: block;
		height: 100vh;

		@media screen and (min-width: 425px) { height: auto; }
	}

	@media screen and (min-width: 425px) { font-size: 16px; }
}

</style>
