var SortedList= function() {
  this.list = [];
  this.length = 0;
  this.total = 0;

  this.minNum = 0;
};



SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.length ++;
  this.list.sort(function(a, b){
    return a - b;
  })
}

SortedList.prototype.get = function(pos) {
  return this.list[pos-1];
}

SortedList.prototype.max = function() {
  return this.list[this.length-1];
}


SortedList.prototype.min= function() {
  return this.list[0];
}

SortedList.prototype.sum = function() {
return this.list.reduce(function(sum, value){
  return sum + value
}, 0);
}


SortedList.prototype.average = function() {
  return this.sum()/this.length;
}


SortedList.prototype.size = function () {
  return this.length;
};


module.exports = SortedList;
