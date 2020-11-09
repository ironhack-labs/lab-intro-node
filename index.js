class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
     this.items.push(item);
     this.items.sort((a, b) => a - b);
     this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos];
    }else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(null, this.items);
    }
  }


  sum() {
    if (this.length === 0){
      return 0;
    } else {
      return this.items.reduce((a, b) => {
        return a + b;
      });
    }
  }


  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((a, b) => {
        return a + b;
      });
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
