import { defineStore } from "pinia";

export const menuStore = defineStore('menu', {
	state: () => ({
		isSandwichOpen: false,
		isMenuOpen: false,
	}),
	actions : {
		toggle() {
			this.isSandwichOpen = !this.isSandwichOpen;
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
})
