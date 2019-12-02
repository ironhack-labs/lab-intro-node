class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    let tempList = this.items
    tempList.push(item)
    this.length = tempList.length
    this.items = tempList.sort((a,b)=>{return a-b})
  }

  get(pos) {
    if(pos > this.length - 1 || pos < 0){
      throw new Error("OutOfBounds");
    }
    else{
      return this.items.indexOf(pos)
    }
  }

  max() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1]
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }

  sum() {
    let sum = 0;
    for(let i = 0; i < this.length; i++){
      sum += this.items[i]
    }
    return sum
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;
