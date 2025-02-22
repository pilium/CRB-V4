import { defineStore } from "pinia";

export const isLoading = defineStore('Loading', {
	state: () => ({
		isLoading: true,
	}),
	actions: {
		set(data) {
			this.$patch({isLoading: data})
		}
	}
})
