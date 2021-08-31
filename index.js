class OutOfBounds extends Error {

}

class EmptySortedList extends Error {

}

class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a, b) => {
      if (a < b) {
        return -1
      } else if (a === b) {
        return 0
      } else {
        return 1
      }
    })
    this.length++
  }

  get(pos) {
    if (pos > this.length) {
      throw new OutOfBounds("Nope")
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new EmptySortedList("Nope")
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new EmptySortedList("Nope")
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((i, acc) => {
      acc += i
      return acc
    }, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new EmptySortedList("Nope")
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;
