<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <NuxtPicture format="avif,webp" src="/nuxt-icon.jpg"/>
  <Icon name="uil:github" />
  <Icon name="my-icon:blind" />
</template>

<style>
body {
  font-family: 'Exo 2', sans-serif;
}
</style>