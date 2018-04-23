
var SortedList = function() {
    this.length = 0;
    this.items = [];
};
//PUSHES ITEM, SORTS ALL ITEMS IN ARRAY, UPDATES LENGTH PROPERTY//
SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b}); 
    this.length = this.items.length;
};
//RETURN Nth ITEM(-1 differenence between NUM & ARRAY)
SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];
};
//MAX
SortedList.prototype.max     = function() {
    return Math.max.apply(null, this.items);
}
//MIN
SortedList.prototype.min     = function() {
    return Math.min.apply(null, this.items);
}
//ALTERNATE CODE
// if (this.items.length > 0){
 // return this.items.reduce(function (p, c) {return p + c;}) / this.items.length;
 //}
SortedList.prototype.average = function() {
    var total = 0;
    for(i = 1; i < this.items.length; i++){
        total += this.items[i];
    }
    return total / this.items.length;
}
//ALTERNATE CODE
// if (this.items.length > 0){
 // return this.items.reduce(function (p, c) {return p + c;}) ;
 //}
SortedList.prototype.sum     = function() {
    var total = 0;
    for(i = 0; this.items.length > i < this.items.length; i++){
        total += this.items[i];
    }
    return total;
}

module.exports = SortedList;



