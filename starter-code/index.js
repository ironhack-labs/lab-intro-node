var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort(function(a,b){
        return a - b;
    });
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    return this.items[this.length - 1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    var sum = this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    return sum/this.length;
}
SortedList.prototype.sum     = function() {
   return this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
}

module.exports = SortedList;

