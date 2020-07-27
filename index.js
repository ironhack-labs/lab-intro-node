class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length += 1
    this.items = this.items.sort((a,b) => a - b )
  }

  get(pos) {
    if( pos <= this.items.length){
      return this.items[pos]
    }else throw new Error('OutofBounds')
  }

  max() {
    if( this.items.length > 0){
      return Math.max(...this.items)
    } throw new Error('EmptySortedList')
  }

  min() {
    if( this.items.length > 0){
      return Math.min(...this.items)
    } throw new Error('EmptySortedList')
  }

  sum() {
    if( this.items.length > 0){
      let sum = this.items.reduce((a,b) => a + b)
      return sum
    } return 0 
  }

  avg() {
    if( this.items.length > 0){
      return this.sum()/this.length
    } throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;
