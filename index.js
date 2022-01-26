class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length += 1;
    }
  
  get(pos) {
      if(pos > this.length) {
      throw new Error('OutOfBounds');
      }
    }  

  max() {
      
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
