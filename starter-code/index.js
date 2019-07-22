class SortedList {
    
    constructor() {
      this.items =  [];
      this.length = this.items.length;
    } 

    add(item) {
      this.items.push(item)
      this.length = this.items.length;
      this.items.sort((a, b) => a - b )
    };

    get(pos) {
       
      //  let position = this.items.indexOf(pos)
       if (pos > this.items.length-1)
       {
          throw new Error("OutOfBounds") 
       } else {
        this.items.sort((a, b) => a - b )
          return this.items[pos]
          }
        };

    

    max() {
      if (this.items.length == 0)
      {
           throw new Error('EmptySortedList')
      }
      else
      {
      let max = 0
      for (let i = 0; i < this.items.length ; i++){
        if (this.items[i] > max)
        { max = this.items[i]}
      }

      return max
    }

    };

    min() {

      if (this.items.length == 0)
         throw new Error('EmptySortedList')
      let min = 1000000;
      for (let i = 0; i < this.items.length ; i++){
        if (this.items[i] < min)
        { min = this.items[i]}
      }
      return min

    };

    average() { 
    
        if (this.items.length == 0)
        throw new Error('EmptySortedList')
        let total = 0
        for (let i = 0; i < this.items.length ; i++)
        { total = total + this.items[i]}

      let average = total / this.items.length
      return average
    };

    sum() {
      let total = 0
      for (let i = 0; i < this.items.length ; i++)
      { total = total + this.items[i]}
      return total
    };
  };
  
  module.exports = SortedList;

  
  