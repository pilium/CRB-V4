<script setup lang="ts">
useScript('https://cdn.jsdelivr.net/npm/js-confetti@0.12.0/dist/js-confetti.browser.js')

const { onLoaded } = useScriptNpm({
  packageName: 'js-confetti',
  file: 'dist/js-confetti.browser.js',
  version: '0.12.0',
  scriptOptions: {
    use() {
      return { JSConfetti: window.JSConfetti }
    },
  },
})
onLoaded(({ JSConfetti }) => {
  // using the real API instance
  const confetti = new JSConfetti()
  Widget("https://pos.gosuslugi.ru/form", 223761);
  confetti.addConfetti({ emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'] })
})
</script>
<template lang="pug">
	.container
		#js-show-iframe-wrapper
			.pos-banner-fluid.bf-12
				div(class="bf-12__decor")
					div(class="bf-12__logo-wrap")
						img(class="bf-12__logo", src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg", alt="Госуслуги")
						div(class="bf-12__slogan") Решаем вместе
				div(class="bf-12__content")
					div(class="bf-12__text") Не смогли записаться к врачу?
					div(class="bf-12__bottom-wrap")
						div(class="bf-12__btn-wrap")
							button(class="pos-banner-btn_2", type="button") Написать о проблеме
</template>

<style>
	#js-show-iframe-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-width: 293px;
		max-width: 100%;
		color: #fff;
		cursor: pointer;
	}
	#js-show-iframe-wrapper .pos-banner-fluid * {
		box-sizing: border-box;
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2 {
		display: block;
		width: 240px;
		min-height: 56px;
		font-size: 18px;
		line-height: 24px;
		cursor: pointer;
		color: #fff;
		border: none;
		border-radius: 8px;
		outline: 0;
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover {
		background: #1d5deb;
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus {
		background: #2a63ad;
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active {
		background: #2a63ad;
	}
	@-webkit-keyframes fadeInFromNone {
		0% {
			display: none;
			opacity: 0;
		}
		1% {
			display: block;
			opacity: 0;
		}
		100% {
			display: block;
			opacity: 1;
		}
	}
	@keyframes fadeInFromNone {
		0% {
			display: none;
			opacity: 0;
		}
		1% {
			display: block;
			opacity: 0;
		}
		100% {
			display: block;
			opacity: 1;
		}
	}
	@font-face {
		font-family: LatoWebLight;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: LatoWeb;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: LatoWebBold;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: RobotoWebLight;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: RobotoWebRegular;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: RobotoWebBold;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: ScadaWebRegular;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: ScadaWebBold;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff2)
				format("woff2"),
			url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff) format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.ttf)
				format("truetype");
		font-style: normal;
		font-weight: 400;
	}
	@font-face {
		font-family: Geometria;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot);
		src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot?#iefix)
				format("embedded-opentype"),
			url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.ttf)
				format("truetype");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: Geometria-ExtraBold;
		src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot);
		src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot?#iefix)
				format("embedded-opentype"),
			url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.woff)
				format("woff"),
			url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.ttf)
				format("truetype");
		font-weight: 800;
		font-style: normal;
	}
	#js-show-iframe-wrapper {
		padding: 16px 0;
		background: var(--pos-banner-fluid-12__background);
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2 {
		width: 100%;
		min-height: 52px;
		background: #fff;
		color: #0d4cd3;
		font-size: 16px;
		font-family: LatoWeb, sans-serif;
		font-weight: 400;
		padding: 0;
		line-height: 1.2;
	}
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active,
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus,
	#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover {
		background: #e4ecfd;
	}
	#js-show-iframe-wrapper .bf-12 {
		position: relative;
		display: grid;
		grid-template-columns: var(--pos-banner-fluid-12__grid-template-columns);
		grid-template-rows: var(--pos-banner-fluid-12__grid-template-rows);
		width: 100%;
		max-width: var(--pos-banner-fluid-12__max-width);
		box-sizing: border-box;
		grid-auto-flow: row dense;
	}
	#js-show-iframe-wrapper .bf-12__decor {
		background: var(--pos-banner-fluid-12__bg-url)
			var(--pos-banner-fluid-12__bg-url-position) no-repeat;
		background-size: var(--pos-banner-fluid-12__bg-size);
		background-color: #f8efec;
		position: relative;
	}
	#js-show-iframe-wrapper .bf-12__content {
		display: flex;
		flex-direction: column;
		background-color: #2d73bc;
		padding: var(--pos-banner-fluid-12__content-padding);
		grid-row: var(--pos-banner-fluid-12__content-grid-row);
		justify-content: center;
	}
	#js-show-iframe-wrapper .bf-12__text {
		margin: var(--pos-banner-fluid-12__text-margin);
		font-size: var(--pos-banner-fluid-12__text-font-size);
		line-height: 1.2;
		font-family: LatoWeb, sans-serif;
		font-weight: 700;
	}
	#js-show-iframe-wrapper .bf-12__bottom-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	#js-show-iframe-wrapper .bf-12__logo-wrap {
		position: absolute;
		top: var(--pos-banner-fluid-12__logo-wrap-top);
		right: var(--pos-banner-fluid-12__logo-wrap-right);
	}
	#js-show-iframe-wrapper .bf-12__logo {
		width: var(--pos-banner-fluid-12__logo-width);
		margin-left: 1px;
	}
	#js-show-iframe-wrapper .bf-12__slogan {
		font-family: LatoWeb, sans-serif;
		font-weight: 700;
		font-size: var(--pos-banner-fluid-12__slogan-font-size);
		line-height: 1.2;
		color: #005ca9;
	}
	#js-show-iframe-wrapper .bf-12__btn-wrap {
		width: 100%;
		max-width: var(--pos-banner-fluid-12__button-wrap-max-width);
	}
</style>
