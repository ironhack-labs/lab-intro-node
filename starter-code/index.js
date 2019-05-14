class SortedList {
  constructor() {
    this.items =  []
    this.length =  this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a - b )
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
   if (this.length == 0) throw new Error("EmptySortedList")
   else{
     let counter = 0;
     for (let i = 0; i < this.length; i++) {
      if(this.items[i] > counter ) counter = this.items[i]
      
     }
     return counter;
   }
  }
  min() {
    if (this.length == 0) throw new Error("EmptySortedList");
    else {
      let counter = this.items[0];
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < counter) counter = this.items[i];
      }
      return counter;
    }
  }
  average() {
   if (this.length == 0) throw new Error("EmptySortedList");
   else{ 
     let average = this.sum() / this.length;

   return average
  }
}
  sum() {
    let sum = 0
    for(let i = 0; this.length > i;i++){
      sum +=this.items[i]
    }
  return sum
  }
};

module.exports = SortedList;
