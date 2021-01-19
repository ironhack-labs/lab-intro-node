class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {

    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos]
    }

  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max.apply(Math,this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(Math, this.items)
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }

    return this.items.reduce((a,c) => a + c, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }

    return this.items.reduce((a, c) => a + c, 0) / this.items.length
  }
}

module.exports = SortedList;
