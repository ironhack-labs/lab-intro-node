class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((function (a, b) {
      return a - b;
    }));
    this.length = this.items.length; 
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds"); 
    } else {
    return this.items[pos]
   }; 
  }

  max() { 
    if (this.items.length === 0) {
      throw new Error ("EmptySortedList"); 
    } else {

      return Math.max(...this.items); 
    }
  }

  min() { 
    if (this.items.length === 0) {
      throw new Error ("Empty SortedList")
    } else {
      return Math.min(...this.items); 
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0; 
    } else {
      return this.items.reduce((acc, val) => acc + val); 
    }
   }

  avg() { 
    let result = 0; 
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList'); 
    } else {
      result = this.items.reduce((acc, val) => acc + val); 
    }
    return result / this.items.length; 
  }
}

module.exports = SortedList;
