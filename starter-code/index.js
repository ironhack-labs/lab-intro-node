function SortedList() {
  this.items = [];
  this.length = 0;
}

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort((a, b) => {
    return a - b;
  });
  this.length = this.items.length;
};
SortedList.prototype.get = function(pos) {
  return this.items[pos];
};
SortedList.prototype.max = function() {
  let max = 0;
  this.items.forEach(number => {
    number > max ? (max = number) : number;
  });
  return max;
};
SortedList.prototype.min = function() {
  let min = this.items[0];
  this.items.forEach(number => {
    number < min ? (min = number) : number;
  });
  return min;
};
SortedList.prototype.average = function() {
  let sum = this.sum();
  return sum / this.items.length;
};
SortedList.prototype.sum = function() {
  let sum = this.items.reduce((previous, next) => {
    return previous + next;
  }, 0);
  return sum;
};

module.exports = SortedList;
