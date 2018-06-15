var SortedList = function(items = []) {
    this.items = items;
    this.length = items.length;
};

SortedList.prototype.add     = function(item) {
    
    this.items.push(item);
    this.length++;
}
SortedList.prototype.get     = function(pos) {

}
SortedList.prototype.max     = function() {

}
SortedList.prototype.min     = function() {

}
SortedList.prototype.average = function() {

}
SortedList.prototype.sum     = function() {

}

var list = new SortedList();
list.add(1);

module.exports = SortedList;
