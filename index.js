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

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else
      return this.items[pos];
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else
    return Math.max(...this.items);
    
   }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else
    return Math.min(...this.items);
    
   }

  sum() {
    let res =0;
    if(this.length === 0){
      return 0;
    }
   for(let i=0; i<this.length; i++){
    res += this.items[i];
   }
    return res;
   }

  avg() { 
    let res =0;
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
   for(let i=0; i<this.length; i++){
    res += this.items[i];
   }
   return res/this.length;
  }
}

module.exports = SortedList;

const list = new SortedList();
console.log(list.items);
console.log(list.length);