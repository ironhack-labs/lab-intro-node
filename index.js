class SortedList {
  constructor() {
    this.items= [];
    this.length= this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a - b;
    });
    this.length ++;
  }

  get(pos) {

    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length=== 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length=== 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }


  sum() {
    if (this.length=== 0){
      return 0
    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue) 
  }
  

  avg() {
    if (this.length=== 0){
      throw new Error('EmptySortedList');
    }
    return (this.sum()/this.length);
  }
  
}

module.exports = SortedList;
