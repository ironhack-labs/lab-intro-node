class SortedList {
	constructor() {
		this.items = [];
		this.length = this.items.length;
	}
	add(item) {
		this.items.push(item);
		this.length = this.items.length;
		this.items.sort((a, b) => a - b);
	}
	get(pos) {
		if (this.items[pos - 1]) {
			return this.items[pos - 1];
		}
		return 'OutOfBounds';
	}

	max() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return this.items[this.items.length - 1];
		}
	}
	min() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return this.items[0];
		}
	}
	average() {
		if (this.length === 0) {
			throw new Error('EmptySortedList');
		} else {
			return this.sum() / this.length;
		}
	}
	sum() {
		if (this.length === 0) {
			return 0;
		} else {
			return this.items.reduce((sum, item) => sum + item);
		}
	}
}

module.exports = SortedList;
