<template lang="pug">
	.inner-wrapper
		<commonBreadcrumbs :labels="labels"/>
		main.main#content
			commonArticle
				template(v-slot:title)
					h1.article__title Страховые компании ростовской области
				template(v-slot:text)
					.article__text
						.container
							commonTable(:tableData="tableData")
								template(v-slot:tableData)
									thead
										tr
											th(scope="col") СМО
											th(scope="col") Название
											th(scope="col") Телефон
									tbody
										tr
											td
												img(src="/media/smo/smo_maks.png" alt="МАКС-М")
											td
												a.link.link--underline(href="https://www.makc.ru/" target="_blank" rel="noopener noreferrer") Ростовский филиал АО "МАКС-М"
											td
												a.link.link--underline(href="tel:+88005550003")
													b 8-800-555-00-03
										tr
											td
												img(src="/media/smo/logo-alfa_strah.png" alt="АльфаСтрахование")
											td
												a.link.link--underline(href="https://alfastrahoms.ru/" target="_blank" rel="noopener noreferrer")  ООО «АльфаСтрахование - ОМС»
											td
												a.link.link--underline(href="tel:+88005551001")
													b 8 800 555 10 01
										tr
											td
												img(src="/media/smo/panaceya2.png" alt="Панацея")
											td
												a.link.link--underline(href="https://www.mco-panacea.ru/" target="_blank" rel="noopener noreferrer") ООО МСО «Панацея»
											td
												a.link.link--underline(href="tel:+88002000868")
													b 8-800-200-08-68
										tr
											td
												img(src="/media/smo/SOGAZ-Logotype-RUS.png" alt="Страховая компания «СОГАЗ-Мед")
											td
												a.link.link--underline(href="https://www.sogaz-med.ru/" target="_blank" rel="noopener noreferrer")  Ростовский филиал АО «Страховая компания «СОГАЗ-Мед»
											td
												a.link.link--underline(href="tel:+88001000702")
													b 8-800-100-07-02
										tr
											td
												img(src="/media/smo/capital.png" alt="ООО «Капитал МС»")
											td
												a.link.link--underline(href="https://kapmed.ru/" target="_blank" rel="noopener noreferrer") Филиал ООО «Капитал МС»
											td
												a.link.link--underline(href="tel:+88001008102")
													b 8 800 100-81-02
</template>

<script setup>
useSeoMeta({
  title: 'Перечень страховых компаний',
  ogTitle: 'Перечень страховых компаний',
  description: 'Страховые компании ростовской области',
  ogDescription: 'Страховые компании ростовской области'
})
const labels = {
	last: 'Перечень страховых компаний',
}
</script>
