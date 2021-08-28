class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        // Add a new item - OK
        // Sort in ascending order - OK
        // Update length property - OK

        this.items.push(item);

        this.sortList();
        this.updateLength();
    }

    sortList() {
        this.items.sort((a, b) => a - b);
    }

    updateLength() {
        this.length = this.items.length;
    }

    get(pos) {
        if (this.items[pos]) return this.items[pos];

        throw new Error('OutOfBounds');
    }

    verifyLength() {
        if (this.length === 0) {
            throw new Error('EmptySortedList');
        }
    }

    max() {
        this.verifyLength();

        return this.items[this.length - 1];
    }

    min() {
        this.verifyLength();

        return this.items[0];
    }

    sum() {
        return this.items.reduce(
            (acc, number) => acc + number,
            0,
        );
    }

    avg() {
        this.verifyLength();

        return this.sum() / this.length;
    }
}

module.exports = SortedList;