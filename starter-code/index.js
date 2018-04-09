function SortedList(items,length) {
    this.items = [];
    this.length = this.items.length;
};

// function get(nth){
//     var nth;
//     this.items[nth];
// }

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
        return a > b;
    });
}
SortedList.prototype.get     = function(pos) {
    this.item[pos];
    this.length;
}
SortedList.prototype.max     = function() {
    this.items[0];
}
SortedList.prototype.min     = function() {
    var min = this.items.length -1;
    this.items[min];
}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;