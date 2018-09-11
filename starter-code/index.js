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
		return this.items[pos - 1];
	}
	max() {
		if (this.length > 0) {
			return Math.max.apply(0, this.items);
		} else {
			throw new Error("EmptySortedList");
		}
	}
	min() {
		if (this.length > 0) {
			return Math.min.apply(0, this.items);
		} else {
			throw new Error("EmptySortedList");
		}
	}
	average() {
		if (this.length > 0) {
			return this.sum() / this.length;
		} else {
			throw new Error("EmptySortedList");
		}
	}
	sum() {
		if (this.length > 0) {
			return this.items.reduce((a, b) => (a + b), 0);
		} else {
			return 0;
		}
	}
}

module.exports = SortedList;
