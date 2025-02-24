<template lang="pug">
	.loader
</template>

<style lang="scss">
.loader {
	position: fixed;
	left: 50%;
	top: 50%;
	z-index: 11;
	margin: -24px -24px;
	width: 48px;
	height: 48px;
	animation: rotate 1s infinite;

	&::before,
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 20px;
		height: 20px;
	}

	&::before {
		margin-bottom: 8px;
		box-shadow: 32px 0 0 #f8b334;
		background-color: #cb2025;
		animation: ball1 1s infinite;
	}

	&::after {
		box-shadow: 30px 0 0 #97bf0d;
		background-color: #00a096;
		animation: ball2 1s infinite;
	}
}

@keyframes rotate {
	0% { transform: rotate(0deg) scale(0.8); }
	50% { transform: rotate(360deg) scale(1.2); }
	100% { transform: rotate(720deg) scale(0.8); }
}

@keyframes ball1 {
	0% { box-shadow: 32px 0 0 #f8b334; }

	50% {
		margin-bottom: 0;
		box-shadow: 0 0 0 #f8b334;
		transform: translate(15px, 15px);
	}

	100% {
		margin-bottom: 8px;
		box-shadow: 32px 0 0 #f8b334;
	}
}

@keyframes ball2 {
	0% { box-shadow: 32px 0 0 #97bf0d; }

	50% {
		margin-top: -16px;
		box-shadow: 0 0 0 #97bf0d;
		transform: translate(15px, 15px);
	}

	100% {
		margin-top: 0;
		box-shadow: 32px 0 0 #97bf0d;
	}
}
</style>
