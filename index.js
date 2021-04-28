class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(this.items.includes(pos)) return this.items.indexOf(pos)
    else throw new Error('OutOfBounds')
  }

  max() {
    if(this.items.length <1) throw new Error('EmptySortedList')
    else return Math.max(...this.items)
  }

  min() {
    if(this.items.length <1) throw new Error('EmptySortedList')
    else return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((accum, curr)=> {return accum + curr}, 0)
  }

  avg() {
    if(this.items.length <1) throw new Error('EmptySortedList')
    else return this.sum()/this.length
  }
}

module.exports = SortedList;
