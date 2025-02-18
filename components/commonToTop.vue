<!-- eslint-disable @typescript-eslint/no-unused-expressions -->
<script setup>
onMounted(() => {
	(function () {
	const showButton = 600;

	const scrollSpeed = 1000;

	function scrollTop(b) {
		const scrollTime = window.scrollY / 2;

		let c = 0;
		let e = performance.now();

		function a(d) {
			c += Math.PI / (b / (d - e));

			c >= Math.PI && window.scrollTo(0, 0);

			window.scrollY !== 0 && (window.scrollTo(0, Math.round(scrollTime + scrollTime * Math.cos(c))), e = d, window.requestAnimationFrame(a));
		}
		window.requestAnimationFrame(a);
		}
		let scrollPosition = window.scrollY;

		const scrollButton = document.getElementById('scrollToTop');
		if (scrollButton) {
			window.addEventListener('scroll', () => {
			scrollPosition = window.scrollY;

			showButton < scrollPosition
				? scrollButton.classList.add('visible')
				: scrollButton.classList.remove('visible');
		});
		scrollButton.onclick = function () {
			scrollTop(scrollSpeed);
		};
	}
})();
})
</script>
<template lang="pug">
	button.btn.scrollToTop#scrollToTop
		svg(xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24")
			path(d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z")
			path(d="M0 0h24v24H0z" fill="none")
</template>
<style lang="scss" scoped>
.scrollToTop {
	position: fixed;
	right: 11px;
	bottom: 72px;
	z-index: 9;
	padding: 8px;
	background-color: var(--color-bg-icon);
	opacity: 0;
	visibility: hidden;
	cursor: pointer;
	transform: translateY(-2em);
	transition: opacity 0.3s, background-color 0.3s;

	svg {
		display: block;
		fill: var(--color-light);
	}

	&:hover,
	&:focus { background: var(--color-bg-main); }

	&.visible {
		visibility: visible;
		animation: slide-in-bck-br 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@keyframes slide-in-bck-br {
		0% {
			opacity: 0;
			transform: translateZ(700px) translateY(300px) translateX(400px);
		}

		100% {
			opacity: 1;
			transform: translateZ(0) translateY(0) translateX(0);
		}
	}

	@media screen and (min-width: 992px) {
		right: 0;
		bottom: 16px;
		padding: 16px 8px;
		width: 64px;
	}
}
</style>

