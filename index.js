class SortedList {
    constructor() {
        this.items = [];
        this.length = "";
    }

    add(item) {
        this.items.push(item);
        this.items = this.items.sort((a, b) => a - b);
        this.length = this.items.length;
    }

    get(pos) {
        if (pos < 0 || pos > this.length) {
            throw new Error("OutOfBounds");
        }
        return this.items[pos];
    }

    max() {
        if (!this.length) {
            throw new Error("EmptySortedList");
        }
        return Math.max(...this.items);
    }

    min() {
        if (!this.length) {
            throw new Error("EmptySortedList");
        }
        return Math.min(...this.items);
    }

    sum() {
        return this.items.reduce((a, b) => a + b, 0);
    }

    avg() {
        if (!this.length) {
            throw new Error("EmptySortedList");
        }
        console.log(this.items.reduce((a, b) => a + b) % this.length);
        return this.items.reduce((a, b) => a + b) / this.length;
    }
}

module.exports = SortedList;