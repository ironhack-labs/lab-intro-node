class SortedList {
  constructor(items,length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b})
    this.length = this.items.length
  }

  get(pos) {
  //this.items.lenght[pos]
    if(pos > this.items.length){
      throw new Error('OutOfBounds');
    }
    this.items.length[pos]
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
