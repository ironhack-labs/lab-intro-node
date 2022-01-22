class SortedList {
  
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    
    let arrayValuesBelow = new Array
    let arrayValuesAbove = new Array     

    if (this.length === 0) {
      this.items.push(item)
    } else {
      arrayValuesBelow = this.items.filter(function (number) {return number<item})
      arrayValuesAbove = this.items.filter(function (number) {return number>item})
      if (arrayValuesBelow.length === 0) {
        this.items.unshift([item])
      } else if (arrayValuesAbove.length === 0){
        this.items.push(item)
      } else {
        this.items = [...arrayValuesBelow,item,...arrayValuesAbove]
      }  
    }

    this.length += 1
    
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

const example = new SortedList
example.add(100)

module.exports = SortedList;