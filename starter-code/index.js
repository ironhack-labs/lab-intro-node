var SortedList = function() {
    this.length = 0;
    this.items = [];
};
SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b}); 
    this.length = this.items.length;
};


SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];
};


SortedList.prototype.max     = function() {
    return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
    return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
    var total = 0;
    for(i = 1; i < this.items.length; i++){
        total += this.items[i];
    }
    return total / this.items.length;
}
SortedList.prototype.sum     = function() {
    var total = 0;
    for(i = 0; this.items.length > i < this.items.length; i++){
        total += this.items[i];
    }
    return total;
}

module.exports = SortedList;



