class SortedList {
  constructor(items,length) {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length=this.items.length;
  }

  get(pos) {
    if(this.items[pos])
      return this.items[pos];
    else
      throw new Error('OutOfBounds');
  }

  max() {
    if(this.items[this.items.length-1])
      return this.items[this.items.length-1];
    else
      throw new Error('EmptySortedList');

  }

  min() {
    if(this.items[0])
      return this.items[0];
    else
      throw new Error('EmptySortedList');

  }

  sum() {
    return this.items.reduce((acc,val)=>acc+val,0);
  }

  avg() {
    if(this.length!==0)
      {return this.sum()/this.length}
    else
      {throw new Error('EmptySortedList');}
  }
}

module.exports = SortedList;
