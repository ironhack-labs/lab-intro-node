class SortedList {
  constructor(items, length) {
    this.items= [];
    this.length = this.items.length
  }

  add(item) {
      this.items.push(item);
      this.length+=1;
 return  this.items.sort((a,b)=>a-b);
  }

  get(pos) {
this.items.indexOf(pos);

if (pos === 0 || pos < this.items.length) {
  return this.items[pos];
} else throw new Error("OutOfBounds");
}

  

  max() {
  if (this.items.length > 0) {
    return Math.max(...this.items);
  } else throw new Error("EmptySortedList");
  }


  min() {
  if (this.items.length > 0) {
    return Math.min(...this.items);
  } else throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((accum, currVal) => accum + currVal, 0);
  }

  avg() {
    if (this.items.length > 0) {
        return this.sum() / this.items.length;
      } else throw new Error("EmptySortedList");
   
  }
}

module.exports = SortedList;
