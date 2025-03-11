class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item); // add item to array
    this.items.sort((a,b) => a - b ); // sort array in ascending order
    this.length = this.items.length;
  }

  get(pos) {

    if(pos < 0 || pos >= this.items.length){
      throw new Error ("OutofBounds");
    }
        return this.items[pos];
  }

  max() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  }

  sum() {
    let sum = 0;
    this.items.forEach( num => {
      sum += num;
    });
    return sum
  }

  avg() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    
    return this.sum() / this.items.length;
}
}

module.exports = SortedList;
