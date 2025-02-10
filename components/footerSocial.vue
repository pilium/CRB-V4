<template lang="pug">
.social-icons
	ul.social-icons__list.fc
		li.social-icons__item
			a.social-icons__icon(
				href="https://ok.ru/profile/571342870927",
				target="blanc",
				rel="noopener"
			)
				span.hide-text На страницу одноклассники
				<Icon name="my-icon:odnoklassniki" class="social-icons__svg-icon" title="иконка ссылки на страницу ЦРБ в социальной сети Одноклассники"/>
		li.social-icons__item
			a.social-icons__icon(
				href="https://vk.com/crbvr",
				target="blanc",
				rel="noopener"
			)
				span.hide-text На страницу Вконтакте
				<Icon name="my-icon:vk" class="social-icons__svg-icon" title="иконка ссылки на страницу ЦРБ в социальной сети ВКонтакте"/>
		li.social-icons__item
			a.social-icons__icon(
				href="https://t.me/+vZZz0AAJlaQxOTVi",
				target="blanc",
				rel="noopener"
			)
				span.hide-text Волгодонской.Здоровье
				<Icon name="my-icon:telegram" class="social-icons__svg-icon" title="иконка ссылки на группу ЦРБ в Telegram"/>
</template>

<style lang="scss" scoped>
.social-icons {
	margin-bottom: 16px;

	&__list {
		> * {
			&:not(:last-child) {
				margin-right: 8px;
			}
		}
	}

	&__icon {
		border-radius: 50%;
		padding: 16px;
	}

	&__svg-icon {
		width: 32px;
		height: 32px;
		fill: var(--color-light);
	}

	&__item {
		cursor: pointer;
	}
	&__item:hover {
		svg {
			fill: var(--color-hover);
		}
	}

	@media (min-width: 992px) {
		margin-bottom: 0;
	}
}
</style>
