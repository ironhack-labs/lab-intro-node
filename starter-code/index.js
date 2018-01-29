class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.length++;
        this.items.push(item);

        this.items.sort((a, b) => { return a - b })

    }

    get(pos) {
        return this.items[pos - 1];
    }
    max() {
        return this.items[this.items.length - 1]
    }
    min() {
        return this.items[0]
    }
    average() {
        if (this.length !== 0) {
            return this.items.reduce((acc, e) => (acc + e)) / this.length
        }
    }

    sum() {
        if (this.length !== 0) {
            return this.items.reduce((acc, e) => (acc + e))
        }
    }
}

module.exports = SortedList;

// function cp(a, b) {
//          return a - b;
//      }