class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((item1, item2) => item1 - item2);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    const highestValue = this.items.sort((item1, item2) => item1 - item2)
     
    if (highestValue.length > 0) {
      return highestValue[highestValue.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    const lowestValue = this.items.sort((item1, item2) => item1 - item2)
     
    if (lowestValue.length > 0) {
      return lowestValue[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
        return this.items.reduce((acc, item) => {
          return acc + item;
        }, 0);  
  }

  avg() {

    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    
    return this.sum() / this.length
  }
}

module.exports = SortedList;
