class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item) //Push the new item inside of it
    this.length++
    this.items.sort((a, b) => { //Then sort it
      return a - b
    })
  }

  get(pos) {
    if(typeof this.items[pos] === 'undefined') { //If nothing exists in the provided position, throw error
      throw new Error('OutOfBounds')
    }
    else { //If something exists, return it
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0) throw new Error('EmptySortedList') //If list is empty, throw error
    let max = 0
    this.items.forEach((item)=>{ //Iterate over all the elements of the array to find the max, then return it
      if(item > max) max = item
    })
    return max
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
