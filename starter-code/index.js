class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
   
    this.length = this.items.push(item);
    this.items.sort(  (a,b) => a-b  )
  }

  get(pos) {
    if (pos > this.items.length) {throw new Error("OutOfBounds");}
    else                         {return this.items[pos]} 
          }

  max() {
    if (this.items.length == 0) {throw new Error("EmptySortedList");}
    else                        {return Math.max(...this.items)} 
          }

  min() {
    if (this.items.length == 0) {throw new Error("EmptySortedList");}
    else                        {return Math.min(...this.items)} 
  }

  sum() {
    if (this.items.length == 0) {return 0;}
    else                        {return this.items.reduce( (a,b) => a+b, 0  )} 
  }

  avg() {
    if (this.items.length == 0) {throw new Error("EmptySortedList");}
    else {let sum = (this.items.reduce( (a,b) => a+b, 0  ))/ this.items.length
    
      return  sum}
    
  }
}

module.exports = SortedList;
