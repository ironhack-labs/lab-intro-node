class SortedList {
  
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
     this.length++;
   return this.items.sort(function(a, b){
   return a - b;
  })
   return this.items;
}

  get(pos) {
    if (pos.this.length && !this.length){
      throw new Error('outOfBounds');
    }
       return this.items[pos];
    }

  max() {
    if(this.items.lenght === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.min(this.items);

  sum() {}

  avg() {}
}

module.exports = SortedList;
