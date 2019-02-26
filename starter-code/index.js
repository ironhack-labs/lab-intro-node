class SortedList {
    constructor(items, length) {
        this.items = [];
        this.length = this.items.length;
    }
    add(item) {
        this.items.push(item);
        this.length = this.items.length;
        this.items.sort((a, b) => a - b)
    }
    get(pos) {
        return this.items[pos - 1]
    }
    max() {
        if (this.items[this.items.length - 1]) return this.items[this.items.length - 1]
        else throw new Error("EmptySortedList")
    }
    min() {
        if (this.items.length === 0) {
            throw new Error("EmptySortedList");
        } else {
            return this.items[0];
        }
    }
    average() {

        if (this.items.length === 0) {
            throw new Error("EmptySortedList");
        } else {
            return this.sum() / this.items.length;
        }

    }
    sum() {
        if (this.items.length === 0) {
            return 0;
        } else {
            return this.items.reduce((accumulator, currenValue) => accumulator + currenValue)
        }
    }
};

module.exports = SortedList;