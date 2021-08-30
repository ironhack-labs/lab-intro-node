class SortedList {
	constructor(items, length) {
		this.items = [];
		this.length = this.items.length;
	}

	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length = this.items.length;
	}

	get(pos) {
		if (pos > this.length) {
			throw new Error('OutOfBounds');
		} else {
			return this.items.indexOf(pos);
		}

		// return pos
		// 	? this.items.indexOf(pos)
		// 	: (function() {
		// 			throw new Error('OutOfBounds');
		// 		})();
	}

	max() {
		if (!this.length) {
			throw new Error('EmptySortedList');
		}

		return Math.max(...this.items);
	}

	min() {
		if (!this.length) {
			throw new Error('EmptySortedList');
		}

		return Math.min(...this.items);
	}

	/*
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  */
	sum() {
		return this.items.reduce((total, value) => total + value, 0);
	}

	avg() {
		if (!this.length) {
			throw new Error('EmptySortedList');
		}

		return this.sum() / this.length;
	}
}

module.exports = SortedList;
