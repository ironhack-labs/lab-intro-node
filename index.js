class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item);
        this.length = this.items.length;
        this.items.sort((a, b) => a - b);
    }

    get(pos) {
        if (this.length >= pos) {
            return this.items[pos];
        } else {
            throw new Error("OutOfBounds");
        }
    }

    max() {
        if (this.items) {
            return Math.max(...this.items);
        } else {
            throw new Error("EmptySortedList");
        }
    }

    min() {
        if (this.items) {
            return Math.min(...this.items);
        } else {
            throw new Error("EmptySortedList");
        }
    }
}

sum() {
    return this.items.reduce();
}

avg() {

}


module.exports = SortedList;