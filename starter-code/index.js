class SortedList {
	constructor(...items) {
		this.items = items;
		this.length = items.length;
	}

	add(...items) {
		this.items = [...this.items, ...items];
		this.items = this.items.sort((a, b) => {
			return a - b;
		});
		this.length += items.length;
	}

	get(pos) {
		if (pos - 1 < this.length) {
			return this.items[pos - 1];
		} else {
			console.log("OutOfBounds");
		}
	}

	max() {
		if (this.length > 0) {
			return this.get(this.length);
		} else {
			console.log("EmptySortedList");
		}
	}

	min() {
		if (this.length > 0) {
			return this.get(1);
		} else {
			console.log("EmptySortedList");
		}
	}

	average() {
		if (this.length > 0) {
			return Math.floor(this.sum() / this.length);
		} else {
			console.log("EmptySortedList");
		}
	}

	sum() {
		if (this.length > 0) {
			return this.items.reduce((total, num) => {
				return total + num;
			}, 0);
		} else {
			console.log("EmptySortedList");
		}
	}
}

module.exports = SortedList;
	

