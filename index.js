class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {
    for(let i = 0; i < this.items.length; i++) {
      if(pos > this.items.length){
        throw new Error('OutOfBounds')
      } else {
        return this.items[pos]
      }
    }
  }

  max() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.max.apply(null, this.items)
    }
  }



  min() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.min.apply(null, this.items)
    }
  }

  sum() {
    if(this.items.length == 0){
      return 0
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]}
        return sum
    }
   
  }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList')
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]}
        return sum/this.items.length
    }
  }
}

module.exports = SortedList;
