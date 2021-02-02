class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b );
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length || pos < 0){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    } 
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    // se iniciar o acumulador com 0, nao precisa colocar o if antes.
    return this.items.reduce((acc, el) => acc + el, 0);
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
  // aproveitando a soma feita e so dividir pelo tamanho
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
