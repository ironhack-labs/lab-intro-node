class SortedList {
  constructor() {
    this.length = 0;
    this.array = [];
  }
  add(item) {
    this.array.push(item);
    this.length++;
    this.array.sort((a, b)=>{ return a+b })
  }
  get(pos) {
    if (pos > this.length) {
      return new Error("OutOfBounds");
    }
    return this.array[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(Math, this.array);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(Math, this.array);
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    
    
    
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    
    return this.array.forEach(element => {
       let sumatory = sumatory + element
     });
  }
}

module.exports = SortedList;
