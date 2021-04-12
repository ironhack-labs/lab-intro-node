class SortedList {
  constructor() {
    this.items = [];
    this.length = "";
  }

//REVISAR
  // add(item) {
  //   this.items.push(item);
  //      this.items.sort(function(a,b){
  //        return a-b
  // });
  //   this.length = this.item.length;
  // }
  add(item) {
  this.items.push(item);
  this.items.sort((a,b) => a - b); 
  this.length = this.items.length;
}

   get(pos) {
    if (!this.items[pos]) 
      throw new Error("OutOfBounds");
    
      return this.items[pos];
    }

  // get(pos) {
  //   if (pos < 0 && pos > this.length) {
  //     throw new Error("OutOfBounds");
  //   }
  //     return this.items[pos];
  //   }

max() {
if(this.length === "") 
  throw new Error("EmptySortedList");
  let pos = this.length -1;
  return this.items[pos];
}
   
  // max() {
  //   if(this.length === "") {
  //     throw new Error("EmptySortedList");
  // }
  //   return Math.max(...this.items);
  // }

  min() {
    if(this.length==='') throw new Error("EmptySortedList");
    return this.items[0];
  }
  // min() {
  //   if(this.length === "") {
  //     throw new Error("EmptySortedList");
  // }
  //   return Math.min(...this.items);
  // }

  sum() {
    if(this.length === '') return this.length;
    let sum = this.items.reduce((acc, item) => {
    return acc += item;
    });
    return sum;
  }

// sum() {
  //   return this.items.reduce((a, b) => a + b, 0);
  // }

  avg() {
    if(this.length === '') throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
