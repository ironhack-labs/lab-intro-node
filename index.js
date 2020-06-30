class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  

  get(pos) {
   if (pos > this.items.length - 1 || pos < 0) throw new Error('OutOfBounds');
   return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    else {
      let number = this.items.length - 1;
      return this.items[number];
    }
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((total, acc) => {
         return total + acc;
       },0);
  }

  avg() {
    return ((this.items.reduce((total, acc) => total + acc)) / this.length)
  }
  
}

module.exports = SortedList;
