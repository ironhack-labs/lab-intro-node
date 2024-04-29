class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // console.log(`......`);
    // console.log(`add invoked with ${item}`);
    // console.log(`......`);
    this.items.push(item);
    this.items.sort((a,b) => {return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= 0 && pos < this.length) return this.items[pos];
    throw new Error("OutOfBounds");
  }

  max() {
    if(this.length === 0) throw new Error("EmptySortedList");

    let max = this.items.reduce((accumulator, current) => {
      return accumulator > current ? accumulator : current
    })
    return max;
  }

  min() {
    if(this.length === 0) throw new Error("EmptySortedList"); 

    let min = this.items.reduce((accumulator, current) => {
      return accumulator < current ? accumulator : current
    })
    console.log(min)
    return min;

  }

  sum() {
    if(this.length === 0) return 0;

    let sum = this.items.reduce((acc, cur) => 
    { return acc + cur})
    return sum;
  }

  avg() {
    if(this.length === 0) throw new Error("EmptySortedList"); 

    let sum = this.items.reduce((acc, cur) => 
    { return acc + cur})
    return sum/this.length;

  }
}

let testList = new SortedList();
testList.add(2);
testList.add(5);
testList.add(7);
console.log("Position 2:", testList.get(2))
console.log(testList.items)
console.log("max:", testList.max())

module.exports = SortedList;
