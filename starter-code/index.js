var SortedList = function() {
    this.list = [];
};

SortedList.prototype.size = function() {
    return this.list.length;
};

SortedList.prototype.add = function(item) {
    this.list.push(item);
    this.list = this.list.sort(function(a, b) {
        return a - b;
    });
};

SortedList.prototype.get = function(pos) {
    return this.list[pos-1];
};

SortedList.prototype.max = function() {
    return Math.max.apply(null, this.list);
};

SortedList.prototype.min = function() {
    return Math.min.apply(null, this.list);
};

SortedList.prototype.average = function() {
    return this.sum() / this.size();
};

SortedList.prototype.sum = function() {
    return this.list.reduce(function(current, next) {
        return current + next;
    });
};

module.exports = SortedList;
