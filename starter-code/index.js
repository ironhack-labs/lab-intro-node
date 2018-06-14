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
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
