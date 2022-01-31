class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error("Fuera de indice");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("Array vacio");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("Array vacio");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let suma =  this.items.reduce((acumulado, actual) => {
        return acumulado + actual;
      }, 0);
      return suma;
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("Array vacio");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
