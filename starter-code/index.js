class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(x) {
        this.items.push(x);
        this.length++;

        this.items.sort((a, b) => {
            return a - b;
        });
    }

    get(position) {
        if (this.length === 0) return new Error('OutOfBounds');
        else return this.items[position - 1];
    }

    max() {
        return Math.max(...this.items);
    }

    min() {
        return Math.min(...this.items);
    }

    average() {
        if (this.length === 0) return new Error('EmptySortedList');
        let average = this.sum() / this.length;
        return average;
    }

    sum() {
        let total = this.items.reduce((acc, cur) => acc + cur, 0);
        return total;
    }
}

module.exports = SortedList;
