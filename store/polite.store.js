import { defineStore } from "pinia";

export const blindStore = defineStore('blind', {
	state: () => ({
		isPoliteOpen: false,
	}),
	actions : {
		toggle() {
			this.state.isPoliteOpen = !this.state.isPoliteOpen;
		}
	}
})
