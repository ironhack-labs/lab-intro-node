class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length++;
      this.items = this.items.sort((a,b) => a - b);
    }
    get(pos) {
      if (pos > this.length -1) throw new Error('OutOfBounds');
      else return this.items[pos];
    }
    max() {
      if (this.length === 0) throw new Error('EmptySortedList');
      else return this.items[this.length-1];
    }
    min() {
      if (this.length === 0) throw new Error('EmptySortedList');
      else return this.items[0];
    }
    average() {
      if (this.length === 0) throw new Error('EmptySortedList');
      else return this.sum()/this.length; 

    }
    sum() {
      if (this.length === 0) return 0;
      else {
        let sum = this.items.reduce((accumulator,current) => accumulator + current,0);
        return sum;       
      }
    }
  };
  
  module.exports = SortedList;