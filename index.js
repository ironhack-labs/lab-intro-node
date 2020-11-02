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
        if (pos > this.items.length) {
            throw new Error('OutOfBounds')
        } else {
            return this.items[pos]
        }
    }

    max() {
        if (this.length <= 0) {
            throw new Error('EmptySortedList')
        } else {
            return this.items.reduce((a, b) => Math.max(a, b))
        }
    }

    min() {
        if (this.length <= 0) {
            throw new Error('EmptySortedList')
        } else {
            return this.items.reduce((a, b) => Math.min(a, b))
        }
    }

    sum() {
        return this.items.reduce((a, b) => { return a + b }, 0)
    }

    avg() {
        if (this.length <= 0) {
            throw new Error('EmptySortedList')
        } else {
            return this.items.reduce((a, b) => { return a + b }, 0) / this.length
        }
    }
}

module.exports = SortedList;