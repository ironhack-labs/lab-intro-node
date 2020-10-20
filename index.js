class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;

  }

  get(pos) {

    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    else {
      return this.items[pos];
    }

  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
      
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.min(...this.items);
    }
  }

  sum() {if (this.length == 0) {
    return 0;
  }
  else {
    return this.items.reduce((a,b) => a+b);
  }}

  avg() {
    {if (this.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      let sum = this.sum();
      return sum/this.length
    }}
  
  }
}

module.exports = SortedList;


// let list = new SortedList

// list.add(9);

// list.add(35);
// list.add(45);
// list.add(85);

// list.min()