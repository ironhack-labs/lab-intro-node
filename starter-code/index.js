class SortedList {
  constructor() {
    this.items=[]
    this.length=0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b})
    this.length++;

  }
  get(pos) {
    return this.items[pos-1]
  }
  max() { 
    if(this.items.length===0) throw new Error ("EmptySortedList");
     return Math.max(...this.items)
  }
  min() {
    if(this.items.length<=0) throw new Error ("EmptySortedList");
    return Math.min(...this.items)
  }
  average() {
    if(this.items.length<=0) throw new Error ("EmptySortedList");
    return this.sum()/this.items.length;
  }
  sum() {
    if(this.items.length<=0) return 0;
   return  this.items.reduce(function(acc,value){
      return acc+value;
    })
  }
};

module.exports = SortedList;
