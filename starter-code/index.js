class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  max() {
    if (this.length == "") {
      throw new Error("EmptySortedList");
    }
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/max
    return Math.max(...this.items)
  }
  min() {
    if (this.length == "") {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
    //return this.items[0];
  }
  average() {
    if(this.items.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.items.length
     }  else {
      throw new Error("EmptySortedList");
     }
  }

  sum() {
    if(this.items.length > 0) {
      return this.items.reduce((a, b) => a + b);
     } else {
       return 0
     }
  }
}

module.exports = SortedList;
