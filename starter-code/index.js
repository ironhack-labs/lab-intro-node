class SortedList  {
  constructor() {
    this.items = []; 
  }

  get length() {
    return this.items.length
  }

  add(item) { 
    return this.items.push(item)
   }

  get(pos) {
   return  this.items[pos-1]
  }

  max() {
    try {
      return Math.max(...this.items);
    }
    catch(error) {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    try {
      return Math.min(...this.items);
    }
    catch(error) {
      throw new Error("EmptySortedList");
    }
  }
  
  
  
  average() {
   try {
     reurn (sum()/arguments.length)
   }
   catch(error) {
    throw new Error("EmptySortedList");
   }
  }


  sum() {
    if(arguments.length >0){
      let sum = 0;
      for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    } else {
    return 0
    }

 
    
};



}
module.exports = SortedList;
