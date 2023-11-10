class SortedList {
  constructor() {
    
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length
  }

  get(pos) {
   
    if (pos > this.items.length || pos < 0) {
      throw new Error("OutOfBounds") 
    }
      return this.items[pos];
  }

  max() {

    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
      return this.items[this.items.length - 1];
  }

  min() {

    if(this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {

    if(this.items.length < 0){
      throw new Error("error 007")
    }

    let total = 0;
    for(let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {

    if (this.items.length == 0) {
      throw new Error("error")
    }

    const total = this.sum();
    return total / this.items.length;
  }
}

module.exports = SortedList;
