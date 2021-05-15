class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b)=> a-b);
    this.length++;
  }

  get(pos) {
    const item = this.items.indexOf(pos)
    if(pos > this.length){
      throw new Error('OutOfBounds');
    }else{
    return item
    }

    
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
