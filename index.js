class SortedList {
  constructor() {
    this.items = []
    this.length = [].length
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort(function(a,b){
      if(a < b){
        return -1
      }
    })
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return Math.max.apply(null,this.items)
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return Math.min.apply(null,this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
