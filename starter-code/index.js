var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function (a,b){
        return a - b;
    });
    this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];
;}
SortedList.prototype.max     = function() {
    return this.items[this.length - 1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    var sum =  this.items.reduce(function(acc,curr){
        return acc + curr;
    },0);
    return sum / this.length;
}
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(acc,curr){
        return acc + curr;
    },0);
}

module.exports = SortedList;
