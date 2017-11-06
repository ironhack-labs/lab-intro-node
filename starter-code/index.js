var SortedList = function() {
  this.length = [];

};

SortedList.prototype.add = function(item) {
  this.length.push(item);


}
SortedList.prototype.get = function(pos) {
  this.length.sort();
  return this.length[pos - 1];

}
SortedList.prototype.max = function() {
  var max = Math.max(...this.length);
  return max;
}
SortedList.prototype.min = function() {
  var min = Math.min(...this.length);
  return min;
}
SortedList.prototype.average = function() {
  let total = this.length.reduce(
function(sum, value) {
  return sum + value;
});
let average = total / (this.length.length);
return average;
};


SortedList.prototype.sum = function() {}

module.exports = SortedList;
