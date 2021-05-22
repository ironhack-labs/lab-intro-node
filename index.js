class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a, b) =>  a - b);
    this.length++
    
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.items.length-1]
    }
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    if(this.items.length <=0 ) {
      return 0;
    } else {
      return this.items.reduce(reducer)
    }
    
  }

  avg() {
    if(this.items.length <=0 ) {
      throw new Error('EmptySortedList')
    } else {
      return this.sum() / this.items.length
    }
    return this.sum() / this.items.length
  }
}
const sortList = new SortedList()

module.exports = SortedList;
