class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort( (a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.length){
      throw new Error('EmptySortedList');
    }
    const order = this.items.sort( (a,b) => a-b);
    return order[pos];
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    const max = this.items.sort( (a,b) => a-b);
    return max[max.length-1];
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    const min = this.items.sort( (a,b) => a-b);
    return min[0];
  }

  sum() {
    if(this.items.length === 0){
      return 0;
    }
    return this.items.reduce( (sum,acc) => sum + acc,0 );
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return (this.items.reduce( (sum,acc) => sum + acc,0 )) / this.items.length;
  }
}

module.exports = SortedList;
