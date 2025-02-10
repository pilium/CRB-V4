<template lang="pug">
	section.section
		.informer
			.informer__inner
				.panel.panel--contacts
					<SectionsContactsFooter/>
				.panel.panel--map
					<SectionsMap/>
</template>
<style lang="scss" scoped>
	.informer {
		position: relative;
		margin-bottom: 16px;

		&__inner {
			display: block;

			> * {
				&:not(:last-child) {
					@media screen and (min-width: 1528px) { margin-right: 24px; }
				}
			}

			@media screen and (min-width: 1528px) { display: flex; }
		}
		.panel--contacts { padding: 16px; }
		.panel--weather { position: relative; }
	}
</style>
