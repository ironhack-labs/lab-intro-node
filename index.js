class SortedList {
  constructor(items, length) {
this.items = [];
this.length = 0;
  }
  add(item) {
this.items.push(item); 
  this.items.sort ((a,b)=> a-b);
this.length = this.items.length; 
  }

  get(pos) {
    if (pos< 0 || pos>=this.length)  {
      throw new Error ('Outofbounds');}
      return this.items[pos];
    
  }

  max() {
if (this.items.length ===0) {
  throw new Error("EmptySortedList");
} 
  return Math.max(...this.items);
}


  min() {
if (this.items.length ===0) {
  throw new Error("EmptySortedList");
} 
return Math.min(...this.items);
  }

  sum() {
    let sum=0; 
    this.items.forEach ((el)=> sum+=el);
    return sum; 
  }

  avg() {
  
    let sum=0; 
    this.items.forEach ((el)=> sum+=el);
   let average = sum/this.items.length; 
   if (this.items.length ===0) {
    throw new Error("EmptySortedList");}
    
   return average; 


  }

}
module.exports = SortedList;
