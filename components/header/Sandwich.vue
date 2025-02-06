<template lang="pug">
	button.sandwich(
		type="button"
		aria-expanded="false"
		title="открыть меню"
		aria-haspopup="true" tabindex="0" aria-controls="main-nav-menu"
	)
		span.sandwich__line
		span.sandwich__line
		span.sandwich__line
</template>
<style lang="scss" scoped>
.sandwich {
	position: relative;
	outline: none;
	border-style: none;
	padding: 0;
	width: 24px;
	height: 24px;
	background-color: transparent;
	cursor: pointer;

	&__line {
		display: block;
		border-radius: 4px;
		width: 100%;
		height: 3px;
		background-color: var(--color-light);

		+ .sandwich__line { margin-top: 8px; }

		&:nth-child(1) { animation: span1 0.4s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
		&:nth-child(2) { animation: span2 0.8s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
		&:nth-child(3) { animation: span3 0.4s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
	}

	&.active {
		.sandwich__line:nth-child(1) { animation: span1_close 0.35s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
		.sandwich__line:nth-child(2) { animation: span2_close 0.35s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
		.sandwich__line:nth-child(3) { animation: span3_close 0.35s forwards cubic-bezier(0.68, -0.55, 0.265, 1.6); }
	}

	@media screen and (min-width: 992px) { display: none; }
}

@keyframes span1 {
	0% { transform: translate3d(0, 12px, 0) rotate(45deg); }
	50% { transform: translate3d(0, 12px, 0) rotate(0deg); }
	100% { transform: translate3d(0, 0, 0) rotate(0deg); }
}

@keyframes span1_close {
	0% { transform: translate3d(0, 0, 0) rotate(0deg); }
	50% { transform: translate3d(0, 10px, 0) rotate(0deg); }
	100% { transform: translate3d(0, 11px, 0) rotate(45deg); }
}

@keyframes span2 {
	0% { opacity: 0; }
	30% { opacity: 0; }
	100% { opacity: 1; }
}

@keyframes span2_close {
	60% { opacity: 1; }
	70% { opacity: 0; }
	100% { opacity: 0; }
}

@keyframes span3 {
	0% { transform: translate(0, -12px) rotate(-45deg); }
	50% { transform: translate(0, -12px) rotate(0deg); }
	100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes span3_close {
	0% { transform: translate3d(0, 0, 0) rotate(0deg); }
	50% { transform: translate3d(0, -12px, 0) rotate(0deg); }
	100% { transform: translate3d(0, -11px, 0) rotate(-45deg); }
}
</style>
