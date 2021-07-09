class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
   

  add(item) {
    this.items.push(item)
    this.items.sort((a, b)=> a - b);
    this.length += 1;
  };
    
  get(pos) {
    if(pos <= this.items.length) {
      return this.items[pos];
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length == 0) {
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items);
    };
  };

  min() {
    if(this.items.length == 0) {
      throw new Error('EmptySortedList');
    }else{
      return Math.min(...this.items);
    };
  };
  
  sum() {
    // let sum = 0;
    // for(i=0; i<this.items.length; i+=1){
    //   sum += this.items[i];
    // }
    if(this.items.length == 0){
      return 0;
    }else{
      return this.items.reduce((a,b) => {
        return a + b;
     });
   }
 }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items.reduce((a,b) => {
        return Math.floor(a + b / this.items.length);
     });
   }
  }

};

module.exports = SortedList;
