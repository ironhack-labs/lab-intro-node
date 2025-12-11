class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    if (!this.items.length) {
      this.items.push(item)
      this.length = this.items.length
      return this.items;
    } else {
      this.items.push(item)
      this.items.sort((a ,b)=> a-b)
      this.length = this.items.length
      return this.items
    }
  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (!this.items.length){
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)

  }

  min() {

    if (!this.items.length){
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  sum() {
    if (!this.items.length){return 0}
    let sum = 0
for (let i = 0; i < this.items.length; i++){
  sum += this.items[i]
}
return sum;

  }

  avg() {
    if (!this.items.length){
      throw new Error("EmptySortedList")
    } 
  return  this.sum()/this.items.length
  }
}

module.exports = SortedList;
