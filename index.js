class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = [...this.items, item]
    this.items.sort((a, b) => a - b);
    this.length += 1
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
   }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc,item) => {
        return acc + item})
    }
    
   }

  avg() { 

    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((acc,item) => {
        return acc + item})/this.length
    }
  }
}

let list = new SortedList()
// list.add(1);
console.log(list)
module.exports = SortedList;
