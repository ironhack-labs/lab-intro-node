var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length += item;
};
SortedList.prototype.get = function(pos) {
    this.items.length
    return this.items[pos-1];

};
SortedList.prototype.max = function() {
    this.items.sort(function (a,b) {
        return a + b});

    return this.items[0];


};
SortedList.prototype.min = function() {
    this.items.sort(function(a, b) {
      return a - b;
    });

    return this.items[0];

};
SortedList.prototype.average = function() {
    var self = this;
    var sum = 0;
    self.items.reduce(function(acc, current) {
      sum = (acc + current);
    }, 0);
    return sum / self.items.length;
};
SortedList.prototype.sum = function() {
    var self = this;
    self.items.reduce(function(acc, current){
        return acc + current;
    },0);
};

module.exports = SortedList;
