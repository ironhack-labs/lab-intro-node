class SortedList {
  constructor(items, length) {
    (this.items = []), (this.length = this.items.length);
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if(pos <= this.items.length){
      return this.items[pos]
    }
    throw new Error("OutOfBounds");
  
  }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items)
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if(this.items.length > 0){
      return Math.min(...this.items)
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if(this.items.length <= 0) return 0
    var total = this.items.reduce(function(a, b){ return a + b; });
    return total
  }

  avg() {
    if(this.items.length > 0){
      return this.sum() / this.items.length
    }
    throw new Error("EmptySortedList");
    
  }
}
let sortedList = new SortedList()
sortedList.add(15)
sortedList.add(9)
sortedList.add(7)
// console.log(sortedList.items.length)
// console.log(sortedList.get(0))
console.log(sortedList.max())
console.log(sortedList.min())
console.log(sortedList.sum())
console.log(sortedList.avg())

module.exports = SortedList;
