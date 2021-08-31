class SortedList {
  constructor() {

    this.items = []
    this.length = 0

  }

  add(item) {
    //push then sort then reassign length
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  // for (let i = 0; i < this.items.length; i++) {
  //   //if item is greater than the one before it and equal to the one after it, add it in place
  //   if (item > this.items[i - 1] && item === this.items[i + 1]) {
  //     this.items.splice(i, 0, item)
  //     //if the item is greater than the one before it and less than the one after it
  //   } else if ((item > this.items[i - 1]) && (item > this.items[i + 1])) {
  //     continue
  //   } else if (item > this.items[i - 1] && item < this.items[i + 1]) {
  //     this.items.splice(i, 0, item)
  //   }
  // }


  get(pos) {

    if (pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds")
    }
  }

  max() {

    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }


  }

  min() {

    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }


  }

  sum() {

    if (this.length === 0) {
      return 0
    } else {

      return this.items.reduce((acc, curr) => acc + curr)
    }

  }

  avg() {

    if (this.length === 0) {

      throw new Error('EmptySortedList')

    } else {

      return this.sum(this.items) / this.length
    }

  }
}

const list = new SortedList()

list.add(2)
list.add(3)
list.add(1)
list.add(4)
list.add(5)

console.log(list.get(3))
console.log(list.max())
console.log(list.sum())
console.log(list.avg())


console.log(list)

module.exports = SortedList;
