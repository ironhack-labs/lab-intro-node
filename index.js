class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      for(let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        if(pos === item){
          return item;
        }
      }
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce(function (valorAnterior, valorActual, indice, vector) {
      return valorAnterior + valorActual;
    },0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.items.reduce((total, current) => total + current, 0);
    return sum / this.items.length;
  }
}

module.exports = SortedList;
