class SortedList {
	constructor() {
		this.items = new Array();
		this.length = new Number();
	}

	add(item) {
		this.items.push(item);
		this.length += 1;
		this.items.sort(function (a, b) {
			return a - b;
		});
	}

	get(pos) {
		let position = this.items.slice(pos, pos + 1);

		if (!position.length) {
			throw new Error(`OutOfBounds`);
		} else {
			return position;
		}
	}

	max() {
		const max = Math.max(...this.items);
		const err = () => {
			throw new Error(`EmptySortedList`);
		};

		return !this.items.length || !max ? err() : max;
	}

	min() {
		const min = Math.min(...this.items);
		const err = () => {
			throw new Error(`EmptySortedList`);
		};

		return !this.items.length || !min ? err() : min;
	}

	sum() {
		return this.items.reduce((acc, i) => acc + i, 0);
	}

	avg() {
		if (!this.items.length) {
			throw new Error("EmptySortedList");
		} else {
			return this.sum() / this.length;
		}
	}
}

module.exports = SortedList;
