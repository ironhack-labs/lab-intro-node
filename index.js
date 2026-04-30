class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if(pos > (this.items.length - 1)){
      throw new Error("OutOfBounds");
    }
    if(pos < 0){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    if(this.items.length > 0){
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    if(this.items.length > 0){
      return Math.min(...this.items);
    }
  }

  sum() {
    let total = 0;
    if(this.items.length === 0){
      return total;
    }
    if(this.items.length > 0){
      this.items.forEach((element) => {
        total += element;
      })
    }
    return total;
  }

  avg() {
    let total = 0;
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    if(this.items.length > 0){
      this.items.forEach((element) => {
        total += element;
      })
    }
    return total / this.items.length;
  }
}

const list = new SortedList();

module.exports = SortedList;