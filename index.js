class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    (this.items.sort((a, b) => a - b ))
    this.length = this.items.length;
  }
  get(pos) {
    if(pos > this.length){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }
  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.length-1]
    }
  }
  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0]
    }
  }
  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.length === 0){
      return 0
    }else{
    let sum = (this.items.reduce(reducer));
    return sum;
    }
  }
  avg() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
    let sum = (this.items.reduce(reducer));
    let av = sum / this.length;
    return av
    }
  }
}
module.exports = SortedList;





