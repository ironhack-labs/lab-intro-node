class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
if (pos <= this.length){

  return this.items[pos]
} else{

  throw new Error('OutOfBounds');
}


  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var max = Math.max.apply(null, this.items);
    }
    return max;
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var min = Math.min.apply(null, this.items);
    }
    return min;
  }
  sum() {
  let sumArray = 0
  for (let i = 0; i < this.items.length; i++){
    sumArray += this.items[i]
  }
   return sumArray
  }
  avg() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    let total = 0
    for (let i = 0; i < this.items.length; i++){
      total += this.items[i]/this.items.length
    }

 return total

  }
}
module.exports = SortedList;
