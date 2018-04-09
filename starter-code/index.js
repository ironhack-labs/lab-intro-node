var SortedList = function() {
  var self = this;
  self.length = 0;
  self.array = [];
};

SortedList.prototype.add = function(item) {
  var self = this;

  self.array.push(item);
  self.length = self.array.length;
  self.array.sort(function (a,b) {
    return a -b
  });
}

SortedList.prototype.get = function(pos) {
  var self = this;
  
  return self.array[pos-1];

}
SortedList.prototype.max = function() {
  var self = this;
  

}
SortedList.prototype.min = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum = function() {}

module.exports = SortedList;
