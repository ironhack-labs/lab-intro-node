class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length;

    this.items.sort((a , b) => {
      return a-b;
    });
    
  }

  get(pos) {
    if(pos>=0 && pos<=this.items.length){
        return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length>0){
      var max = Math.max(...this.items);      
        return max;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length>0){
      var min = Math.min(...this.items);      
       return min;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if(this.items.length>0){
      var suma = this.items.reduce((acc, current)=>{
          return acc + current
        });
        return suma      
    } else {
      return 0;
    }
  }

  avg() {
    if(this.items.length>0){
      var suma = this.items.reduce((acc, current)=>{
        return acc + current
      }); 
      return suma/this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
