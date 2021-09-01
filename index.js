class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0]
    }
  }

  sum() {
    let sum =0;
    if (this.length === 0){
      sum = 0
    }else{
      for (let item of this.items){
      sum += item
      
      }
    }
    return sum
  }

  avg() {
    let sum =0;
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      for (let item of this.items){
      sum += item
      
      }
    }
    return sum / this.length
  }
}
console.log(new SortedList)

module.exports = SortedList;
