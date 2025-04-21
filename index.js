class SortedList {
  constructor() {
    this.items = [];
    this.length= 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort ((a,b)=> a-b);

    this.length= this.items.length
  }

  get(pos) {
    if (pos<0 || pos> this.items.length){
      throw new Error ("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList")
    }
    return this.items.reduce((a, b) => Math.max(a, b), -Infinity)
  }

  min() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList")
    }
    return this.items.reduce((a, b) => Math.min(a, b), +Infinity)
  }
  

  sum() {
    if (this.items.length === 0){
      return 0
    }
    return this.items.reduce((a,b)=> a + b, 0)
  }

  avg() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList")
    }
    const sum= this.items.reduce((a,b)=> a + b, 0)
    return sum/ this.items.length
  }
}

module.exports = SortedList;
