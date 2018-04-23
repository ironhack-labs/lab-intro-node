var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};



SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function(a,b){
    return a - b;
  });
}

SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1 ];
}
SortedList.prototype.max     = function() {
  return Math.max(this.items[0], this.items[this.length - 1 ]);
}
SortedList.prototype.min     = function() {
  return Math.min(this.items[0], this.items[this.length - 1 ]);
}
SortedList.prototype.average = function() {
  var sum = 0;
  for ( var i = 0; i < this.length; i++){
    sum += parseInt(this.items[i], 10);
  }
  return sum/this.length;
};
SortedList.prototype.sum     = function() {
  var sum = 0;
  for ( var i = 0; i < this.length; i++){
    sum += parseInt(this.items[i], 10);
  }
  return sum;
}


var sl = new SortedList();

module.exports = SortedList;


