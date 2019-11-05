class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;

    }
    add(x) {
     this.items.push(x)
     this.length = this.items.length;

    }
    get(pos) {
     this.items.sort((a,b)=> a - b)
     return this.items[pos]

    }

    max() {
      if(this.items.length == 0) {
      throw new Error ("EmptySortedList")
      }
      else {
        return Math.max(...this.items);

      }
    };

    min() {
      
      if(this.items.length == 0) {
        throw new Error ("EmptySortedList")
        }
        else{
          return Math.min(...this.items);
        }
      }

    sum() {
      if (this.length === 0) {
        return 0;
      }
      let sum = this.items.reduce((a, b) => a + b)
      return sum;
    }

    
    average() {
      if(this.items.length == 0) {
        throw new Error ("EmptySortedList")
       }

       return this.sum() / this.length;
    
    };
  };

  
  module.exports = SortedList;
