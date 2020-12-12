class SortedList {
  constructor() {

    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length

  }

  get(pos) {
    
    if (!this.items[pos]) {

      throw new Error('OutOfBounds');

    } 

    const objeto = this.items[pos]

    return objeto;
}

  max() {

    if (this.items.length === 0) {

      throw new Error('EmptySortedList');

    } 

    const objetoMax = this.items[this.items.length -1]

    return objetoMax;

  }

  min() {

    if (this.items.length === 0) {

      throw new Error('EmptySortedList');

    } 

    const objetoMin = this.items[0]

    return objetoMin;

  }

  sum() {

    let suma = 0 

    for (let elemento of this.items) {
      suma += elemento;
    } 
    return suma

  }

  avg() {

    let suma = 0 

    for (let elemento of this.items) {
      suma += elemento;
    } 

    let average = suma / this.items.length;

    if (this.items.length === 0) {

      throw new Error('EmptySortedList');

    } 

    return average;

  }
}

module.exports = SortedList;
