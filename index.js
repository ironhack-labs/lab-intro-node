class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.sort();
    this.items.push(item);
    this.items.sort();
    this.length++;
  }

  get(pos) {
    if (this.length >= pos+1) {
    return this.items[pos];
  }
    else throw new Error('OutOfBounds')
  }

  max() {
    if (this.length > 0) {
      for(let i=0; i<this.length; i++) {
        let maxNumber = 0;
        if (this.items[i]> maxNumber) {
          maxNumber = this.items[i];
        }
      }
      return maxNumber;
    }
    else throw new Error('EmptySortedList');
  }

  min() {
    if (this.length > 0) {
      for(let i=0; i<this.length; i++) {
        let minNumber = 0;
        if (this.items[i]< minNumber) {
          minNumber = this.items[i];
        }
      }
      return minNumber;
    }
    else throw new Error('EmptySortedList');
  }

  sum() {
    let total = 0
    for(let i=0; i<this.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    if (this.length > 0) {
    return this.items.sum()/this.length;
  }
    else throw new Error('EmptySortedList')
}
}

module.exports = SortedList;
