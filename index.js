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
    this.checkIfEmpty() //If list is empty, this function throws an error
    let max = 0
    this.items.forEach((item)=>{ //Iterate over all the elements of the narray to find the max, then return it
      if(item > max) max = item
    })
    return max
  }

  min() {
    this.checkIfEmpty()
    let min = 0
    this.items.forEach((item)=>{
      if(item < min) min = item
    })
    return min
  }

  sum() {
    let sum = 0
    this.items.forEach((item)=>{ //Sum every element
      sum += item
    })
    return sum
  }

  avg() {
    this.checkIfEmpty()
    return this.sum() / this.length //Divide sum by number of elements to get avg
  }

  checkIfEmpty() {
    if(this.length === 0) throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;
