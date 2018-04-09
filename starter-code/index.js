var SortedList = function() {
  var self = this;

  self.items = [];
  self.length = 0;
};



SortedList.prototype.add     = function(item) {
  var self = this;

  self.items.push(item);
  self.length = self.items.length;

  self.items.sort(function(a, b){
    return a > b;
  });
}

SortedList.prototype.get     = function(pos) {
  var self = this;

  return self.items[pos-1];
}

SortedList.prototype.max     = function() {
  var self = this;

  return Math.max(...self.items);
}

SortedList.prototype.min     = function() {
  var self = this;

  return Math.min(...self.items);
}

SortedList.prototype.average = function() {
  var self = this;

  var total = self.items.reduce(function(accumulator, current){
    return accumulator + current;
  }, 0);

  return total / self.length;
}

SortedList.prototype.sum     = function() {
  var self = this;

  
  if (self.length > 0){
    
    var total = self.items.reduce(function(accumulator, current){
      return accumulator + current;
    }, 0);
    
    return total;
  }


}


module.exports = SortedList;
