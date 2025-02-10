<template lang="pug">
	.map
		.map__chart#map
		.map__overlay
			h2.map__text Нажмите <br/> для отображения карты
</template>

<script setup>
// const wrapper = document.querySelector('.map');

// const init = () => {
// 	let myMapTemp = new ymaps.Map('map', {
// 		center: [47.539501, 42.014754],
// 		zoom: 15,
// 		controls: ['fullscreenControl'],
// 		searchControlProvider: 'yandex#search',
// 	});

// 	let myPlacemarkTemp = new ymaps.Placemark([52.44, 69.73, 49.81, 62.12], {}, {
// 		iconLayout: 'default#imageWithContent',
// 		iconImageSize: [50, 50],
// 		iconImageOffset: [-25, -50],
// 	});

// 	myMapTemp.geoObjects.add(myPlacemarkTemp);

// 	let layer = myMapTemp.layers.get(0).get(0);

// 	this.waitForTilesLoad(layer).then(() => {
// 		wrapper.classList.add('is-loaded');
// 	});

// 	setTimeout(() => {
// 		this.$nuxt.$loading.finish();
// 	}, 500);
// };

// let ymap = () => {
// 	const trigger = document.querySelector('.map__overlay');

// 	trigger.addEventListener('click', () => {
// 		this.$nuxt.$loading.start();
// 		wrapper.classList.add('is-active');

// 		this.loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1', () => {
// 			ymaps.load(init);
// 		});
// 	});
// };

// function loadScript(url, callback) {
// 	let script = document.createElement('script');

// 	if (script.readyState) { // IE
// 		// eslint-disable-next-line func-names
// 		script.onreadystatechange = function () {
// 			if (script.readyState === 'loaded' ||
// 		script.readyState === 'complete') {
// 				script.onreadystatechange = null;
// 				callback();
// 			}
// 		};
// 	} else { // Другие браузеры
// 		// eslint-disable-next-line func-names
// 		script.onload = function () {
// 			callback();
// 		};
// 	}

// 	script.src = url;
// 	document.getElementsByTagName('head')[0].appendChild(script);
// }

// function waitForTilesLoad(layer) {
// 	return new ymaps.vow.Promise((resolve) => {
// 		let tc = this.getTileContainer(layer);

// 		let
// 			readyAll = true;

// 		tc.tiles.each((tile) => {
// 			if (!tile.isReady()) {
// 				readyAll = false;
// 			}
// 		});
// 		if (readyAll) {
// 			resolve();
// 		} else {
// 			tc.events.once('ready', () => {
// 				resolve();
// 			});
// 		}
// 	});
// }

// function getTileContainer(layer) {
// 	for (let k in layer) {
// 		// eslint-disable-next-line no-prototype-builtins
// 		if (layer.hasOwnProperty(k)) {
// 			if (
// 				layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
// 			) {
// 				return layer[k];
// 			}
// 		}
// 	}

// 	return null;
// }

// ymap();

// export default {
// 	data() {
// 		return {
// 			map: null,
// 			coordinates: [],
// 		};
// };
</script>

<style lang="scss" scoped>
	.map {
		position: relative;

		&__chart {
			position: relative;
			width: 100%;
			min-height: 200px;
			background: url("/media/map.jpg") #fff no-repeat;
			background-position: bottom center;
			background-size: cover;
			filter: blur(2px);

			@media screen and (min-width: 992px) { min-height: 400px; }
		}

		&__overlay {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			background-color: rgba(#3e9892, 0.8);
			cursor: pointer;
		}

		&__text {
			position: absolute;
			left: 50%;
			top: 50%;
			margin: 0;
			font-size: 22px;
			text-align: center;
			color: var(--color-light);
			transform: translate(-50%, -50%);
		}

		&.is-active {
			.map__chart { filter: none; }
		}

		&.is-loaded {
			.map__overlay { display: none; }
		}

		&--inner { margin-bottom: 0; }
	}
</style>
