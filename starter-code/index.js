class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {

      return a - b
    })

    this.length = this.items.length


  }

  get(pos) {
    if (this.items.length > pos) {
      return this.items[pos]
    }
    else
      throw new Error("OutOfBounds");
  }
  max() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1]
    }

    else {
      throw new Error("EmptySortedList");
    }
  }

  min() {

    if (this.items.length > 0) {
      return this.items[0]
    }

    else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length > 0) {
      let suma = this.items.reduce((acc, idx) => acc + idx)
      return suma
    }
    else { return 0 }
  }

  avg() {
    if (this.items.length > 0) {
      let suma = this.items.reduce((acc, idx) => acc + idx)
      return suma / this.items.length
    }
    else throw new Error("EmptySortedList");
  }
}


module.exports = SortedList;
