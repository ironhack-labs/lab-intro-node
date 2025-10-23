class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
    
//when we call add 3 times its
//takes whatever we give item
//put it into the array
//update the count
//so in order to add a third value we gatto call add three times.
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);// this sorts it in asc order 
    this.length = this.items.length; //update length
    
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];//highest in the room is the last element
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    const total = this.sum();
    return total / this.length;
  }

  
}

module.exports = SortedList;
