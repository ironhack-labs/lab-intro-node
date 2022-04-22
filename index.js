class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length=this.items.length;
  }

  get(pos) {    
    if((pos<0)||(pos>this.items.length)){
      throw 'OutOfBounds';
    }
    return this.items[pos];
  }

  max() {

  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
