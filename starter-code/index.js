function SortedList(){
this.sortedList = [];
this.length = this.size();
}
SortedList.prototype.add = function(item) {
  this.sortedList.push(item);
  this.sortedList.sort();
};
SortedList.prototype.get = function(pos) {
return this.sortedList[pos];
};
SortedList.prototype.max = function() {
  var max = sortedList[0];
  this.sortedList.forEach(function(item){
    if(max > item)max = item;
  });
  return max;
};
SortedList.prototype.min = function() {
  var min = sortedList[0];
  this.sortedList.forEach(function(item){
    if(min < item)min = item;
  });
  return min;
};
SortedList.prototype.average = function() {
return this.sum() / this.length;
};
SortedList.prototype.sum = function() {
  return this.sortedList.reduce(function(sum, value){
    return sum + value;
  }, 0);
};
SortedList.prototype.size = function() {
  return this.sortedList.length;
};
module.exports = SortedList;
