class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds')
    }

    return this.items[pos]
    
  }
  
  max() {
    if (this.items.length === 0){
      throw new Error ('EmptySortedList')
    }

    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0){
      throw new Error ('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    }
    return this.items.reduce((prev, cur) => prev + cur);
  }

  avg() {
    let sum = this.sum();
    if (this.items.length === 0){
      throw new Error ('EmptySortedList')
    }
    return sum/this.length
  }
}

module.exports = SortedList;
const test = new SortedList;
test.add(0)
console.log (test.items)
