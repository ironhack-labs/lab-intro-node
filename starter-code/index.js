class SortedList {
    constructor() {
      this.items = []
      this.length = this.items.length
    }

    add(x) {
      this.items.push(x);
      this.items.sort((x, y) => {
        if (x > y) {
          return 1
        } else if ( x < y) {
          return -1
        } else {
          return 0
        };
      })
      this.length = this.items.length

    }
    

    get(pos) {
      
      if (pos > this.items.length) {
        throw new Error('OutOfBounds')
      } 
     
      return this.items[pos]; 
      
    }

    max() {
      
      if (this.items.length === 0) {
        throw new Error ('EmptySortedList')
      }
      
      //study spred operator
      return Math.max(...this.items);
    }

    min() {
      if (this.items.length === 0) {
        throw new Error ('EmptySortedList')
      }
      //study spred operator
      return Math.min(...this.items);

      
    }

    sum() {
      if (this.items.length === 0 ) {
        return 0
      }
      
      const reducer = (acc, val) => acc + val;
      return this.items.reduce(reducer)
    }

    average() {
      if (this.items.length === 0 ) {
        throw new Error ('EmptySortedList')
      }

      const reducer = (acc, val) => acc + val;
      let sum = this.items.reduce(reducer)
      
      return sum / this.items.length
    }
  };
  
  module.exports = SortedList;