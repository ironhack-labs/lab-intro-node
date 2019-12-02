class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   this.items.push(item)
   this.length = this.items.length

   let ascendingNumbers = this.items.sort(function(a,b) {
     if (a>b){
       return 1;
     }
     else  if (a<b){
      return -1
     }
     else {
       return 0;
     }
    })
    // return ascendingNumbers;
    
  }
  

  get(pos) {
    if (this.items[pos]){
      return this.items[pos]
    }
    else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0){
      let maximum = this.items.reduce(function(a,b){
        return Math.max(a,b)
      })
      return maximum
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0){
      let minimum = this.items.reduce(function(a,b){
        return Math.min(a,b)
      })
      return minimum
    } else {
      throw new Error("EmptySortedList");
    }
    
  }

  sum() {
    if (this.items.length > 0){
      let sum = this.items.reduce(function(a,b){
        return a + b
      })
      return sum
    } else {
      return 0
    }
  }

  avg() {
    if (this.items.length > 0){
      return this.sum()/this.items.length
      }
 else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
