/* 
theworsth4ck3r
2021-03-13
*/

var SnakeGame = window.SnakeGame || {};

SnakeGame.Game = (function () {

	return class Game {

		gameStopped = false;

		rootHtmlElement = null;

		gameInterval = null;
		intervalValueMs = 50;
		tailCounter = 0;

		currentFood = null;

		constructor() {
			this.rootHtmlElement = document.querySelector('#playground');
		}

		start() {
			this.bootstrapCanvas();
			this.gameStopped = false;
			this.game();
		}

		bootstrapCanvas() {
			this.rootHtmlElement.appendChild(SnakeGame.Canvas.getCanvasHtml());
		}

		game() {

			this.gameInterval = setTimeout(() => {

				if (this.gameStopped) {
					this.stopGame();
					return;
				}

				SnakeGame.Canvas.drawScene();
				if (this.tailCounter < SnakeGame.Snake.tailWidth) {
					SnakeGame.Snake.addSegment();
					this.tailCounter++;
				}

				SnakeGame.Snake.renderSnake();
				SnakeGame.Snake.move();

				this.addFoodToGame();
				this.checkIsFoodIsEaten();
				this.checkSnakeCollisionWithHimsleft();

				this.game();

			}, this.intervalValueMs);

		}

		addFoodToGame() {
			if (this.currentFood) {
				this.currentFood.render();
			} else {
				this.currentFood = SnakeGame.Canvas.renderFoodRandomly();
			}
		}

		removeFoodFromGame() {
			this.currentFood = null;
		}

		checkIsFoodIsEaten() {
			let isCollision = SnakeGame.Collision.checkCollisionOfTwoObject(SnakeGame.Snake.getHead(), this.currentFood);
			if (isCollision) {
				SnakeGame.Snake.increaseTailWidth(1);
				this.removeFoodFromGame();
			}
		}

		checkSnakeCollisionWithHimsleft() {
			let isCollision = SnakeGame.Collision.checkSnakeCollision(SnakeGame.Snake.getHead());

			if (isCollision) this.restartGame();
		}

		startGame() {
			if (!this.gameStopped) return;
			this.gameStopped = false;
			this.game();
		}

		stopGame() {
			if (this.gameStopped) return;
			this.gameStopped = true;
			this.gameInterval = null;
		}

		restartGame() {
			SnakeGame.Snake.setTailWidth(6);
			SnakeGame.Snake.removeSnake();
			this.tailCounter = 0;
		}

	};

})();
