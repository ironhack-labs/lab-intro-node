class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
  }

  get(pos) {
    if(pos < this.items.length - 1){
      const item = this.item[pos];
      return item;
     }else if(pos > this.item.length || pos === undefined || pos < 0){
      throw new Error('OutOfBounds');
     }
  }

  max() {
    if(this.items.length < 1){
      throw new Error('EmptySortedList');
     }else{
      const maxNumber = this.items.reduce((a,b) => Math.max(a,b), -Infinity)
      return maxNumber;
     }
  }

  min() {
    if(this.items.length < 1){
      throw new Error('EmptySortedList');
     }else{
      const minNumber = this.items.reduce((a, b) => Math.min(a, b))
      return minNumber;
     }
  }

  sum() {
    if(this.items.length === 0){
      return 0;
    }else{
      const sum = this.items.reduce((sum,number) => sum += number);
      return sum;
    }
  }

  avg() {}
}

module.exports = SortedList;
