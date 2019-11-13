class SortedList {
    constructor() {
      this.items = [];
      this.length= 0;
    }

    add(item) {
      this.items.push(item)
      this.length++
      this.items.sort(function comparedAscending  (a, b) {
        if (a<b) {
            return -1;
            }
            if (a>b) {
            return 1;
            }
            if (a==b) {
            return 0;
            }
            }
            )
    }

    get(pos) {
     // this.items.sort()
     if (pos < this.items.length) {
       return this.items[pos]
     }
     else {
      throw new Error("OutOfBounds")
     }
    }
    
    max() {
      if(this.length==0){
        throw new Error("EmptySortedList")
      } else {
        return Math.max(...this.items)
      }
    }


    min() {
      if(this.length==0){
        throw new Error("EmptySortedList")
      } else {
        return Math.min(...this.items)
      }
    }


    average() {
      var result = 0
      if(this.length==0){
        throw new Error("EmptySortedList")
      } else {
        this.items.forEach(item=>{
        result+=item
        })
        return result/this.items.length
      }
    }



    sum() {
      var result= 0
      if(this.items.length==0){
        return 0
      } else {
        this.items.forEach(item=>{
          result+=item
        })
        return result
      }
    }


  };


 
  module.exports = SortedList;