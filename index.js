class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length += 1
    if (this.length > 1) return this.items.sort((a, b) => a - b)
  }

  get(pos) {
    
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

let list = new SortedList()
console.log(list.items)
console.log(list.length)

list.add(3)
console.log(list.items)
console.log(list.length)

list.add(6)
console.log(list.items)
console.log(list.length)