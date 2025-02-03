class SortedList {
  constructor(items = []) {
    this.items = items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item);  
        this.length = this.items.length; 
        return; 
      }
    }
  
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if( pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    let maxi = 0;
    if (!this.items.length){
      throw new Error("EmptySortedList");
    }
    for (let j = 0; j < this.items.length; j++) {
      if (maxi < this.items[j]) {
        maxi = this.items[j]
      }
    }
    return maxi; 
  }

  min() {
    let mini = Infinity;
    if (!this.items.length){
      throw new Error("EmptySortedList");
    }
    for (let j = 0; j < this.items.length; j++) {
      if (mini > this.items[j]) {
        mini = this.items[j]
      }
    }
    return mini; 
  }

  sum() {
    let sum = 0;
    if (!this.items.length){
     return 0;
    }
    for (let j = 0; j < this.items.length; j++) {
      sum += this.items[j]
    }
    return sum; }

  avg() {
    let sumTemp = 0;
    if (!this.items.length){
      throw new Error("EmptySortedList");
    }
    for (let j = 0; j < this.items.length; j++) {
      sumTemp += this.items[j]
    }
    return sumTemp / this.items.length;
  }
}

module.exports = SortedList;
