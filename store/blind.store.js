import { defineStore } from "pinia";

export const blindStore = defineStore('blind', {
	state: () => ({ isOpen: false }),
	actions: {
		toggle() {
			this.isOpen = !this.isOpen
	  },
	},
  })
