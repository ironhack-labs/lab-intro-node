class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // console.log("Init Items array : ",this.items);
    this.items.push(item);
    // console.log("After pushing : ",this.items);
    this.items.sort((a,b) => a - b );
    // console.log("After sorting : ",this.items);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length -1];
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    const sumOfTheArray = this.items.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);
    return sumOfTheArray / this.length;
  }
}

module.exports = SortedList;
