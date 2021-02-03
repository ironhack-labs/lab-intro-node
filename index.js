class SortedList {
    constructor() {
        this.items = []
        this.length = this.items.length
    }

    add(item) {
        this.items.push(item)
        this.items.sort((a, b) => {
            return a - b
        })
        this.length = this.items.length
    }

    get(pos) {

        this.items[pos]
        if (this.length >= pos) {
            return this.items[pos]
        } else {
            throw new Error("OutOfBounds")
        }
    }

    max() {
        if (this.length === 0) {
            throw new Error("EmptySortedList")
        } else {
            return this.items[this.length - 1]
        }
    }

    min() {
        if (this.length === 0) {
            throw new Error("EmptySortedList")
        } else {
            return this.items[0]
        }
    }

    sum() {
        return this.items.reduce((ac, va) => ac + va, 0)
    }

    avg() {
        if (this.length === 0) {
            throw new Error("EmptySortedList")
        } else {
            return (this.sum() / this.length)
        }
    }
}

module.exports = SortedList;