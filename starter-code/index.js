function SortedList() {
  this.items = [];
  this.length = 0;
}

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};
SortedList.prototype.get = function(pos) {
  
    return this.items[pos-1];
  
};
SortedList.prototype.max = function() {
    return Math.max.apply(null,this.items)
};
SortedList.prototype.min = function() {
    return Math.min.apply(null,this.items)

};
SortedList.prototype.average = function() {
    var a=this.items.reduce(function(acc,e){
        return acc + e/this.length;
    }.bind(this),0)
   return Math.floor(a)
};
SortedList.prototype.sum = function() {
    return this.items.reduce(function(acc,e){
        return acc + e;
    }.bind(this),0)
};

module.exports = SortedList;
