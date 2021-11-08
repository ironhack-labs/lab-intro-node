class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    const arr = this.items //Create a reference to the items array
    arr.push(item) //Push the new item inside of it
    this.length++
    arr.sort((a, b) => { //Then sort it
      return a - b
    })
  }

  get(pos) {
    const arr = this.items
    if(typeof arr[pos] === 'undefined') { //If nothing exists in the provided position, throw error
      throw new Error('OutOfBounds')
    }
    else { //If something exists, return it
      return arr[pos]
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
