class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {return a - b})
  }

  get(pos) {
    if (pos < 0 || pos >= this.length )
    {
      throw new Error('OutOfBounds');
    }
    else
    {
      return this.items[pos]
    }      
    
  }

  max() {
    if (this.length === 0) 
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) 
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return this.items[0]
    }
  }

  sum() {
    return this.items.reduce((accumulator, currentValue) => {accumulator + currentValue}, 0)
  }

  avg() {
    if (this.length === 0) 
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
