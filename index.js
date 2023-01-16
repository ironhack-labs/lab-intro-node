class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
      
    } else if (pos >= this.length) {
        throw new Error('OutofBounds');
      }
    
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');

    } else if (this.length != 0) {
        return this.items.reduce((max, num) => (max > num)? max:num);

      }
    
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');

    } else if (this.length != 0) {
        return this.items.reduce((min, num) => (min < num)? min:num);

      }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
