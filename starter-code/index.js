class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a,b)=>a-b)
  }
  get(pos) {
    if(pos<0 || pos>this.length-1)
      throw new Error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if(this.length===0)
      throw new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if(this.length===0)
      throw new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    let sumNumbers = 0
    for(let i=0;i<this.length;i++){
      sumNumbers +=this.items[i]
    }
    return sumNumbers
  }

  avg() {
    if(this.length===0)
      throw new Error(`EmptySortedList`)
    return this.sum()/this.length
  }
}

module.exports = SortedList;
