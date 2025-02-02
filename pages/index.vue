<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('index').first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description
})

const links = data?.value?.links;
</script>

<template>
  <h1>{{ data?.title }}</h1> 
  <p>{{ data?.description }}</p>
  <NuxtLink v-for="link in links" :key="link?.title" :to="link?.to">
    <h2>{{ link?.title }}</h2>
    <p>{{ link?.description }}</p>
  </NuxtLink>
  <NuxtPicture format="avif,webp" src="/nuxt-icon.jpg"/>
  <Icon name="uil:github" />
  <Icon name="my-icon:blind" />
</template>

<style>
body {
  font-family: 'Exo 2', sans-serif;
}
</style>