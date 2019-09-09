class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(x) {
      this.items.push(x);
      this.length = this.items.length;
      this.items.sort(function(a,b){return a - b;});
    }
    get(i) {
      if (i > this.length || i < 0) {
        throw new Error('OutOfBounds');
      } else {
        return this.items[i];
      }
    }
    max() {
      if (this.length === 0 ){
         throw new Error('EmptySortedList');
      } else {
       return Math.max(...this.items);
      }
    }
    min() {
      if (this.length === 0 ){
        throw new Error('EmptySortedList');
     } else {
      return Math.min(...this.items);
     }
    }
    average() {
      if (this.length === 0 ){
        throw new Error('EmptySortedList');
      } else {return this.sum(this.items)/this.length;
      }
    }

    sum() {
      if (this.length === 0 ){
        return 0;
     } else {
        return this.items.reduce(function(accumulator, value){ return accumulator + value;
      },0);
     }
    }
  };
  
  module.exports = SortedList;