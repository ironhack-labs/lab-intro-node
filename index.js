class SortedList {
  constructor() {
    this.items = []; //numeros
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length++
  }

  get(pos) {
    if(pos < 0 || pos > this.items.length-1) throw new Error('OutOfBounds');
    return this.items[pos]
  }

  max() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[this.length-1];
  }

  min() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[0]
  }

  sum() {
    return this.items.reduce((accum, curr) => accum + curr, 0); 
    if(!this.items.length) throw new Error('EmptySortedList'); 
  }


  avg() {
    if(!this.length) throw new Error("valio queso")
    return this.sum() / this.length
  }
}

module.exports = SortedList;
