var SortedList = function() {
    this.list = [];
};

SortedList.prototype.size = function() {
    return this.list.length;
};

SortedList.prototype.add = function(item) {
    this.list.push(item);
    this.list = this.list.sort((a, b) => a - b);
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
    if (this.size() === 0) {
        throw new Error('EmptySortedList');
    } else {
        return this.sum() / this.size();
    }
};

SortedList.prototype.sum = function() {
    if (this.size() === 0) {
        throw new Error('EmptySortedList');
    } else {
        return this.list.reduce((current, next) => current + next);
    }
};

module.exports = SortedList;
