class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
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
      if (this.length > 0) {
        return Math.max(...this.items);
        // return this.items[this.length - 1] // since we work with a sorted array, we can return the last item of the array
      } else if(this.length === 0)  {
        throw new Error("EmptySortedList");
      }

      //or we can use try and catch
      // try {
      //   if(this.length === 0) {
      //     throw new Error("EmptySortedList");
      //   }
      //   return this.items[this.length - 1];
      // } catch(e) {
      //     throw e;
      // }
    }
      
    min() {
      if (this.length > 0) {
        return Math.min(...this.items);
      } else if(this.length === 0)  {
        throw new Error("EmptySortedList");
      }
      
      // or we can use try and catch
    //   try {
    //     if(this.length === 0) {
    //       throw new Error("EmptySortedList");
    //     }
    //     return Math.min(...this.items);
    //   } catch(error) {
    //       throw error;
    //   }
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