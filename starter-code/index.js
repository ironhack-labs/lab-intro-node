class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {

    let index = this.items.findIndex(e => e > item);
    if(index <0) {
      this.items.push(item);
    } else {
      this.items.splice(index,0,item);
    }
    this.length = this.items.length;  
  }

  get(pos) {
    if(pos>=0 && pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutofBounds')
    }
  }

  max() {
    if(this.length > 0) {
      return this.items[this.length-1]
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.length >0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if(this.length > 0) {
      return this.items.reduce((pV,cV) => pV+cV,0)
    } else {
      return 0;
    }
  }

  avg() {
    if(this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList')
    }
  }
}

module.exports = SortedList;
