class SortedList {
	constructor() {
		this.items = []
		this.length = 0
	}

	add(item) {
		this.items.push(item)
		this.length = this.items.length
		this.items = this.items.sort((a, b) => a - b)
	}

	get(pos) {
		const arrLength = this.items.length
		if (arrLength < pos) {
			throw new Error("OutOfBounds")
		}
		return this.items[pos]
	}

	max() {
		if (this.items.length === 0) {
			throw new Error("EmptySortedList")
		}
		return Math.max(...this.items)
	}

	min() {
		if (this.items.length === 0) {
			throw new Error("EmptySortedList")
		}
		return Math.min(...this.items)
	}

	sum() {
		if (this.items.length === 0) {
			return 0
		}

		return this.items.reduce((acc, val) => {
			return (acc += val)
		}, 0)
	}

	avg() {
		if (this.items.length === 0) {
			throw new Error("EmptySortedList")
		}
		let sum = this.items.reduce((acc, val) => {
			return (acc += val)
		}, 0)
		return sum / this.items.length
	}
}

module.exports = SortedList
