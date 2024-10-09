var SnakeGame = window.SnakeGame || {};

SnakeGame.Helpers = (function () {

	return class Helpers {

		static getRandomInt(min, max) {
			let random = Math.round(Math.random() * (max - min) + min);
			return Math.ceil(random / 10) * 10;
		}

	}


})();