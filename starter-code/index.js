class SortedList {

	constructor() {
		
		this.items = []
		this.length = this.items.length
	}

	add(item) { 

		this.items.push(item)
		this.length++
		this.items = this.items.sort((a, b) => a - b)
	}

	get(pos) {

		if (pos < this.length) {
			return this.items[pos]
		}
		else {
			throw new Error("OutOfBounds")
		}
	}

	max() { 

		if (this.length > 0) {
			return Math.max(...this.items)

		} else {
			throw new Error("EmptySortedList")
		}
	}

	min() { 

		if (this.length > 0) {
			return Math.min(...this.items)

		} else {
			throw new Error("EmptySortedList")
		}
	}

	sum() { 

		return this.length > 0 ? this.items.reduce((acc, elm) => acc += elm) : 0
	}

	avg() { 
	
		if (this.length > 0) {
			return this.sum() / this.length

		} else {
			throw new Error("EmptySortedList")
		}
	}
}


module.exports = SortedList;
