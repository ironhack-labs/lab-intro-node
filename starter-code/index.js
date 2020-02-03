class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length;

  }


  add(item) {

    this.items.push(item)
    this.items = this.items.sort(function (a, b) {
      return a - b;
    })

    this.length = this.items.length

  }

  get(pos) {


    if (pos < this.items.length) {
      return this.items[pos]
    } else throw new Error("OutOfBounds");



  }

  max() {

    if (this.items.length === 0) {

      throw new Error("EmptySortedList");
    } else return Math.max(...this.items);


  }
  min() {

    if (this.items.length === 0) {

      throw new Error("EmptySortedList");
    } else return Math.min(...this.items);



  }

  sum() {

    return this.items.reduce((a, b) => a + b, 0)

  }

  avg() {

    if (this.items.length === 0) {

      throw new Error("EmptySortedList");
    } else return (this.sum() / this.items.length)

  }
}

module.exports = SortedList;