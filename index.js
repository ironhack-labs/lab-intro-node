class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {return a - b})
    this.length = this.items.length;
  }

  get(pos) {
    if(pos <= this.items.length -1){
      return this.items[pos];
    }else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.items.length !== 0){
      let max = 0;
      this.items.filter((item) => {
        if(item > max){
          max = item
        } 
        return max;
      });
      return max;
    }else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.items.length !== 0){
      this.items.sort((a, b) => {
        return a - b;
      });
      return this.items[0];
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if(this.items.length !== 0){
      return this.items.reduce((acc, curV) => {
        return acc + curV;
      })
    }
    return 0;
  }

  avg() {
    if(this.items.length !== 0){
      return this.items.reduce((acc, curV) => {
        return acc + curV;
      })/this.items.length;
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
