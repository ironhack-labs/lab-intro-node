class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos]){
      return this.items[pos]
    }else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length <= 0){
      throw new Error('EmptySortedList');
    } else{
      this.items.sort((a,b)=> b - a)
      return this.items[0]
    }
  }

  min() {
    if (this.length <= 0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a,b)=> a - b)
      return this.items[0]
    }

  }

  sum() {
    return this.items.reduce((acc, e) => {
      return acc += e
    }, 0)
  }

  avg() {
    if(this.length <= 0){
      throw new Error('EmptySortedList');
    }else {
      return this.sum()/this.length
    }
  }
}

module.exports = SortedList;
