<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title  Для пациентов с сахарным диабетом
				template(v-slot:text)
					.article__text
						.container
							h2 Сахарный диабет
							p Сахарный диабет – хроническое нарушение обмена веществ, в основе которого лежит дефицит образования собственного инсулина и повышение уровня глюкозы в крови. Проявляется чувством жажды, увеличением количества выделяемой мочи, повышенным аппетитом, слабостью, головокружением, медленным заживлением ран и т. д. Заболевание хроническое, часто с прогрессирующим течением. Высок риск развития инсульта, почечной недостаточности, инфаркта миокарда, гангрены конечностей, слепоты. Резкие колебания сахара в крови вызывают угрожающие для жизни состояния: гипо- и гипергликемическую комы.
							h2 Интересное о диабете
							ul.article__list
								li
									p «Сахарным» диабет назван так потому, что моча при диабете сладкая из-за высокого содержания в ней глюкозы.
								li
									p Инсулин был назван от латинского слова «insula» («остров»), потому что этот гормон секретируется островками Лангерганса в поджелудочной железе. Инсулин – это гормон, который позволяет глюкозе попадать в клетки. Без него ваша кровь превратится в сахарный сироп. Сейчас инсулин вырабатывают пекарские дрожжи и кишечная палочка.
								li
									p До открытия инсулина в 1921 году хирурги редко оперировали больных сахарным диабетом с гангреной, т.к. пациенты, как правило, не исцелялись и их ждала неизбежная смерть. Так же врачи часто держали своих пациентов на голодных или полуголодных диетах, рекомендуя есть только некоторые продукты, например, овсянку.
								li
									p Примерно 90% всех людей с диабетом 2 типа страдают тучностью и ожирением. Переедание и малоподвижный образ жизни - одна из основных причин данного типа диабета. Человечество всю свою историю жило впроголодь и лишь последние 40 лет еды в изобилии – это сыграло большую роль в развитии и распространении диабета, наш организм оказался попросту не готов к такому количеству калорий.
								li
									p Существует как минимум два типа диабета и это принципиально разные болезни: 1 тип возникает вследствие отсутствия собственного инсулина (начинается смолоду, для лечения поможет только инсулин), 2 тип возникает из-за нехватки инсулина, возникает вследствие несбалансированного питания, избыточного употребления углеводов (возможно лечение с помощью диеты).
								li
									p Существует такое состояние как преддиабет, ещё называют "пограничный диабет". Главным сигналом преддиабета послужит НЕБОЛЬШОЕ увеличение уровня глюкозы в крови от нормы (глюкоза натощак 5,5-6,9ммоль/л). Этого, как правило, недостаточно, чтобы ставить диагноз, однако риск развития опасных заболеваний уже повышается, это состояние надо контролировать, посещать врача каждые пол года, вести здоровый образ жизни, следить за питанием.
								li
									p Низкий сахар (гипогликемия) намного опаснее высокого. Если вы уколите больше инсулина, чем нужно, или скушаете меньше положенного, то получите низкий СК. Гипо бывает и у здоровых людей: спортсменов, алкоголиков, голодающих. В этом состоянии ваш мозг недополучает жизненно важную для него глюкозу и потихоньку отмирает. Частые гипогликемии с годами приводят к заиканию и приторможенности.
								li
									p Печенье на фруктозе и обычное печенье практически ничем не отличаются. Оба содержат +/- одинаковое количество углеводов. Сахарозаменители в больших дозах не полезны, поэтому их нужно употреблять в разумных количествах.
							h2 Симптомы сахарного диабета
							p Развитие сахарного диабета I типа происходит стремительно, II типа — напротив постепенно. Часто отмечается скрытое, бессимптомное течение сахарного диабета, и его выявление происходит случайно при исследовании глазного дна или лабораторном определении сахара в крови и моче. Клинически сахарный диабет I и II типов проявляют себя по-разному, однако общими для них являются следующие признаки:
							ul.article__list
								li
									p жажда и сухость во рту, сопровождающиеся полидипсией (повышенным употреблением жидкости) до 8-10 л в сутки;
								li
									p полиурия (обильное и учащенное мочеиспускание);
								li
									p полифагия (повышенный аппетит);
								li
									p сухость кожи и слизистых, сопровождающиеся зудом (в т. ч. промежности), гнойничковые инфекции кожи;
								li
									p нарушение сна, слабость, снижение работоспособности;
								li
									p судороги в икроножных мышцах;
								li
									p нарушения зрения.
							object(data="https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/media/Articles/Pitanie_detey_i_podrostkov_s_sakharnym_diabetom.pdf" type="application/pdf" width="100%" height="500")
								p Упс! Кажется, PDF-файл не отобразился. Попробуйте скачать его
									a(href="https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/media/Articles/Pitanie_detey_i_podrostkov_s_sakharnym_diabetom.pdf")  отсюда
							br
							object(data="https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/media/Articles/sah.pdf" type="application/pdf" width="100%" height="500")
								p Упс! Кажется, PDF-файл не отобразился. Попробуйте скачать его
									a(href="https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai/media/Articles/sah.pdf")  отсюда
</template>
<script setup>
useSeoMeta({
  title: 'Для пациентов с сахарным диабетом',
  ogTitle: 'Для пациентов с сахарным диабетом',
  description: 'Для пациентов с сахарным диабетом',
  ogDescription: 'Для пациентов с сахарным диабетом'
})
const labels = {
	last: 'Для пациентов с сахарным диабетом',
}
</script>
