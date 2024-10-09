var SnakeGame = window.SnakeGame || {};

SnakeGame.Collision = (function () {

	return class Collision {

		static checkCollisionOfTwoObject(object1, object2) {

			if (!object1 || !object2) return;

			if (object1.x === object2.x && object1.y === object2.y)
				return true;

			return false;

		}

		static checkSnakeCollision(snakeHead) {

			let currentSegment = snakeHead.next;

			while (currentSegment) {

				if (Collision.checkCollisionOfTwoObject(snakeHead, currentSegment))
					return true;

				currentSegment = currentSegment.next;
			}

			return false;

		}

	};

})();
