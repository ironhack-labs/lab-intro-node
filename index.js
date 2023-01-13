class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length += 1
    this.items.sort((a, b) => a - b) 
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length) {
      /*let max = this.items[0]
      for (let i = 1; i < this.items.length; i++)
      {
        if (this.items[i] > this.items[i - 1]){
          max = this.items[i]
        }
      }
      return max*/
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length) {
      /*let min = this.items[0]
      for (let i = 1; i < this.items.length; i++)
      {
        if (this.items[i] < this.items[i - 1]){
          min = this.items[i]
        }
      }
      return min*/
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }
    

  sum() {
    return this.items.reduce((acc, el) => acc + el, 0)
  }

  avg() {
    if (this.items.length) {
      return this.items.reduce((acc, el) => acc + el, 0) / this.items.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
