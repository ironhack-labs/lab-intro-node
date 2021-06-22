class SortedList {
  constructor(newSortedList) {
    this.items = []
    this.length = this.items.length

  }


  //add item to an array
  //sort item
  //update length

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => {
      if (a < b) {
        return -1
      }
      else if (a > b) {
        return 1
      }
      else {
        return 0
      }
    });
  }

  // throw an error if message is out of bounds
  // get the value at index in the list
  get(index) {
    if (this.length < index + 1) {
      throw new Error('OutOfBounds');
    }
    return this.items[2]
  }

  // return the highest value of the array
  // in case of empty array throw an error
  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return (Math.max(...this.items))

  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return (Math.min(...this.items))

  }


  //should return the sum value of the array
  //check the corresponding test and see if anything else needs to be added
  sum() {
    let sum = this.items.reduce((acc, cur) => {
      return acc + cur
    }, 0)
    return sum
  }


  //should return the sum value of the array
  //throw an error if the Array is empty
  avg() {

    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }
    let average = this.sum() / this.items.length
    return average
  }



}
module.exports = SortedList;
