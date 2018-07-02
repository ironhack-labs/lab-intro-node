class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    return Math.max.apply(null, this.items);
  }
  min() {
    return Math.min.apply(null, this.items);
  }
  average() {
    if (this.length > 0) {
      var sum = this.items.reduce(function(acc, val) {
        return acc + val;
      });
      return sum / this.length;
    } else return "Error";
  }
  sum() {
  if (this.length > 0) {
  return this.items.reduce(function(acc, val) {
      return acc + val;
    });
  } else return "Error";
}
}
module.exports = SortedList;

// SortedList.prototype.add     = function(item) {

//     this.items.push(item);
//     this.items.sort(function(a,b){return a - b});
//     this.length++;

// }
// SortedList.prototype.get     = function(pos) {

//   return this.items[pos];

// }
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}
