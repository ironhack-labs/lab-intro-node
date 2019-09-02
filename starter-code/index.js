class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort( function (a, b) {
        return a-b;
      })
      this.length++;
      return this.items;
    }
    
    get(pos) {
      if (pos>= this.length){
        throw new Error("OutOfBounds");

      }
     return this.items[pos];
    }


    max() {
      
    if (this.length === 0){
    throw new Error("EmptySortedList");
    }

    let temp = this.items[0];
    for (let i=1 ; i<this.length; i++) {
    if (temp > this.items[i]){
        temp = temp;
       }  else {
         temp = this.items[i];
       }
    }
    return temp;
  } 
    
       min(){

        if (this.items.length === 0){
        throw new Error("EmptySortedList");
        }
        
        let temp = this.items[0]
        for (let i=1 ; i<this.length; i++) {
        if (temp < this.items[i]){
            temp = temp
           } else {
             temp = this.items[i]
           }  
      }
      return temp
    }

    sum() {
      let sum = 0;
        for (let i=0 ; i<this.length; i++) {
        sum += this.items[i];
      }
      return sum
    }

    average() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      
return this.sum() / this.items.length;
      
    }

    
  };
  
  //const SortedList = new SortedList()
  module.exports = SortedList;