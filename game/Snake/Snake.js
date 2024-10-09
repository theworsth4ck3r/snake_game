var SnakeGame = window.SnakeGame || {};

SnakeGame.Snake = (function () {

	class Snake {

		static headColor = '#307110';
		static segmentColor = '#307110';

		tailWidth = 6;

		head = null;
		lastSegment = null;

		startPositionX = 0;
		startPositionY = 0;

		constructor() {
			this.setStartPosition();
			this.getSnakeMovementInstance();
		}

		setStartPosition() {
			this.startPositionX = parseInt((SnakeGame.Canvas.getCanvasHtml().width / 2));
			this.startPositionY = parseInt((SnakeGame.Canvas.getCanvasHtml().height / 2));
		}

		getSnakeMovementInstance() {
			this.snakeMovement = new SnakeGame.SnakeMovement(this);
		}

		getHead() {
			return this.head;
		}

		move() {
			this.snakeMovement.move();
		}

		increaseTailWidth(amount) {
			this.tailWidth += amount;
		}

		decreaseTailWidth(amount) {
			this.tailWidth -= amount;
		}

		setTailWidth(amount) {
			this.tailWidth = amount;
		}

		addSegment() {

			if (!this.head) {
				this.head = new SnakeGame.SnakeSegment(this.startPositionX, this.startPositionY);
				this.lastSegment = this.head;
				return;
			}

			let newSegment = new SnakeGame.SnakeSegment(this.lastSegment.x, this.lastSegment.y);

			let currentSegment = this.head;

			while (currentSegment.next) {
				currentSegment = currentSegment.next;
			}

			newSegment.setPrev(currentSegment);
			currentSegment.setNext(newSegment);
			this.lastSegment = newSegment;

		}

		renderHead() {
			SnakeGame.Canvas.drawBaseElement(this.head.x, this.head.y, Snake.headColor);
		}

		renderSnake() {

			this.renderHead();

			let currentSegment = this.head.next;

			while (currentSegment) {
				SnakeGame.Canvas.drawBaseElement(currentSegment.x, currentSegment.y, Snake.segmentColor);
				currentSegment = currentSegment.next;
			}

		}

		removeSnake() {
			this.head = null;
		}

	};

	return new Snake;

})();
