

class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
      this.items.sort((a, b) => {
        return a-b
      })
      this.length = this.items.length
  }

  get(pos) {
    let position = this.items.indexOf(pos);
    if(pos <= this.length) {
      return position
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
    return this.items[this.length -1];
  }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    return this.items.reduce((acc,cv) => acc + cv, 0)
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    } else
    return (this.items.reduce((acc,cv) => acc + cv, 0)) / this.length
  }
}

module.exports = SortedList;
