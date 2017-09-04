var SortedList = function() {
  this.length = 0;
  this.list = [];
};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort(function(a,b){
    if (a > b){return 1;}
    else if (a < b){return -1;}
    else{return 0;}
  });
  this.length++;
};

SortedList.prototype.get     = function(pos) {
  return this.list[--pos];
};

SortedList.prototype.max = function() {
    return this.list[this.length - 1];
};

SortedList.prototype.min = function() {
  return this.list[0];
};
SortedList.prototype.average = function() {

  var total = this.list.reduce(function(sum, value){
    return sum + value;
  }, 0);

  return total/this.length;
};
SortedList.prototype.sum     = function() {

  return this.list.reduce(function(sum, value){
    return sum + value;
  }, 0);
};




module.exports = SortedList;
