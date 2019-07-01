class SortedList {
	constructor() {
		this.items = [];
		this.length = this.items.length;
	}
	add(item) {
		this.items.push(item);
		this.items.sort(function(a, b) {
			return a - b;
		});
		this.length = this.items.length;
	}
	get(pos) {
		if (pos > this.length || pos <= 0) {
			return 0;
		} else if (pos - 1 < 0) {
			return this.items[pos];
		} else {
			return this.items[pos - 1];
		}
	}
	max() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		}
		return this.items[this.length - 1];
	}
	min() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		}
		return this.items[0];
	}
	average() {
		if (this.length === 0) {
			throw Error('EmptySortedList');
		}
		return (
			this.items.reduce((acum, current) => acum + current, 0) / this.length
		);
	}
	sum() {
		if (this.length === 0) {
			return 0;
		}
		return this.items.reduce((acum, current) => acum + current, 0);
	}
}

let sortNumber = (a, b) => {
	return a - b;
};

module.exports = SortedList;
