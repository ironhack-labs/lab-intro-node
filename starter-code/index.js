class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;

  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos]

  }
  max() {


    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    }

    let max = Math.max.apply(null, this.items);
    return max



  }
  min() {


    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    }

    let min = Math.min.apply(null, this.items)
    return min

  }
  average() {

    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.items.length





  }
  sum() {
    if (this.items.length == 0) {
      return 0
    }

    return this.items.reduce((ac, cu) => ac + cu, 0);


  };

}
module.exports = SortedList;

