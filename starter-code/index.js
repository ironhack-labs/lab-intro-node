class SortedList {
  constructor() { 
    this.items = [],
    this.len = this.items.length
   };
  
   
  add(item) {
    this.items.push(item);
    this.len += 1
    return this.items.sort( (a,b) => a -b )
  };

  get(pos) {
    pos = this.items[pos -1]
    return pos    
  };

  max() {
    if(this.items.len === 0){
      throw new Error("EmptySortedList")
    } else {
        return Math.max(...this.items)
    };
  };


  min(){
    if(this.items.len === 0){
      throw new Error("EmptySortedList")
    } else {
         return Math.min(...this.items)
    };
  }

  average(){
    if(this.items.len === 0){
      throw new Error("EmptySortedList")
    } else {
        let total = this.items.reduce((sum , order) => sum + order)
        let avg = total / this.items.length
        return avg
    };
  };


  sum() {    
    if(this.items.len === 0){
      throw new Error("EmptySortedList")
    } else {
        let sum = this.items.reduce((s , e) => s + e)
        return sum
    };
  }
};



const list = new SortedList

module.exports = SortedList;
