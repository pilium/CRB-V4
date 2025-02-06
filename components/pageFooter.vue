<script setup>
function setYear() {
	const date = new Date().getFullYear();
	return date;
}
</script>
<template lang="pug">
	footer.footer
		.container
			.footer__inner.fc
				.footer__copyright
					p.footer__title ©
						span.footer__year.js-footer__year {{setYear()}}
						| ГБУ РО "ЦРБ" в Волгодонском районе.
					p государственное бюджетное учреждение Ростовской области "Центральная районная больница"
						|  в Волгодонском районе.
						b  Все права защищены
				.footer__social
					<footerSocial/>

</template>
<style lang="scss" scoped>
	.footer {
		padding: 8px 16px 8px 16px;
		background-color: var(--color-bg-main);

		&__inner {
			flex-direction: column-reverse;
			color: var(--color-light);

			@media screen and (min-width: 992px) {
				flex-direction: row;
				justify-content: space-between;
			}
		}

		&__title { font-weight: bold; }
		&__year { margin: 0 8px; }

		&__copyright { max-width: 656px; }
	}

</style>
