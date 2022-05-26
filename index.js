class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {

    return this.items.indexOf(pos)
  }

  max() {

    return Math.max(...this.items)
  }

  min() {

    return Math.min(...this.items)
  }

  sum() {

    // const sum = arr.reduce((a,b) => a + b, 0)
    // return sum
    let sum = 0
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i]
    }
    return sum
  }

  avg() {
    
  }
}

module.exports = SortedList;
