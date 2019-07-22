class SortedList {
	constructor() {
		this.items = []
		this.length = this.items.length
	}
	add(item) {
		this.items.push(item)
		this.items.sort((a, b) => a - b)
		this.length = this.items.length
	}
	get(pos) {
		console.log(this.items)
		if (pos - 1 > this.length) {
			throw new Error('OutOfBounds')
		} else return this.items[pos - 1]
	}
	max() {
		if (this.length === 0) {
			throw new Error('EmptySortedList')
		} else return Math.max(...this.items)
	}
	min() {
		if (this.length === 0) throw new Error('EmptySortedList')
		else return Math.min(...this.items)
	}
	average() {
		if (this.length === 0) {
			throw new Error('EmptySortedList')
		} else return this.sum() / this.items.length
	}
	sum() {
		if (this.length === 0) return 0
		else return this.items.reduce((acc, elm) => acc + elm)
	}
}

module.exports = SortedList
