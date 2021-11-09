class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.length = this.items.length;
    }

    get(pos) {
        if (pos > this.items.length - 1) throw new Error('OutOfBounds');
        return this.items[pos];
    }

    max() {
        if (this.items.length === 0) throw new Error('EmptySortedList');
        return this.items.reduce((a, c) => c > a ? c : a);
    }

    min() {
        if (this.items.length === 0) throw new Error('EmptySortedList');
        return this.items.reduce((a, c) => c < a ? c : a);
    }

    sum() {
        if (this.items.length === 0) return 0;
        return this.items.reduce((a, c) => a + c, 0);
    }

    avg() {
        if (this.items.length === 0) throw new Error('EmptySortedList');
        return this.sum()/this.length;
    }
}

module.exports = SortedList;
