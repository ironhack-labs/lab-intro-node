class SortedList {
  constructor() {
    this.items = []; 
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    const sortedArray = this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length){
    const valueAtPos = this.items[pos];
    return valueAtPos;
    } else if (pos >= this.length) {
      throw new Error("OutOfBoundes");
    } 
  }

  max() {
    if (this.length !== 0){
      return this.items.reduce((maximum, currentElement)=>{
        if (currentElement > maximum){
          return currentElement
        } else {return maximum};
      }, this.items[0]) 
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length !== 0){
      return Math.min(...this.items)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length !== 0){
      return this.items.reduce((accumulator, currentElement)=>{
        return accumulator += currentElement;
      },0); 
    } else {
      return 0;
    }
  }

  avg() {
    const totalSum = this.sum();
    console.log(totalSum)
    const avg = totalSum / this.items.lenght; 
    return avg;
  }
}

module.exports = SortedList;
