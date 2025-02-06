<template lang="pug">
	.write-us
		button.btn.btn--write-us(type="button")
			span.button__icon
				<Icon name="my-icon:pen" class="write-us__icon" title="Иконка ссылка на форму обратной связи"/>
			span.btn__text Написать нам
		//- <Modal :modal="modalData"/>
</template>

<style lang="scss">
	.write-us {
		&__icon {
			width: 24px;
			height: 24px;
			fill: var(--color-light);

			@media screen and (min-width: 992px) {
				width: 32px;
				height: 32px;
				fill: var(--color-icon);
			}
		}
	}
</style>
