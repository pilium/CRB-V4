<script setup>
import { ref } from 'vue';
import { account, ID } from './utils/appwrite.js';
import { isLoading } from '~/store/loading.store';
import { useAuthStore } from '~/store/auth.store';

const router = useRouter();

definePageMeta({
	layout: 'dashboard'
})

const registerShow = ref(false);

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const name = ref('');

const isLoad = isLoading();
const authStore = useAuthStore();

const login = async () => {
	try {
		isLoad.set(true);
		await account.createEmailPasswordSession(email.value, password.value);
		loggedInUser.value = await account.get();
		if(loggedInUser.value) {
			authStore.set({
				email: loggedInUser.value.email,
				name: loggedInUser.value.name,
				status: loggedInUser.value.status
			})
		}
		await router.push('/dashboard')
		isLoad.set(false)
	} catch (error) {
		const toast = useToast()

		function showToast() {
			toast.add({
				title: 'Ошибка аунтефикации',
				description: error,
				color: 'error'
			})
		}
		console.log(error);

		showToast(error)
		isLoad.set(false)
	}

};

const register = async () => {
	await account.create(ID.unique(), email.value, password.value, name.value);
	await login(email.value, password.value);
};

</script>

<template lang="pug">
	.inner-wrapper(class="flex items-center justify-center")
		main.main#content
			.container-login
				p {{ loggedInUser ? `Logged in as ${loggedInUser.email}` : 'Not logged in' }}
				.login-page
					.form
						form.login-form
							input(type="text", placeholder="email address", v-model="email")
							input(type="password", placeholder="password", v-model="password")
							input(type="text", placeholder="name", v-model="name" v-if="registerShow")
							div(class="flex items-center justify-center gap-5")
								button(@click="login(email, password)" v-show="!registerShow") Войти
								button(@click="register" v-show="registerShow") Регистрация
								button(type="button" @click="logout" v-show='!loggedInUser') Выйти
							p.message Еще не зарегистрированы?
								a(href="#" @click="registerShow = !registerShow" v-show="registerShow")  Войти в аккаунт
								a(href="#" @click="registerShow = !registerShow" v-show="!registerShow")  Создать аккаунт
				//- form
				//- 	input(type="email" placeholder="Email" v-model="email")
				//- 	input(type="password" placeholder="Password" v-model="password")
				//- 	input(type="text" placeholder="Name" v-model="name")
				//- 	button(type="button" @click="login(email, password)") Login
				//- 	button(type="button" @click="register") Register
</template>
<style lang="scss">
$color_1: #FFFFFF;
$color_2: #b3b3b3;
$color_3: #4CAF50;
$color_4: #1a1a1a;
$color_5: #4d4d4d;
$color_6: #000000;
$color_7: #EF3B3A;



.login-page {
	width: 360px;
	padding: 8% 0 0;
	margin: auto;
}
.form {
	position: relative;
	z-index: 1;
	background: var(--color-light);
	max-width: 360px;
	margin: 0 auto 100px;
	padding: 45px;
	text-align: center;;
	input {
		outline: 0;
		background: #f2f2f2;
		width: 100%;
		border: 0;
		margin: 0 0 15px;
		padding: 15px;
		box-sizing: border-box;
		font-size: 14px;
	}
	button {
		text-transform: uppercase;
		outline: 0;
		background: #4CAF50;
		width: 100%;
		border: 0;
		padding: 15px;
		color: $color_1;
		font-size: 14px;
		-webkit-transition: all 0.3 ease;
		transition: all 0.3 ease;
		cursor: pointer;
		&:hover {
			background: #43A047;
		}
		&:active {
			background: #43A047;
		}
		&:focus {
			background: #43A047;
		}
	}
	.message {
		margin: 15px 0 0;
		color: $color_2;
		font-size: 12px;
		a {
			color: $color_3;
			text-decoration: none;
		}
	}
}
.container-login {
	position: relative;
	z-index: 1;
	max-width: 300px;
	margin: 0 auto;
	&:before {
		content: "";
		display: block;
		clear: both;
	}
	&:after {
		content: "";
		display: block;
		clear: both;
	}
	.info {
		margin: 50px auto;
		text-align: center;
		h1 {
			margin: 0 0 15px;
			padding: 0;
			font-size: 36px;
			font-weight: 300;
			color: $color_4;
		}
		span {
			color: $color_5;
			font-size: 12px;
			a {
				color: $color_6;
				text-decoration: none;
			}
			.fa {
				color: $color_7;
			}
		}
	}
}
</style>
