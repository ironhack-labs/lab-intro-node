class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.items.push(item);
        this.sort();
        this.updateLength();
    }

    get(pos) { return this.items[pos - 1]; }

    max() {
        return this.items[this.items.length - 1];
    }

    min() { return this.items[0]; }

    average() { }

    sum() {

        if (this.items.length < 1) { throw Error("EmptySortedList"); }
        var reducer = (acc, item) => acc + item;
        return this.items.reduce(reducer);
    }

    sort() {
        this.items.sort(function (number1, number2) {
            return number1 - number2;
        });
    }

    updateLength() { this.length = this.items.length; }

}

module.exports = SortedList;
