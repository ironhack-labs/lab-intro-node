class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    try {
      this.items.push(item);
      this.items.sort(function(a, b) {
        return a - b;
      });
      this.length = this.items.length;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  get(pos) {
    this.length = this.items.length;
    try {

      if(pos>this.length){
        throw new Error("OutOfBounds");
      }else if(pos<0){
        throw new Error("OutOfBounds");
      }

      for(let i=0; i<this.length; i++){
          if (pos === i){
            return this.items[i];
          }
      }
      
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
   
  }

  max(){
    this.length = this.items.length;
    try {
      if(this.length===0){
        throw new Error("EmptySortedList");
      }
      return Math.max(...this.items);
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  min() {
    this.length = this.items.length;
    try {
      if(this.length===0){
        throw new Error("EmptySortedList");
      }
      return Math.min(...this.items);
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  sum() {
    this.length = this.items.length;
    try {
      if(this.length===0){
        return 0;
        throw new Error("EmptySortedList");
      }
      let initVal = 0
      const sumArr = this.items.reduce((acc, cv) => acc + cv, initVal);
      return sumArr;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
   
  }

  avg() {
    this.length = this.items.length;
    try {
      if(this.length===0){
        throw new Error("EmptySortedList");
      }
      let sum = this.sum();
      return sum / this.length;

    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}

module.exports = SortedList;