<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Хирургическое отделение
				template(v-slot:text)
					.article__text
						.container
							.article__strong
								address
									span Адрес: Волгодонской район, ст. Романовская, пер.Союзный 97а
								p
									span Контактный телефон:
									a.link.link--underline(href="tel:88639470596")  8 (86394) 7-05-96
							p
								b Хирургическое отделение располагается в отдельно стоящем одноэтажном хирургическом корпусе. В отделении имеются 13 палат:
							ul.article__list
								li
									p 11 палат – 5 местные
								li
									p 2 палаты – 2 местные
								li
									p 1 палата– одноместная (санузел, холодильник, сплит-система)
							p
								b Мощность отделения 35 коек из них:
							ul.article__list
								li
									p (обще)хирургического профиля 19 коек
								li
									p гинекологического профиля 8 коек
								li
									p дневной стационар 5 коек
								li
									p урологического профиля 3 койки
							p Время плановой госпитализации больных: понедельник-пятница с 9:00 до 11:00.
							p В хирургическом отделении оказывают экстренную и плановую помощь пациентам.
							p
								b Услуги предоставляются:
							ul.article__list
								li
									p по полисам обязательного медицинского страхования
								li
									p по полисам добровольного медицинского страхования
								li
									p платные услуги (прерывание беременности)
							commonTable(:tableData="tableData")
								template(v-slot:tableData)
									thead
										tr
											th Часы
											th Действие
									tr
										td 06.00-6.30
										td Подъем, измерение температуры
									tr
										td 06.30-8.00
										td Инъекции, процедуры
									tr
										td 08.30-09.30
										td Завтрак
									tr
										td 09.30-10.00
										td Обход
									tr
										td 10.00-13.00
										td Выписка пациентов
									tr
										td 13.00-14.00
										td Обед
									tr
										td 14.00-16.00
										td Тихий час
									tr
										td 16.00-19.00
										td Посещения больных
									tr
										td 17.00-18.00
										td Ужин
									tr
										td 18.00-20.00
										td Инъекции, процедуры
									tr
										td 20.00-21.00
										td Вечерний туалет
									tr
										td 21.00-22.00
										td Подготовка ко сну
									tr
										td 22.00
										td Отбой
							p
								b Отделение располагает большим опытом лечения:
							ul.article__list
								li
									p нагноительных и инфекционных заболеваний кожи и мягких тканей (абсцессы, флегмоны, панариции, фурункулы, карбункулы, рожистое воспаление, некротизирующие фасцииты, трофические язвы, пролежни, отморожения)
								li
									p синдрома диабетической стопы и все виды его осложнений (трофические язвы, гангрены, остеомиелиты, деформации стопы)
								li
									p трофические нарушения у больных варикозной болезнью, облитерирующим эндартериитом и атеросклерозом;
								li
									p заболеваний толстого кишечника и прямой кишки (опухоли, колостомы, геморрой, парапроктиты, трещины прямой кишки, свищи прямой кишки)
								li
									p гнойных заболеваний органов брюшной полости (перитониты, абсцессы, деструктивные холециститы, аппендициты, эвентерации, лигатурные свищи)
								li
									p лечением свищей желудочно-кишечного тракта, деструктивных заболеваний поджелудочной железы (панкреонекроз, киста, свищ)
							p
								b Краткое описание операций
							ol.article__list
								li
									p При заболеваниях кожи и подкожной клетчатки:
								ul.article__list
									li
										p Вскрытие фурункула, карбункула
									li
										p Вскрытие мастита
									li
										p Вскрытие бурсита
									li
										p Вскрытие панариция
									li
										p Вскрытие гидраденита
									li
										p Удаление вросшего ногтя
									li
										p Вскрытие флегмоны
									li
										p Иссечение эпителиального копчикового хода
									li
										p Вскрытие парапроктита
								li
									p Операции при синдроме диабетической стопы:
								ul.article__list
									li
										p Удаление гиперкератозов
									li
										p Экономная ампутация пальцев стопы, конечностей
									li
										p Ампутация голени, бедра
									li
										p Вскрытие гнойной затека, фасциита
								li
									p Операции, выполняемые на толстом кишечнике и прямой кишке:
								ul.article__list
									li
										p Резекция сигмовидной кишки
									li
										p Гемиколэктомия
									li
										p Иссечение свищей прямой кишки
									li
										p Геморроидоэктомия
								li
									p Операции на органах брюшной полости:
								ul.article__list
									li
										p Вскрытие абсцесса печени
									li
										p Вскрытие абсцесса брюшной полости
									li
										p Холецистэктомия
									li
										p Резекция желудка
									li
										p Резекция тонкой кишки
									li
										p Иссечение лигатурных свищей
								li
									p Операции на печени и желчном пузыре.
								li
									p Операции при грыжах передней брюшной стенки, в том числе больших послеоперационных грыжах.
								li
									p Все виды экстренных хирургических вмешательств на органах грудной и брюшной полости.
							p
								b Все врачи отделения владеют техникой выполнения артериальных блокад.
							p
								b В лечебном процессе для реабилитации больных широко используются методы физиотерапевтического лечения . В отделении имеется кабинет физиотерапии, где пациентам проводится:
							ul.article__list
								li
									p дарсонвализация
								li
									p электрофорез
								li
									p фонофорез
								li
									p низкочастотная магнитотерапия
							p Отделение в своей работе использует УЗИ органов брюшной полости, рентгенологическое исследование органов грудной и брюшной полости, ФГДС .Исследование крови больных на онко-маркеры позволяет на ранних стадиях выявить онкологическую патологию.
							p В составе хирургическое отделение ГБУ РО "ЦРБ" в Волгодонском районе имеются 20 коек гинекологического профиля.
							p Отделение обеспечивает преемственность между поликлиникой и стационаром, позволяет оказывать весь спектр медицинской помощи гинекологическим больным с различной патологией:
							ul.article__list
								li
									p воспалительные заболевания женских половых органов
								li
									p киста бартолиниевой железы
								li
									p апоплексия яичника
								li
									p киста яичника
								li
									p нарушение менструального цикла
								li
									p меноррагия, метроррагия
								li
									p дисплазия шейки матки
								li
									p миома матки
								li
									p фиброма
								li
									p лейкоплакия
								li
									p полип матки
								li
									p удаление кисты
								li
									p удаление матки
								li
									p эндометриоз
								li
									p полип эндометрия
								li
									p гиперплазия эндометрия
								li
									p выпадение матки
								li
									p опущение матки
								li
									p внематочная беременность
								li
									p прерывание беременности до 12 недель и другие женские заболевания.
							p Для оперативной деятельности открыта и оснащена современным оборудованием операционная для гинекологических операций. Выполняются все гинекологические операции, а так же:
							ul.article__list
								li
									p Консервативное лечение миомы матки
								li
									p Ампутации и экстирпации матки
								li
									p Диагностика и лечение эндометриоза
								li
									p Аборт операционный до 12 недель (по медицинским показаниям и по желанию)
								li
									p Гистероскопия – исследование полости матки под наркозом
								li
									p Раздельное диагностическое выскабливание цервикального канала (шейки матки) и полости матки
								li
									p Цитологическое и гистологическое исследование любого материала
								li
									p Лечение патологии шейки матки
								li
									p Профилактика и лечение воспалительных заболеваний шейки матки и придатков
								li
									p Удаление папиллом, кондилом
								li
									p Профилактика и ранняя диагностика онкологических заболеваний шейки матки, тела матки, придатков
								li
									p Ультразвуковое исследование – УЗИ органов малого таза
								li
									p Гинекологическая эндокринология – нарушение менструальной функции, болезнь поликистозных яичников
								li
									p Лечение патологии беременности ( угрозы прерывания, невынашивания, ФПН, резус-конфликтной беременности)
								li
									p Обследование и ведение беременных с экстрогенитальной патологией
								li
									p Ведение пациенток в пре- и пост-менопаузе (климакс)
							p Врачи отделения постоянно повышают свой профессиональный уровень, работают в тесном контакте с областными специалистами (в сложных диагностических случаях осуществляются консультации специалистов в отделении), посещают конференции, циклы усовершенствования врачей.
							p В 2011 – 2012 гг хирургическим отделением получено оборудование в рамках реализации Программы «Модернизация здравоохранения Волгодонского района на 2011 – 2012 годы»
							ol.article__list
								li
									p Аппарат искусственных вентиляции легких NPB-760 FG-1Z (ноябрь 2011г.)
								li
									p Инфузионный шприцевой насос с сетевым и аккумуляторным питанием Litus P-1800 (2 штуки) (ноябрь 2011 г.)
								li
									p Концентратор кислорода LF-H-10A (2 штуки, оперблок) (декабрь 2011 г.)
								li
									p Стерилизатор озоновый "Орион" с СК-36л. (2 штуки, оперблок) (декабрь 2011 г.)
								li
									p Аппарат медицинский для подогрева крови, кровезаменителей и растворов при инфузионной терапии Barkey S-line (2 штуки) (декабрь 2011 г)
								li
									p Стол операционный универсальный с электроприводом СОМэп-01 (2 штуки) (июнь 2012 г.)
								li
									p Светильник операционный бестеневой потолочный «Альфа 717» (июнь 2012 г.)
								li
									p Стерилизатор (сухожаровой шкаф),Модель ГП-80 СПУ Стандарт) (код 3005)Россия (3 шт.) (май 2012 г.)
								li
									p Мойка ультразвуковая Elmasonic S 300H (май 2012 г)
								li
									p Облучатель-рециркулятор бактерицидный настенный двухламповый ОБРН-2*15 (5 штук) (декабрь 2011 г.)
								li
									p Отсасыватель электрический медицинский 7A 23Д пр-ль Армед Китай (июль 2012 г)
								li
									p Аппарат электрохирургический высокочастотный ЭХВЧ-350- 01 «ФОТЕК» (коагулятор), производитель ООО «ФОТЕК», (август 2012 г)
								li
									p Стол перевязочный медицинский СП.08.00 (август 2012г.)
							.expert
								h2.article__title Специалисты отделения
								<ExpertItem :expert="expert[0]"/>
								<ExpertItem :expert="expert[1]"/>
