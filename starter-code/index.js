var SortedList = function () {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function (item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
        return a - b;
    });
    this.length = this.items.length;
}
SortedList.prototype.get = function (pos) {
    return this.items[pos - 1]
}
SortedList.prototype.max = function () {
    return Math.max(...this.items);
}
SortedList.prototype.min = function () {
    return Math.min(...this.items);
}
SortedList.prototype.average = function () {
    if (this.length >= 1) {
        sum = 0;
        for (i = 0; i < this.length; i++) {
            sum += this.items[i];
        }
        return (sum / this.length);
    } else {
        return "EmptySortedList";
    }
}
SortedList.prototype.sum = function () {
    if (this.length >= 1) {
        sum = 0;
        for (i = 0; i < this.length; i++) {
            sum += this.items[i];
        }
        return sum;
    } else {
        return "EmptySortedList";
    }
}

module.exports = SortedList;