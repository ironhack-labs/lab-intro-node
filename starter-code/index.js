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

    max() { }

    min() { }

    average() { }

    sum() { }

    sort() {
        this.items.sort(function (number1, number2) {
            return number1 - number2;
        });
    }

    updateLength() { this.length = this.items.length; }

}

module.exports = SortedList;
