class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    const arrayAfterAddingItem = new Array
    for(let i;i<this.length;i++){
      if (this.items[i] >= item) {
        arrayAfterAddingItem.push(this.items[i])
      } else {
        arrayAfterAddingItem.push(this.items[i])
      }
    }
    this.items = arrayAfterAddingItem
    this.length = arrayAfterAddingItem.length
  }

  get(pos) {}

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

  sum() {}

  avg() {}
}

module.exports = SortedList;
