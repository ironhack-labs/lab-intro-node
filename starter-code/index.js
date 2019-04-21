class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;

  }
  get(pos) {
   return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    } else { 
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    } else { 
      return Math.min(...this.items);
    }
  }

   
  average() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
  } else {
    const arrSum = this.items.reduce((acc, b) => acc + b);
    const averageArray = arrSum / this.items.length;
    return averageArray;
  }
}
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else { 
      const arrSum = this.items.reduce((acc, b) => acc + b);
      return arrSum;
    }
  }
};


module.exports = SortedList;

