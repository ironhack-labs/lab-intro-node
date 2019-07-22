class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = 0;
    }
    add(items) {
      this.length++
      this.items.push(items)
      this.items.sort(function (a,b){ 
        return a - b}) // lo que se le pasa al push es el items tambien se puede utilizar el add.
    }


    get(pos) {
      if (pos > this.length -1){
        throw new Error ("OutOfBounds");
      } else {
        return this.items[pos];
      }


    }
    max() {
       if(this.items.length === 0){
        throw new Error("EmptySortedList")
       } else {
        return Math.max(...this.items);

       }

       
    }
    min() {

      if(this.items.length === 0){
        throw new Error("EmptySortedList")
       } else {
        return Math.min(...this.items);

       }
    }
    average() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList")
       } else {
      
        return this.sum() / this.length   // recuerda reutilizar codigo cristian
       }
      
    }
    sum() {

        return this.items.reduce(function(a,b){  //acuerdate de lo que te explico cristian 
          return a + b
        }, 0);
    }
  };
  
  module.exports = SortedList;