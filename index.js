class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += this.items.length;
    this.items.sort((a, b) => a - b);

  };

  get(pos) {
  
    let value = this.items[pos];
    if (value) {
      return value
    } else if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }
    
   /*
    if (pos < items.length) {
      return this.items[pos]
    } else if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }
    */
  }

  max() {
    let itemsCopy = [...this.items]
    if (!(itemsCopy.length === 0)) {
      return itemsCopy.pop()
    } else if (itemsCopy.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    let itemsCopy = [...this.items]
    if (!(itemsCopy.length === 0)) {
      let returnValue = itemsCopy.splice(0, 1)
      return returnValue[0]
    } else if (itemsCopy.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let itemsCopy = [...this.items];
    let reduced;
    if (itemsCopy.length > 0) {
      reduced = itemsCopy.reduce((acc, currentVal) => {
        return acc + currentVal;
      });
    } else if (itemsCopy = []) {
      reduced = 0;
    }
    return reduced;
  }

  avg() {
    let itemsCopy = [...this.items];
    let reduced;
    let avg;
    if (itemsCopy.length > 0) {
      reduced = itemsCopy.reduce((acc, currentVal) => {
      return acc + currentVal;
    });
    } else if (itemsCopy.length === 0) {
      throw new Error('EmptySortedList');
    }
    avg = reduced / itemsCopy.length;
    return Number(avg.toFixed(2))
  }
}

module.exports = SortedList;