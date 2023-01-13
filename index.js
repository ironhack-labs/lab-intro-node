class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //Question to teacher: Why we cannot write the next two code lines in the same line? (this.items.push(item).sort((a,b) => a-b))
    this.items.push(item);
    this.items.sort((a,b) => a-b);

    this.length ++;
  }

  get(pos) {
    if(pos >= this.items.length){
      throw new Error('OutOfBounds');
    } 
    
    else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } 
    
    else{
      let max = -10000;
      for (let i = 0; i < this.length; i++){
        if(this.items[i] > max){
          max = this.items[i];
        }
      }

      return max;
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } 
    
    else {
      let min = 10000;
      for (let i = 0; i < this.length; i++){
        if(this.items[i] < min){
          min = this.items[i];
        }
      }

      return min;
    }
  }
  

  sum() {
    if(this.length === 0) {
      return 0;
    }

    else {
      return this.items.reduce((a, b) => a + b);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }

    else {
      return this.items.reduce((a, b) => a + b) / this.length;
    }
  }
}

module.exports = SortedList;
