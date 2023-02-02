class SortedList {
	constructor(items, length) {
		this.items = [];
		this.length = 0;
	}

	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length = this.items.length;
	}

	get(pos) {
		if (pos > this.items.length) throw new Error('OutOfBounds');
		else {
			return this.items.indexOf(pos);
		}
	}

	max() {
		if (!this.items.length) throw new Error('EmptySortedList');
		else {
			return this.items.at(-1);
		}
	}

	min() {
		if (!this.items.length) throw new Error('EmptySortedList');
		else {
			return this.items.at(0);
		}
	}

	sum() {
		if (!this.items.length) return 0;
		else {
			return this.items.reduce((a, b) => a + b, 0);
		}
	}

	avg() {
		if (!this.items.length) throw new Error('EmptySortedList');
		else {
			return this.items.reduce((a, b) => a + b, 0) / this.items.length;
		}
	}
}

module.exports = SortedList;
