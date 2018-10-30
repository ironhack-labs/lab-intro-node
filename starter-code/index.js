class SortedList {
  constructor(array) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    for(let i =0; i<this.length; i++){
      if (item < this.items[i]) {
        this.length++
        return this.items.splice(i, 0, item)
      }
    }
    this.length++
    return this.items.push(item)
  }
  get(pos) {
    try {
      return this.items[pos-1];
    }
    catch(error) {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    else
      return Math.max(...this.items);
  }
  min() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    else
      return Math.min(...this.items);
  }
  sum() {
    return this.items.reduce(function(accumulator, current){
      return accumulator + current;
    }, 0);
  }
  average() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    else
      return this.sum(this.items)/this.length;
  }
};

module.exports = SortedList;
