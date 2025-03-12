class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = [...this.items, item].sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length){
      throw new Error("out of bounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0){
      throw new Error("list is empty");
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0){
      throw new Error("list is empty");
    }
    return Math.min(...this.items)
  }

  sum() {
    let result = 0;
    if (this.items.length === 0){
      return 0;
    }
    for (let i = 0; i < this.items.length; i++){
      result += this.items[i];
    }
    return result;
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("list is empty");
    }
    return this.items.reduce((acc, num) => acc + num, 0) / this.items.length;
  }
}

module.exports = SortedList;
