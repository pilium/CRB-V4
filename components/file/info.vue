<template lang="pug">
	ul.file-info(:class="{ show: show }")
		li.file-info__item.fl
			span.file-info__title Количество страниц:
			span {{ fileData.pages }}
		li.file-info__item.fl
			span.file-info__title Формат:
			span {{ format() }}
		span.file-info__title Чем открыть:
		fileOpen(:dataFormat="fileData")
</template>

<script setup>
const props = defineProps({
	fileData: {
		type: Object,
		required: true,
		default() {
			return {};
		},
	},
	show: {
		type: Boolean,
	}
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function fileFormat() {
	return props.fileData.value.format;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function format() {
	const fileFrm = props.fileData.format;
	return fileFrm.toUpperCase();
}

</script>

<style lang="scss">
.file-info {
	display: none;
	padding-left: 0;

	> * {
		&:not(:last-child) {
			@media screen and (min-width: 425px) { margin-bottom: 8px; }
		}
	}

	&__item {
		span { font-size: 1.125rem; }
	}

	&__title {
		font-weight: 600;
		font-size: 1.125rem;
	}

	&.show { display: block; }
}
</style>
