class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error('OutOfBounds');
    } else {
    return this.items.indexOf(pos);
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let orderedArr = this.items.sort((a,b) => {
        return b - a;
      });
      return orderedArr[0];
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let orderedArr = this.items.sort((a,b) => {
        return a - b;
      });
      return orderedArr[0];
    }
  }

  sum() {
    let sumArr = this.items.reduce((acc, current) => {
      return acc + current;
    }, 0);
    return sumArr;
  }

  avg() {
      if(this.items.length === 0){
        throw new Error('EmptySortedList');
      } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
