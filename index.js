class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  sortItems (arr) {
    return arr.sort((a,b) => a - b);
  }
  add(item) {
    // return this.items.push(item).sort((a, b) => a - b);
    this.items.push(item);
    this.sortItems(this.items);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length){
    return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length) {
      let newArr = this.sortItems(this.items);
      return newArr[newArr.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length) {
      let newArr = this.sortItems(this.items);
      return newArr[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length){
    return this.items.reduce((a,b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length){
      let total = this.sum();
      return total / this.length;
      } else {
        throw new Error('EmptySortedList');
      }
    }
}

module.exports = SortedList;
