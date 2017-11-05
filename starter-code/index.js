function SortedList() {
  this.list = [];
  this.length = 0;
  this.length = this.list.length;
}

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort((a, b) => a - b);
  this.length += 1;
};
SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};
SortedList.prototype.max = function() {
  return this.list[this.list.length - 1];
};
SortedList.prototype.min = function() {
  return this.list[0];
};
SortedList.prototype.average = function() {
  return this.list.length === 0 ? [] : this.sum() / this.list.length;
};
SortedList.prototype.sum = function() {
  return this.list.length === 0
    ? []
    : this.list.reduce((sum, value) => sum + value, 0);
};

module.exports = SortedList;
