var SnakeGame = window.SnakeGame || {};

SnakeGame.Food = (function () {

	return class Food {
		x = 0; y = 0;
		static foodColor = 'red';

		constructor(x, y) {
			this.x = x;
			this.y = y;
		}

		setCoords(x, y) {
			this.setX(x);
			this.setY(y);
		}

		setX(x) {
			this.x = x;
		}

		setY(y) {
			this.y = y;
		}

		render() {
			SnakeGame.Canvas.drawBaseElement(this.x, this.y, Food.foodColor);
		}
	};

})();
