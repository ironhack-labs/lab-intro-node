class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length
    }

    add(item) {
        this.items.push(item);
        this.length = this.items.length;
        this.items.sort((a, b) => a - b)
    }

    get(pos) {

        if (this.items.indexOf(pos) === -1) {
            throw new Error('OutOfBounds');
        }

        return this.items[pos]

    }

    max() {
        this.items.length
        if (this.items.length === 0) {
            throw new Error('EmptySortedList');

        }
        return Math.max(...this.items);

    }

    min() {

        this.items.length
        if (this.items.length === 0) {
            throw new Error('EmptySortedList');

        }
        return Math.min(...this.items);
    }

    sum() {
        return this.items.reduce(((acc, current) => acc + current), 0)
    }

    avg() {
        if (this.items.length === 0) {
            throw new Error('EmptySortedList')
        } else {
            return this.sum() / this.length;
        }
    }
}

module.exports = SortedList;