class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(x) {
        this.items.push(x);
        this.length++;
        this.items.sort((a, b) => {
            return a - b
        })
    }

    get(pos) {
        return this.items[pos - 1];
    }
    max() {
        if (this.length === 0) {
            return this.items
        }
        let max = Math.max(...this.items)
        return max
    }
    min() {
        if (this.length === 0) {
            return this.items
        }
        let min = Math.min(...this.items)
        return min;

    }
    average() {
        if (this.length === 0) {
            return this.items
        }

        return this.sum() / this.length;
    }

    sum() {
        if (this.length === 0) {
            return this.items
        }
        let av = this.items.reduce((acc, num) => {
            var sum = acc + num;
            return sum
        }, 0)
        return av
    }
};

module.exports = SortedList;