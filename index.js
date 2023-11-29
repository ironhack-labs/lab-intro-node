class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a -b);
    this.length = this.items.length;

  }

  get(pos) {
    if (pos === 0 || pos > this.items.length){
      throw new Error("OutofBounds");
    }
    else{
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length > 0){
      const highestVal = this.items.length -1
      return this.items[highestVal]
    }
    else {
      throw new Error("EmptySortedList")
    }
  }

  min() {
    if(this.items.length > 0){
      return this.items[0]
    }
    else{
      throw new Error("EmptySortedList")
    }
  }

  sum() {
    if(this.items.length > 0){
    return this.items.reduce((acc,currentVal) => acc + currentVal, 0)}
    else { return 0}
  }

  avg() {
    if(this.items.length > 0){
      return this.sum()/ this.items.length
    }
    else{
      throw new Error("EmptySortedlist")
    }
  }
}

module.exports = SortedList;
