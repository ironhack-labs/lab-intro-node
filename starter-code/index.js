class SortedList {
    constructor() {
        this.items = [];
        this.length = 0
    }
    add(item) {
        this.length++;
        this.items.push(item);
        this.items.sort((a, b) => (a - b));
    }
    get(pos, length) {
        return this.items[pos - 1]
    }
    max() {
        return this.items.sort()[this.length - 1]
    }
    min() {
        return this.items.sort()[0]
    }
    average() {
        if (this.length != 0) {
            return ((this.items.reduce((e, acc) => e + acc)) / this.length)
        }
    }
    sum() {
        if (this.length != 0) {
            return this.items.reduce((e, acc) => e + acc)
        }
    }
};

module.exports = SortedList;
