class SortedList {
  constructor(){}
  constructor(){
    this.items = [];
    this.length = this.items.length;
  }
  add(item){}
  add(item){
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }
  get(pos){}
  get(pos){
    if (pos <= this.length){
      return this.items[pos];
    }
      throw new Error('OutOfBounds');
    }
    max(){}
    max(){
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }
  min() {}
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }
  sum() {}
  avg() {}
}
module.exports = SortedList;
// new SortedList 
items (array);
length (elements in the array)