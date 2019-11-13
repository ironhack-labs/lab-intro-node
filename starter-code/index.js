
class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }

    add(item) {
      this.items.push(item);
      this.length++;
      this.items = this.items.sort(function(a, b){return a - b});
    }

    get(pos) {
      if (pos <= this.length-1) {
        return this.items[pos];
      } else {
        throw new Error("OutOfBounds");
      }
    }

    max() {

      if (this.length > 0) {
        return Math.max(...this.items);
      }
      else {
        throw new Error("EmptySortedList");
      }
    }


    min() {
    
      if (this.length > 0) {
        return Math.min(...this.items);
      }
      else {
        throw new Error("EmptySortedList");
      }
    }

    
    sum() {
      return this.items.reduce((a,b) => a+b,0);
    }


    average() {
      if (this.length > 0) {
        return (this.items.reduce((a,b) => a+b,0) / this.length);
      }
      else {
        throw new Error("EmptySortedList");
      }
    }
  };
  
  module.exports = SortedList;