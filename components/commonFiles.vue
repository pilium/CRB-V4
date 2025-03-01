<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template lang="pug">
	section.files#docs
		.files__wrap.fl
			h2.files__title Документы
			UModal(title="Информация о разделе документы")
				button.btn.btn--cancel.btn--pd2.btn--bg-tr(aria-haspopup="true" aria-expanded="false")
					span.button__icon
						<Icon name="my-icon:question" class="files__icon" title="Информация по данному разделу"/>
				template(#content)
					<fileHint/>
		.files__items.fw
			slot(name="file")
</template>
<style lang="scss">
.files {
	&__wrap {
		position: relative;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: 24px;
			display: none;
			width: 100%;
			height: 2px;
			background-color: var(--color-bg-main);

			@media screen and (min-width: 768px) { display: block; }
		}

		> * {
			&:not(:last-child) { margin-right: 8px; }
		}
	}

	&__icon-wrap {
		align-self: center;
		border: 1px solid var(--color-border);
		border-radius: 50%;
		padding: 8px;
		cursor: pointer;
	}

	&__icon {
		width: 24px;
		height: 24px;
		fill: var(--color-main);
	}

	&__items {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;

		@media screen and (min-width: 768px) { padding: 0; }

		// > * { margin: 24px 0 24px 2.33%; }
	}

	.btn { margin-top: 8px; }
}

</style>
