class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    const arr = this.items //Create a reference to the items array
    arr.push(item) //Push the new item inside of it
    arr.sort((a, b) => { //Then sort it
      return a-b
    })
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
