class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function(a,b){
      return a-b
    })
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
      } else {
      return this.items = Math.max(...this.items)
    }
  }
  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
      } else {
      return this.items = Math.min(...this.items)
    }
  }
  sum() {
    if(this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b)}
  }
  average() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
      } else {
        let sum = this.items.reduce((a, b) => a + b)
        let average = sum / this.items.length
        return average
      }
  }
};

module.exports = SortedList;
