class SortedList {
  constructor(items) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort( function (a, b) {
      return a - b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if ( pos < this.length ) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if ( this.length === 0 ) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if ( this.length === 0 ) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if ( this.length === 0 ) {
      return 0;
    } else {
      let sum = 0;
      this.items.forEach( function (elem) {
        sum += elem;
      })
      return sum;
    }
  }

  avg() {
    if ( this.length === 0 ) {
      throw new Error('EmptySortedList')
    } else {
      let sum = 0;
      this.items.forEach( function (elem) {
        sum += elem;
      })
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