</template>

<script setup>
const labels = {
	last: 'Хирургическое отделение',
}
const expert = [
	{
		src: '/media/surgeon/zhukov.jpg',
		name: 'Жуков Ирек Евгеньевич',
		job: 'Заведующий отделением, Врач хирург',
		edu: 'Ростовский государственный медицинский университет, 2002 г.',
		up: ' Хирургия, в 2018 году.',
		cert: '2018 г. Хирургия',
		category: 'Высшая, 2019 год',
	},
	{
		src: '/media/surgeon/andara.jpg',
		name: 'Андара Манаге Чамара Чандраратне',
		job: ' Врач акушер-гинеколог',
		edu: 'Ростовский государственный медицинский университет, 2000 г.',
		up: ' Акушерство и гинекология, в 2017 году.',
		cert: '2018, Анестезиология и реаниматология',
		category: 'Высшая, 2018г',
	},
]
const tableData = {
	caption: 'Распорядок дня в отделениях',
	tableClass: 'table--equal',
}
useSeoMeta({
  title: 'Хирургическое отделение',
  ogTitle: 'Хирургическое отделение',
  description: 'Информация о хирургическом отделении в ЦРБ волгодонского района',
  ogDescription: 'Информация о хирургическом отделении в ЦРБ волгодонского района'
})
</script>
