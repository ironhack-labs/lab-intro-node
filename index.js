class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos]
    }else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else return this.items[this.items.length - 1]
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
