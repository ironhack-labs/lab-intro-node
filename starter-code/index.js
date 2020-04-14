class SortedList {
	constructor() {
		this.items = [];
		this.length = 0;
	}

	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length++;
	}

	get(pos) {
		if (pos > this.items.length) throw new Error("OutOfBounds");
		return this.items.indexOf(pos);
	}

	max() {
		if (!this.items.length) throw new Error("EmptySortedList");
		return Math.max(...this.items);
	}

	min() {
		if (!this.items.length) throw new Error("EmptySortedList");
		return Math.min(...this.items);
	}

	sum() {
		if (!this.items.length) return 0;
		return this.items.reduce((acc, val) => acc + val, 0);
	}

	avg() {
		if (!this.items.length) throw new Error("EmptySortedList");
		return this.sum(this.items) / this.items.length;
	}
}

module.exports = SortedList;
