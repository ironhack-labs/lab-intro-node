class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }
   return this.items[pos]
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }

      return Math.max(...this.items)
   
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
     return Math.min(...this.items)
    }
  }
 
  sum() {
      if(this.length === 0){
        return 0
      }
    let sum = 0
    for (let i = 0; i < this.length; i++){
      sum += this.items[i]
    }
    return sum
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    const average = this.items.reduce((a, b) => a + b, 0) / this.length
    return average
  }
}

module.exports = SortedList;
