class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length-1) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    };
  }
// why are Math.min/max not working here? They seem to return NaN :<
  // max() {
  //   if (this.length === 0) {throw new Error('EmptySortedList')}
    
  //   else {
  //     console.log(Math.max(this.items));
  //     return this.items.sort(function(a, b){return a-b})[this.length-1]} 
  // }
  max() {
    if (this.length === 0) {throw new Error('EmptySortedList')}
    else {
      return Math.max(...this.items);
    } 
  }

  min() {
    if (this.length === 0) {throw new Error('EmptySortedList')}
    else {
      return Math.min(...this.items);
    } 
  }

  sum() {
      return this.items.reduce(function (a, current) {
        return a + current;
      }, 0);
  }

  avg() {
    if (this.length === 0) {throw new Error('EmptySortedList')}
    else {
      return this.sum(this.items)/this.length;
    }
  }
}

module.exports = SortedList;
