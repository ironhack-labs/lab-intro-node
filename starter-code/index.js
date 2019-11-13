class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
  
    add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort( (a,b) => a - b );
    }

    get(pos) {
      try {
        return this.items[pos]; 
      }
      catch(error) {
        if (pos > this.length) {
          throw new Error('OutOfBounds');
        }
      }
    }

    max() {
      if (this.length>0) {
        return Math.max(...this.items);
      } else if(this.items = [])  {
        throw new Error("EmptySortedList");
      }

      // try {
      //   return Math.max(...this.items);
      // } catch(e) {
      //     throw new Error("EmptySortedList");
        
      // }
    }
      
    min() {
      if (this.length>0) {
        return Math.min(...this.items);
      } else if(this.items = [])  {
        throw new Error("EmptySortedList");
      }

      // try {
      //   return Math.min(...this.items);
      // } catch(error) {
      //   if(this.items = []) {
      //    throw new Error("EmptySortedList");
      //   }
      // }
    }



    average() {
      try {
        return this.items.reduce( (acc, ele) => acc + ele ) / this.length;
      } catch(error) {
        if(this.items = []) {
          throw new Error("EmptySortedList");
        }
      }
    }

    sum() { 
      try {
        return this.items.reduce( (acc, ele) => acc + ele );
      } catch(error) {
        if (this.items = []) {
          return 0;
        }
      }
    }

  };
  


  module.exports = SortedList;