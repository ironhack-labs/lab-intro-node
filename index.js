class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b
    });
    this.length = this.items.length;
  }

  get(pos) {
      if (this.items[pos]){
        return this.items[pos]
      } else {
        throw new Error('OutOfBounds');
      }
  }

  max() {
    if(this.items.length > 1){
      return this.items[this.items.length -1];
    }else {
      throw new Error('OutOfBounds');
    }
  }

  min() {
    if(this.items.length > 1){
      return this.items[0];
    }else {
      throw new Error('OutOfBounds');
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0
    }
    return this.items.reduce((acc,val) => {
      return acc + val;
    })
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('OutOfBounds');
    }
    return this.sum() / this.items.length;
  }
}

//const list = new SortedList([3, 2, 4, 5, 6])
module.exports = SortedList;
