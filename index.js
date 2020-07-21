class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //iterar en el array items
    /* añadir item
    ordenar por orden ascendente */
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.length >= pos) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.length !== 0) {
      return this.items[this.length - 1];
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length !== 0) {
      return this.items[0];
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    var sum = this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    var result = this.sum() / this.length;
    return result;
  }
}

module.exports = SortedList;
