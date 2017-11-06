var SortedList = function() {
    this.length = [];
};

SortedList.prototype.add     = function(item) {
    this.length.push(item);
    this.length.sort();
};

SortedList.prototype.size     = function() {
    return this.length.length;
};

SortedList.prototype.get     = function(pos) {
    this.length.sort();
    if (this.length[pos -1] !== undefined) {
        return this.length[pos -1];
    } else {
        return "OutOfBounds";
    }
};

SortedList.prototype.max     = function() {
    return Math.max.apply(Math, this.length);
};

SortedList.prototype.min     = function() {
    return Math.min.apply(Math, this.length);
};

SortedList.prototype.average = function() {
    if (this.length.length === 0) {
        return 'EmptySortedList';
    }
    return (this.length.reduce((prev, next) => prev + next) / this.length.length);
};

SortedList.prototype.sum     = function() {
    if (this.length.length === 0) {
        return 'EmptySortedList';
    }
    return (this.length.reduce((prev, next) => prev + next));
};

var myList = new SortedList();
myList.add(10);
myList.add(20);
myList.add(30);

module.exports = SortedList;
