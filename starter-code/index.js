class SortedList {
  constructor(items, length) {
    this.items = []; 
    this.length = 0;
  }

  add(item) {
    this.items.push(item); 
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(i) {
if (i<this.items.length){
       return this.items[i]
    } else {
        throw new Error ("OutOfBounds")
  }
}

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    }else{
    return Math.max(...this.items); 
    }
  } // comme on les a deja sort , on peut dire (this.items.lenght-1)

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items);
  }
}

  sum() {
     if (this.items.length === 0) {
       return 0;
     } else {
       this.items.reduce((acc, curValue)=>(acc + curValue), 0);
     }
  }

  avg() {
     if (this.items.length === 0) {
       return 0;
     } else {
       return this.items.reduce((acc, curValue) => (
         acc + curValue), 0) / this.items.length; 
     }
  }



module.exports = SortedList;
