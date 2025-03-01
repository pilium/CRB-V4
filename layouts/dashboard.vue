<script setup>
import { account } from './utils/appwrite.js';
import { isLoading } from '~/store/loading.store';
import { useAuthStore } from '~/store/auth.store';


const isLoad = isLoading();
const store = useAuthStore();
const router = useRouter();


onMounted(async() => {
	try {
		const user = await account.get()
		if(user) store.set(user)
	} catch (error) {
		router.push('/login')
		console.log(error);
	} finally {
		isLoad.set(false)
	}
})
</script>
<template lang="pug">
	<pageLoader v-if="isLoad.isLoading"/>
	.main-wrapper.f(v-else)
		//- <SkipContent/>
		<NuxtPage/>
		<pageFooter/>
</template>
