class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    else { 
      /*  return Math.max(...this.items) */
      let arrMax = this.items.sort(function (a, b) {
        return a - b;
      });

      return arrMax[arrMax.length - 1]
    }
  }


  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return Math.min(...this.items);
  }
}

  sum() {

  return  this.items.reduce((a, b) => a + b, 0)

  }

  avg() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    else{
     return  this.items.reduce((a,b) => a + b, 0) / this.length;
    }
  }
}

module.exports = SortedList;
