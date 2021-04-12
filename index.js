class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    let ascNumbers = this.items.sort();
    this.items = ascNumbers;
    this.length = this.items.length;
  }

  get(pos) {
    let element = this.items[pos];

    if(this.items[pos]) {
      return element;
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items) {
      this.items.reduce((el1, el2) => {
        let maxNumber = Math.max(el1, el2);
        return maxNumber;
      });
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items) {
      this.items.reduce((el1, el2) => {
        let minNumber = Math.min(el1, el2);
        return minNumber;
      });
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if(this.items) {
      return this.items.reduce((el1, el2) => el1 + el2);
    } else {
      return 0;
    }
  }

  avg() {
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
