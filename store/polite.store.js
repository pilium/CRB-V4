import { defineStore } from "pinia";

export const politeStore = defineStore('polite', {
	state: () => ({
		isPoliteOpen: false,
	}),
	actions : {
		toggle() {
			this.isPoliteOpen = !this.isPoliteOpen;
		}
	}
})
