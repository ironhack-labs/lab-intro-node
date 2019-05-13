class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items = this.items.sort((a, b) => a - b)
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.length)
      return Math.max(...this.items)
    else
      throw new Error('EmptySortedList')
  }

  min() {
    if (this.length)
      return Math.min(...this.items)
    else
      throw new Error('EmptySortedList')
  }
  sum() {
    if (this.length) {
      return this.items.reduce((a, b) => a + b, 0)
    } else return 0
  }
  average() {
    if (this.length)
      return this.sum() / this.length
    else
      throw new Error('EmptySortedList')
  }
};

/* const prueba = new SortedList()
prueba.add(20)
prueba.add(300)
prueba.add(50)
prueba.add(10)

console.log('avg', prueba.average()) */

/* console.log(prueba)
console.log(prueba.get(1000)) */

module.exports = SortedList