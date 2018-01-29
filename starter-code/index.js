class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    add(x) {
        this.items.push(x);
        this.length++;
        this.items.sort();
    }
    get(ith) {
        return this.items[(ith - 1)];
    }
    max() {
        return ((this.items.length)-1);
    }

};

// SortedList.prototype.add = function (item) { }

//SortedList.prototype.get = function (pos) { }
// SortedList.prototype.max = function () { }
// SortedList.prototype.min = function () { }
// SortedList.prototype.average = function () { }
// SortedList.prototype.sum = function () { }

module.exports = SortedList;