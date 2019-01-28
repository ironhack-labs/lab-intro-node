class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1];
    if (pos > this.items.length){
      throw new Error('EmptySortedList');
    }
    this.length = this.items.length;
  }
  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else return Math.max(...this.items);
  }
  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else return Math.min(...this.items);
  }

  average() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.items.length
    }
  }

  sum() {
    if (this.items.length == 0) {
      return 0
    } else {
      var sum = this.items.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
      })
      return sum
    } 
  }
}

module.exports = SortedList;
