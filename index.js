class SortedList {

    constructor(items) {

        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.length = this.items.length;
    }

    get(pos) {

        if (pos < 0 || pos > this.length - 1) {
            throw new Error('OutOfBounds');
        }
        return this.items[pos];
    }

    max() {
        if (this.length === 0) {
            throw new Error('EmptySortedList')
        }
        return this.items[this.length - 1];
    }

    min() {
        if (this.length === 0) {
            throw new Error('EmptySortedList')
        }
        return this.items[0]
    }

    sum() {
        let sum = this.items.reduce((soma, item) => soma + item, 0)
        return sum;
    }

    avg() {
        if (this.length === 0) {
            throw new Error('EmptySortedList')
        }
        return this.sum() / this.length;
    }
}

module.exports = SortedList;