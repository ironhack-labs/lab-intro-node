class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    })
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return this.sum() / (this.items.length);
  }

  sum () {
    if (this.items.length === 0) {
      return 0;
    }
    let sum = 0; 
    this.items.forEach(e => {
      sum += e;
    })
    return sum;
  }
}

module.exports = SortedList;
