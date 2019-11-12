class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }
  add(item) {
    this.item.push(item);
    this.length = this.item.length;

  }
  get(pos) {
    this.item.sort((a, b) => (a - b));
    if (this.item.length < pos) {
      throw new Error("OutOfBounds")
    }
    return this.item[pos];

  }
  emptySortedList() {
    if (this.item.length == 0) {
      throw new Error("EmptySortedList");
    }
  }
  max() {
    this.emptySortedList()

    return Math.max(...this.item)
  }
  min() {
    this.emptySortedList()


    return Math.min(...this.item)
  }
  average() {
    this.emptySortedList()


    return this.sum() / this.item.length

  }
  sum() {

    return this.item.length == 0 ?
      0 : this.item.reduce(function (a, b) {
        return a + b;
      });


    // gracias a la re-orentacion de el magnifico "Marvin", todos mis respetos
  };

};

module.exports = SortedList;