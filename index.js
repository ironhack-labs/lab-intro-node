class SortedList {
	constructor() {
		this.items = [];
		this.length = 0;
	}

	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length = this.items.length;
	}

	get(pos) {
		if (pos > this.items.length - 1) {
			throw new Error('OutOfBounds');
		} else {
			return this.items[pos];
		}
	}

	max() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return Math.max(...this.items);
		}
	}

	min() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return Math.min(...this.items);
		}
	}

	sum() {
		return this.items.reduce(function (val, acc) {
			return acc + val;
		}, 0);
	}

	avg() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return this.sum() / this.length;
		}
	}
}

module.exports = SortedList;
