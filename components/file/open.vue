<template lang="pug">
	.file-open(v-html="openProgs")
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
	dataFormat: {
		type: String,
		default() {
			return '';
		},
	},
});
console.log(props.dataFormat);


const openProgs = ref('');

switch (props.dataFormat) {
	case 'pdf':
		openProgs.value = `
			<ul class="file-open__list fw fl">
				<li class="file-open__item">
					<a class="link link--underline" href="https://browser.yandex.ru/">Яндекс Браузер
					</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.foxitsoftware.com/ru/downloads/">Foxit Reader</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://get.adobe.com/ru/reader/">Adobe Acrobat</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://sagargurtu.github.io/lector/">Lector</a>
				</li>
			</ul>
		`;
		break;
	case 'doc':
	case 'docx':
	case 'rtf':
		openProgs.value = `
			<ul class="file-open__list fw fl">
				<li class="file-open__item">
						<a class="link link--underline" href="https://products.office.com/ru-ru/word">Microsoft Word</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.google.ru/docs/about/">Google Документы</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://ru.libreoffice.org/features/writer/">LibreOffice Writer</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.openoffice.org/ru/">Open Office</a>
				</li>
			</ul>
		`;
		break;
	case 'jpg':
		openProgs.value = `
			<ul class="file-open__list fw fl">
				<li class="file-open__item">
					<a class="link link--underline" href="https://browser.yandex.ru/">Яндекс Браузер
					</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.microsoft.com/en-us/p/microsoft-photos/9wzdncrfjbh4?activetab=pivot:overviewtab">Microsoft Photos</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.irfanview.com/">irfanView</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.faststone.org/FSViewerDetail.htm">FastStone Viewer</a>
				</li>
			</ul>
		`;
		break;
	case 'xls':
	case 'xlsx':
		openProgs.value = `
			<ul class="file-open__list fw fl">
				<li class="file-open__item">
					<a class="link link--underline" href="https://products.office.com/ru-ru/excel?SilentAuth=1&wa=wsignin1.0">Microsoft Excel</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.google.ru/intl/ru/sheets/about/">Goggle Таблицы</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://ru.libreoffice.org/download/">LibreOffice Calc</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.wps.com/">WPS Office</a>
				</li>
			</ul>
		`;
		break;
	case 'zip':
	case 'rar':
		openProgs.value = `
			<ul class="file-open__list fw fl">
				<li class="file-open__item">
					<a class="link link--underline" href="https://www.win-rar.com/start.html?&L=4">WinRar</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://7-zip.org.ua/ru/download.html">7z</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://ziparchiver.hamstersoft.com/">Hamster ZIP Archiver</a>
				</li>
				<li class="file-open__item">
					<a class="link link--underline" href="https://extract.me/ru/">Rar online</a>
				</li>
			</ul>
		`;
		break;
	default:
		openProgs.value = 'Программы для данного типа файла не определены';
		break;
}

</script>

<style lang="scss">
.file-open {
	margin-top: 8px;

	&__list {
		padding-left: 0;

		li {
			list-style-type: none;
			margin-bottom: 8px;
			width: 50%;
			text-align: center;
		}
		p { margin-bottom: 0; }
	}
}
</style>
