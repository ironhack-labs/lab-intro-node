class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((a , b) => a - b);
  }

  get(pos) {
    if(pos === this.length - 1){
      return pos
    } else {
      throw new Error('OutOfBounds');
    }

  }

  max() {
    const maximum = Math.max(...this.items)
    const index = this.items.indexOf(maximum)

    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    if (index) {
      return maximum
    }

  }
  

  min() {
    const minimum = Math.min(...this.items)
    

    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    if (this.length) {
      return minimum
    }
  }

  sum() {
    
  }

  avg() {}
}

module.exports = SortedList;
