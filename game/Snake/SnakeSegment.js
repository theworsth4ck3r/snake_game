var SnakeGame = window.SnakeGame || {};

SnakeGame.SnakeSegment = (function () {

	return class SnakeSegment {

		x = 0; y = 0;
		next = null;
		prev = null;

		constructor(x, y) {
			this.setCoords(x, y);
		}

		setCoords(x, y) {
			this.setX(x);
			this.setY(y);
		}

		setX(value) {
			this.x = value;
		}

		setY(value) {
			this.y = value;
		}

		setNext(segment) {
			this.next = segment;
		}

		setPrev(segment) {
			this.prev = segment;
		}

	};

})();
