class SortedList {
    constructor(items, length) {
        this.items = [],
            this.length = 0
    }
    add(item) {
        this.length++;
        this.items.push(item);
        this.items.sort((a, b) => (a - b));

    }
    get(pos) {
        return this.items[pos - 1];
    }
    max() {
        return this.items.sort()[this.length - 1];
    }
    min() {
        return this.items.sort()[0]
    }
    average() {
        if (this.length != false) {
            return ((this.items.reduce((e, acc) => e + acc)) / this.length)
        }
    }
    sum() {
        if (this.length != false) {
            return this.items.reduce((acc, e) => acc + e, 0);
        }
    }
};

module.exports = SortedList;