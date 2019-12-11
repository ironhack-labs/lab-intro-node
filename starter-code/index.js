class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.length++
    this.items.push(item)
    this.items.sort((a,b) => {return a-b})
  }

  get(pos) {

    let result = this.items[pos]
    if(result == undefined)
      throw new Error("OutOfBounds")
    return result
  }

  max() {
    if(this.length == 0)
      throw new Error("EmptySortedList");
    return this.items[this.length-1]
  }

  min() {
    if(this.length == 0)
      throw new Error("EmptySortedList");
    return this.items[0]
  }

  sum() {
    return this.items.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)

  }

  avg() {
    if(this.length == 0)
      throw new Error("EmptySortedList");
    return this.sum()/this.length
  }
}

module.exports = SortedList;
