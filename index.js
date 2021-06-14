class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos]
    }else {
      throw new Error('OutOfBounds')
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
