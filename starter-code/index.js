var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){
         return a - b; });

};
SortedList.prototype.get     = function(pos) {
     return this.items [pos - 1];

};
SortedList.prototype.max     = function() {
    //since sorted take the last number in array
    return this.items [this.items.length - 1 ];

};
SortedList.prototype.min     = function() {
    //since sorted take first number in array
    return this.items [0];
}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
