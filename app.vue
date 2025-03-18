<template>
	<UApp :locale="ru">
		<NuxtLayout/>
	</UApp>
</template>
<script setup lang="ts">
import { ru } from '@nuxt/ui/locale';

useHead({
	meta: [
		{hid: 'description', name: 'description', content: 'Телефоны и контакты администрации и отделений больницы'},
	],
	htmlAttrs: {
		lang: 'ru'
	}
})

</script>
