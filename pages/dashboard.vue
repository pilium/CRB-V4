<template lang="pug">
	div(class="flex items-center justify-center")
		div(class="rounded w-1/4 p-5")
			button(type="button" @click="logout" v-show='auth.isAuth') Выйти
			h1(class="text-2x1 font-bold text-center mb-5") Дашбоард {{ auth.user }}

</template>
<script setup>
import { account } from './utils/appwrite.js';
import { useAuthStore } from '~/store/auth.store.ts';

definePageMeta({
	layout: 'dashboard'
})

const logout = async () => {
	await account.deleteSession('current');
	useAuthStore.clear();
};

const auth = useAuthStore()

console.log(auth.isAuth);
</script>
