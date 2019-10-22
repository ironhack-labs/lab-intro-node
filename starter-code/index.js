class SortedList {
    constructor() {
      this.items = [];
    }

    get length(){
      return this.items.length
    }
    
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
    }

    get(pos) {
      if (pos > this.length) {
        throw new Error("OutOfBounds")
      } else {
        return this.items[pos]
      }
    }
    
    max() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
          return Math.max(...this.items);
      }
    }

    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
          return Math.min(...this.items);
      }
    }

    sum() {
      if (this.length === 0) {
        return 0;
      } else {
        const arraySum = (accumulator, currentValue) => accumulator + currentValue;
        return this.items.reduce(arraySum);
      }
    }

    average() {
      let totalSum = this.sum();

      if (totalSum == 0) {
        throw new Error("EmptySortedList");
      } else {
        return totalSum / this.length;
      }
    }
  };
  
  module.exports = SortedList;