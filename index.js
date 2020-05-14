class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    let ultimoNumero = this.items.length - 1;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[ultimoNumero];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let suma = 0;
    if (this.items.length === 0) {
      return 0;
    }
    else {
      this.items.forEach(function (numero) {
        suma += numero;
      })
    }
    return suma;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let resultado = this.sum();
    let media = resultado / this.items.length
    return media
  }
}

module.exports = SortedList;

