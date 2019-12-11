
class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item)
    this.length += 1
    this.items.sort ( function (item1, item2) { return item1 - item2})

  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds");
    } 
      return this.items[pos]
    
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1]
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0]
  }

  sum() {
    let acu = 0
    this.items.forEach (num => acu +=  num)
    return acu
  }


  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    let acu = 0
    this.items.forEach (num => acu +=  num)
    return acu/this.length
  }
}

module.exports = SortedList;
