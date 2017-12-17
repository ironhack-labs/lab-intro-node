var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b){
      return a - b;
  });
  this.length = this.items.length;
  return;
};
SortedList.prototype.get = function(pos) {
  var index = pos - 1;
  return this.items[index];
};
SortedList.prototype.max = function() {
  if(this.length == 0){
    return "EmptySortedList";
  }else{
    return this.items[this.length - 1];
  }
};
SortedList.prototype.min = function() {
  if(this.length == 0){
    return "EmptySortedList";
  }else{
    return this.items[0];
  }

};
SortedList.prototype.average = function() {
  if(this.length == 0){
    return "EmptySortedList";
  }else{
    return this.sum()/this.length;
  }

};
SortedList.prototype.sum  = function() {
  if(this.length == 0){
    return "EmptySortedList";
  }else{
    return this.items.reduce(function(a,b){
      return a + b;
    });
  }
};

module.exports = SortedList;
