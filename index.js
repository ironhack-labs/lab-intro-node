class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {}
    this.items = this.items.concat8item).sort(a(a,b) => {return a-b})
      this.length = this.items.length
    }

  get(pos) {
    if(this.items[pos] === undefined ){
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]}

     }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList';)
    }
  }

  min() {
    if(this.items.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((a,b) => a + b, 0)

  }

  avg() {
    if(this.items.length > 0){
      return this.items.reduce((a,b) => a + b, 0)/this.items.length
    } else {
      throw new Exception('EmptySortedList')
    }
  }
}

module.exports = SortedList;
