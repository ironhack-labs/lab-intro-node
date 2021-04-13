class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
    //update length

  }

  get(pos) {

    if (pos > this.length-1){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items); 
  }

  sum() {
    if (this.length === 0){
      return 0;
    }
    return this.items.reduce((a, b) => a + b, 0);
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  }

  avg() {

    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;

  }
}

module.exports = SortedList;

let list = new SortedList;
list.add(30);
list.add(20);
list.add(100);
list.add(10);
list.get(2);
console.log(list.sum());
console.log(list.length);


