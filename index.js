class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item);
        this.items = this.items.sort(function(a, b) { return a - b });
        this.length = this.items.length;
        return this.items;
    }

    get(pos) {
        if (this.items[pos]) {
            return this.items[pos];

        } else {
            throw new Error('OutOfBounds');
        }

    }

    max() {
        if (this.items.length > 0) {
            return Math.max.apply(null, this.items);
        } else {
            throw new Error('EmptySortedList');
        }
    }

    min() {
        if (this.items.length > 0) {
            return Math.min.apply(null, this.items);
        } else {
            throw new Error('EmptySortedList');
        }
    }

    sum() {
        let total = 0;
        let number;
        if (this.items.length > 0) {
            for (number of this.items) {
                total += number;
            }
        }


        return total;
    }

    avg() {
        let total = 0;
        let number, average;

        if (this.items.length > 0) {
            for (number of this.items) {
                total += number;
            }
            average = total / this.items.length;
        } else {
            throw new Error('EmptySortedList');
        }

        return average;
    }
}

module.exports = SortedList;