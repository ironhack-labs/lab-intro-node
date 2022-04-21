class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    //ensuring that the items array stays sorted in ascending order
    this.items.sort();
    this.length=this.items.length;
  }

  get(pos) {    
    if((pos<0)||(pos>this.items.length)){
      throw 'OutOfBounds';
    }
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
