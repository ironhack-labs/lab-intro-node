/* eslint-disable max-len */

class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.length += 1;
    }

    get(pos) {
        if (this.items[pos]) {
            return this.items[pos];
        }
        throw new Error('OutOfBounds');
    }

    max() {
        if (this.items.length !== 0) { return Math.max(...this.items); } // I didn't believe using spread here would work
        throw new Error('EmptySortedList');
    }

    min() {
        if (this.items.length !== 0) { return Math.min(...this.items); }
        throw new Error('EmptySortedList');
    }

    sum() {
        if (this.items.length !== 0) { return this.items.reduce((a, b) => a + b); }
        return 0;
    }

    avg() {
        if (this.items.length !== 0) { return this.items.reduce((a, b) => a + b) / this.items.length; }
        throw new Error('EmptySortedList');
    }
}

module.exports = SortedList;
