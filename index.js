class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;
  }

  get(pos) {
    if(this.length > pos) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds')
    }
  }
  max() {
    let max = this.items[0];
    if(this.length !== 0) {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > max) {
          max = this.items[i];
        }
      }
      return max;
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    let min = this.items[0];
    if(this.length !== 0) {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < min) {
          min = this.items[i];
        }
      }
      return min;
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum = 0;
    if(this.length === 0) return 0;
    else {
      for (let i = 0; i < this.length; i++) {
          sum += this.items[i];
      };
      return sum;
    }
}

  avg() {
    if(this.length === 0) throw new Error('EmptySortedList');
    else {
      return this.sum() / this.length;
  }
}
}

module.exports = SortedList;
