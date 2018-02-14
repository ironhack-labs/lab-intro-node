var SortedList = function (items, length) {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
        return a-b;
    });
     this.length++;
};

SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
};

SortedList.prototype.max     = function() {
    return Math.max(...this.items);
};
SortedList.prototype.min     = function() {
    return Math.min(...this.items);
};
SortedList.prototype.average = function() {
     var sum = this.sum();
     return (sum/this.items.length);
};
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(sum, i){
        return sum + i
    }, 0);
};

module.exports = SortedList;


