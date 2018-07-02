class SortedList {
  constructor(list = []) {
    this.items = list;
    this.length = 0;
  }

  add(item) {
    let i = 0;
    while(item > this.items[i] && i < this.length) {
      i++;
    }
    this.items.splice(i, 0, item);
    this.length++;
  } 

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    return this.items[this.length -1];
  }
  min() {
    return this.items[0];
  }
  average() {
    return this.sum() / this.length;
  }
  
  sum() {
    let sum = 0;
    this.items.forEach((i) =>{
      sum += i;
    });
    return sum;
  }
}
module.exports = SortedList;