<template lang="pug">
	.schedule
		dl.schedule__list.fl(title="Время работы с понедельника по пятницу" tabindex="0")
			dt.schedule__day Пн-Пт:
			dd.schedule__time
				time 08:00
				| -
				time 18:00
		dl.schedule__list.fl(title="Время работы в субботу" tabindex="0")
			dt.schedule__day Сб:
			dd.schedule__time
				time 09:00
				| -
				time 12:00
</template>

<style lang="scss">
	.schedule {
		&__time { margin-left: 16px; }
	}
</style>
