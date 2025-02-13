<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Как защитить себя
				template(v-slot:text)
					.article__text
						.container
							h2.article__title В ванной
								figure.article__figure
									img(src="/media/protect/1.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/2.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/3.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/4.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/5.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/6.jpg" alt="Как защитить себя в ванной")
								figure.article__figure
									img(src="/media/protect/7.jpg" alt="Как защитить себя в ванной")
							h2.article__title От гриппа
								figure.article__figure
									img(src="/media/protect/10.jpg" alt="Как защитить от гриппа")
								figure.article__figure
									img(src="/media/protect/11.jpg" alt="Как защитить от гриппа")
								figure.article__figure
									img(src="/media/protect/12.jpg" alt="Как защитить от гриппа")
								figure.article__figure
									img(src="/media/protect/13.jpg" alt="Как защитить от гриппа")
								figure.article__figure
									img(src="/media/protect/14.jpg" alt="Как защитить от гриппа")
								figure.article__figure
									img(src="/media/protect/15.jpg" alt="Как защитить от гриппа")
</template>
<script setup>

useSeoMeta({
  title: 'Национальный проект здравоохранения',
  ogTitle: 'Национальный проект здравоохранения',
  description: 'Региональные проекты национально проекта Здравоохранения, реализация в ЦРБ волгодонского района',
  ogDescription: 'Региональные проекты национально проекта Здравоохранения, реализация в ЦРБ волгодонского района'
})
const labels = {
	last: 'Национальный проект здравоохранения',
}
</script>

<style lang="scss">
.tabs {
	&__gallery-image {
		margin: 16px 0;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;

		&--fix {
			width: 300px;
			height: 200px;
		}
	}
}
</style>
