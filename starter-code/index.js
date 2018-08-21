class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(x) {
        this.items.push(x);
        this.items.sort((a, b) => a - b);
        this.length++;
    }

    get(pos) {
        return this.items[pos - 1];
    }


    max() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }
        return this.items[this.length - 1];
    }

    min() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }
        return this.items[0];
    }

    average() {
        // if (this.length === 0) {
        //     return new Error("EmptySortedList");
        // }
        // var sum = 0;
        // this.forEach(function (el) {
        //     sum += el;
        // });
        // return sum / this.length;
        return this.sum() / this.length;
    }

    sum() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }
        else {
            return this.items.reduce((sum, item) => sum + item);
        }
        // var sum = 0;
        // this.forEach(function (el) {
        //     sum += el;
        // });
        // return sum;
    }

};

module.exports = SortedList;
