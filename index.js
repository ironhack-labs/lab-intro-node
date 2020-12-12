class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items = [...this.items, item];
        this.items.sort((a, b) => a - b);
        this.length = this.items.length;
    }

    get(pos) {
        const index = this.items.indexOf(pos);
        if (index !== -1) {
            return this.items[index];
        }

        throw new Error('OutOfBounds');
    }

    max() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }

        return Math.max(...this.items);
    }

    min() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }

        return Math.min(...this.items);
    }

    sum() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this.items[i];
        }
        return sum;
    }

    avg() {

        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }

        return this.sum() / this.length;
    }
}

module.exports = SortedList;