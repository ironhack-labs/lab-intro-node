class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    let ascendingNumbers = this.items.sort(function(a, b) {
      if (a > b) 
        return 1;
      else if (a < b) 
        return -1;
      else 
        return 0;
    });
  }

  get(pos) {
    if(this.items[pos])
      return this.items[pos];
    else
      throw new Error("OutOfBounds");
  }

  max() {
    if(this.items.length === 0)
      throw new Error("EmptySortedList");

    let max = this.items.reduce(function(a, b) {
      return Math.max(a, b);
    });

    return max;
  }

  min() {
    if(this.items.length === 0)
      throw new Error("EmptySortedList");

    let min = this.items.reduce(function(a, b) {
      return Math.min(a, b);
    });

    return min;
  }

  sum() {  
    if(this.items.length > 0)
    {
      let sum = this.items.reduce(function(a, b) {
        return a+b;
      });
      return sum;
    }
    else
      return 0;
  }

  avg() {
    if(this.items.length === 0)
      throw new Error("EmptySortedList");

    return this.sum()/this.items.length;
  }
}

module.exports = SortedList;
