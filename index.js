class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    add(item) {
        this.items.push(item)
        this.items.sort(function(a, b) {
            return a - b
        })
        this.length = this.items.length
    }

    get(pos) {
        if (pos < this.length) {
            return this.items[pos]
        } else {
            throw new Error('OutOfBounds');
        }
    }
    max() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        } else {
            return Math.max(...this.items)
        }
    }

    min() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        } else {
            return Math.min(...this.items)
        }
    }
    sum() {
        if (this.length === 0) {
            return 0
        } else {
            let total = 0
            this.items.forEach(function(a) { total += a; })
            return total
        }
    }
    avg() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }
        return this.items.reduce((a, b) => a + b) / this.length;
    }
}
module.exports = SortedList;