import { defineStore } from "pinia";

export const isLoading = defineStore('Loading', {
	state: () => ({
		isLoading: false,
	}),
	actions: {
		set(data) {
			this.$patch({isLoading: data})
		}
	}
})
