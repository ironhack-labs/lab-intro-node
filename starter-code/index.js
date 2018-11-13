class SortedList {
  constructor() {
   this.items = [];
   this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length++;
    
  }
  get(pos) {
   return this.items[pos-1];
  }
  max() {
    if (this.length<1) {
      throw new Error("EmptySortedList")
    } else {
   return this.items[this.length - 1]
    }
  }
  min() {
    if (this.length <1) {
      throw new Error("EmptySortedList")
    } else {
    return this.items[0]
    }
  } 
  
  average() { 
    if(this.length < 0){
    throw new Error("EmptySortedList")
  }else{
    return this.sum(this.items)/this.length;
}

  }
  sum() {
   if (this.length > 0){
     return this.items.reduce(function(a,b){
     return a + b;
     },0)
   } else {
     return 0;
   }
  }
};

module.exports = SortedList;
var s1 = new SortedList()
s1.add(5);