class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        let index = 0;
        this.items.forEach((el, i) => {
            if (el < item) index = i + 1
        })
        this.items.splice(index, 0, item);
        this.length = this.items.length;
    }

    get(pos) {
        if (pos > this.length - 1) throw new Error('OutOfBounds');
        else return this.items[pos];
    }

    max() {
        if (this.length) return Math.max(...this.items)
        else throw new Error('EmptySortedList');
    }

    min() {
        if (this.length) return Math.min(...this.items)
        else throw new Error('EmptySortedList');
    }

    sum() {
        return this.items.reduce((a, b) => a + b, 0);
    }

    avg() {
        if (this.length) return this.items.reduce((a, b) => a + b) / this.length;
        else throw new Error('EmptySortedList');
    }
}

module.exports = SortedList;