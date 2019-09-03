class SortedList {
    constructor() {
        this.items= [];
        this.length= 0;
    }

    add(item) {
     this.items.push(item);
     this.length= this.items.length;
     this.items.sort((a,b)=>a-b);//  this.items.sort(function(a,b){ return a-b});
    }

    get(pos) {
     return this.items [pos];
    }


    max() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        for (let i=0; i<this.items.length; i++){
          for (let j=1; j<this.items.length; j++) {
            if (this.items [i]>this.items [j]) { return this.items[i];}
            else if (this.items [j]>this.items [i]){return this.items[j];}
          }
        }
      }
      // same thing I can do with:
      // Math.max(...this.items);
    }

    min() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        for (let i=0; i<this.items.length; i++){
          for (let j=1; j<this.items.length; j++) {
            if (this.items [i]<this.items [j]) { return this.items[i];}
            else if (this.items [j]<this.items [i]){return this.items[j];}
          }
        }
      }
    }

    sum() {
       if (this.items.length == 0){
         return 0;
       }else 
       return this.items.reduce((accumulator, value) => {
         return accumulator + value;
       },0);
    }
    average() {
      if (this.items.length == 0){
        throw Error("EmptySortedList");
        
      } else {
      return this.sum()/this.length;
    }  
    }
  };
  
  module.exports = SortedList;