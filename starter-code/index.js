

var SortedList = function() {
this.items = [];
this.length = 0; 
};

SortedList.prototype.add     = function(item) {
  
  this.items.push(item);
  this.items.sort(function(a,b){
      return a-b;
    });
  this.length++;
};

SortedList.prototype.get     = function(pos) {
  this.length = this.items.length;
  return this.items[pos-1];
};

SortedList.prototype.max     = function() {
  return this.items[this.items.length-1];
};

SortedList.prototype.min     = function() {
  return this.items[0];
};

SortedList.prototype.average = function() {
  return this.sum()/this.items.length;
};

SortedList.prototype.sum     = function() {
 return this.items.reduce(function(acc, nb){
  return acc + nb;
 },0);
}

module.exports = SortedList;

var sl = new SortedList();