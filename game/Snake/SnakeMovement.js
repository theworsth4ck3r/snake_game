var SnakeGame = window.SnakeGame || {};

SnakeGame.SnakeMovement = (function () {

	return class SnakeMovement {

		movementDirection = {
			axis: 'x',
			direction: -1
		};

		constructor(snake) {
			this.snake = snake;

			this.addKeyboardEvents();
		}

		addKeyboardEvents() {
			document.addEventListener('keydown', e => {

				switch (e.which) {
					// left
					case 37:
						this.setMovementDirection('x', -1);
						break;

					// right
					case 39:
						this.setMovementDirection('x', 1);
						break;

					// up
					case 38:
						this.setMovementDirection('y', -1);
						break;

					// down
					case 40:
						this.setMovementDirection('y', 1);
						break;
				}

			}, false);
		}

		setMovementDirection(axis, direction) {

			if (this.movementDirection.axis === axis) return;

			this.movementDirection.axis = axis;
			this.movementDirection.direction = direction;

		}

		move() {

			let previousSegmentX = this.snake.head.x;
			let previousSegmentY = this.snake.head.y;

			this.moveHead();
			this.moveSegmentsAfterHead(previousSegmentX, previousSegmentY);

		}

		moveHead() {

			if (this.movementDirection.axis === 'x') {

				if (this.snake.head.x <= 0 && this.movementDirection.direction === -1) {
					this.snake.head.setX(
						SnakeGame.Config.canvasWidth - SnakeGame.Config.baseElementWidth
					);
				} else if (this.snake.head.x >= SnakeGame.Config.canvasWidth - SnakeGame.Config.baseElementWidth && this.movementDirection.direction === 1) {
					this.snake.head.setX(
						0
					);
				} else {
					this.snake.head.setX(
						this.snake.head.x + SnakeGame.Config.baseElementWidth * this.movementDirection.direction
					);
				}

			}
			if (this.movementDirection.axis === 'y') {
				if (this.snake.head.y <= 0 && this.movementDirection.direction === -1) {
					this.snake.head.setY(
						SnakeGame.Config.canvasHeight - SnakeGame.Config.baseElementHeight
					);
				} else if (this.snake.head.y >= SnakeGame.Config.canvasHeight - SnakeGame.Config.baseElementHeight && this.movementDirection.direction === 1) {
					this.snake.head.setY(
						0
					);
				} else {
					this.snake.head.setY(
						this.snake.head.y + SnakeGame.Config.baseElementHeight * this.movementDirection.direction
					);
				}
			}
		}

		moveSegmentsAfterHead(previousSegmentX, previousSegmentY) {

			let currentSegment = this.snake.head.next;

			while (currentSegment) {

				let prevX = currentSegment.x;
				let prevY = currentSegment.y;

				currentSegment.setCoords(
					previousSegmentX,
					previousSegmentY
				);

				previousSegmentX = prevX;
				previousSegmentY = prevY;

				currentSegment = currentSegment.next;
			}

		}

	};

})();
