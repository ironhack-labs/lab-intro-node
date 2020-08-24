class SortedList {
    constructor() {
        this.items = []
        this.length = this.items.length
    }

    add(item) {
        this.items.push(item)
        var sorted = this.items.sort((a, b) => {
            return a - b
        })

        return this.length += 1
    }

    get(pos) {
        if (this.items.indexOf(pos) > -1) {
            return this.items[pos]
        } else {
            throw new Error('OutOfBounds');
        }

    }

    max() {
        if (this.length > 0) {
            return Math.max(...this.items)
        } else {
            throw new Error('EmptySortedList');
        }
    }

    min() {
        if (this.length > 0) {
            return Math.min(...this.items)
        } else {
            throw new Error('EmptySortedList');
        }
    }

    sum() {
        var sum = this.items.reduce((a, b) => {
            return a + b
        }, 0)
        return sum
    }

    avg() {
        var sum2 = this.items.reduce((a, b) => {
            return a + b
        }, 0)
        if (this.length > 0) {
            return sum2 / (this.length)
        } else {
            throw new Error('EmptySortedList');
        }
    }

}

module.exports = SortedList;