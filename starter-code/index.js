class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)

    this.length =this.items.length
  }

  get(pos) {

    if (this.items.length > pos) { 
     return this.items[pos]}
    else{ throw new Error("OutOfBounds")}
  }

  max() {
    if (this.items.length > 0) { 
     return this.items[this.length - 1]}
    else{ throw new Error("OutOfBounds")}
  }


  min() {
    if (this.items.length > 0) { 
      return this.items[0]}
     else{ throw new Error("OutOfBounds")}
   }
  

  sum() {


    if (this.items.length > 0) { 
      return this.items.reduce((acc,sum)=>acc+sum)}
     else{ return 0}
   }
  

  avg() {
    if (this.items.length > 0) { 
      return this.items.reduce((acc,sum)=>acc+sum)/this.items.length  }
     else{ throw new Error("EmptySortedList")}
   }
  
}

module.exports = SortedList;
