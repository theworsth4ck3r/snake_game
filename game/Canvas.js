var SnakeGame = window.SnakeGame || {};

SnakeGame.Canvas = (function () {

	class Canvas {

		canvasHtml = null;
		canvasContext = null;

		static bgColor = '#000000';

		constructor() {
			this.createCanvasHtml();
			this.setCanvasSize();
			this.createCanvasContext();
		}

		createCanvasHtml() {
			this.canvasHtml = document.createElement('canvas');
		}

		setCanvasSize() {
			this.canvasHtml.width = SnakeGame.Config.canvasWidth;
			this.canvasHtml.height = SnakeGame.Config.canvasHeight;
		}

		createCanvasContext() {
			this.canvasContext = this.canvasHtml.getContext('2d');
		}

		getCanvasHtml() {
			return this.canvasHtml;
		}

		getCanvasContext() {
			return this.canvasContext;
		}

		drawScene() {
			this.canvasContext.fillStyle = Canvas.bgColor;
			this.canvasContext.fillRect(
				0, 0,
				SnakeGame.Config.canvasWidth,
				SnakeGame.Config.canvasHeight
			);

		}

		drawBaseElement(positionX, positionY, color) {

			this.canvasContext.fillStyle = color;

			this.canvasContext.fillRect(
				positionX, positionY,
				SnakeGame.Config.baseElementWidth,
				SnakeGame.Config.baseElementHeight
			);

			this.canvasContext.strokeStyle = Canvas.bgColor;
			this.canvasContext.lineWidth = 0.2;
			this.canvasContext.strokeRect(
				positionX, positionY,
				SnakeGame.Config.baseElementWidth,
				SnakeGame.Config.baseElementHeight
			);

		}

		getRandomPositions() {
			let config = SnakeGame.Config;

			let x = SnakeGame.Helpers.getRandomInt(0, config.canvasWidth - config.baseElementWidth);
			let y = SnakeGame.Helpers.getRandomInt(0, config.canvasHeight - config.baseElementHeight);

			return [x, y];
		}

		renderFoodRandomly() {

			let [x, y] = this.getRandomPositions();
			let food = new SnakeGame.Food(x, y);
			food.render();

			return food;

		}

	};

	return new Canvas;

})();
