class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){return a-b})
    
    

  }

  get(pos) {
    if(pos>this.length){
      throw new Error("OutOfBounds");
    }
    else
    return (this.items[pos])
    
  }

  max() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    let max = 0;
 for(let i =0;i<this.length;i++){
   
   if(this.items[i]>max)
   max = this.items[i]
 }
 return max
  }

  min() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    let min = this.items[0];
 for(let i =0;i<this.length;i++){
   
   if(this.items[i]<min)
   min = this.items[i]
 }
 return min
  }

  sum() {
    
    let sum = 0;
 for(let i =0;i<this.length;i++){
   
   
   sum+= this.items[i]
 }
 return sum
  }

  avg() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    // let sum = 0;
    // for(let i =0;i<this.length;i++){
      
      
    //   sum+= this.items[i]
    // }
    let sum=this.sum()
    return (sum/this.length)
  }
}

module.exports = SortedList;
