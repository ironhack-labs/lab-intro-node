class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(pos > this.length - 1){
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[this.length - 1];
    }
    
  }

  min() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[0];
    }
    
  }

  sum() {
    if(this.length < 1){
      return 0;
    }
    else {
      let sumOfArr = 0;
      this.items.forEach(e => sumOfArr += e);
      return sumOfArr;
    }
  }

  avg() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    }
    else {
      let sumOfArr = 0;
      this.items.forEach(e => sumOfArr += e);
      return sumOfArr / this.length;
    }
  }
}

module.exports = SortedList;
