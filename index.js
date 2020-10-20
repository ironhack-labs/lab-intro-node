class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) =>{
     return a-b;
    });
    this.length++
  }

  get(pos) {
    if (this.length > pos){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.length > 1){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.length > 1){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if(this.length > 1){
      const suma = this.items.reduce(function (acc, curr) {
        return acc + curr;
      }, 0)
      return suma
    } else {
      return 0;
    }

  }

  avg() {
    if (this.sum() === 0){
      throw new Error('EmptySortedList')
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
