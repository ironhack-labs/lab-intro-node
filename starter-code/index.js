var SortedList = function() {
    this.items = [],
    this.length = 0;
};



SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(item1, item2){
        return item1 - item2
    })
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1]
}
SortedList.prototype.max     = function() {
    return this.items[this.items.length - 1];
}
SortedList.prototype.min     = function() {
    return this.items[0]
}
SortedList.prototype.average = function() {
    let sum = this.items.reduce(function(acc, currentValue){
        return acc + currentValue;
    }, 0);
    let average = sum / this.items.length;
    return average;
}
SortedList.prototype.sum     = function() {
    let sum = this.items.reduce(function(acc, currentValue){
        return acc + currentValue;
    }, 0);
    return sum;
}

module.exports = SortedList;
