class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    let index = 0
    while (index < this.items.length && this.items[index] < item) {
      index++
    }
    this.items.splice(index, 0, item)
    this.length = this.items.length
  }

  get(pos) {
    if(pos < 0 || pos >= this.items.length){
      throw new Error("OutOfBounds")
    }
    else{return this.items[pos]
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[this.items.length -1]
    }
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[0]
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    let sum = 0
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i]
    }
    return sum
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    let sum = 0
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i]
    }
    return sum/this.length
  }
}

module.exports = SortedList;
