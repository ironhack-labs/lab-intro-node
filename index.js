class SortedList {
  
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    
    const arrayAfterAddingItem = new Array
    
    if (this.length > 0) {

      for(let i = 0; i < this.length; i++){
        
        if (this.items[i] >= item) {
          arrayAfterAddingItem.push(item)
          arrayAfterAddingItem.push(this.items[i])
        } else if (i === this.length-1) {
          arrayAfterAddingItem.push(this.items[i])
          arrayAfterAddingItem.push(item)
        } else {
          arrayAfterAddingItem.push(this.items[i])
        }

      }

    } else {
      arrayAfterAddingItem.push(item)
    }

    this.items = arrayAfterAddingItem
    this.length = arrayAfterAddingItem.length

  }

  get(pos) {
    if (this.length <= pos) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.length-1]
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
    return (this.length > 0
            ? this.items.reduce((previousValue, currentValue) => previousValue + currentValue)
            : 0)
  }

  avg() {
    if (this.length > 0) {
      return this.sum()/this.length
    } else {
      throw new Error('EmptySortedList')
    }
  }
  
}

module.exports = SortedList;