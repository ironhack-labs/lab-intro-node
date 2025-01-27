class SortedList {
  constructor(items = []) {
    this.items = items
    this.length = this.items.length;
  }

  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("Index out of bounds");
    }
  }

  max() {
    if(!this.items.length){
      throw new Error("Empty SortedList");
    }else {
      return this.items[this.length - 1]; //return sorted last index (in this case the max value)
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("Empty SortedList");
    } else {
      return this.items[0]; // Return the first (min) item
    }
  }
  

  sum() {
    if (!this.items.length) {
      return 0; 
     } else {
      let total = 0; 
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i]; //sum values[i]
      }
      return total; 
    }
  }
  

  avg() {
    if (!this.items.length) {
    throw new Error("EmptySortedList");
  } else {
    return this.sum() / this.length; // Calculate the average
  }
}
}

module.exports = SortedList;
