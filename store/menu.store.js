import { defineStore } from "pinia";

export const blindStore = defineStore('blind', {
	state: () => ({
		isSandwichOpen: false,
		isMenuOpen: false,
	}),
	actions : {
		toggle() {
			this.state.isSandwichOpen = !this.state.isSandwichOpen;
			this.state.isMenuOpen = !this.state.isMenuOpen;
		}
	}
})
