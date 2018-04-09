var SortedList = function() {
    this.items = [];
    this.length = this.items.length
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
        return a-b;
    })
    this.length = this.items.length
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1]
}
SortedList.prototype.max     = function() {
    return this.items[this.items.length-1]
}
SortedList.prototype.min     = function() {
    return this.items[0]
}
SortedList.prototype.average = function() {
    if(this.items.length === 0){
        return 'EmptySortedList'
        }
    var sum = this.items.reduce(function(acc,elem){
        return acc+elem;
    })
    return sum/this.items.length
}
SortedList.prototype.sum     = function() {
    if(this.items.length === 0){
        return 'EmptySortedList'
        }
    var sum = this.items.reduce(function(acc,elem){
        return acc+elem;
    })
    return sum
}

module.exports = SortedList;
