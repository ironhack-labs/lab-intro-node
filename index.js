class SortedList {
  constructor(items, length) {
  this.items = [];
  this.length = this.items.length;
  this.sumAct = 0;
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    // hice cosas raras porque no me pasaba la última iteración, pero igual no pude sacarla
    if (this.length === 0) {
      return 0;
    } else {
      const sum = this.items.reduce((a, b) => {
        return a + b;
    }
  )
  this.sumAct = sum;
  return sum;
}
}

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const average = this.sumAct / this.length;
    return average;
    }
  }
}

module.exports = SortedList;
