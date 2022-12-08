class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a - b;
    })

    this.length = this.items.length;

    return this.length;
   }
  

  get(pos) {
    
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    } else{
      let result = this.items.splice(pos,1);
      return result;
    }
   
  }

  max() {
    if(!this.length){
      throw new Error('EmptySortedList');
    } else{
      return this.items[this.length-1];
    }
    
    }
  

  min() {
    if(!this.length){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0; 
    this.items.map((element) => { 
      sum += element;
     })

    return sum;
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList')
    } else {
      let sum = 0; 
      this.items.map((element) => {
        sum += element;
      })

      let avg = sum/this.length;
      return avg;

    }
  }
}

module.exports = SortedList;
