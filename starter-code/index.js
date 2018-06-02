var SortedList = function() {
    this.items = [];
    this.length = 0;
};
SortedList.prototype.add  = function(item) {
        this.items.push(item);
        this.items = this.items.sort(function(a, b){return a-b});
        this.length = this.items.length;
}
SortedList.prototype.get = function(pos) {
    return (this.items[pos-1] == undefined) ? false : this.items[pos-1];
}
SortedList.prototype.max     = function() {
    if(this.length == 0){return 'EmptyList';}
    return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
    if(this.length == 0){return 'EmptyList';}
    return Math.min(...this.items);
}
SortedList.prototype.average = function() {
    if(this.length == 0){return 'EmptySortedList';}
    return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
    if(this.length == 0){return 'EmptySortedList';}
    return this.items.reduce((a, b) =>a + b);
}

module.exports = SortedList;
