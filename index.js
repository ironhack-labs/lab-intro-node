class SortedList {
  constructor(items = [], length = 0) {
    this.items= items;
    this.length= length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a-b);
    this.length++;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    if (this.items.length > 0){
      return Math.max(...this.items)
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    return this.items.reduce((a, b) => a+b, 0); {
    }
  }

  avg() {
  if (this.items.length > 0){
    return (this.items.reduce((a,b) => a+b, 0)/this.items.length);
   }else{
      throw new Exception('EmptySortedList'); 
    }
  }
      
}


module.exports = SortedList;
