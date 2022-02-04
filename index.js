const { createInvalidExceptionError } = require("mocha/lib/errors")

class SortedList {
  constructor() {

    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.length += 1

    if(this.length === 0){

      this.items.push(item)
      return this.items
    }

    for(let i = 0; i < this.length; i++){

      
      if(item <= this.items[i]){
        
        this.items.splice(i, 0, item)
        return this.items
      }

      if(i === this.length-1){

        this.items.push(item)
        return this.items
      }
    }
  }

  get(pos) {

    if(this.items[pos] === undefined)
      throw new Error('OutOfBounds')
    
    else
      return this.items[pos]
  }

  max() {

    if(this.items.length === 0)
      throw new Error('EmptySortedList')

    return this.items.slice(-1)
  }

  min() {

    if(this.items.length === 0)
      throw new Error('EmptySortedList')

    return this.items[0]
  }

  sum() {

    if(this.items.length === 0)
      return 0

    let sum = 0

    for(let item of this.items){

      sum += item
    }

    return sum
  }

  avg() {

    
    if(this.items.length === 0)
      throw new Error('EmptySortedList')

    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
