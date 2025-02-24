export default defineAppConfig({
	ui: {
	  modal: {
		variants: {
		  fullscreen: {
			false: {
				content: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)'
			}
		  }
		}
	  },
	  tabs: {
		defaultVariants: {
			size: 'lg'
		}
	  }
	}
})

