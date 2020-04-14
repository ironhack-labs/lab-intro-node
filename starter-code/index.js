class SortedList {
	constructor(items, length) {
		this.items = [];
		this.length = this.items.length;
	}

	add(item) {
		if (typeof item === 'number') {
			this.items.push(item);
			this.length += 1;
			this.items.sort((a, b) => a - b);
		}
	}

	get(pos) {
		if (pos < this.items.length) {
			return this.items[pos];
		} else {
			throw Error('OutOfBounds');
		}
	}

	max() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		} else {
			return this.items[this.length - 1];
		}
	}

	min() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		} else {
			return this.items[0];
		}
	}

	sum() {
		if (this.length === 0) return 0;
		return this.items.reduce((acc, curr) => (acc += curr), 0);
	}

	avg() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		} else {
			return this.items.reduce((acc, curr) => (acc += curr), 0) / this.items.length;
		}
	}
}

module.exports = SortedList;
