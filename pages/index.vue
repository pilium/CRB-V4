<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('index').first())

useSeoMeta({
	title: data.value?.title,
	description: data.value?.description
})
</script>

<template lang="pug">
main.main#content
	<SectionsHero/>
	<SectionsContacts/>
	<SectionsBanner/>
	<SectionsQuickLinks/>
	<SectionsArticles/>
	<SectionsInformer/>
</template>

<style>
body {
	font-family: 'Exo 2', sans-serif;
}
</style>
