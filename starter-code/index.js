var SortedList = function() {
   this.length = [];
    
};

SortedList.prototype.add     = function(item) {
    this.length.push(item);
    this.length.sort();
}
SortedList.prototype.get     = function(pos) {
    return this.length[pos - 1];
}
SortedList.prototype.max     = function() {
    return this.length[this.length.length -1 ];
}
SortedList.prototype.min     = function() {
    return this.length [0];
}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;

