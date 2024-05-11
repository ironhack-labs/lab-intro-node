class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    /*let index = 0;
    while (index < this.length && this.items[index] < item) {
      index++;
    }

    this.items.splice(index, item);

    this.length++;
  }*/
  this.items.push(items);
  this.items.sort((a, b) => a - b);
  this.length = this.items.length;
}

  get(pos) {
    /*if (pos < 0 || pos >= this.length) {
      throw new Error("outOfBounds");
    } else {
      return this.items[pos];
    }*/
    if ( pos > this.items.length) {
      throw new Error("outOfBounds");
    } return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
      return this.items[this.length -1];
    
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item;
    });
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
