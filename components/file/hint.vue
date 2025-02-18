<template lang="pug">
	article.file-hint
		h2.file-hint__title Общая информация
		p Раздел "Документы" предоставляет доступ к файлам, относящимся к статье или записи ниже которой он расположен.
		p Каждый файл расположен в отдельном блоке и имеет ряд условных обозначений:
		h3.file-hint__title Условные обозначения
		p Каждая карточка файла содержит название файла, а также ряд тегов:
		ul.article__list.article__list--noPd
			li.article__list-item.f
				<Icon name="my-icon:doc" class="file-hint__icon" title="Иконка формата файла"/>
				p #[b Иконка формата файла] - обозначает формат файла. На данном сайте используются несколько форматов файлов( текст, таблица, изображение, архив ).
			li.article__list-item.f
				<Icon name="my-icon:download" class="file-hint__icon" title="Иконка скачивания приложений к файлу"/>
				p #[b Иконка скачивания приложений к файлу] - обозначает ссылку для скачивания архива с приложениями к данному файлу. Кликнув на данную иконку Вам будет предложено выбрать путь для скачивания файла, независимо от того может ли файл открыться в самом браузере.
			li.article__list-item.f
				span (125кб)
				p #[b Размер файла] - обозначает размер скачиваемого файла.
			li.article__list-item.f
				span (10.12.2019)
				p #[b Дата] - дата создания или последнего изменнения данного документа
		h3.file-hint__title Форматы файлов
		ul.article__list
			li
				p #[b DOC, DOCX, RTF] - Текстовые форматы
			li
				p #[b XLS, XLSX] - Формат таблиц
			li
				p #[b PDF] - Формат электронных документов
			li
				p #[b JPG] - Формат изображений
			li
				p #[b RAR, ZIP] - Формат архивов
		h3.file-hint__title Дополнительная информация по файлу
		p При клике на иконку дополнительной информации ( #[code i] ) - откроется дополнительная информация по файлу, включающая в себя:
		ul.article__list
			li
				p #[b Количесиво страниц] - Количество страниц в данном документе
			li
				p #[b Формат] - формат данного документа и его размер
			li
				p #[b Чем открыть] - список популярных программ для работы с данным форматом документа
</template>

<style lang="scss">
.file-hint {
	font-size: 1.125rem;

	&__icon {
		flex-shrink: 0;
		width: 24px;
		height: 24px;
	}

	code {
		border-radius: var(--border-radius);
		padding: 0 8px;
		width: 32px;
		height: 32px;
		color: var(--color-light);
		background-color: var(--color-bg-main);
	}

	.article__list-item {
		> * {
			&:not(:last-child) { margin-right: 16px; }
		}
	}
}

</style>
